<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-852"></a>

# Module `pill_renderer_api::grid`

Source: `rendering\pill_renderer_api\src\grid.rs:1`

The scene grid of the view-bound surfaces: whether it is on, its line
spacing, and the spacing one frame uses.
The scene grid: the infinite ground the view-bound surfaces draw.

## Responsibilities

- Carry a frontend's grid settings ([`SceneGrid`](struct.SceneGrid.md#rustdoc-item-855): whether the grid is on
  and the distance between its lines) beside the surface camera bindings.
- Compute the spacing one frame's grid uses ([`frame_grid`](fn.frame_grid.md#rustdoc-item-892)) and list the
  surfaces the grid is drawn on ([`editor_view_surfaces`](fn.editor_view_surfaces.md#rustdoc-item-891)).

## Design

The grid belongs to the editor, not to the world. It is drawn on the
surfaces bound to a view camera ([`CameraBinding::View`](../surface/enum.CameraBinding.md#rustdoc-item-895)), which are the
editor's own viewports, and such a camera is plain data, never an entity.
A surface drawn through a world camera never shows the grid. So an editor
gets the grid by turning one setting on, and a game's window stays
untouched however a frontend binds its cameras.

The renderer draws the grid as one fullscreen triangle. The fragment
shader casts a ray through each pixel and finds where it meets the ground
plane. So the grid has no size to run out of, and nothing to rebuild when
the view moves. The frame carries only the spacing; the fade and the
colours live in the shader.

The frame names the grid by that spacing alone, and the surfaces the grid
is drawn on are the frame's editor views. So the grid and everything else
the editor draws over the scene share one list, and the two can never
disagree.

## Module contents

### Structs
- [`SceneGrid`](struct.SceneGrid.md#rustdoc-item-855) — The scene grid's on/off switch and the distance between its lines.

### Functions
- [`editor_view_surfaces`](fn.editor_view_surfaces.md#rustdoc-item-891) — Returns every surface bound to a view camera, whether or not the grid is on.
- [`frame_grid`](fn.frame_grid.md#rustdoc-item-892) — Returns the grid spacing one frame draws, or `None` when it draws no grid.
- [`view_bound_surfaces`](fn.view_bound_surfaces.md#rustdoc-item-893) — Returns every surface bound to a view camera, in ascending id order.

### Constants
- [`DEFAULT_CELL_SIZE`](constant.DEFAULT_CELL_SIZE.md#rustdoc-item-851) — The cell size the grid uses when the frontend's value is unusable. The
