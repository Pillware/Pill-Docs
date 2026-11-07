<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-342"></a>

# Module `pill_editor::frontend`

Visibility: `crate` · Source: `editor\pill_editor\src\frontend.rs:1`

The editor's errors, with their stable diagnostic codes.
The native editor's errors.

## Responsibilities

- Declares [`EditorError`](enum.EditorError.md#rustdoc-item-272), what an editor run can end with: event-loop,
  window and GPU device creation, host setup, or a frame through the
  project's renderer.

## Design

The error lives in the crate that owns the event loop, like
`pill_standalone`'s. The `wgpu` and `winit` errors are carried unchanged,
so the report printed when the run ends shows the driver's own message.

## Module contents

### Enums
- [`EditorError`](enum.EditorError.md#rustdoc-item-272) — Anything that can end an editor run.
