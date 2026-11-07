<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-179"></a>

# Module `pill_master_renderer::error`

Source: `extensions\pill_master_renderer\pill_master_renderer\src\error.rs:1`

Renderer failures, re-exported from the contract crate, and the capture
that turns wgpu's errors into them.
Renderer failures, and how wgpu's errors are captured and turned into them.

## Responsibilities

- Re-export [`RendererError`], [`Result`] and [`ErrorContext`] from
  `pill_renderer_api`, where the host can name them without wgpu.
- Log the GPU errors that no error scope captured
  ([`report_uncaptured_errors`]), instead of letting wgpu panic on them.
- Latch a lost device ([`latch_device_loss`]) and pass it to the frame path
  ([`device_loss`]). A driver reset then ends the run with a reason, instead
  of leaving a window that never updates again.
- Capture the errors a block of GPU work provoked. While the renderer is
  built the capture is awaited ([`captured`]). In a native development build
  a capture can also be blocked on during a frame (`capturing_validation`).

## Design

Waiting for an error scope finishes asynchronously. A browser answers the
wait only when control returns to its event loop, so a frame cannot block on
a scope there. Blocking capture is therefore a development-only feature: it
lets a refused shader edit be reported and skipped. In every other build the
same refusal reaches the error handler, which logs it.

A lost device reaches neither path. wgpu answers every call on a lost device
with success, so the only witness is the callback that
[`latch_device_loss`] installs. It has to be passed to the frame path rather
than logged and forgotten.

## Module contents

### Structs
- [`CapturedErrors`](struct.CapturedErrors.md#rustdoc-item-184) — The errors that one block of GPU work provoked.

### Functions
- [`captured`](fn.captured.md#rustdoc-item-220) — Runs `make` with wgpu's errors captured, and waits for wgpu's answers.
- [`captured_now`](fn.captured_now.md#rustdoc-item-222) — Runs `make` with wgpu's errors captured, and blocks until wgpu answers.
- [`capturing_validation`](fn.capturing_validation.md#rustdoc-item-223) — Runs a block of GPU work and captures any error wgpu raises for it.
- [`device_loss`](fn.device_loss.md#rustdoc-item-218) — Returns the reason to stop drawing when the device has been lost, or `None`
- [`latch_device_loss`](fn.latch_device_loss.md#rustdoc-item-219) — Records a lost device, so the frame path can report it.
- [`latched_device_loss`](fn.latched_device_loss.md#rustdoc-item-216) — Locks the device loss latch.
- [`report_uncaptured_errors`](fn.report_uncaptured_errors.md#rustdoc-item-215) — Sends GPU errors that no error scope captured to the log.

### Statics
- [`DEVICE_LOSS`](static.DEVICE_LOSS.md#rustdoc-item-177) — The report of the device loss this image has seen, if any.

## Re-exports

- `pub use pill_renderer_api::error::ErrorContext;`
- `pub use pill_renderer_api::error::RendererError;`
- `pub use pill_renderer_api::error::Result;`
