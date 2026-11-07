<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1201"></a>

# Module `pill_csharp_bridge::frame_state`

Visibility: `crate` · Source: `csharp\pill_csharp_bridge\src\frame_state.rs:1`

Read-only frame state for managed code: input and time.
Read-only frame state for the managed runtime: input and time.

## Responsibilities

- Answer the managed runtime's input queries (keys and mouse buttons held,
  mouse motion since the previous frame) from the active invocation's
  `Input` resource.
- Report the engine clock's frame delta and elapsed time from the active
  invocation's `Time` resource.

## Design

Each function reads the world of the active managed invocation, which the
host owns. It returns the same values the frame's systems see, so a managed
system and a native one agree about the frame they process. With no
invocation active, the answers are "nothing held" and zero. Nothing is
cached between calls, so an answer cannot go stale.

The managed runtime passes keys and mouse buttons as `u8` numbers. Each
number is an index into [`KeyCode::ALL`] or [`MouseButton::ALL`], and the
C# mirror lists the same items in the same order. A number that names no
entry reports "not held".

## Module contents

### Functions
- [`ffi_input_key_held`](fn.ffi_input_key_held.md#rustdoc-item-1196) — Reports whether the key with discriminant `key_discriminant` is held this
- [`ffi_input_mouse_button_held`](fn.ffi_input_mouse_button_held.md#rustdoc-item-1197) — Reports whether the mouse button with discriminant
- [`ffi_input_mouse_delta`](fn.ffi_input_mouse_delta.md#rustdoc-item-1198) — Writes the mouse movement since the previous frame to `out_x` and `out_y`
- [`ffi_time_delta_seconds`](fn.ffi_time_delta_seconds.md#rustdoc-item-1199) — Returns the frame's time step in seconds, capped at the engine's maximum,
- [`ffi_time_elapsed_seconds`](fn.ffi_time_elapsed_seconds.md#rustdoc-item-1200) — Returns the seconds since the project started, or `0.0` with no active
