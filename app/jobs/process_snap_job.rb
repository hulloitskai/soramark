# typed: true
# frozen_string_literal: true

class ProcessSnapJob < ApplicationJob
  # == Configuration
  good_job_control_concurrency_with(
    key: -> {
      T.bind(self, ProcessSnapJob)
      snap = T.let(arguments.first!, Snap)
      "#{self.class.name}(#{snap.to_gid})"
    },
    total_limit: 1,
  )

  # == Job
  sig { params(snap: Snap).void }
  def perform(snap)
    snap.process!
  end
end
