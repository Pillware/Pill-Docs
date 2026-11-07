<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-169"></a>

# Module `pill_standalone::error`

Visibility: `crate` · Source: `frontends\pill_standalone\src\error.rs:1`

The standalone frontend's errors.
Errors of the standalone frontend. [`FrontendError`] holds the `winit`
failures, and [`RunError`](enum.RunError.md#rustdoc-item-105) is what a run can end with.

## Responsibilities

- Declares [`FrontendError`], the failures of creating or running the
  `winit` event loop and of creating the native window.
- Declares [`RunError`](enum.RunError.md#rustdoc-item-105), what a run can end with: a setup failure, a
  frontend failure, or a renderer failure.

## Design

Both types live in the crate that owns the event loop. `pill_core` is the
shared dylib that every module, project and hot patch imports, so a
`winit` type placed there would add the windowing library to all of their
dependency graphs, for an error only this binary constructs.
`pill_player::RenderingError` already combines the windowed runtime's setup
and renderer failures. [`RunError`](enum.RunError.md#rustdoc-item-105) adds the frontend arm, and a build
without the `rendering` feature has neither that arm nor the renderer arm.

## Module contents

### Enums
- [`FrontendError`](enum.FrontendError.md#rustdoc-item-6) — Failures of the windowed frontend, all reported by `winit`.
- [`RunError`](enum.RunError.md#rustdoc-item-105) — Anything that can end a standalone run.
