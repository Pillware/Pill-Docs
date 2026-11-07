<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-483"></a>

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
- [`assets_pipeline`](assets_pipeline/index.md#rustdoc-item-482) — The executable's half of the Assets pipeline.
- [`editor_window`](editor_window/index.md#rustdoc-item-1066) — The editor window's state and the code that opens it.
- [`frame`](frame/index.md#rustdoc-item-1067) — Runs one editor frame as a series of named phases.
- [`scripted_channel`](scripted_channel/index.md#rustdoc-item-1069) — The scripted test channel: the verbs, their dumps, and the injections.
- [`transform_gizmo`](transform_gizmo/index.md#rustdoc-item-1072) — The transform gizmo: its handles' geometry, its drags and their history.
- [`windows`](windows/index.md#rustdoc-item-1119) — The editor's windows: surfaces, child windows, popouts and presentation.

### Structs
- [`CameraDrag`](struct.CameraDrag.md#rustdoc-item-504) — A camera navigation drag in flight.
- [`EditorApplication`](struct.EditorApplication.md#rustdoc-item-1150) — The `winit` application: one editor window, created on resume.
- [`GizmoDrag`](struct.GizmoDrag.md#rustdoc-item-532) — One gizmo drag in flight.
- [`PopoutWindow`](struct.PopoutWindow.md#rustdoc-item-498) — One popped-out tab's window: the window, its own
- [`PressPick`](struct.PressPick.md#rustdoc-item-526) — The pick a scene press asked: the view and press pixel it happened at,
- [`SceneView`](struct.SceneView.md#rustdoc-item-493) — One scene view: its child window and its renderer surface.
- [`SurfaceWindow`](struct.SurfaceWindow.md#rustdoc-item-495) — One view surface's window: a child of the main window when the platform
- [`WakeTimer`](struct.WakeTimer.md#rustdoc-item-1149) — The loop's timed wake: the moment the next frame is owed.

### Enums
- [`CommandAction`](enum.CommandAction.md#rustdoc-item-1429) — What a registry command id does in this executable.
- [`EventRoute`](enum.EventRoute.md#rustdoc-item-1334) — Where one translated window event belongs, by the focus rule.

### Functions
- [`camera_binding`](fn.camera_binding.md#rustdoc-item-1378) — The camera binding the scene surface draws through: the view's orbit
- [`camera_navigation_name`](fn.camera_navigation_name.md#rustdoc-item-1412) — The display name of a camera navigation gesture.
- [`command_action`](fn.command_action.md#rustdoc-item-1472) — The action a command id runs, if this executable implements it.
- [`create_overlay`](fn.create_overlay.md#rustdoc-item-1143) — Build the UI surface for the posture the editor starts in.
- [`create_window_overlay`](fn.create_window_overlay.md#rustdoc-item-1144) — Build the window-surface overlay, logging the refusal that stops it.
- [`draw_gizmo_guides`](fn.draw_gizmo_guides.md#rustdoc-item-1551) — Draw the drag guides: the axis constraint line through a single-axis
- [`editor_default_keybindings`](fn.editor_default_keybindings.md#rustdoc-item-857) — The bindings the editor starts with when there is no keybindings file.
- [`engine_asset_rows`](fn.engine_asset_rows.md#rustdoc-item-1554) — The store's own assets that no file in the project backs - a chain's
- [`gizmo_axis_name`](fn.gizmo_axis_name.md#rustdoc-item-1418) — The wire name of one axis, for logs and suite tokens.
- [`gizmo_basis`](fn.gizmo_basis.md#rustdoc-item-1421) — The frame the gizmo's axes are measured in.
- [`gizmo_drag_mode`](fn.gizmo_drag_mode.md#rustdoc-item-1549) — The tool mode a handle's drag edits: a plane square translates.
- [`gizmo_mode_name`](fn.gizmo_mode_name.md#rustdoc-item-1416) — The wire name of a tool mode, for logs and suite tokens.
- [`gizmo_plane_name`](fn.gizmo_plane_name.md#rustdoc-item-1550) — The display name of a plane handle, as the axis pair it spans.
- [`gizmo_space_name`](fn.gizmo_space_name.md#rustdoc-item-1417) — The wire name of a gizmo space.
- [`listing_shows_asset`](fn.listing_shows_asset.md#rustdoc-item-1556) — Whether the listing already shows the store asset `name` carries.
- [`native_path`](fn.native_path.md#rustdoc-item-1558) — Rebuild `target` from its components, so its text carries the platform's
- [`no_overlay_requested`](fn.no_overlay_requested.md#rustdoc-item-1142) — Whether [`NO_OVERLAY_ENV`] asks for the window-surface posture.
- [`notice_toast`](fn.notice_toast.md#rustdoc-item-1259) — The toast a host notice becomes: its level and its one line.
- [`offset_pointer`](fn.offset_pointer.md#rustdoc-item-1377) — Shift a pointer event the scene window reported into the main window's
- [`open_in_file_manager`](fn.open_in_file_manager.md#rustdoc-item-1557) — Ask the platform's file manager to show `target`: Windows and macOS select
- [`owe_frame`](fn.owe_frame.md#rustdoc-item-1219) — Ask for one frame now: clear the wake timer, request a redraw, and leave
- [`parse_gizmo_axis`](fn.parse_gizmo_axis.md#rustdoc-item-1419) — Parse a scripted axis name.
- [`paste_chord`](fn.paste_chord.md#rustdoc-item-1258) — Whether one frame's shell events carry a paste chord.
- [`problems_from_build_output`](fn.problems_from_build_output.md#rustdoc-item-1261) — The Problems rows a module's failed build output becomes.
- [`projection_terms`](fn.projection_terms.md#rustdoc-item-1422) — The tangent of half the vertical field of view, and the aspect ratio.
- [`quaternion_product`](fn.quaternion_product.md#rustdoc-item-1380) — The Hamilton product of two `[x, y, z, w]` quaternions.
- [`read_transform`](fn.read_transform.md#rustdoc-item-1420) — Read one entity's transform as plain arrays; `None` when the entity is
- [`reference_guid`](fn.reference_guid.md#rustdoc-item-1553) — The guid a settings reference holds, in either spelling: the value itself
- [`resolve_component_name`](fn.resolve_component_name.md#rustdoc-item-1415) — Resolve a component type name that may be abbreviated to its `::Name`
- [`resolve_display_entity`](fn.resolve_display_entity.md#rustdoc-item-1413) — Resolve an `NvG` display handle against the live entity table, so a
- [`route_event`](fn.route_event.md#rustdoc-item-1376) — The focus rule in one place: the game's window feeds the game, every
- [`run`](fn.run.md#rustdoc-item-1145) — Run the editor until the last window closes.
- [`scaled_view_rect`](fn.scaled_view_rect.md#rustdoc-item-1331) — A shell rectangle in logical points as the child window's own client
- [`scene_surface`](fn.scene_surface.md#rustdoc-item-1257) — The scene views' surface ids: view `n` draws through surface `n + 1`, so
- [`split_command`](fn.split_command.md#rustdoc-item-1471) — Split a command line into a program and its arguments.

### Type aliases
- [`FileStamp`](type.FileStamp.md#rustdoc-item-1474) — A state file's metadata: what a frame compares to decide whether the file

### Constants
- [`ASSET_REFRESH_FRAMES`](constant.ASSET_REFRESH_FRAMES.md#rustdoc-item-1138) — Frames between periodic asset-listing refreshes. A file command refreshes
- [`ASSET_ROWS_MAX`](constant.ASSET_ROWS_MAX.md#rustdoc-item-1140) — How many asset rows the listing keeps, before the frame adds the module
- [`EDITOR_FORMAT`](constant.EDITOR_FORMAT.md#rustdoc-item-1141) — The format the editor draws in. The overlay's swapchain and egui's renderer
- [`FPS_SMOOTHING`](constant.FPS_SMOOTHING.md#rustdoc-item-1129) — How much of each new frame goes into the displayed FPS. The rest is the
- [`FRAME_HEARTBEAT_FRAMES`](constant.FRAME_HEARTBEAT_FRAMES.md#rustdoc-item-1132) — Frames between the run's own frame-rate heartbeats, for the person reading
- [`FRAME_HEARTBEAT_SECONDS`](constant.FRAME_HEARTBEAT_SECONDS.md#rustdoc-item-1133) — The wall-clock backstop for the same heartbeat, so a slow posture still
- [`GIZMO_DASH`](constant.GIZMO_DASH.md#rustdoc-item-1137) — One dash (and one gap) of the translation displacement line, as a
- [`GIZMO_GUIDE_SPAN`](constant.GIZMO_GUIDE_SPAN.md#rustdoc-item-1135) — How far the axis constraint guide reaches on both sides of the gizmo, as
- [`GIZMO_HEARTBEAT_FRAMES`](constant.GIZMO_HEARTBEAT_FRAMES.md#rustdoc-item-1134) — Frames between gizmo anchor logs while the handle layout stands still.
- [`GIZMO_HIT_RADIUS_DEFAULT`](constant.GIZMO_HIT_RADIUS_DEFAULT.md#rustdoc-item-1136) — The default radius around a handle that the hover test uses, as a fraction
- [`GIZMO_PRESS_FRACTION`](constant.GIZMO_PRESS_FRACTION.md#rustdoc-item-1131) — Where along a straight handle the scripted grab presses it, as a
- [`GIZMO_SCREEN_FRACTION`](constant.GIZMO_SCREEN_FRACTION.md#rustdoc-item-1130) — The gizmo's handle length as a fraction of the camera distance. This keeps
- [`INITIAL_SCENE_SIZE`](constant.INITIAL_SCENE_SIZE.md#rustdoc-item-1125) — The scene view's initial size in logical pixels.
- [`INITIAL_WINDOW_SIZE`](constant.INITIAL_WINDOW_SIZE.md#rustdoc-item-1122) — The window's initial size in logical pixels.
- [`MINIMUM_WINDOW_SIZE`](constant.MINIMUM_WINDOW_SIZE.md#rustdoc-item-1124) — The window's minimum size in logical pixels: the dock's minimum layout
- [`NO_OVERLAY_ENV`](constant.NO_OVERLAY_ENV.md#rustdoc-item-1120) — The environment variable that forces the window-surface posture.
- [`POPOUT_INITIAL_SIZE`](constant.POPOUT_INITIAL_SIZE.md#rustdoc-item-1126) — A popped-out tab window's initial size in logical pixels: tall and narrow
- [`RECOVERY_AUTOSAVE_FRAMES`](constant.RECOVERY_AUTOSAVE_FRAMES.md#rustdoc-item-823) — Frames between checks of whether the recovery document's key changed, so
- [`SCENE_DEFAULT_MARGIN`](constant.SCENE_DEFAULT_MARGIN.md#rustdoc-item-1128)
- [`SCENE_DEFAULT_TOP_MARGIN`](constant.SCENE_DEFAULT_TOP_MARGIN.md#rustdoc-item-1127) — The scene view's rectangle before the shell reports its first scene rect:
- [`SHELL_MODULE_NAME`](constant.SHELL_MODULE_NAME.md#rustdoc-item-1121) — The shell module's crate name - the editor-only module's convention.
- [`STATE_FILE_POLL_FRAMES`](constant.STATE_FILE_POLL_FRAMES.md#rustdoc-item-846) — Frames between unconditional re-reads of the editor's state files - the
