<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-539"></a>

# Module `pill_editor::runner`

Visibility: `crate` · Source: `editor\pill_editor\src\runner\mod.rs:1`

The windows, the GPU device and the frame loop.
The native editor executable: the egui frontend's frame loop, its window
and its GPU device.

## Responsibilities

- Own the `winit` event loop, the main window, the scene views' child
  windows, and the editor's own GPU device that draws the UI.
- Host the project and its extensions - including the reloadable egui
  shell module - through `pill_development_host`.
- Drive one world frame per redraw: push the window events into the
  engine input, publish [`EguiShellInput`], run the host's frame (the
  shell's egui pass runs inside it), then draw the shell's
  [`EguiShellFrame`] through the composition overlay.
- Publish the shared selection as the renderer's outline set and the
  transform gizmo's handles for it, and turn scene clicks into picks whose
  answers move the selection or start a gizmo drag.

## Design

The window redraws only when asked to. Input, a changed editor snapshot, a
resize, or something moving draws the next frame at once; an idle editor
waits for the periodic poll instead of drawing. The boundary between this
executable and the shell module is plain data in the world (the shared
`pill_editor_core::boundary` resources), so the frontend and the reloadable
shell never share a type that could dangle across a reload. When no shell
module is loaded, the runner draws a small egui UI of its own.

## Module contents

### Modules
- [`assets_pipeline`](assets_pipeline/index.md#rustdoc-item-538) — The executable's half of the Assets pipeline.
- [`editor_window`](editor_window/index.md#rustdoc-item-1226) — The editor window's state and the code that opens it.
- [`element_tools`](element_tools/index.md#rustdoc-item-1276) — The active tool's elements: drawing them, picking them and selecting them.
- [`frame`](frame/index.md#rustdoc-item-1277) — Runs one editor frame as a series of named phases.
- [`scripted_channel`](scripted_channel/index.md#rustdoc-item-755) — The scripted test channel: the verbs, their dumps, and the injections.
- [`tool_fixture`](tool_fixture/index.md#rustdoc-item-1296) — The tool the editor suites drive the element framework with.
- [`transform_gizmo`](transform_gizmo/index.md#rustdoc-item-871) — The transform gizmo: its handles' geometry, its drags and their history.
- [`windows`](windows/index.md#rustdoc-item-919) — The editor's windows: surfaces, child windows, popouts and presentation.

### Structs
- [`CameraDrag`](struct.CameraDrag.md#rustdoc-item-563) — A camera navigation drag in flight.
- [`EditorApplication`](struct.EditorApplication.md#rustdoc-item-1598) — The `winit` application: one editor window, created on resume.
- [`GizmoDrag`](struct.GizmoDrag.md#rustdoc-item-592) — One gizmo drag in flight.
- [`PopoutWindow`](struct.PopoutWindow.md#rustdoc-item-554) — One popped-out tab's window: the window, its own
- [`PressPick`](struct.PressPick.md#rustdoc-item-585) — The pick a scene press asked: the view and press pixel it happened at,
- [`SceneView`](struct.SceneView.md#rustdoc-item-549) — One scene view: its child window and its renderer surface.
- [`SurfaceWindow`](struct.SurfaceWindow.md#rustdoc-item-551) — One view surface's window: a child of the main window when the platform
- [`WakeTimer`](struct.WakeTimer.md#rustdoc-item-1597) — The loop's timed wake: the moment the next frame is owed.

### Enums
- [`CommandAction`](enum.CommandAction.md#rustdoc-item-1884) — What a registry command id does in this executable.
- [`DragSubject`](enum.DragSubject.md#rustdoc-item-1945) — What a gizmo drag edits: the entity's own transform, or the elements the
- [`EventRoute`](enum.EventRoute.md#rustdoc-item-1784) — Where one translated window event belongs, by the focus rule.

### Functions
- [`active_tool_frame`](fn.active_tool_frame.md#rustdoc-item-1873) — The tool frame the gizmo is in, when the active tool still offers it.
- [`camera_binding`](fn.camera_binding.md#rustdoc-item-1828) — The camera binding the scene surface draws through: the view's orbit
- [`camera_navigation_name`](fn.camera_navigation_name.md#rustdoc-item-1862) — The display name of a camera navigation gesture.
- [`choose_display_backend`](fn.choose_display_backend.md#rustdoc-item-1590) — Picks the display backend the editor's windows need.
- [`command_action`](fn.command_action.md#rustdoc-item-1927) — The action a command id runs, if this executable implements it.
- [`create_overlay`](fn.create_overlay.md#rustdoc-item-1591) — Build the UI surface for the posture the editor starts in.
- [`create_window_overlay`](fn.create_window_overlay.md#rustdoc-item-1592) — Build the window-surface overlay, logging the refusal that stops it.
- [`draw_gizmo_guides`](fn.draw_gizmo_guides.md#rustdoc-item-2055) — Draw the drag guides: the axis constraint line through a single-axis
- [`editor_default_keybindings`](fn.editor_default_keybindings.md#rustdoc-item-984) — The bindings the editor starts with when there is no keybindings file.
- [`element_drag_elements`](fn.element_drag_elements.md#rustdoc-item-1874) — The elements a gizmo drag addresses, with the transforms they have now.
- [`element_pivot`](fn.element_pivot.md#rustdoc-item-1875) — The point a set of dragged elements is pivoted on: the average of their
- [`engine_asset_rows`](fn.engine_asset_rows.md#rustdoc-item-2058) — The store's own assets that no file in the project backs - a chain's
- [`gizmo_axis_name`](fn.gizmo_axis_name.md#rustdoc-item-1867) — The wire name of one axis, for logs and suite tokens.
- [`gizmo_basis`](fn.gizmo_basis.md#rustdoc-item-1870) — The frame the gizmo's axes are measured in.
- [`gizmo_drag_mode`](fn.gizmo_drag_mode.md#rustdoc-item-2053) — The tool mode a handle's drag edits: a plane square translates.
- [`gizmo_frame_basis`](fn.gizmo_frame_basis.md#rustdoc-item-1871) — The frame the gizmo's axes are measured in, a tool's own frame included.
- [`gizmo_mode_name`](fn.gizmo_mode_name.md#rustdoc-item-1865) — The wire name of a tool mode, for logs and suite tokens.
- [`gizmo_plane_name`](fn.gizmo_plane_name.md#rustdoc-item-2054) — The display name of a plane handle, as the axis pair it spans.
- [`gizmo_space_name`](fn.gizmo_space_name.md#rustdoc-item-1866) — The wire name of a gizmo space.
- [`listing_shows_asset`](fn.listing_shows_asset.md#rustdoc-item-2060) — Whether the listing already shows the store asset `name` carries.
- [`native_path`](fn.native_path.md#rustdoc-item-2062) — Rebuild `target` from its components, so its text carries the platform's
- [`no_overlay_requested`](fn.no_overlay_requested.md#rustdoc-item-1589) — Whether [`NO_OVERLAY_ENV`] asks for the window-surface posture.
- [`notice_toast`](fn.notice_toast.md#rustdoc-item-1708) — The toast a host notice becomes: its level and its one line.
- [`offset_pointer`](fn.offset_pointer.md#rustdoc-item-1827) — Shift a pointer event the scene window reported into the main window's
- [`open_in_file_manager`](fn.open_in_file_manager.md#rustdoc-item-2061) — Ask the platform's file manager to show `target`: Windows and macOS select
- [`owe_frame`](fn.owe_frame.md#rustdoc-item-1667) — Ask for one frame now: clear the wake timer, request a redraw, and leave
- [`parse_gizmo_axis`](fn.parse_gizmo_axis.md#rustdoc-item-1868) — Parse a scripted axis name.
- [`paste_chord`](fn.paste_chord.md#rustdoc-item-1707) — Whether one frame's shell events carry a paste chord.
- [`point_is_outside_view_body`](fn.point_is_outside_view_body.md#rustdoc-item-1780) — Whether one scene view's child-local pixel lies outside the viewport body
- [`problems_from_build_output`](fn.problems_from_build_output.md#rustdoc-item-1710) — The Problems rows a module's failed build output becomes.
- [`projection_terms`](fn.projection_terms.md#rustdoc-item-1876) — The tangent of half the vertical field of view, and the aspect ratio.
- [`read_transform`](fn.read_transform.md#rustdoc-item-1869) — Read one entity's transform as plain arrays; `None` when the entity is
- [`reference_guid`](fn.reference_guid.md#rustdoc-item-2057) — The guid a settings reference holds, in either spelling: the value itself
- [`resolve_component_name`](fn.resolve_component_name.md#rustdoc-item-1864) — Resolve a component type name that may be abbreviated to its `::Name`
- [`resolve_display_entity`](fn.resolve_display_entity.md#rustdoc-item-1863) — Resolve an `NvG` display handle against the live entity table, so a
- [`rotate_by_turn`](fn.rotate_by_turn.md#rustdoc-item-1830) — The Hamilton product of two `[x, y, z, w]` quaternions.
- [`route_event`](fn.route_event.md#rustdoc-item-1826) — The focus rule in one place: the game's window feeds the game, every
- [`run`](fn.run.md#rustdoc-item-1593) — Run the editor until the last window closes.
- [`scaled_view_rect`](fn.scaled_view_rect.md#rustdoc-item-1781) — A shell rectangle in logical points as the child window's own client
- [`scene_surface`](fn.scene_surface.md#rustdoc-item-1706) — The scene views' surface ids: view `n` draws through surface `n + 1`, so
- [`split_command`](fn.split_command.md#rustdoc-item-1926) — Split a command line into a program and its arguments.

### Type aliases
- [`FileStamp`](type.FileStamp.md#rustdoc-item-1929) — A state file's metadata: what a frame compares to decide whether the file

### Constants
- [`ASSET_REFRESH_FRAMES`](constant.ASSET_REFRESH_FRAMES.md#rustdoc-item-1585) — Frames between periodic asset-listing refreshes. A file command refreshes
- [`ASSET_ROWS_MAX`](constant.ASSET_ROWS_MAX.md#rustdoc-item-1587) — How many asset rows the listing keeps, before the frame adds the module
- [`COMPOSITION_VIEW_OVERSHOOT`](constant.COMPOSITION_VIEW_OVERSHOOT.md#rustdoc-item-898) — How far, in logical points, a view's window extends past its tab body while
- [`DETACHED_SCENE_ENV`](constant.DETACHED_SCENE_ENV.md#rustdoc-item-1567) — The environment variable that keeps a scene view in a top-level window.
- [`EDITOR_FORMAT`](constant.EDITOR_FORMAT.md#rustdoc-item-1588) — The format the editor draws in. The overlay's swapchain and egui's renderer
- [`FPS_SMOOTHING`](constant.FPS_SMOOTHING.md#rustdoc-item-1576) — How much of each new frame goes into the displayed FPS. The rest is the
- [`FRAME_HEARTBEAT_FRAMES`](constant.FRAME_HEARTBEAT_FRAMES.md#rustdoc-item-1579) — Frames between the run's own frame-rate heartbeats, for the person reading
- [`FRAME_HEARTBEAT_SECONDS`](constant.FRAME_HEARTBEAT_SECONDS.md#rustdoc-item-1580) — The wall-clock backstop for the same heartbeat, so a slow posture still
- [`GIZMO_DASH`](constant.GIZMO_DASH.md#rustdoc-item-1584) — One dash (and one gap) of the translation displacement line, as a
- [`GIZMO_GUIDE_SPAN`](constant.GIZMO_GUIDE_SPAN.md#rustdoc-item-1582) — How far the axis constraint guide reaches on both sides of the gizmo, as
- [`GIZMO_HEARTBEAT_FRAMES`](constant.GIZMO_HEARTBEAT_FRAMES.md#rustdoc-item-1581) — Frames between gizmo anchor logs while the handle layout stands still.
- [`GIZMO_HIT_RADIUS_DEFAULT`](constant.GIZMO_HIT_RADIUS_DEFAULT.md#rustdoc-item-1583) — The default radius around a handle that the hover test uses, as a fraction
- [`GIZMO_PRESS_FRACTION`](constant.GIZMO_PRESS_FRACTION.md#rustdoc-item-1578) — Where along a straight handle the scripted grab presses it, as a
- [`GIZMO_SCREEN_FRACTION`](constant.GIZMO_SCREEN_FRACTION.md#rustdoc-item-1577) — The gizmo's handle length as a fraction of the camera distance. This keeps
- [`INITIAL_SCENE_SIZE`](constant.INITIAL_SCENE_SIZE.md#rustdoc-item-1572) — The scene view's initial size in logical pixels.
- [`INITIAL_WINDOW_SIZE`](constant.INITIAL_WINDOW_SIZE.md#rustdoc-item-1569) — The window's initial size in logical pixels.
- [`MINIMUM_WINDOW_SIZE`](constant.MINIMUM_WINDOW_SIZE.md#rustdoc-item-1571) — The window's minimum size in logical pixels: the dock's minimum layout
- [`NO_OVERLAY_ENV`](constant.NO_OVERLAY_ENV.md#rustdoc-item-1566) — The environment variable that forces the window-surface posture.
- [`POPOUT_INITIAL_SIZE`](constant.POPOUT_INITIAL_SIZE.md#rustdoc-item-1573) — A popped-out tab window's initial size in logical pixels: tall and narrow
- [`RECOVERY_AUTOSAVE_FRAMES`](constant.RECOVERY_AUTOSAVE_FRAMES.md#rustdoc-item-947) — Frames between checks of whether the recovery document's key changed, so
- [`SCENE_DEFAULT_MARGIN`](constant.SCENE_DEFAULT_MARGIN.md#rustdoc-item-1575)
- [`SCENE_DEFAULT_TOP_MARGIN`](constant.SCENE_DEFAULT_TOP_MARGIN.md#rustdoc-item-1574) — The scene view's rectangle before the shell reports its first scene rect:
- [`SHELL_MODULE_NAME`](constant.SHELL_MODULE_NAME.md#rustdoc-item-1568) — The shell module's crate name: the editor module under `editor/` that
- [`STATE_FILE_POLL_FRAMES`](constant.STATE_FILE_POLL_FRAMES.md#rustdoc-item-973) — Frames between unconditional re-reads of the editor's state files - the
