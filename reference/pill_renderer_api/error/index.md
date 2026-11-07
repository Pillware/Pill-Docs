<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-403"></a>

# Module `pill_renderer_api::error`

Source: `rendering\pill_renderer_api\src\error.rs:1`

Renderer failures, the [`error::Result`](type.Result.md#rustdoc-item-396) alias and the
[`error::ErrorContext`](trait.ErrorContext.md#rustdoc-item-398) helper.
Public renderer failures at the host boundary.

## Responsibilities

- Declare [`RendererError`](enum.RendererError.md#rustdoc-item-179), the failures a renderer reports while it is
  built, when a surface is attached and while frames are presented.
- Provide the [`Result`] alias and [`ErrorContext`], so a call site can
  attach a description of what it was doing to any failure beneath it.

## Design

The variants carry plain strings rather than `wgpu` error values. The host
links this crate in every build and reports renderer failures without
naming a graphics type, while the renderer module turns its wgpu errors
into these. The `engine::renderer` namespace is also used by the 2D
renderer's error enum, so a code such as
`engine::renderer::surface_creation` means the same condition whichever of
the two reports it.

## Module contents

### Enums
- [`RendererError`](enum.RendererError.md#rustdoc-item-179) — Failures the renderer reports to its host.

### Traits
- [`ErrorContext`](trait.ErrorContext.md#rustdoc-item-398) — Turns any lower-level failure into a [`RendererError::Other`] carrying a

### Type aliases
- [`Result`](type.Result.md#rustdoc-item-396) — The result type used across this crate: the value on success,
