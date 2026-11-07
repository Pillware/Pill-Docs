<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-452"></a>

# Module `pill_editor_core::boundary`

Source: `editor\pill_editor_core\src\boundary.rs:1`

The plain data crossing the frontend/shell boundary.
The plain data the egui frontend and the reloadable egui shell exchange.

## Responsibilities

- [`EguiShellInput`]: what the frontend writes for the shell each frame.
  That is the window's size and scale, its focus, time and frame rate, the
  window's events, the cursor and paste text, and the scene badges.
- [`EguiShellFrame`]: what the shell hands back. That is the tessellated
  meshes, the texture uploads, the interaction state, the cursor and
  clipboard text, the viewport rectangles and the requests the pass raised.
  The frontend drains it.
- [`frame_from_output`]: builds the frame from egui's own output and drops
  paint callbacks, because only plain data crosses the boundary.

## Design

Everything that crosses is plain data: no handles, no device objects and no
callbacks. The shell's input events travel in [`EguiShellInput`] as owned
[`InputEvent`]s, so the UI reads the events of its own windows and never
the game's.

## Module contents

### Structs
- [`EguiPopoutInputs`](struct.EguiPopoutInputs.md#rustdoc-item-285) — One input record per popped-out tab's window.
- [`EguiShellFrame`](struct.EguiShellFrame.md#rustdoc-item-389) — One shell pass's output, as plain data.
- [`EguiShellInput`](struct.EguiShellInput.md#rustdoc-item-204) — Everything the frontend tells the shell about the frame it is about to
- [`PopoutFrame`](struct.PopoutFrame.md#rustdoc-item-388) — One popped-out tab's frame: which tab it draws, and the pass's output.
- [`ShellBadge`](struct.ShellBadge.md#rustdoc-item-202) — One entity's badge in one scene view.
- [`ShellRect`](struct.ShellRect.md#rustdoc-item-325) — A rectangle in logical pixels that crosses the boundary: a viewport body,

### Functions
- [`frame_from_output`](fn.frame_from_output.md#rustdoc-item-449) — Builds the frame the frontend drains, from egui's output for one pass.

### Constants
- [`BADGES_PER_VIEW_MAX`](constant.BADGES_PER_VIEW_MAX.md#rustdoc-item-186) — How many badges one scene view draws: enough that a crowded scene still
- [`DEFAULT_SCENE_VIEWS`](constant.DEFAULT_SCENE_VIEWS.md#rustdoc-item-187) — How many scene views the frontend opens at startup: the two the default
- [`SCENE_VIEWS_MAX`](constant.SCENE_VIEWS_MAX.md#rustdoc-item-188) — The most scene views one editor opens. Each view needs a child window and a
