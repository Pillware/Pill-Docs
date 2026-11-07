<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-141"></a>

# Module `pill_input::winit_events`

Source: `frontends\pill_input\src\winit_events.rs:1`

winit's window and device events as engine input events.
winit events as engine input events.

## Responsibilities

- Translate the input-carrying [`WindowEvent`]s and [`DeviceEvent`]s into
  [`InputEvent`]s ([`translate_window_event`], [`translate_device_event`]).
- Map winit's key codes, mouse buttons, modifier state and IME events onto
  the engine's ([`key_code`], [`mouse_button`], [`modifier_state`],
  [`ime_event`]).

## Design

The engine's [`KeyCode`] has the same variants as winit's, so the key mapping
is one list of names. A name the engine lacks fails to compile, and a count
check fails the build when the list misses a key. Cursor positions and pixel
scroll amounts are physical pixels, as winit reports them. Raw mouse motion
is not, because winit leaves its unit to the device. A frontend gives the
frame driver the window's whole inner size, so cursor positions and the
drawn surface share one space. One window event can carry two engine
events: a pressed key reports its key change and its committed text. The
translation therefore returns a small sequence, not one optional event.

## Module contents

### Functions
- [`button_state`](fn.button_state.md#rustdoc-item-149) — Converts winit's button state into the engine's.
- [`ime_event`](fn.ime_event.md#rustdoc-item-145) — Converts an IME change into an input event, or `None` when the IME is
- [`key_code`](fn.key_code.md#rustdoc-item-153) — Returns the engine's key for winit's code, or `None` for a key winit
- [`key_events`](fn.key_events.md#rustdoc-item-138) — Returns the events one keyboard input carries: the key change, and the text
- [`modifier_state`](fn.modifier_state.md#rustdoc-item-142) — Converts winit's modifier state into the engine's.
- [`mouse_button`](fn.mouse_button.md#rustdoc-item-150) — Converts winit's mouse button into the engine's, or `None` for a numbered
- [`translate_device_event`](fn.translate_device_event.md#rustdoc-item-147) — Returns the input event a device event carries: raw mouse motion, or `None`
- [`translate_window_event`](fn.translate_window_event.md#rustdoc-item-134) — Returns the input events a window event carries, in the order to apply them.

### Constants
- [`MAPPED_KEY_COUNT`](constant.MAPPED_KEY_COUNT.md#rustdoc-item-156) — How many keys [`key_code`] maps.

### Macros
- [`shared_key_codes`](macro.shared_key_codes.md#rustdoc-item-154) — Declares [`key_code`], and the count of keys it maps, from the key names
