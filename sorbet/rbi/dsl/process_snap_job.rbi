# typed: true

# DO NOT EDIT MANUALLY
# This is an autogenerated file for dynamic methods in `ProcessSnapJob`.
# Please instead update this file by running `bin/tapioca dsl ProcessSnapJob`.

class ProcessSnapJob
  class << self
    sig { params(snap: ::Snap).returns(T.any(ProcessSnapJob, FalseClass)) }
    def perform_later(snap); end

    sig { params(snap: ::Snap).void }
    def perform_now(snap); end
  end
end
