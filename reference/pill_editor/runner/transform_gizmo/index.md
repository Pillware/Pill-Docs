<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1072"></a>

# Module `pill_editor::runner::transform_gizmo`

Visibility: `{'restricted': {'parent': 483, 'path': '::runner'}}` · Source: `editor\pill_editor\src\runner\transform_gizmo.rs:1`

The transform gizmo: its handles' geometry, its drags and their history.

## Responsibilities

- Publish the handles' geometry and their screen positions in pixels for
  the active tool, so the hover test can name the handle under a pixel.
- Run a drag: the press's ray, the per-move write, and the release that
  records one undoable step.
- Draw the guides an active drag shows.

## Design

The drag's math lives in `pill_editor_core::gizmo`. This module reads the
world and the view cameras, writes the transform fields and queues the
recorded history step. Every move is computed from the transform at the
press, not from the previous move, so a snapped drag cannot add up
rounding errors. The release writes the press's value back before it
queues that step, because the recorded command takes its inverse from the
world's current value. Without the write, the inverse would be the final
value and the first undo would change nothing.

## Module contents

### Structs
- [`ScreenProjection`](struct.ScreenProjection.md#rustdoc-item-753) — One scene view's camera basis and projection terms, in the surface's
