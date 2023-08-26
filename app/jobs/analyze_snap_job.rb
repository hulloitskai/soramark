# typed: true
# frozen_string_literal: true

class AnalyzeSnapJob < ApplicationJob
  # == Configuration
  good_job_control_concurrency_with(
    key: -> {
      T.bind(self, AnalyzeSnapJob)
      snap = T.let(arguments.first!, Snap)
      "#{self.class.name}(#{snap.to_gid})"
    },
    total_limit: 1,
  )

  # == Job
  sig { params(snap: Snap).void }
  def perform(snap)
    snap.analyze!
  end
end
