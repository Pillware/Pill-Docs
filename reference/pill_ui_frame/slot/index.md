<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-387"></a>

# Module `pill_ui_frame::slot`

Source: `rendering\pill_ui_frame\src\slot.rs:1`

The world resource that carries a frame from the producer to the renderer.
The world resource a UI producer publishes a frame into and a renderer
takes it from.

## Responsibilities

- [`UiFrameSlot`](struct.UiFrameSlot.md#rustdoc-item-389): the world resource holding the newest [`UiFrame`](../frame/struct.UiFrame.md#rustdoc-item-350) a UI
  producer built. It offers `publish` and `take` for the frame, `is_empty`,
  and `clear` to drop a frame but keep its buffers.
- `request_texture_resend` and `texture_resend_generation`: the pair a
  painter uses to ask for every texture again, and a producer to tell
  whether that request is new.

## Design

A UI producer and a renderer meet here rather than naming each other. The
producer (a project's egui pass) writes what it drew; the renderer takes
the frame and draws it. Neither side depends on the other's crate, which
lets a project link the game-UI library while the renderer module draws
without linking it too. On Windows a single link unit cannot hold two
copies of the same third-party graph in different formats.

The slot lives beside the data it holds rather than in the engine core, so
the core names no UI types. Both sides link this crate, so they share one
slot type, and its [`Resource::shared_name`] is pinned. The resource id
comes from that name rather than from a per-artifact type id, so the
project's DLL and the renderer module reach one resource. A changed name
would register a second one.

## Module contents

### Structs
- [`UiFrameSlot`](struct.UiFrameSlot.md#rustdoc-item-389) — Holds the frame the last UI pass published until the renderer takes it.
