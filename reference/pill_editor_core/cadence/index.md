<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-666"></a>

# Module `pill_editor_core::cadence`

Source: `editor\pill_editor_core\src\cadence.rs:1`

The redraw cadence: when the editor needs to draw a frame.
Redraw cadence: how the editor decides when to draw the next frame.

## Responsibilities

- Name every reason a frame is asked for: input, a scripted command, a
  changed snapshot, a resize, something moving, or egui's own repaint
  request.
- Decide whether the loop draws at once or sleeps for the idle poll.
- Count the frames it drew, how many of them were asked for, and how often
  it waited.
- Read `PILL_EDITOR_CONTINUOUS_REDRAW`, the switch a profile or a suite
  sets so that every frame is drawn.

## Rules

A frame is drawn at once when something asks for it - input arrived, a
scripted command arrived, the snapshot changed, the window resized, egui
asked for a repaint - or while something is moving, which keeps a running
project at the display rate. Only a settled editor sleeps for
[`IDLE_POLL`], so an idle one stops drawing.

## Design

The decision is plain data, so it can be tested without an event loop. The
frontend collects this frame's [`FrameDemand`] and asks a [`Cadence`] what
to do next. Nothing here touches a window, a clock or the world.

## Module contents

### Structs
- [`Cadence`](struct.Cadence.md#rustdoc-item-670) — The editor's redraw counters, and the mode that sets when it draws next.
- [`FrameDemand`](struct.FrameDemand.md#rustdoc-item-578) — What asks for the next frame.

### Enums
- [`FrameWake`](enum.FrameWake.md#rustdoc-item-626) — When the loop draws next.

### Constants
- [`CONTINUOUS_REDRAW_ENV`](constant.CONTINUOUS_REDRAW_ENV.md#rustdoc-item-570) — The environment variable that makes the loop draw every frame.
- [`IDLE_POLL`](constant.IDLE_POLL.md#rustdoc-item-571) — How long an idle editor sleeps between frames.
