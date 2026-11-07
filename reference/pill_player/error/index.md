<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-114"></a>

# Module `pill_player::error`

Visibility: `crate` · Source: `hosting\pill_player\src\error.rs:1`

Errors of a windowed runtime.
Errors of a windowed runtime.

## Responsibilities

- Declares [`RenderingError`](enum.RenderingError.md#rustdoc-item-6), the failure that stops a windowed runtime
  from starting or running: host setup failed, or the renderer did.

## Design

The engine cannot name a renderer error: the renderer contract already
depends on the engine, so the engine cannot also depend on the contract.
This crate depends on both and defines the one error that names both
failure sources. Window and event-loop failures stay with the frontend
that owns the event loop; a frontend that reports a whole run as one
error composes this type with its own.

## Module contents

### Enums
- [`RenderingError`](enum.RenderingError.md#rustdoc-item-6) — Anything that can go wrong while a windowed runtime is set up or runs.
