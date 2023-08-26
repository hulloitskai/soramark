# typed: true
# frozen_string_literal: true

module Gpt
  class << self
    extend T::Sig

    # == Methods
    sig do
      params(messages: T::Array[T::Hash[T.any(Symbol, String), T.untyped]])
        .returns(String)
    end
    def complete_chat(messages)
      response = client.chat(parameters: { model: "gpt-3.5-turbo", messages: })
      response.dig("choices", 0, "message", "content")
    end

    # == Helpers
    sig { returns(OpenAI::Client) }
    def client
      @client = T.let(@client, T.nilable(OpenAI::Client))
      @client ||= OpenAI::Client.new
    end
  end
end
