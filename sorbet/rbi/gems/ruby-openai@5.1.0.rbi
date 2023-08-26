# typed: true

# DO NOT EDIT MANUALLY
# This is an autogenerated file for types exported from the `ruby-openai` gem.
# Please instead update this file by running `bin/tapioca gem ruby-openai`.

# source://ruby-openai//lib/openai/http.rb#1
module OpenAI
  class << self
    # source://ruby-openai//lib/openai.rb#48
    def configuration; end

    # Sets the attribute configuration
    #
    # @param value the value to set the attribute configuration to.
    #
    # source://ruby-openai//lib/openai.rb#45
    def configuration=(_arg0); end

    # @yield [configuration]
    #
    # source://ruby-openai//lib/openai.rb#52
    def configure; end

    # Estimate the number of tokens in a string, using the rules of thumb from OpenAI:
    # https://help.openai.com/en/articles/4936856-what-are-tokens-and-how-to-count-them
    #
    # @raise [ArgumentError]
    #
    # source://ruby-openai//lib/openai.rb#58
    def rough_token_count(content = T.unsafe(nil)); end
  end
end

# source://ruby-openai//lib/openai/audio.rb#2
class OpenAI::Audio
  # @return [Audio] a new instance of Audio
  #
  # source://ruby-openai//lib/openai/audio.rb#3
  def initialize(client:); end

  # source://ruby-openai//lib/openai/audio.rb#7
  def transcribe(parameters: T.unsafe(nil)); end

  # source://ruby-openai//lib/openai/audio.rb#11
  def translate(parameters: T.unsafe(nil)); end
end

# source://ruby-openai//lib/openai/client.rb#2
class OpenAI::Client
  include ::OpenAI::HTTP

  # @return [Client] a new instance of Client
  #
  # source://ruby-openai//lib/openai/client.rb#16
  def initialize(config = T.unsafe(nil)); end

  # source://ruby-openai//lib/openai/client.rb#14
  def access_token; end

  # source://ruby-openai//lib/openai/client.rb#14
  def api_type; end

  # source://ruby-openai//lib/openai/client.rb#14
  def api_version; end

  # source://ruby-openai//lib/openai/client.rb#40
  def audio; end

  # @return [Boolean]
  #
  # source://ruby-openai//lib/openai/client.rb#64
  def azure?; end

  # source://ruby-openai//lib/openai/client.rb#24
  def chat(parameters: T.unsafe(nil)); end

  # source://ruby-openai//lib/openai/client.rb#28
  def completions(parameters: T.unsafe(nil)); end

  # source://ruby-openai//lib/openai/client.rb#32
  def edits(parameters: T.unsafe(nil)); end

  # source://ruby-openai//lib/openai/client.rb#36
  def embeddings(parameters: T.unsafe(nil)); end

  # source://ruby-openai//lib/openai/client.rb#14
  def extra_headers; end

  # source://ruby-openai//lib/openai/client.rb#44
  def files; end

  # source://ruby-openai//lib/openai/client.rb#48
  def finetunes; end

  # source://ruby-openai//lib/openai/client.rb#52
  def images; end

  # source://ruby-openai//lib/openai/client.rb#56
  def models; end

  # source://ruby-openai//lib/openai/client.rb#60
  def moderations(parameters: T.unsafe(nil)); end

  # source://ruby-openai//lib/openai/client.rb#14
  def organization_id; end

  # source://ruby-openai//lib/openai/client.rb#14
  def request_timeout; end

  # source://ruby-openai//lib/openai/client.rb#14
  def uri_base; end
end

# source://ruby-openai//lib/openai/client.rb#5
OpenAI::Client::CONFIG_KEYS = T.let(T.unsafe(nil), Array)

# source://ruby-openai//lib/openai.rb#17
class OpenAI::Configuration
  # @return [Configuration] a new instance of Configuration
  #
  # source://ruby-openai//lib/openai.rb#26
  def initialize; end

  # @raise [ConfigurationError]
  #
  # source://ruby-openai//lib/openai.rb#36
  def access_token; end

  # Sets the attribute access_token
  #
  # @param value the value to set the attribute access_token to.
  #
  # source://ruby-openai//lib/openai.rb#18
  def access_token=(_arg0); end

  # Returns the value of attribute api_type.
  #
  # source://ruby-openai//lib/openai.rb#19
  def api_type; end

  # Sets the attribute api_type
  #
  # @param value the value to set the attribute api_type to.
  #
  # source://ruby-openai//lib/openai.rb#19
  def api_type=(_arg0); end

  # Returns the value of attribute api_version.
  #
  # source://ruby-openai//lib/openai.rb#19
  def api_version; end

  # Sets the attribute api_version
  #
  # @param value the value to set the attribute api_version to.
  #
  # source://ruby-openai//lib/openai.rb#19
  def api_version=(_arg0); end

  # Returns the value of attribute extra_headers.
  #
  # source://ruby-openai//lib/openai.rb#19
  def extra_headers; end

  # Sets the attribute extra_headers
  #
  # @param value the value to set the attribute extra_headers to.
  #
  # source://ruby-openai//lib/openai.rb#19
  def extra_headers=(_arg0); end

  # Returns the value of attribute organization_id.
  #
  # source://ruby-openai//lib/openai.rb#19
  def organization_id; end

  # Sets the attribute organization_id
  #
  # @param value the value to set the attribute organization_id to.
  #
  # source://ruby-openai//lib/openai.rb#19
  def organization_id=(_arg0); end

  # Returns the value of attribute request_timeout.
  #
  # source://ruby-openai//lib/openai.rb#19
  def request_timeout; end

  # Sets the attribute request_timeout
  #
  # @param value the value to set the attribute request_timeout to.
  #
  # source://ruby-openai//lib/openai.rb#19
  def request_timeout=(_arg0); end

  # Returns the value of attribute uri_base.
  #
  # source://ruby-openai//lib/openai.rb#19
  def uri_base; end

  # Sets the attribute uri_base
  #
  # @param value the value to set the attribute uri_base to.
  #
  # source://ruby-openai//lib/openai.rb#19
  def uri_base=(_arg0); end
end

# source://ruby-openai//lib/openai.rb#22
OpenAI::Configuration::DEFAULT_API_VERSION = T.let(T.unsafe(nil), String)

# source://ruby-openai//lib/openai.rb#24
OpenAI::Configuration::DEFAULT_REQUEST_TIMEOUT = T.let(T.unsafe(nil), Integer)

# source://ruby-openai//lib/openai.rb#23
OpenAI::Configuration::DEFAULT_URI_BASE = T.let(T.unsafe(nil), String)

# source://ruby-openai//lib/openai.rb#15
class OpenAI::ConfigurationError < ::OpenAI::Error; end

# source://ruby-openai//lib/openai.rb#14
class OpenAI::Error < ::StandardError; end

# source://ruby-openai//lib/openai/files.rb#2
class OpenAI::Files
  # @return [Files] a new instance of Files
  #
  # source://ruby-openai//lib/openai/files.rb#3
  def initialize(client:); end

  # source://ruby-openai//lib/openai/files.rb#24
  def content(id:); end

  # source://ruby-openai//lib/openai/files.rb#28
  def delete(id:); end

  # source://ruby-openai//lib/openai/files.rb#7
  def list; end

  # source://ruby-openai//lib/openai/files.rb#20
  def retrieve(id:); end

  # source://ruby-openai//lib/openai/files.rb#11
  def upload(parameters: T.unsafe(nil)); end

  private

  # source://ruby-openai//lib/openai/files.rb#34
  def validate(file:); end
end

# source://ruby-openai//lib/openai/finetunes.rb#2
class OpenAI::Finetunes
  # @return [Finetunes] a new instance of Finetunes
  #
  # source://ruby-openai//lib/openai/finetunes.rb#3
  def initialize(client:); end

  # source://ruby-openai//lib/openai/finetunes.rb#19
  def cancel(id:); end

  # source://ruby-openai//lib/openai/finetunes.rb#11
  def create(parameters: T.unsafe(nil)); end

  # source://ruby-openai//lib/openai/finetunes.rb#27
  def delete(fine_tuned_model:); end

  # source://ruby-openai//lib/openai/finetunes.rb#23
  def events(id:); end

  # source://ruby-openai//lib/openai/finetunes.rb#7
  def list; end

  # source://ruby-openai//lib/openai/finetunes.rb#15
  def retrieve(id:); end
end

# source://ruby-openai//lib/openai/http.rb#2
module OpenAI::HTTP
  # source://ruby-openai//lib/openai/http.rb#30
  def delete(path:); end

  # source://ruby-openai//lib/openai/http.rb#3
  def get(path:); end

  # source://ruby-openai//lib/openai/http.rb#9
  def json_post(path:, parameters:); end

  # source://ruby-openai//lib/openai/http.rb#23
  def multipart_post(path:, parameters: T.unsafe(nil)); end

  private

  # source://ruby-openai//lib/openai/http.rb#97
  def azure_headers; end

  # source://ruby-openai//lib/openai/http.rb#65
  def conn(multipart: T.unsafe(nil)); end

  # source://ruby-openai//lib/openai/http.rb#81
  def headers; end

  # source://ruby-openai//lib/openai/http.rb#104
  def multipart_parameters(parameters); end

  # source://ruby-openai//lib/openai/http.rb#89
  def openai_headers; end

  # source://ruby-openai//lib/openai/http.rb#38
  def to_json(string); end

  # Given a proc, returns an outer proc that can be used to iterate over a JSON stream of chunks.
  # For each chunk, the inner user_proc is called giving it the JSON object. The JSON object could
  # be a data object or an error object as described in the OpenAI API documentation.
  #
  # If the JSON object for a given data or error message is invalid, it is ignored.
  #
  # @param user_proc [Proc] The inner proc to call for each JSON object in the chunk.
  # @return [Proc] An outer proc that iterates over a raw stream, converting it to JSON.
  #
  # source://ruby-openai//lib/openai/http.rb#55
  def to_json_stream(user_proc:); end

  # source://ruby-openai//lib/openai/http.rb#72
  def uri(path:); end
end

# source://ruby-openai//lib/openai/images.rb#2
class OpenAI::Images
  # @return [Images] a new instance of Images
  #
  # source://ruby-openai//lib/openai/images.rb#3
  def initialize(client: T.unsafe(nil)); end

  # source://ruby-openai//lib/openai/images.rb#11
  def edit(parameters: T.unsafe(nil)); end

  # source://ruby-openai//lib/openai/images.rb#7
  def generate(parameters: T.unsafe(nil)); end

  # source://ruby-openai//lib/openai/images.rb#15
  def variations(parameters: T.unsafe(nil)); end

  private

  # source://ruby-openai//lib/openai/images.rb#21
  def open_files(parameters); end
end

# source://ruby-openai//lib/openai/models.rb#2
class OpenAI::Models
  # @return [Models] a new instance of Models
  #
  # source://ruby-openai//lib/openai/models.rb#3
  def initialize(client:); end

  # source://ruby-openai//lib/openai/models.rb#7
  def list; end

  # source://ruby-openai//lib/openai/models.rb#11
  def retrieve(id:); end
end

# source://ruby-openai//lib/openai/version.rb#2
OpenAI::VERSION = T.let(T.unsafe(nil), String)

# source://ruby-openai//lib/openai/compatibility.rb#1
module Ruby; end

# source://ruby-openai//lib/openai/compatibility.rb#2
module Ruby::OpenAI; end

# source://ruby-openai//lib/openai/compatibility.rb#7
Ruby::OpenAI::Configuration = OpenAI::Configuration

# source://ruby-openai//lib/openai/compatibility.rb#6
Ruby::OpenAI::ConfigurationError = OpenAI::ConfigurationError

# source://ruby-openai//lib/openai/compatibility.rb#5
Ruby::OpenAI::Error = OpenAI::Error

# source://ruby-openai//lib/openai/compatibility.rb#3
Ruby::OpenAI::VERSION = T.let(T.unsafe(nil), String)
