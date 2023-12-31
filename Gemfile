source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby "3.2.2"

# Bundle edge Rails instead: gem "rails", github: "rails/rails", branch: "main"
gem "rails", "~> 7.0.6"

# JSON-backed, nestable models
gem "store_model", "~> 1.6"

# Use postgresql as the database for Active Record
gem "pg", "~> 1.5"

# Perform full text search with Postgres
gem "pg_search", "~> 2.3"

# Use RGeo geometry types
gem "rgeo", "~> 3.0"
gem "rgeo-geojson", "~> 2.1"
gem "rgeo-activerecord", "~> 7.0"

# Use PostGIS extensions for PostgreSQL
gem "activerecord-postgis-adapter", "~> 8.0"

# Use the Puma web server [https://github.com/puma/puma]
gem "puma", "~> 6.3.0"

# The original asset pipeline for Rails [https://github.com/rails/sprockets-rails]
gem "sprockets-rails", "~> 3.4"

# Use Redis adapter to run Action Cable in production
# gem "redis", "~> 4.0"

# Use Kredis to get higher-level data types in Redis [https://github.com/rails/kredis]
# gem "kredis"

# Use Active Model has_secure_password [https://guides.rubyonrails.org/active_model_basics.html#securepassword]
# gem "bcrypt", "~> 3.1.7"

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem "tzinfo-data", platforms: %i[mingw mswin x64_mingw jruby]

# Reduces boot times through caching; required in config/boot.rb
gem "bootsnap", require: false

# Use Active Storage variants [https://guides.rubyonrails.org/active_storage_overview.html#transforming-images]
gem "image_processing", "~> 1.12"
gem "ruby-vips", "~> 2.1", require: false

# Use S3 as the backend for Active Storage
gem "aws-sdk-s3", "~> 1.126", require: false

# Use Good Job as the backend for Active Job
gem "good_job", "~> 3.17"

# Send emails with Mailjet.
gem "mailjet", "~> 1.7"

# Send emails with Sendgrid.
gem "sendgrid-ruby", "~> 6.6"

# Use FriendlyId to create human-friendly identifiers for models
gem "friendly_id", "~> 5.5"

# Use Nanoid to generate tiny collision-resistant IDs
gem "nanoid", "~> 2.0"

# Modern concurrency tools
gem "concurrent-ruby", "~> 1.1"

# Use HTTParty for REST client
gem "httparty", "~> 0.21.0"

# Show a healthcheck route
gem "rails-healthcheck"

# Silence logs from certain actions
gem "silencer", "~> 2.0", require: false

# Validate emails, phone numbers, dates, arrays, and more
gem "can_has_validations", "~> 1.8"
gem "email_validator", "~> 2.2"
gem "phonelib", "~> 0.6.55"
gem "validate_url", "~> 1.0"
gem "date_validator", "~> 0.12.0"
gem "active_storage_validations", "~> 0.9.6"

# Introspect program at runtime with Pry
gem "pry"
gem "pry-rails"
gem "pry-rescue"
gem "pry-doc", require: false
gem "pry-sorbet", require: false
gem "pry-stack_explorer", require: false
gem "break", require: false

# Load environment variables from .env
gem "dotenv", "~> 2.7", require: false

# Parse and manipulate URIs
gem "addressable", "~> 2.8"

# Handle soft deletions with Discard
gem "discard", "~> 1.2"

# Typecheck code at runtime
gem "sorbet-runtime"

# Use Enumerize to enumerate attributes
gem "enumerize", "~> 2.6"

# Use Action Policy to authorize actions
gem "action_policy", "~> 0.6.5"
gem "action_policy-graphql", "~> 0.5.3"

# Expose a GraphQL API
gem "graphql", "~> 2.0"
gem "graphql-connections", "~> 1.3"
gem "graphql-persisted_queries", "~> 1.7"
gem "graphql-rails_logger"
gem "graphiql-rails"

# Serve and bundle frontend with Vite
gem "vite_rails", "~> 3.0"

# Use Inertia framework for server-driven SPAs
gem "inertia_rails", "~> 3.0"

# Use Premailer to inline CSS into email templates
gem "premailer-rails", "~> 1.12"

# Authenticate users with Devise
gem "devise", "~> 4.9"

# Check password strength with StrongPassword
gem "strong_password", "~> 0.0.10"

# Use OmniAuth to authenticate with external providers (i.e. Spotify)
gem "omniauth", "~> 2.1"
gem "omniauth-rails_csrf_protection", "~> 1.0"
gem "omniauth-google-oauth2", "~> 1.1"

# Print objects with text wrappers for debugging
gem "wrapped_print"

# Enable additional operators and utilities for Active Record with PostgreSQL
gem "active_record_extended", "~> 3.2"

# Use Sentry for error reporting
gem "sentry-rails", "~> 5.9"

# Show static pages
gem "high_voltage", "~> 3.1"

# Perform OCR with AWS Textract
gem "aws-sdk-textract", "~> 1.50"

# Analyze extracted text with OpenAI
gem "ruby-openai", "~> 5.1"

group :development, :test do
  # Auto-detect and warn about N+1 queries
  gem "bullet"
end

group :development do
  # Detect file changes for live reload
  gem "listen", "~> 3.8"

  # Rerun programs when files change
  gem "rerun", "~> 0.14.0"

  # Debug code with debug
  # See https://guides.rubyonrails.org/debugging_rails_applications.html#debugging-with-the-debug-gem
  gem "debug", platforms: %i[mri mingw x64_mingw]

  # Typecheck code
  gem "sorbet", require: false
  gem "tapioca", "~> 0.11.7", require: false

  # Use Rubocop to lint code
  #
  # NOTE: Rubocop >= 1.42.0 causes bin/lint to produce unwanted
  # Lint/RedundantCopDisableDirective warnings (since Layout cops are disabled).
  gem "rubocop", "~> 1.41.0", require: false
  gem "rubocop-graphql", require: false
  gem "rubocop-performance", require: false
  gem "rubocop-rails", require: false
  gem "rubocop-shopify", require: false
  gem "rubocop-sorbet", require: false
  gem "ruby-lsp", require: false
  gem "parser", "~> 3.2.2.3", require: false

  # Use console on exceptions pages [https://github.com/rails/web-console]
  gem "web-console"

  # Add speed badges [https://github.com/MiniProfiler/rack-mini-profiler]
  # gem "rack-mini-profiler"
  # gem "memory_profiler"
  # gem "stackprof"

  # Display better error pages during development
  gem "better_errors"

  # Speed up commands on slow machines / big apps [https://github.com/rails/spring]
  gem "spring"

  # Annotate models and routes
  gem "annotate", require: false
end

group :test do
  # Use system testing [https://guides.rubyonrails.org/testing.html#system-testing]
  gem "capybara"
  gem "selenium-webdriver"
end
