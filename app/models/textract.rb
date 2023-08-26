# typed: true
# frozen_string_literal: true

module Textract
  class << self
    extend T::Sig

    # == Methods
    sig { params(bytes: String).returns(T.untyped) }
    def detect_document_text(bytes)
      document = Aws::Textract::Types::Document.new(bytes:)
      response = client.detect_document_text({ document: })
      if (error = response.error)
        raise error
      end
      response.data
    end

    # == Helpers
    sig { returns(Aws::Textract::Client) }
    def client
      @client = T.let(@client, T.nilable(Aws::Textract::Client))
      @client ||= Aws::Textract::Client.new
    end
  end
end
