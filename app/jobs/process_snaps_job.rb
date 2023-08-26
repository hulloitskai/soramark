# typed: true
# frozen_string_literal: true

class ProcessSnapsJob < ApplicationJob
  # == Configuration
  good_job_control_concurrency_with key: name, total_limit: 1

  # == Job
  sig { void }
  def perform
    Snap.process
  end
end
