# typed: true
# frozen_string_literal: true

#
# == Schema Information
#
# Table name: users
#
#  id                     :uuid             not null, primary key
#  avatar_url             :string
#  current_sign_in_at     :datetime
#  current_sign_in_ip     :string
#  email                  :string           not null
#  encrypted_password     :string           not null
#  first_name             :string           not null
#  google_refresh_token   :string
#  google_uid             :string           not null
#  last_name              :string
#  last_sign_in_at        :datetime
#  last_sign_in_ip        :string
#  remember_created_at    :datetime
#  reset_password_sent_at :datetime
#  reset_password_token   :string
#  sign_in_count          :integer          default(0), not null
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#
# Indexes
#
#  index_users_on_email                 (email) UNIQUE
#  index_users_on_reset_password_token  (reset_password_token) UNIQUE
#
class User < ApplicationRecord
  include Identifiable

  # == Constants
  MIN_PASSWORD_ENTROPY = T.let(14, Integer)

  # == Devise: Configuration
  # Others modules are: :lockable, :timeoutable, and :omniauthable.
  devise :database_authenticatable,
         :registerable,
         :recoverable,
         :rememberable,
         :validatable,
         :trackable,
         :omniauthable

  self.filter_attributes += %i[
    encrypted_password
    reset_password_token
    invitation_token
  ]

  # == Attributes
  sig { returns(String) }
  def name
    [first_name, last_name].compact.join(" ")
  end

  def initials
    [first_name.first, last_name&.first].compact.join("")
  end

  sig { returns(String) }
  def email_with_name
    ActionMailer::Base.email_address_with_name(email, name)
  end

  sig { returns(String) }
  def email_domain
    domain = email.split("@").last
    T.must(domain)
  end

  # == Associations
  has_many :books,
           inverse_of: :owner,
           foreign_key: :owner_id,
           dependent: :destroy

  # == Normalizations
  # before_validation :remove_unconfirmed_email_if_matches_email,
  #                   if: %i[unconfirmed_email? email_changed?]

  # == Validations
  validates :first_name, presence: true, length: { maximum: 64 }
  validates :last_name, length: { maximum: 64 }, allow_nil: true
  validates :email,
            presence: true,
            length: {
              maximum: 100,
            },
            email: true,
            uniqueness: {
              case_sensitive: false,
            }
  validates :password,
            password_strength: {
              min_entropy: MIN_PASSWORD_ENTROPY,
              use_dictionary: true,
            },
            allow_nil: true

  # == Callbacks
  after_create_commit :send_welcome_email

  # == Finders
  sig { returns(PrivateRelation) }
  def admins
    User
      .where(email: Admin.emails)
      .or(User.where("split_part(email, '@', 2) IN ?", Admin.email_domains))
  end

  # == Emails
  sig { void }
  def send_welcome_email
    UserMailer.welcome_email(self).deliver_later
  end

  # == Sentry
  sig { returns(T::Hash[String, T.untyped]) }
  def sentry_info
    { "id" => to_gid.to_s, "email" => email }
  end

  # == Fullstory
  sig { returns(T::Hash[String, T.untyped]) }
  def fullstory_identity
    { "uid" => to_gid.to_s, "email" => email, "displayName" => name }
  end

  # == Devise
  sig { params(auth: OmniAuth::AuthHash).returns(User) }
  def self.from_google_auth!(auth)
    google_uid = T.let(auth["uid"], String)
    info = T.let(auth.fetch("info"), T::Hash[String, T.untyped])
    user = find_or_initialize_by(google_uid:) do |user|
      user.password = Devise.friendly_token
    end
    user.attributes = info.slice("first_name", "last_name", "email").to_h
    user.avatar_url = info["image"]
    if (refresh_token = auth.dig("credentials", "refresh_token"))
      user.google_refresh_token = refresh_token
    end
    user.save!
    user
  end

  sig do
    params(
      params: T::Hash[Symbol, T.untyped],
      options: T.untyped,
    ).returns(T::Boolean)
  end
  def update_without_password(params, *options)
    params.delete(:email)
    super(params)
  end

  sig { override.returns(T::Boolean) }
  def active_for_authentication?
    google_refresh_token? && super
  end

  sig { override.returns(T.any(Symbol, String)) }
  def inactive_message
    return "Missing or invalid Google refresh token." if google_refresh_token?
    super
  end

  # == Methods
  sig { returns(T::Boolean) }
  def admin?
    Admin.emails.include?(email) || Admin.email_domains.include?(email_domain)
  end

  # # == Devise: Callback handlers
  # sig { void }
  # def after_confirmation
  #   super
  #   send_welcome_email if confirmed_at_previously_was.nil?
  # end
end
