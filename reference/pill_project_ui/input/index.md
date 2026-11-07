<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-129"></a>

# Module `pill_project_ui::input`

Source: `ui\pill_project_ui\src\input.rs:1`

The engine's input snapshot and the bridge to egui's input.
The engine's input snapshot, captured and turned into egui's input.

## Responsibilities

- [`InputFrame`](struct.InputFrame.md#rustdoc-item-29): one frame of engine input, owned, so a system can capture
  it before the UI resource's mutable borrow.
- [`raw_input`](fn.raw_input.md#rustdoc-item-166): that frame as egui's [`RawInput`], against the viewport the
  UI draws into.
- [`map_key`], [`pointer_button`] and [`modifiers`]: the pure conversions it
  composes.
- [`InputMemory`](struct.InputMemory.md#rustdoc-item-132): the two things a snapshot cannot state - the modifiers it
  last reported and where the cursor was.

## Design

The engine reports input as a *snapshot*: what is held, what went down or
up this frame, the text typed and the scroll. A system sees only a snapshot,
not an event list, so the bridge turns it into egui's events and remembers
the two values that only exist as "the current state". Order matters to
egui: modifiers change before the keys they apply to, and the pointer moves
before a button press that names its position. The editor's equivalent
(`pill_editor_core::input`) mirrors this shape without depending on it,
because that crate carries `egui_dock`, which a game build must not link.

## Module contents

### Structs
- [`InputFrame`](struct.InputFrame.md#rustdoc-item-29) — One frame of engine input, owned.
- [`InputMemory`](struct.InputMemory.md#rustdoc-item-132) — What the bridge reported last frame, so it can tell what changed this one.

### Functions
- [`map_key`](fn.map_key.md#rustdoc-item-172) — Map an engine key code onto egui's.
- [`modifiers`](fn.modifiers.md#rustdoc-item-170) — Convert the engine's modifier state.
- [`pointer_button`](fn.pointer_button.md#rustdoc-item-168) — Map an engine mouse button to egui's pointer button.
- [`raw_input`](fn.raw_input.md#rustdoc-item-166) — One frame of egui input, built from `frame`.
