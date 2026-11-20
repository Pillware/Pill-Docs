<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1276"></a>

# Module `pill_editor::runner::element_tools`

Visibility: `{'restricted': {'parent': 539, 'path': '::runner'}}` · Source: `editor\pill_editor\src\runner\element_tools.rs:1`

The active tool's elements: drawing them, picking them and selecting them.

## Responsibilities

- Publish what the active tool reports for the selected entity as pickable
  point handles, styled for selection and hover, and log where they land.
- Answer which handle a pixel of one scene view hits, and apply an element
  click to the shared selection as one recorded step.
- Run the marquee: the drag a press in empty space starts while the active
  tool offers a kind that allows box select.

## Design

The editor owns every generic part; a tool only reports where its elements
are, of which kind, and what a kind looks like
([`pill_editor_core::tools`]). This module turns that report into the
frame's drawn handles, the handle-to-target map and the screen projections,
so a click, an extend or a marquee needs no tool code at all - and a tool
that reports nothing costs nothing.

An element is picked twice over. The CPU test here answers the hover and
the press in the frame they happen in, against the exact pixels the handle
was projected to; the renderer's pick buffer answers the same handles to a
queued pick, because a point's pick quad carries the handle's element-band
id. Both answers land in [`EditorWindow::apply_element_click`](../editor_window/struct.EditorWindow.md#rustdoc-item-721), so the two
paths cannot disagree about what a click selects.

The handles are rebuilt from the tool every frame and never cached across
one: a component edit can move or remove an element, and a handle that
outlived its element would select something that is no longer there.

## Module contents

### Enums
- [`SceneHandle`](enum.SceneHandle.md#rustdoc-item-719) — What a scene pixel hits among the editor's own handles.

### Functions
- [`queue_element_selection`](fn.queue_element_selection.md#rustdoc-item-1227) — Queues one recorded element-selection step.
- [`queue_tool_commands`](fn.queue_tool_commands.md#rustdoc-item-1229) — Queues the commands a tool answered a press or a key with, as one recorded

### Constants
- [`MARQUEE_DRAG_PIXELS`](constant.MARQUEE_DRAG_PIXELS.md#rustdoc-item-728) — How far a press must travel, in pixels, before its drag counts as a
