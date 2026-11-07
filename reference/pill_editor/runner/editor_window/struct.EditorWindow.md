<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-625"></a>

# Struct `pill_editor::runner::editor_window::EditorWindow`

```rust
pub(in runner) struct EditorWindow;
```

Visibility: `{'restricted': {'parent': 483, 'path': '::runner'}}` · Source: `editor\pill_editor\src\runner\editor_window.rs:27`

The editor's window, its host, and everything the frame loop owns.

## Fields

<a id="rustdoc-item-484"></a>

### `window`

```rust
window: std::sync::Arc<winit::window::Window>
```

The main window: the shell's UI, and the game view's primary surface
only when the game window could not be created.

<a id="rustdoc-item-485"></a>

### `device`

```rust
device: wgpu::Device
```

The editor's own GPU device, which draws the UI; the project's
renderer keeps its own device inside the host.

<a id="rustdoc-item-486"></a>

### `queue`

```rust
queue: wgpu::Queue
```

The queue of the editor's device.

<a id="rustdoc-item-487"></a>

### `instance`

```rust
instance: wgpu::Instance
```

The editor's instance, kept for late overlay creation.

<a id="rustdoc-item-488"></a>

### `adapter`

```rust
adapter: wgpu::Adapter
```

The adapter the editor's device runs on, kept for late overlay
creation.

<a id="rustdoc-item-489"></a>

### `host`

```rust
host: pill_development_host::RenderingHost
```

The host: the project, its extensions and the shell module.

<a id="rustdoc-item-491"></a>

### `views`

```rust
views: Vec<Option<SceneView>>
```

The scene views' child windows, in view-index order: each has its own
camera and renderer surface. A slot is `None` when its window could not
be created. The vector grows when the dock reports a view it does not
hold yet.

<a id="rustdoc-item-494"></a>

### `game_surface`

```rust
game_surface: Option<SurfaceWindow>
```

The game viewport's window, when one could be created: it carries
the primary surface, so the project's renderer presents the game
view there. `None` leaves the primary on the main window.

<a id="rustdoc-item-496"></a>

### `popouts`

```rust
popouts: std::collections::BTreeMap<String, PopoutWindow>
```

One window per popped-out tab, keyed by the tab's wire name. Each has
its own swapchain and its own egui renderer, because the UI that draws
into it is a separate pass.

<a id="rustdoc-item-499"></a>

### `cameras`

```rust
cameras: Vec<pill_editor_core::camera::OrbitCamera>
```

The editor's cameras, one per scene viewport. Navigation moves only the
active viewport's camera, and a scene ray always projects through the
camera of the view it was cast in.

<a id="rustdoc-item-501"></a>

### `active_view`

```rust
active_view: usize
```

The viewport the last scene click activated; the gizmo and the
viewport commands read it.

<a id="rustdoc-item-502"></a>

### `left_down`

```rust
left_down: Vec<bool>
```

Whether the left mouse button is down in each scene view. A pick
answers a frame or two after the press, and a handle grab starts a
drag only while the button is still held.

<a id="rustdoc-item-503"></a>

### `camera_drag`

```rust
camera_drag: Option<CameraDrag>
```

The camera navigation drag in flight, when one is.

<a id="rustdoc-item-505"></a>

### `modifiers`

```rust
modifiers: pill_editor_core::camera::Modifiers
```

The keyboard modifiers held, as last reported by a modifiers event.

<a id="rustdoc-item-507"></a>

### `keymap`

```rust
keymap: pill_editor_core::commands::KeymapPreset
```

The keymap preset the preferences name. It decides which mouse chords
the viewport navigation uses.

<a id="rustdoc-item-509"></a>

### `camera_dirty`

```rust
camera_dirty: Vec<bool>
```

Whether each view's published camera binding is stale. Navigation marks
it, and the next frame publishes the surface camera again.

<a id="rustdoc-item-510"></a>

### `egui_renderer`

```rust
egui_renderer: egui_wgpu::Renderer
```

egui's own renderer on the editor's device.

<a id="rustdoc-item-511"></a>

### `overlay`

```rust
overlay: Option<crate::overlay::OverlaySurface>
```

The surface the UI is presented through: the composition overlay, or
the window surface when composition is refused. `None` until it is
created, and left `None` when neither posture works.

<a id="rustdoc-item-512"></a>

### `no_overlay`

```rust
no_overlay: bool
```

`PILL_EDITOR_NO_OVERLAY` asked for the window-surface posture, so the
composition overlay is never retried.

<a id="rustdoc-item-513"></a>

### `overlay_retry_frame`

```rust
overlay_retry_frame: u64
```

The frame index of the last overlay creation attempt, so the next
retry waits 120 frames from it.

<a id="rustdoc-item-514"></a>

### `fallback_context`

```rust
fallback_context: egui::Context
```

The editor's fallback context, used while no shell module is loaded.

<a id="rustdoc-item-516"></a>

### `reported_fallback`

```rust
reported_fallback: bool
```

Whether the fallback UI was reported already.

<a id="rustdoc-item-517"></a>

### `pending_events`

```rust
pending_events: Vec<pill_engine_core::InputEvent>
```

The window events not yet pushed into the engine's input.

<a id="rustdoc-item-519"></a>

### `shell_events`

```rust
shell_events: Vec<pill_engine_core::InputEvent>
```

The editor's own windows' events, not yet handed to the shell.

<a id="rustdoc-item-520"></a>

### `shell_cursor`

```rust
shell_cursor: Option<pill_core::math::Vector2f>
```

The pointer's last position over the editor's windows, in the main
window's client pixels. The shell input carries it, so a release that
arrives without a move still has a position.

<a id="rustdoc-item-522"></a>

### `notices`

```rust
notices: pill_editor_core::notices::EditorNotices
```

The notices the editor publishes for the shell: the toast events and
the Problems rows.

<a id="rustdoc-item-524"></a>

### `scene_cursor`

```rust
scene_cursor: Vec<Option<(f32, f32)>>
```

The last pointer position each scene window reported, in its own
client-area physical pixels. It is `None` until that window reports its
first move.

<a id="rustdoc-item-525"></a>

### `press_pick`

```rust
press_pick: Option<PressPick>
```

The scene left press waiting for its pick answer: the view, the press
position and the pick id. A handle answer starts a gizmo drag while
the button is still held; an entity answer moves the selection.

<a id="rustdoc-item-527"></a>

### `outlined_entities`

```rust
outlined_entities: Vec<pill_engine_core::Entity>
```

The entities the renderer's outline set currently names, so the world
resource is written once per selection change.

<a id="rustdoc-item-529"></a>

### `overlay_regions`

```rust
overlay_regions: Vec<pill_editor_core::boundary::ShellRect>
```

The overlay chips' rectangles the shell reported last frame, in
logical points. A click inside one belongs to the UI, not the scene.

<a id="rustdoc-item-531"></a>

### `gizmo_drag`

```rust
gizmo_drag: Option<GizmoDrag>
```

The gizmo drag in flight, when one is.

<a id="rustdoc-item-533"></a>

### `gizmo_geometry`

```rust
gizmo_geometry: pill_editor_core::gizmo::GizmoGeometry
```

The gizmo geometry drawn this frame. The hover test runs against these
exact handles, so the highlight cannot disagree with what is on screen.

<a id="rustdoc-item-535"></a>

### `hovered_handle`

```rust
hovered_handle: Option<u32>
```

The handle under the pointer, when one is.

<a id="rustdoc-item-536"></a>

### `gizmo_reference`

```rust
gizmo_reference: f32
```

How long the handles were when they were last built, in world units.
The hover test's radius and the drag guides' dash length follow it.

<a id="rustdoc-item-537"></a>

### `gizmo_hit_radius`

```rust
gizmo_hit_radius: f32
```

The handle hit radius as a fraction of the handle length, from the
preferences file: the hover test and the press share it.

<a id="rustdoc-item-538"></a>

### `render_previews`

```rust
render_previews: bool
```

Whether the preferences file asks for rendered asset previews.

<a id="rustdoc-item-539"></a>

### `preview_in_flight`

```rust
preview_in_flight: std::collections::HashMap<u64, String>
```

The preview images the renderer has not answered yet, keyed by the
image id the preview request returned.

<a id="rustdoc-item-541"></a>

### `gizmo_guides`

```rust
gizmo_guides: Option<bool>
```

Whether the drag guides were drawn last frame. The log line appears
when this changes, not every frame.

<a id="rustdoc-item-542"></a>

### `gizmo_logged`

```rust
gizmo_logged: Option<(pill_editor_core::gizmo::GizmoMode, pill_editor_core::gizmo::GizmoSpace, i32, i32)>
```

The last logged gizmo anchor header (mode, space, x and y). The log
line appears when it changes, and on the heartbeat.

<a id="rustdoc-item-545"></a>

### `synthetic_press_ids`

```rust
synthetic_press_ids: Vec<u64>
```

The pick ids a scripted gizmo grab requested. The first answer that
names a handle starts the drag; an answer that misses every handle
refuses it.

<a id="rustdoc-item-546"></a>

### `synthetic_gizmo_pending`

```rust
synthetic_gizmo_pending: Option<(f32, f32)>
```

The pixel delta a scripted grab applies once its pick answers.

<a id="rustdoc-item-547"></a>

### `synthetic_gizmo_hold`

```rust
synthetic_gizmo_hold: bool
```

Whether a scripted press keeps the drag open instead of finishing it.
The `gizmo press`, `gizmo move` and `gizmo release` commands then drive
the same drag a real mouse does, one command per frame.

<a id="rustdoc-item-548"></a>

### `synthetic_gizmo_press`

```rust
synthetic_gizmo_press: Option<(f32, f32)>
```

The press pixel of the scripted drag in flight, in its view's physical
pixels. Every scripted move measures its delta from here.

<a id="rustdoc-item-549"></a>

### `synthetic_gizmo_view`

```rust
synthetic_gizmo_view: Option<usize>
```

The view a scripted grab belongs to.

<a id="rustdoc-item-550"></a>

### `asset_entries`

```rust
asset_entries: Vec<pill_editor_core::editor_state::AssetListing>
```

The asset browser's rows. They refresh on a cadence and at once after
any file command, and the Assets tab draws them.

<a id="rustdoc-item-552"></a>

### `asset_walk`

```rust
asset_walk: Vec<pill_editor_core::editor_state::AssetListing>
```

The rows the last walk found, before the module roots' synthetic
folders are added. The next walk is compared against this to tell
whether the tree moved.

<a id="rustdoc-item-553"></a>

### `standalone_types`

```rust
standalone_types: Vec<pill_editor_core::editor_state::StandaloneTypeInfo>
```

The live standalone asset types the create dialog offers.

<a id="rustdoc-item-555"></a>

### `asset_listing_dirty`

```rust
asset_listing_dirty: bool
```

Whether a file command changed the tree. The next frame then refreshes
the listing at once instead of waiting for the cadence.

<a id="rustdoc-item-556"></a>

### `drop_preview`

```rust
drop_preview: Option<std::path::PathBuf>
```

The file an OS drag is carrying over the editor, if one is. It is the
subject of the drop preview.

<a id="rustdoc-item-558"></a>

### `recovered`

```rust
recovered: Option<pill_editor_core::layout::RecoveryDocument>
```

The recovery document a previous run left behind. It is applied on the
first frame where the shell's session exists.

<a id="rustdoc-item-560"></a>

### `last_recovery_key`

```rust
last_recovery_key: Option<String>
```

The state the last recovery write captured, so an unchanged editor
does not rewrite the document every frame.

<a id="rustdoc-item-561"></a>

### `ime_allowed`

```rust
ime_allowed: bool
```

Whether the main window currently takes IME input.

<a id="rustdoc-item-562"></a>

### `ime_rect`

```rust
ime_rect: Option<(f32, f32, f32, f32)>
```

The caret rectangle the IME candidate window follows, in logical
points.

<a id="rustdoc-item-563"></a>

### `asset_detail`

```rust
asset_detail: Option<pill_editor_core::editor_state::AssetDetail>
```

The selected asset's detail for the Inspector's asset section.

<a id="rustdoc-item-565"></a>

### `asset_detail_path`

```rust
asset_detail_path: Option<String>
```

The path `asset_detail` was captured for, so the capture follows the
selection without a disk read every frame.

<a id="rustdoc-item-566"></a>

### `preferences`

```rust
preferences: pill_editor_core::state_watch::StateFileWatch
```

The preferences file's text and stamp, read again when the file moves.
On a change, the live reader applies the history limits and the
snapping steps.

<a id="rustdoc-item-568"></a>

### `keybindings`

```rust
keybindings: pill_editor_core::state_watch::StateFileWatch
```

The keybindings file: a change re-applies the preset and the overrides
to the command registry.

<a id="rustdoc-item-569"></a>

### `keybindings_applied`

```rust
keybindings_applied: bool
```

Whether the keybindings watcher has applied once. The first pass
applies the editor's default preset even when there is no file, and
until it has applied, the file is re-read every frame.

<a id="rustdoc-item-570"></a>

### `log_buffer`

```rust
log_buffer: pill_core::telemetry::capture::LogBuffer
```

The telemetry capture ring the Console tab reads.

<a id="rustdoc-item-572"></a>

### `preferences_document`

```rust
preferences_document: serde_json::Map<String, serde_json::Value>
```

The parsed preferences document the snapshot's view and the scripted
dump build on.

<a id="rustdoc-item-575"></a>

### `theme`

```rust
theme: pill_ui_theme::Theme
```

The theme the editor's UI paints with: the code default, merged with
the user's file and the project's layer.

<a id="rustdoc-item-577"></a>

### `theme_generation`

```rust
theme_generation: u64
```

The generation of the theme the layers resolved to. It moves when a
resolution changes the theme, and the shell installs the new theme
only when it moves.

<a id="rustdoc-item-578"></a>

### `theme_layers`

```rust
theme_layers: Vec<pill_editor_core::style::ThemeLayerInfo>
```

The layers [`Self::theme`](#rustdoc-item-575) was merged from, in apply order.

<a id="rustdoc-item-580"></a>

### `theme_fonts`

```rust
theme_fonts: pill_editor_core::kit::style::ThemeFonts
```

The font bytes the layers resolved. The snapshot carries them beside
the theme, so the shell installs both together.

<a id="rustdoc-item-582"></a>

### `theme_watch`

```rust
theme_watch: ThemeWatch
```

What the last theme resolution read, so a poll only merges when a
layer moved.

<a id="rustdoc-item-584"></a>

### `fallback_theme_generation`

```rust
fallback_theme_generation: u64
```

The theme generation the fallback context paints with, so the no-shell
posture follows a theme change the same way the shell does.

<a id="rustdoc-item-585"></a>

### `gizmo_project`

```rust
gizmo_project: Option<String>
```

The project directory name the per-project preferences are keyed by.

<a id="rustdoc-item-586"></a>

### `gizmo_persisted`

```rust
gizmo_persisted: Option<pill_editor_core::gizmo::GizmoSettings>
```

The gizmo settings last written to the preferences file, so an
unchanged tool writes nothing.

<a id="rustdoc-item-588"></a>

### `focused`

```rust
focused: bool
```

Whether the main window currently has focus.

<a id="rustdoc-item-589"></a>

### `size`

```rust
size: (u32, u32)
```

The main window's client size in physical pixels.

<a id="rustdoc-item-590"></a>

### `scale_factor`

```rust
scale_factor: f32
```

The window's scale factor: how many physical pixels one logical point
covers.

<a id="rustdoc-item-591"></a>

### `frame_index`

```rust
frame_index: u64
```

The editor frames run since startup.

<a id="rustdoc-item-592"></a>

### `last_frame_time`

```rust
last_frame_time: Option<pill_core::platform::Instant>
```

When the last frame started, for the smoothed FPS.

<a id="rustdoc-item-594"></a>

### `last_heartbeat`

```rust
last_heartbeat: Option<pill_core::platform::Instant>
```

When the heartbeat last printed. It fires every 210 frames or every two
seconds, whichever comes first, so a slow run (the benchmark's debug
posture) still reports inside its window.

<a id="rustdoc-item-595"></a>

### `fps`

```rust
fps: f32
```

The smoothed frame rate, logged with the heartbeat.

<a id="rustdoc-item-596"></a>

### `started`

```rust
started: pill_core::platform::Instant
```

When the run started. The test deadline is measured from here.

<a id="rustdoc-item-597"></a>

### `claimed_pointer`

```rust
claimed_pointer: bool
```

Whether egui claimed the pointer in the last frame. A change is logged,
so a suite can see the routing decision.

<a id="rustdoc-item-598"></a>

### `claimed_keyboard`

```rust
claimed_keyboard: bool
```

Whether egui claimed the keyboard in the last frame.

<a id="rustdoc-item-599"></a>

### `last_cursor`

```rust
last_cursor: egui::CursorIcon
```

The cursor egui asked for in the last frame. A change is logged once
rather than every frame, which is how a suite sees a splitter's widened
grab band ask for its resize cursor.

<a id="rustdoc-item-601"></a>

### `test_channel`

```rust
test_channel: Option<crate::test_channel::TestChannel>
```

The scripted command channel, when the environment names one.

<a id="rustdoc-item-603"></a>

### `scripted_drag`

```rust
scripted_drag: Option<ScriptedDrag>
```

A scripted left-button drag in flight, when one is.

<a id="rustdoc-item-605"></a>

### `scene_title`

```rust
scene_title: String
```

The scene title last reported, so the log names each state the
document went through once instead of every frame.

<a id="rustdoc-item-606"></a>

### `test_seconds`

```rust
test_seconds: Option<f64>
```

Quit after this many seconds, when the environment asks for it.

<a id="rustdoc-item-607"></a>

### `quit`

```rust
quit: bool
```

A quit the scripted channel or the deadline asked for.

<a id="rustdoc-item-608"></a>

### `cadence`

```rust
cadence: pill_editor_core::cadence::Cadence
```

When the loop draws next.

<a id="rustdoc-item-610"></a>

### `demand`

```rust
demand: pill_editor_core::cadence::FrameDemand
```

What has asked for the next frame since the last one ran.

<a id="rustdoc-item-612"></a>

### `next_wake`

```rust
next_wake: pill_editor_core::cadence::FrameWake
```

The decision the last frame left for the loop.

<a id="rustdoc-item-614"></a>

### `repaint_after`

```rust
repaint_after: Option<std::time::Duration>
```

egui's own repaint request from the last shell pass.

<a id="rustdoc-item-615"></a>

### `last_demand`

```rust
last_demand: pill_editor_core::cadence::FrameDemand
```

What asked for the last frame, kept for the cadence dump.

<a id="rustdoc-item-616"></a>

### `badges`

```rust
badges: Vec<pill_editor_core::boundary::ShellBadge>
```

The entity badges this frame's scene views draw:
every visible view's entities, projected to logical points.

<a id="rustdoc-item-618"></a>

### `polling`

```rust
polling: bool
```

Whether the last decision left the loop polling. The
`[editor] frame idle` line appears once per transition.

<a id="rustdoc-item-619"></a>

### `idle_frame_millis_max`

```rust
idle_frame_millis_max: f32
```

The most expensive frame drawn while polling since the last heartbeat,
in milliseconds. It is the measured cost of an idle frame.

<a id="rustdoc-item-620"></a>

### `snapshot_changed_field`

```rust
snapshot_changed_field: Option<String>
```

The snapshot field whose change last asked for a frame. The log names a
churning reason once rather than every frame.

<a id="rustdoc-item-621"></a>

### `panel_markers`

```rust
panel_markers: std::collections::HashMap<String, std::sync::Arc<pill_editor_core::panels::ModuleLiveness>>
```

One liveness marker per module that registered a panel. The executable
holds the strong handle and drops it when the module reloads, which is
what makes the module's panels read "module not loaded". The module
itself only queues requests.

<a id="rustdoc-item-623"></a>

### `panel_requests`

```rust
panel_requests: Vec<pill_editor_core::panels::PanelRequest>
```

The newest request per panel id, kept so a panel can be registered
again after an unload without the module running.

## Associated functions and methods

<a id="rustdoc-item-626"></a>

### `apply_asset_previews`

```rust
pub(in runner) fn apply_asset_previews(self: &mut Self);
```

Moves the previews the renderer finished into the shell's textures, then
asks the renderer for one more.

Only one request runs at a time: the renderer draws one preview per
frame and reads it back between frames, so a grid of tiles fills in over
frames instead of stalling one. A tile is asked for only once - its
texture stays in the session until the listing changes - and the tiles
to ask for come from the grid's own list of what it drew this pass, so
scrolling only costs work for what is on screen.

<a id="rustdoc-item-627"></a>

### `refresh_asset_listing`

```rust
pub(in runner) fn refresh_asset_listing(self: &mut Self) -> bool;
```

Refreshes the asset browser's rows when the cadence is due or a file
command marked them dirty, and picks up the live standalone types the
create dialog offers.

Returns whether the listing changed, so the captured asset detail is
read again only when it may be stale.

<a id="rustdoc-item-628"></a>

### `refresh_asset_detail`

```rust
pub(in runner) fn refresh_asset_detail(self: &mut Self, listing_changed: bool);
```

Captures the selected asset's detail for the Inspector's asset section,
when the selection or the listing changed. Reading the settings document
is a disk read, so the capture follows the listing's cadence instead of
running every frame. A settings write forgets the captured path, so the
widgets see the document the command wrote.

<a id="rustdoc-item-629"></a>

### `asset_field_decorators`

```rust
pub(in runner) fn asset_field_decorators(self: &mut Self, asset_type_name: &str) -> Vec<pill_editor_core::editor_state::AssetFieldDecorator>;
```

Returns how the asset type's document fields draw, as the registry the
registering crate declared them.

A settings asset states that a value is a range or carries an
explanation where the document is defined, so the Inspector draws the
row the type asked for without knowing the type. A type that declares
none gets the rows an undecorated document gets.

<a id="rustdoc-item-631"></a>

### `asset_reference_fields`

```rust
pub(in runner) fn asset_reference_fields(self: &mut Self, asset_type_name: &str, settings_document: &Option<serde_json::Value>) -> Vec<AssetReferenceField>;
```

Returns the reference fields the asset's type declares, expanded against
its document: one entry per picker the Inspector draws, carrying the
guid the document holds now.

The registry names the fields and the type each one points at, such as
`shader`, `textures.*` and `passes.*`. A name ending in `.*` stands for a
group whose size only the document knows, so those are expanded here: a
material's texture slots are read from the shader it uses, and a chain's
entries from its own list.

Returns an empty list when the asset has no settings document, or when
no import registry holds a registered type.

<a id="rustdoc-item-633"></a>

### `asset_label`

```rust
pub(in runner) fn asset_label(self: &mut Self, guid: &Option<String>) -> Option<String>;
```

Returns what a reference row shows for the asset `guid` names: the
listing's path when the listing holds the file, otherwise the name the
store loaded it under, or `None` when neither knows the guid. A chain's
built-in passes are built in code, so their guid is the only thing a
file walk can know about them.

<a id="rustdoc-item-634"></a>

### `shader_texture_slots`

```rust
pub(in runner) fn shader_texture_slots(self: &mut Self, settings_document: &Option<serde_json::Value>) -> Vec<String>;
```

Returns the texture slots declared by the shader a material document
names.

A material's rows are the shader's slots: `RendererMaterial` builds its
textures bind group from the slots the shader declares, so the Inspector
asks the same source. The document names the shader by guid, the listing
turns that guid into a path, and the shader's metadata file at that path
declares the slots. An empty list means the document names no shader, or
the shader is not in the listing or cannot be read.

<a id="rustdoc-item-635"></a>

### `read_asset_settings`

```rust
pub(in runner) fn read_asset_settings(self: &mut Self, path: &str) -> Option<serde_json::Value>;
```

Returns the settings document an asset's editable rows build on, read
through the import registry - the same reader the `SetAssetSettings`
command uses. `None` when no registered type imports the path or its
document cannot be read.

<a id="rustdoc-item-636"></a>

### `preview_drop`

```rust
pub(in runner) fn preview_drop(self: &mut Self, path: &std::path::Path);
```

Shows what a drag from the OS is carrying: a toast naming the file and
the folder it would land in, so the person sees where a drop goes before
letting go. The toast is not repeated while the same path stays the
dragged one.

<a id="rustdoc-item-638"></a>

### `cancel_drop_preview`

```rust
pub(in runner) fn cancel_drop_preview(self: &mut Self);
```

Clears the drop preview when the drag has left every window.

<a id="rustdoc-item-639"></a>

### `drop_folder`

```rust
pub(in runner) fn drop_folder(self: &mut Self) -> String;
```

Returns the Assets folder a drop lands in, as a store path: the
session's open folder under `res`, or `res` itself for the root.

<a id="rustdoc-item-640"></a>

### `drop_files`

```rust
pub(in runner) fn drop_files(self: &mut Self, paths: Vec<std::path::PathBuf>);
```

Imports the paths a drop delivered into the open folder.

A folder is refused by name, because the import copies files and a
directory would need a recursive walk with its own refusals. The refusal
is a toast as well as a log line. Files become one recorded
`ImportFiles` step, so undo takes them off the disk again.

<a id="rustdoc-item-642"></a>

### `open`

```rust
pub(in runner) fn open(event_loop: &ActiveEventLoop, log_buffer: pill_core::telemetry::capture::LogBuffer) -> Result<EditorWindow, EditorError>;
```

Create the window, the editor's device, the host and the views.

#### Errors

Returns [`EditorError::WindowCreation`](../../frontend/enum.EditorError.md#rustdoc-item-265) when the main window cannot be
created, [`EditorError::AdapterRequest`](../../frontend/enum.EditorError.md#rustdoc-item-268) or
[`EditorError::DeviceRequest`](../../frontend/enum.EditorError.md#rustdoc-item-271) when the editor's GPU device cannot be
set up, and [`EditorError::Host`](../../frontend/enum.EditorError.md#rustdoc-item-259) or [`EditorError::Renderer`](../../frontend/enum.EditorError.md#rustdoc-item-262) when the
project, its modules and the renderer cannot start.

<a id="rustdoc-item-646"></a>

### `frame`

```rust
pub(in runner) fn frame(self: &mut Self, event_loop: &ActiveEventLoop) -> Result<bool, EditorError>;
```

Runs one editor frame, calling each phase method in order.

Returns whether the run should end. The event loop is passed in because
a scene view the dock opened this frame creates its child window
through it.

The order of the phases matters. The resources a pass reads are
published before [`Self::run_world`](#rustdoc-item-645), the answers that pass produced are
consumed after it, and presentation is last. A later phase never reads
what an earlier one computed in a local variable - it gets a field or a
return value instead.

#### Errors

Returns [`EditorError::Renderer`](../../frontend/enum.EditorError.md#rustdoc-item-262) when the world frame fails.

<a id="rustdoc-item-647"></a>

### `begin_frame`

```rust
pub(in runner) fn begin_frame(self: &mut Self, frame_started: Instant);
```

Samples this frame's rate and logs the heartbeat line when one is due.

<a id="rustdoc-item-648"></a>

### `publish_frame_inputs`

```rust
pub(in runner) fn publish_frame_inputs(self: &mut Self);
```

Publishes this frame's inputs, and the state the shell's pass reads.

The window events routed to the game become engine input, and the
cameras and badges the frame draws are published. The shell's own input
record is filled here, before the pass that reads it. The host's notices
and the open scene's title are reported here as well.

<a id="rustdoc-item-650"></a>

### `service_editor_requests`

```rust
pub(in runner) fn service_editor_requests(self: &mut Self);
```

Applies what the editor asked for since the last frame.

The queued [`EditorCommand`]s drain here - the frame boundary their
contract names. The watchers, the panels and the clipboard follow, all
before the snapshot, so the tabs draw this frame's state and not a
frame-old one.

<a id="rustdoc-item-651"></a>

### `publish_frame_resources`

```rust
pub(in runner) fn publish_frame_resources(self: &mut Self);
```

Publishes the resources the frame reads, before it runs.

<a id="rustdoc-item-645"></a>

### `run_world`

```rust
pub(in runner) fn run_world(self: &mut Self) -> Result<(), EditorError>;
```

Runs the world frame; the shell's egui pass runs inside it.

#### Errors

Returns [`EditorError::Renderer`](../../frontend/enum.EditorError.md#rustdoc-item-262) when the host's frame fails.

<a id="rustdoc-item-652"></a>

### `consume_frame_answers`

```rust
pub(in runner) fn consume_frame_answers(self: &mut Self);
```

Consumes the answers this frame's pass produced.

<a id="rustdoc-item-653"></a>

### `present_frame`

```rust
pub(in runner) fn present_frame(self: &mut Self, event_loop: &ActiveEventLoop);
```

Draws the shell frame through the overlay; no later phase draws.

<a id="rustdoc-item-654"></a>

### `end_frame`

```rust
pub(in runner) fn end_frame(self: &mut Self, frame_started: Instant);
```

Runs the scripted channel and the quit deadline, then decides the next
wake.

<a id="rustdoc-item-655"></a>

### `decide_next_wake`

```rust
pub(in runner) fn decide_next_wake(self: &mut Self, frame_millis: f32);
```

Decides when the loop draws next, from what asked for this frame.

`frame_millis` is how long this frame took, in milliseconds. The demand
is cleared here rather than at the start of the next frame. An event
that arrives between the two sets it again, and the loop already knows
to draw at once. egui's own repaint request counts as a reason too, so
whatever egui asked to redraw gets its frame.

A frame that leaves the loop polling logs `[editor] frame idle` once per
transition, with this frame's cost.

<a id="rustdoc-item-656"></a>

### `animating`

```rust
pub(in runner) fn animating(self: &Self) -> bool;
```

Whether something is moving, so the next frame is already owed.

A paused project stops animating, but a camera navigation and a
scripted drag still move something.

<a id="rustdoc-item-657"></a>

### `next_wake`

```rust
pub(in runner) fn next_wake(self: &Self) -> FrameWake;
```

The wake the last frame left for the loop.

<a id="rustdoc-item-659"></a>

### `advance_scripted_drag`

```rust
pub(in runner) fn advance_scripted_drag(self: &mut Self);
```

Advances a scripted drag by one frame: first the press, then the move,
then the release. The line it logs on the release tells a suite that
the drag is over and the pointer is free again.

<a id="rustdoc-item-660"></a>

### `dump_assets`

```rust
pub(in runner) fn dump_assets(self: &mut Self);
```

Logs the asset browser's rows: the count first, then one line per row
with its kind and flags. A suite reads the listing from these lines.

<a id="rustdoc-item-661"></a>

### `dump_browser`

```rust
pub(in runner) fn dump_browser(self: &mut Self);
```

Logs the Assets tab's open folder and the rows its grid lists there.
A suite can check tree and grid navigation from these lines, with no
pixel clicks.

<a id="rustdoc-item-662"></a>

### `dump_cadence`

```rust
pub(in runner) fn dump_cadence(self: &mut Self);
```

Logs the redraw counters, for the suites.

Two dumps separated by an idle stretch show which redraw mode the loop
is in. When the loop waits instead of presenting every frame, the frame
count grows at the idle poll's pace, not at the display's.

<a id="rustdoc-item-663"></a>

### `dump_console`

```rust
pub(in runner) fn dump_console(self: &mut Self);
```

Logs the Console tab's filters, the counts they leave and the first
visible row, for the suites.

<a id="rustdoc-item-664"></a>

### `dump_engine_assets`

```rust
pub(in runner) fn dump_engine_assets(self: &mut Self);
```

Logs the store's own assets: the ones no file backs. Every picker
offers them beside the listing's rows, so a suite can check what a
picker reaches beyond the project's `res`.

<a id="rustdoc-item-665"></a>

### `dump_entities`

```rust
pub(in runner) fn dump_entities(self: &mut Self);
```

Logs the entity list and each row's component names, for the suites. A
collection test finds its subject this way.

<a id="rustdoc-item-666"></a>

### `dump_field`

```rust
pub(in runner) fn dump_field(self: &mut Self, entity_text: &str, component: &str, field: &str);
```

Logs one component field's value, for the scripted
`dump field <entity> <component> <field>`. The entity is a display
handle, and the component name may be abbreviated to its `::Name`
suffix.

<a id="rustdoc-item-667"></a>

### `dump_grid`

```rust
pub(in runner) fn dump_grid(self: &mut Self);
```

Logs the scene grid's state: whether it is on, its cell size, and the
surfaces the renderer draws it on. This is the same resolution the
renderer makes from the same bindings.

<a id="rustdoc-item-668"></a>

### `dump_panels`

```rust
pub(in runner) fn dump_panels(self: &mut Self);
```

Logs the module panels, for the suites.

<a id="rustdoc-item-669"></a>

### `dump_preferences`

```rust
pub(in runner) fn dump_preferences(self: &mut Self);
```

Logs the preferences file's rows as the Preferences tab's view holds
them, then the project key and whether the file remembers it. This is
the tab's exact data, so a suite can check a save or a tool choice
without reading the tab's pixels.

<a id="rustdoc-item-670"></a>

### `dump_problems`

```rust
pub(in runner) fn dump_problems(self: &mut Self);
```

Log the Problems count and the first ten rows, for the suites.

<a id="rustdoc-item-671"></a>

### `dump_resources`

```rust
pub(in runner) fn dump_resources(self: &mut Self);
```

Logs the editable resources and their values, for the suites.

<a id="rustdoc-item-672"></a>

### `dump_scenes`

```rust
pub(in runner) fn dump_scenes(self: &mut Self);
```

Logs the placed rectangle of every scene view, in the main window's
physical pixels, for the suite's scripted clicks. The game view's
rectangle follows when the game window exists.

<a id="rustdoc-item-673"></a>

### `dump_selection`

```rust
pub(in runner) fn dump_selection(self: &mut Self);
```

Logs the selected entities, primary last, and the selected asset
(`dump selection`).

<a id="rustdoc-item-674"></a>

### `dump_standalone_types`

```rust
pub(in runner) fn dump_standalone_types(self: &mut Self);
```

Logs the live standalone types the create dialog offers. A suite reads
the first one to drive a create.

<a id="rustdoc-item-675"></a>

### `dump_stats`

```rust
pub(in runner) fn dump_stats(self: &mut Self);
```

Logs the Statistics tab's numbers, for the suites.

<a id="rustdoc-item-676"></a>

### `dump_systems`

```rust
pub(in runner) fn dump_systems(self: &mut Self);
```

Logs every registered system with the state the Systems tab draws, and
puts the engine's pause flag on the count line. This is the tab's exact
data, so a suite can check a toggle or a pause without reading the
tab's pixels.

<a id="rustdoc-item-677"></a>

### `dump_tabs`

```rust
pub(in runner) fn dump_tabs(self: &mut Self);
```

Logs the dock's layout for the suite's assertions: the surface count,
one line per leaf and one line per popped-out tab.

<a id="rustdoc-item-678"></a>

### `dump_theme`

```rust
pub(in runner) fn dump_theme(self: &mut Self);
```

Logs the theme the editor paints with: the layers it was merged from,
the generation that produced it, and the accent, panel and corner
values it resolved (`dump theme`).

These are the values the executable hands the shell, so a suite can
check a layer change without reading the tab's pixels.

<a id="rustdoc-item-679"></a>

### `dump_viewport`

```rust
pub(in runner) fn dump_viewport(self: &mut Self);
```

Logs the active viewport, the interaction state, the hovered handle and
every view's camera. These are the inputs to navigation and viewport
routing, and a suite can read them with no pixel clicks.

<a id="rustdoc-item-680"></a>

### `dump_windows`

```rust
pub(in runner) fn dump_windows(self: &mut Self);
```

Logs the panel windows on screen, for the suites.

<a id="rustdoc-item-681"></a>

### `inject_click`

```rust
pub(in runner) fn inject_click(self: &mut Self, x: f32, y: f32);
```

Injects a full left click at a point of the window's client area, in
its physical pixels.

The click enters through the same input path as a real one: the shell's
egui pass hit-tests it and routes it, so an overlay widget takes it,
while a point with no widget reaches the scene. Press and release
arrive in one input frame, which the engine reports as both edges, and
the egui bridge forwards them in order.

<a id="rustdoc-item-682"></a>

### `inject_key`

```rust
pub(in runner) fn inject_key(self: &mut Self, chord: &KeyChord);
```

Injects a keyboard chord through the same input path a real key enters:
the modifiers, the press, the typed text and the release, in the order
a window reports them.

The editor's own tool shortcuts read winit events, not the engine's
input stream, so the chord also runs the handler a real press runs.
Without that, `key w` would reach the shell but never switch the tool.

<a id="rustdoc-item-684"></a>

### `inject_rclick`

```rust
pub(in runner) fn inject_rclick(self: &mut Self, x: f32, y: f32);
```

Injects a full right click at a point of the window's client area,
through the same input path a real click enters.

The shell's egui pass hit-tests and routes it, so a context menu opens
over whatever is under the pointer. It never reaches the scene.

<a id="rustdoc-item-685"></a>

### `interaction_name`

```rust
pub(in runner) fn interaction_name(self: &Self) -> &'static str;
```

Returns the viewport interaction state's name. Only one owner holds the
pointer at a time, so the dump and the logs say who has it.

<a id="rustdoc-item-687"></a>

### `poll_test_channel`

```rust
pub(in runner) fn poll_test_channel(self: &mut Self);
```

Runs the scripted commands appended since the last frame.

The grammar lives in [`pill_editor_core::scripted`]. This parses each
line and dispatches it, and a line that does not parse is refused at
once, so a suite sees the failure instead of waiting out a timeout.

The commands a line queued are applied before the next line runs. An
append reaches the loop as one batch, so without that order an append
that edits and then reads would answer the value the edit replaced.

<a id="rustdoc-item-688"></a>

### `queue_input`

```rust
pub(in runner) fn queue_input(self: &mut Self, event: InputEvent);
```

Queues one scripted event for the engine and for the shell's own list.

A scripted click or key stands in for a user's, so the UI has to see it
the way a real event arrives, through the shell's list. The game still
receives what a user's event would.

<a id="rustdoc-item-689"></a>

### `run_scripted`

```rust
pub(in runner) fn run_scripted(self: &mut Self, line: &str, command: ScriptedCommand);
```

Runs one parsed scripted command.

No grammar is left here: each arm names its side effect, so the verbs
and their arguments have one home, the core parser.

<a id="rustdoc-item-691"></a>

### `scripted_asset_edit`

```rust
pub(in runner) fn scripted_asset_edit(self: &mut Self, edit: AssetEdit);
```

Queues one `edit asset` command as the recorded edit the Assets tab's
actions also queue.

<a id="rustdoc-item-693"></a>

### `scripted_asset_settings`

```rust
pub(in runner) fn scripted_asset_settings(self: &mut Self, path: &str, key: &str, value_text: &str) -> Result<(), String>;
```

Runs one scripted asset-settings edit (`edit asset-settings &lt;path&gt;
&lt;key&gt; &lt;value&gt;`): the same recorded `SetAssetSettings` batch the
Inspector's settings rows queue. The text is parsed against the leaf's
current JSON kind.

#### Errors

Returns a message when the key path is malformed, when no asset at
`path` has a settings document, or when the text is not a value of the
leaf's kind or the path cannot be reached in the document.

<a id="rustdoc-item-694"></a>

### `scripted_browser`

```rust
pub(in runner) fn scripted_browser(self: &mut Self, folder: &str);
```

Opens a folder in the Assets tab's browser (`root` opens the asset
root), through the shell's session state. It stands in for a click in
the folder tree.

<a id="rustdoc-item-695"></a>

### `scripted_camera`

```rust
pub(in runner) fn scripted_camera(self: &mut Self, navigation: CameraNavigation, delta_x: f32, delta_y: f32);
```

Applies a scripted camera gesture to the active viewport, through the
same math a drag uses.

<a id="rustdoc-item-697"></a>

### `scripted_clipboard`

```rust
pub(in runner) fn scripted_clipboard(self: &mut Self, action: ClipboardAction);
```

Runs one scripted clipboard command (`command editor.copy/cut/paste`).
It queues the same request the Edit menu's rows queue, so the test
channel drives the menu's own path.

<a id="rustdoc-item-699"></a>

### `scripted_component_edit`

```rust
pub(in runner) fn scripted_component_edit(self: &mut Self, entity_text: &str, component_text: &str, add: bool) -> Result<(), String>;
```

Runs `edit add <entity> <component>` or `edit remove &lt;entity&gt;
&lt;component&gt;` from the scripted channel. It queues the same recorded
component attach or detach the Inspector's menu items queue.

#### Errors

Returns a message when the display handle names no entity or the
component name resolves to no component.

<a id="rustdoc-item-700"></a>

### `scripted_console_filter`

```rust
pub(in runner) fn scripted_console_filter(self: &mut Self, level: &str);
```

Runs `console filter <level>`, which sets the lowest level the Console
tab shows. The next frame applies it to the history.

<a id="rustdoc-item-701"></a>

### `scripted_console_search`

```rust
pub(in runner) fn scripted_console_search(self: &mut Self, text: String);
```

Runs `console search <text>`, which sets the Console tab's substring
filter.

<a id="rustdoc-item-702"></a>

### `scripted_dialog_set_name`

```rust
pub(in runner) fn scripted_dialog_set_name(self: &mut Self, dialog_name: &str);
```

Sets the open dialog's name field, as typing into the window's text
field does.

<a id="rustdoc-item-703"></a>

### `scripted_dialog_submit`

```rust
pub(in runner) fn scripted_dialog_submit(self: &mut Self);
```

Runs the open dialog's submit button.

The dialog is taken out of the session, submitted, and put back,
because the submit also needs the pending command queue. The world
cannot lend two mutable resources at once.

<a id="rustdoc-item-704"></a>

### `scripted_edit_array`

```rust
pub(in runner) fn scripted_edit_array(self: &mut Self, entity_text: &str, component_text: &str, field: &str, index: usize, value_text: &str) -> Result<(), String>;
```

Runs one scripted array-element edit (`edit array &lt;entity&gt; &lt;component&gt;
&lt;field&gt; &lt;index&gt; &lt;value&gt;`). It queues the same recorded
`SetArrayElement` batch an inspector element widget queues.

#### Errors

Returns a message when the target does not resolve - no entity, no
component or no such field - when the index is outside the array, or
when the text does not parse against the element's kind.

<a id="rustdoc-item-705"></a>

### `scripted_edit_preference`

```rust
pub(in runner) fn scripted_edit_preference(self: &mut Self, key: &str, value: &str);
```

Runs one scripted preferences row (`edit preference <key> <value...>`):
the same `SetPreferences` batch the tab's Save button queues, holding
just that row. The value is everything after the key, so a text value
keeps its spaces.

<a id="rustdoc-item-706"></a>

### `scripted_edit_resource`

```rust
pub(in runner) fn scripted_edit_resource(self: &mut Self, resource: &str, field: &str, value_text: &str) -> Result<(), String>;
```

Runs `edit resource <resource> <field> <value>`, which queues one
recorded `SetResourceField`.

#### Errors

Returns a message when the resource has no such editable field, or when
the text does not parse against the field's current kind.

<a id="rustdoc-item-707"></a>

### `scripted_edit_selection`

```rust
pub(in runner) fn scripted_edit_selection(self: &mut Self, component_text: &str, field: &str, value_text: &str) -> Result<(), String>;
```

Runs one scripted whole-field edit over the whole selection
(`edit selection <component> <field> <value>`): the recorded batch an
Inspector row queues when several entities are selected.

The value is parsed against the primary entity's field. The write
reaches every selected entity whose detail carries the component, so
one recorded step covers the whole set and undoes in one step.

#### Errors

Returns a message when nothing is selected, when the target does not
resolve against the primary entity, or when the text does not name a
value for the field.

<a id="rustdoc-item-708"></a>

### `scripted_edit_set`

```rust
pub(in runner) fn scripted_edit_set(self: &mut Self, entity_text: &str, component_text: &str, field: &str, value_text: &str) -> Result<(), String>;
```

Runs one scripted whole-field edit (`edit set &lt;entity&gt; &lt;component&gt;
&lt;field&gt; &lt;value&gt;`): the same recorded field edit an inspector widget
queues, which is a `SetField` or its asset or entity reference variant.
The text is parsed against the field's current kind.

#### Errors

Returns a message when the target does not resolve, or when the text
does not name a value for the field.

<a id="rustdoc-item-709"></a>

### `scripted_edit_system`

```rust
pub(in runner) fn scripted_edit_system(self: &mut Self, index: usize, enabled: bool);
```

Runs `edit system <index> on|off` from the scripted channel: the same
recorded, undoable toggle the Systems tab's on/off buttons queue.

<a id="rustdoc-item-710"></a>

### `scripted_entity_create`

```rust
pub(in runner) fn scripted_entity_create(self: &mut Self);
```

Runs `editor.entity_create` from the scripted channel: the recorded
edit that creates one empty entity, as the Entities menu's New Entity
does.

<a id="rustdoc-item-711"></a>

### `scripted_entity_delete`

```rust
pub(in runner) fn scripted_entity_delete(self: &mut Self);
```

Runs `editor.entity_delete`: the selected entity's recorded delete, with
the destroy and the selection clear as one step. When the selection
holds no entity, it logs a note and does nothing.

<a id="rustdoc-item-712"></a>

### `scripted_gizmo_handle`

```rust
pub(in runner) fn scripted_gizmo_handle(self: &mut Self, handle_name: &str) -> Option<u32>;
```

Resolves a scripted handle name to its handle id. `x`/`y`/`z` name the
active tool's axes, and `xy`/`xz`/`yz` name the translation planes,
which only the translate tool offers.

<a id="rustdoc-item-713"></a>

### `scripted_gizmo_release`

```rust
pub(in runner) fn scripted_gizmo_release(self: &mut Self) -> Result<(), String>;
```

Finishes the drag a `gizmo press` started, like a mouse release.

#### Errors

Returns a message when no gizmo drag is in flight.

<a id="rustdoc-item-714"></a>

### `scripted_gizmo_tool`

```rust
pub(in runner) fn scripted_gizmo_tool(self: &mut Self, mode: Option<GizmoMode>, space: Option<GizmoSpace>, snap: Option<bool>);
```

Runs `editor.tool_*` from the scripted channel: it queues the same
`SetGizmoTool` edit the toolbox rows and the viewport menu queue. The
edit is applied but never recorded, because a tool choice is a control,
not an edit.

<a id="rustdoc-item-715"></a>

### `scripted_hover`

```rust
pub(in runner) fn scripted_hover(self: &mut Self, view: usize, x: f32, y: f32) -> Result<(), String>;
```

Moves one view's pointer and updates the hovered handle, standing in for
a real pointer move.

#### Errors

Returns a message when `view` is not a scene view index.

<a id="rustdoc-item-716"></a>

### `scripted_hover_ui`

```rust
pub(in runner) fn scripted_hover_ui(self: &mut Self, x: f32, y: f32);
```

Moves the shell's own pointer, as a real move arrives.

egui learns a pointer position only from an event, so a suite that wants
a tooltip or a resize cursor moves the pointer here. The stored cursor
keeps the position on later frames, just like a real move that has
stopped moving.

<a id="rustdoc-item-717"></a>

### `scripted_new_scene_view`

```rust
pub(in runner) fn scripted_new_scene_view(self: &mut Self) -> Result<(), String>;
```

Docks one more scene view, as the Window menu asks: the tab goes where
the menu would put it, and the executable's activation path brings it to
the front.

#### Errors

Returns a message when every scene view is already open. A shell that
has not attached yet only warns, and the same line works once it has.

<a id="rustdoc-item-718"></a>

### `scripted_palette`

```rust
pub(in runner) fn scripted_palette(self: &mut Self, request: PaletteRequest);
```

Runs `palette <query>`, `palette run` or `palette close` from the
scripted channel.

This touches only the palette's model state. The shell's pass draws the
popup and runs the selected row, so a scripted run and a click take the
same action path.

<a id="rustdoc-item-721"></a>

### `scripted_panel_field`

```rust
pub(in runner) fn scripted_panel_field(self: &mut Self, component: &str, field: &str, value: &str) -> Result<(), String>;
```

Queues the component-field write a module panel's own row would queue
(`panel field <component> <field> <value>`).

The row is a drag value the test channel cannot press, so the write goes
where the row puts it: into the shared `PanelCommands` queue.
[`Self::apply_panel_commands`](#rustdoc-item-720) applies that queue at the next frame
boundary. A test therefore drives the panel contract itself - the queue,
the recorded field edit and its undo step - and not a second write path.

#### Errors

Returns a message when the selection holds no primary entity.

<a id="rustdoc-item-722"></a>

### `scripted_panel_restore`

```rust
pub(in runner) fn scripted_panel_restore(self: &mut Self, source: &str);
```

Runs `panel restore <source>`, which binds that module's panels again.

The requests the executable kept are registered against a fresh liveness
marker, which is what a reload's re-registration does.

<a id="rustdoc-item-723"></a>

### `scripted_panel_unload`

```rust
pub(in runner) fn scripted_panel_unload(self: &mut Self, source: &str);
```

Runs `panel unload <source>`, which drops one module's liveness marker.

This leaves the registry in the state a module unload leaves it in,
because the marker is what an unload drops. The tab then reads
"module not loaded", and the panel's draw function is no longer handed
out.

<a id="rustdoc-item-724"></a>

### `scripted_panel_window`

```rust
pub(in runner) fn scripted_panel_window(self: &mut Self, slot: u16, id: &str);
```

Runs `panel window <slot> <id>`, which asks a panel to open one of its
windows.

The panel decides what the id means, so this drives the same code its
button does.

<a id="rustdoc-item-725"></a>

### `scripted_pause_toggle`

```rust
pub(in runner) fn scripted_pause_toggle(self: &mut Self);
```

Runs `editor.pause_toggle` from the scripted channel: it queues the flip
of the engine's pause flag, applied but never recorded. That is the same
walk the Systems tab's Pause/Resume button takes.

<a id="rustdoc-item-726"></a>

### `scripted_pick_entity`

```rust
pub(in runner) fn scripted_pick_entity(self: &mut Self, entity_text: &str, component_text: &str, field: &str) -> Result<(), String>;
```

Arms an entity reference row (`pick entity &lt;entity&gt; &lt;component&gt;
&lt;field&gt;`): the same `ArmEntityPick` the row's target button queues, so
the next scene press names the field's reference.

#### Errors

Returns a message when the target does not resolve, or when the field
does not hold an entity reference.

<a id="rustdoc-item-727"></a>

### `scripted_popout`

```rust
pub(in runner) fn scripted_popout(self: &mut Self, tab: EditorTab, redock: bool) -> Result<(), String>;
```

Runs `popout <tab>` or `popout <tab> redock`: the same dock move the tab
menu makes, driven from the scripted channel.

#### Errors

Returns a message for the game view, which is the primary surface's
window, and when the tab is already docked or already out.

<a id="rustdoc-item-729"></a>

### `scripted_problem_open`

```rust
pub(in runner) fn scripted_problem_open(self: &mut Self, index: usize);
```

Runs `problem open <index>`, the same action a click on the row takes.

The row opens at once, not at the next frame boundary. A suite that sends
this line waits for the editor it launched, and one frame of delay would
make the assertion race the launch. The body is the one the frame drain
calls, so the two paths differ only in when they run.

<a id="rustdoc-item-730"></a>

### `scripted_redo`

```rust
pub(in runner) fn scripted_redo(self: &mut Self);
```

Runs `editor.redo` from the scripted channel: the same walk, which
queues the next step's forward batch.

<a id="rustdoc-item-731"></a>

### `scripted_scene`

```rust
pub(in runner) fn scripted_scene(self: &mut Self, command: EditorCommand);
```

Runs `scene new`, `scene open` or `scene save` from the scripted channel:
the same command the File menu queues, applied at the next frame
boundary.

Document commands are not recorded, because they replace the world
instead of editing it, so the batch is queued unrecorded.

<a id="rustdoc-item-732"></a>

### `scripted_select_asset`

```rust
pub(in runner) fn scripted_select_asset(self: &mut Self, path: &str);
```

Sets the scripted asset selection: the same shared resource an Assets row
click writes. The line is logged so a suite can watch either path.

<a id="rustdoc-item-733"></a>

### `scripted_select_entity`

```rust
pub(in runner) fn scripted_select_entity(self: &mut Self, entity_text: &str) -> Result<(), String>;
```

Sets the scripted entity selection: the same recorded step the Entities
tab's row click queues, resolved against the live entity table.

A screen-space click cannot re-select an entity that a gizmo drag moved,
but the handle a pick logged still resolves here.

#### Errors

Returns a message when the display handle names no entity.

<a id="rustdoc-item-734"></a>

### `scripted_select_extend`

```rust
pub(in runner) fn scripted_select_extend(self: &mut Self, entity_text: &str, click: SelectionClick) -> Result<(), String>;
```

Extends the scripted selection (`select add` / `select range`): the set a
Ctrl- or Shift-click on the Entities list produces, recorded as the same
single `SetSelection` step the row click queues.

The click rule itself lives in the core's `EditorSelection::clicked`, so
the pointer path and this channel cannot disagree about what a click
means. What the modifiers do is the shell's `click_from_modifiers`.

#### Errors

Returns a message when the display handle names no entity.

<a id="rustdoc-item-736"></a>

### `scripted_select_resource`

```rust
pub(in runner) fn scripted_select_resource(self: &mut Self, resource_name: &str);
```

Runs `select resource <name>`: the recorded selection a resource row
makes.

<a id="rustdoc-item-737"></a>

### `scripted_step`

```rust
pub(in runner) fn scripted_step(self: &mut Self);
```

Runs `editor.step` from the scripted channel: it queues one single step,
applied but never recorded. That is the same walk the Step button takes.

<a id="rustdoc-item-738"></a>

### `scripted_toolbar`

```rust
pub(in runner) fn scripted_toolbar(self: &mut Self, action: ToolbarAction);
```

Runs one Assets toolbar button from the scripted channel, through the
same core helpers the buttons call, enablement rules included.

<a id="rustdoc-item-740"></a>

### `scripted_undo`

```rust
pub(in runner) fn scripted_undo(self: &mut Self);
```

Runs `editor.undo` from the scripted channel. The shared core walk pops
the newest step and queues its inverse, applied but never recorded, which
is the same walk the browser editor and the native editor take.

<a id="rustdoc-item-741"></a>

### `start_scripted_drag`

```rust
pub(in runner) fn start_scripted_drag(self: &mut Self, from: (f32, f32), to: (f32, f32)) -> Result<(), String>;
```

Queues a scripted left-button drag. The press, the move and the release
arrive one per frame through [`Self::advance_scripted_drag`](#rustdoc-item-659), which is
the shape egui's drag detection needs. The events enter through the same
input path a real drag enters, so a panel's drag handle reacts exactly as
it does for a user.

#### Errors

Returns a message when a scripted drag is already in flight.

<a id="rustdoc-item-743"></a>

### `publish_gizmo_geometry`

```rust
pub(in runner) fn publish_gizmo_geometry(self: &mut Self);
```

Publishes the gizmo handles for the selection: their hover and drag
states, the translation planes, the dynamic scale handles and the drag
guides.

The handles are the renderer contract's own primitives, with handle
ids set. The geometry that is drawn is also the geometry the hover
test reads, so a handle a drag grabs is always one that was on
screen. Each handle keeps a constant size on screen: its length in the
world follows the active view's camera distance. The debug drawing
holds only one frame's worth of gizmo geometry, so nothing has to be
cleared here.

<a id="rustdoc-item-744"></a>

### `gizmo_shortcut`

```rust
pub(in runner) fn gizmo_shortcut(self: &mut Self, event: &winit::event::KeyEvent);
```

Runs the command the active keymap binds to a pressed key; the tool
commands switch the gizmo's mode.

The command registry owns which key means what, so a preset or a
keybindings override changes the editor without a restart. A key with
no binding does nothing here, so the rest of the editor and the game
still receive it.

<a id="rustdoc-item-746"></a>

### `set_gizmo_tool`

```rust
pub(in runner) fn set_gizmo_tool(self: &mut Self, mode: GizmoMode);
```

Switches the gizmo's mode; the keyboard shortcuts and the scripted
`gizmo` verb call this.

<a id="rustdoc-item-747"></a>

### `gizmo_length`

```rust
pub(in runner) fn gizmo_length(self: &Self, view: usize, gizmo_origin: [f32; 3]) -> f32;
```

Returns the handle length, in world units, at `gizmo_origin` in
`view`: a constant fraction of that view's camera distance, clamped so
the handles neither become too small to grab nor cover the scene.

<a id="rustdoc-item-748"></a>

### `scene_pixel_size`

```rust
pub(in runner) fn scene_pixel_size(self: &Self, view: usize) -> Option<(f32, f32)>;
```

Returns one scene view's surface size in physical pixels, or `None`
when that view has no window.

<a id="rustdoc-item-749"></a>

### `scene_ray`

```rust
pub(in runner) fn scene_ray(self: &Self, view: usize, x: f32, y: f32) -> Option<([f32; 3], [f32; 3])>;
```

Returns the cursor ray through one physical pixel of one scene view's
surface, or `None` when the view has no window or the ray has no
length.

The ray is built from the editor camera's basis and the vertical field
of view of the camera in the renderer contract. Those are the same
numbers the renderer projects with, so a pick and a drag agree about
what a pixel looks at.

<a id="rustdoc-item-750"></a>

### `project_to_screen`

```rust
pub(in runner) fn project_to_screen(self: &Self, point: [f32; 3]) -> Option<(f32, f32)>;
```

Returns where a world point appears on the active scene view's
surface, in physical pixels. Returns `None` when the view has no
window or the point is at or behind the camera.

<a id="rustdoc-item-751"></a>

### `project_to_screen_in`

```rust
pub(in runner) fn project_to_screen_in(self: &Self, view: usize, point: [f32; 3]) -> Option<(f32, f32)>;
```

Returns where a world point appears on one scene view's surface, in
physical pixels. Returns `None` when the view has no window or the
point is at or behind the camera.

<a id="rustdoc-item-752"></a>

### `screen_projection`

```rust
pub(in runner) fn screen_projection(self: &Self, view: usize) -> Option<ScreenProjection>;
```

The camera and surface terms that place a world point on one scene
view, captured once so a caller projecting many points does not
recompute them per point. Returns `None` when the view has no window.

<a id="rustdoc-item-754"></a>

### `begin_gizmo_drag`

```rust
pub(in runner) fn begin_gizmo_drag(self: &mut Self, view: usize, handle: u32, press_x: f32, press_y: f32);
```

Begins a drag from a handle pick. The press pixel's ray records the
parameter or angle that every later move is measured against.

<a id="rustdoc-item-755"></a>

### `update_gizmo_drag`

```rust
pub(in runner) fn update_gizmo_drag(self: &mut Self, cursor_x: f32, cursor_y: f32);
```

Applies one move of the drag in flight. It reads the ray again, takes
the delta against the press, snaps it when the tool snaps, and writes
the value straight into the world. A move records no undo entry.

Every write is computed from the transform at the press, never from
the previous frame's value, so a snapped or clamped drag cannot add up
rounding errors. The drag also keeps the basis its handles were built
in, so a local-space drag follows the object's own axes.

<a id="rustdoc-item-756"></a>

### `write_translation`

```rust
pub(in runner) fn write_translation(self: &mut Self, entity: Entity, translation: [f32; 3]) -> bool;
```

Writes a translation straight into the world. Returns false when a
component refused the write.

<a id="rustdoc-item-757"></a>

### `write_rotation`

```rust
pub(in runner) fn write_rotation(self: &mut Self, entity: Entity, rotation: [f32; 4]) -> bool;
```

Writes a rotation straight into the world. Returns false when a
component refused the write.

<a id="rustdoc-item-758"></a>

### `write_scale`

```rust
pub(in runner) fn write_scale(self: &mut Self, entity: Entity, scale: [f32; 3]) -> bool;
```

Writes a scale straight into the world. Returns false when a component
refused the write.

<a id="rustdoc-item-759"></a>

### `note_gizmo_write`

```rust
pub(in runner) fn note_gizmo_write(self: &mut Self, transform_field: &'static str, component_values: &[f32]);
```

Notes what the drag in flight last wrote, so its release can record
one step for it. A restore has no drag in flight and notes nothing.

<a id="rustdoc-item-760"></a>

### `write_transform_field`

```rust
pub(in runner) fn write_transform_field(self: &mut Self, entity: Entity, transform_field: &str, component_values: &[f32]) -> bool;
```

Writes one transform field's components, in order, and returns false
when any of them was refused.

A refusal is logged here, where the entity, the field and the element
index are still known. Callers only see a `false`, which becomes
`ended without a move` and reads the same as a drag that never moved.

<a id="rustdoc-item-761"></a>

### `restore_transform`

```rust
pub(in runner) fn restore_transform(self: &mut Self, entity: Entity, transform: &TransformComponent) -> bool;
```

Writes the whole transform from before the press back, so a cancelled
drag leaves the object exactly where it started. Returns false when
any of the three writes was refused, so the cancel can say so instead
of reporting a clean restore.

<a id="rustdoc-item-763"></a>

### `record_gizmo_drag`

```rust
pub(in runner) fn record_gizmo_drag(self: &mut Self, drag: &GizmoDrag, mode: GizmoMode);
```

Turns the drag that just ended into one recorded step, so `Ctrl+Z`
after a drag undoes it the way it undoes every other edit.

The press's value is written back first. That write is required: the
recorded command takes its inverse from the world's current value,
which the drag has already overwritten with the final one. Without the
write, the step would record the final value as its starting point,
and the first undo would use up a history entry and change nothing.

<a id="rustdoc-item-764"></a>

### `end_gizmo_drag`

```rust
pub(in runner) fn end_gizmo_drag(self: &mut Self);
```

Ends the drag in flight and reports what it wrote. The guides and the
active highlight go with it, so the handles are drawn in their idle or
hovered look on the next frame.

<a id="rustdoc-item-765"></a>

### `cancel_gizmo_drag`

```rust
pub(in runner) fn cancel_gizmo_drag(self: &mut Self);
```

Cancels the drag in flight. The transform from before the press is
written back and the drag is dropped, so losing the focus leaves no
half-applied move (and no guides) behind.

<a id="rustdoc-item-766"></a>

### `cancel_interactions`

```rust
pub(in runner) fn cancel_interactions(self: &mut Self, reason: &str);
```

Drops every interaction in flight. The focus was lost, so no press or
release is coming to finish them.

<a id="rustdoc-item-767"></a>

### `start_synthetic_gizmo_drag`

```rust
pub(in runner) fn start_synthetic_gizmo_drag(self: &mut Self, handle: u32, delta: Option<(f32, f32)>);
```

Presses one handle of the active tool for the scripted channel. The
press pixel is the handle's grab point projected, so the pick that
answers it proves the same geometry the renderer draws.

<a id="rustdoc-item-768"></a>

### `gizmo_settings`

```rust
pub(in runner) fn gizmo_settings(self: &mut Self) -> GizmoSettings;
```

Returns the gizmo settings from the world, or the defaults when no
state exists.

<a id="rustdoc-item-770"></a>

### `resize`

```rust
pub(in runner) fn resize(self: &mut Self, width: u32, height: u32);
```

Handles a resize of the main window, in physical pixels.

<a id="rustdoc-item-771"></a>

### `view_origin`

```rust
pub(in runner) fn view_origin(self: &Self, view: usize) -> (f32, f32);
```

Returns one scene view's client-area origin, in the main window's
client coordinates and in physical pixels: the position its last
placement applied.

A resize never moves the window, so the origin stays valid even after
the layout clears the placement cache. A drag across a separator
therefore never makes the pointer jump.

<a id="rustdoc-item-772"></a>

### `resize_scene`

```rust
pub(in runner) fn resize_scene(self: &mut Self, view: usize, width: u32, height: u32);
```

Handles a resize of one scene view's window.

The view's surface reconfigures with the window; without that, the
scene would be drawn at the old size inside the tab. The placement cache
is cleared, so the next layout pass re-applies the dock's rectangle.

<a id="rustdoc-item-773"></a>

### `resize_game`

```rust
pub(in runner) fn resize_game(self: &mut Self, width: u32, height: u32);
```

Handles a resize of the game window.

The primary surface reconfigures with its window, as the scene view
surfaces do; without that, the project would be drawn at the old size
inside the Game tab. The placement cache is cleared, so the next layout
pass re-applies the dock's rectangle.

<a id="rustdoc-item-774"></a>

### `game_origin`

```rust
pub(in runner) fn game_origin(self: &Self) -> (f32, f32);
```

Returns the game window's client-area origin, in the main window's
client coordinates and in physical pixels: the same bridge the scene
views use for pointer positions.

<a id="rustdoc-item-775"></a>

### `ensure_scene_views`

```rust
pub(in runner) fn ensure_scene_views(self: &mut Self, dock_view_count: usize, event_loop: &ActiveEventLoop);
```

Opens the scene views the dock reports that this editor does not hold
yet.

The shell reports one slot per view index the dock carries, so a view
the person just added is the list's last slot. Each new view gets its
own window, surface and camera here, the same three the startup views
get, and starts hidden: the placement that follows this frame shows it.

<a id="rustdoc-item-776"></a>

### `place_views`

```rust
pub(in runner) fn place_views(self: &mut Self);
```

Places the first scene view at the dock's default layout's center
inside the client area.

It runs at startup and on a resize, before the shell's own scene
rectangles are applied. The other views stay hidden until their tabs
show.

<a id="rustdoc-item-777"></a>

### `pop_view_window`

```rust
pub(in runner) fn pop_view_window(self: &mut Self, event_loop: &ActiveEventLoop, view: usize, x: i32, y: i32, width: u32, height: u32);
```

Gives a popped-out scene view its top-level window and places it at the
pop-out's screen position.

The first call replaces the view's child window with a top-level one,
because a child window can never reach another monitor. Later calls
only follow the pop-out as it moves.

<a id="rustdoc-item-778"></a>

### `ensure_view_docked`

```rust
pub(in runner) fn ensure_view_docked(self: &mut Self, event_loop: &ActiveEventLoop, view: usize);
```

Gives a scene view its child window back when its tab returns to the
dock.

A view the platform forced onto a detached window is left alone: that
window is the view's dock window, not a pop-out's.

<a id="rustdoc-item-779"></a>

### `place_view_rect`

```rust
pub(in runner) fn place_view_rect(self: &mut Self, view: usize, rect: ShellRect);
```

Places one scene view at the dock's scene rectangle, converted from
logical points to the client area's physical pixels.

<a id="rustdoc-item-780"></a>

### `place_game_rect`

```rust
pub(in runner) fn place_game_rect(self: &mut Self, rect: ShellRect);
```

Places the game window at the dock's game rectangle, converted from
logical points to the client area's physical pixels.

<a id="rustdoc-item-781"></a>

### `view_rect_pixels`

```rust
pub(in runner) fn view_rect_pixels(self: &Self, rect: ShellRect) -> (i32, i32, u32, u32);
```

Converts a dock rectangle from logical points to the client area's
physical pixels, clamped inside the client area.

The dock's rectangle can overshoot the window while a split is being
dragged.

<a id="rustdoc-item-782"></a>

### `hide_view`

```rust
pub(in runner) fn hide_view(self: &mut Self, view: usize);
```

Hides one scene view's window because its tab is not shown this pass:
another tab of its group is active, or the tab was closed.

<a id="rustdoc-item-783"></a>

### `hide_game`

```rust
pub(in runner) fn hide_game(self: &mut Self);
```

Hides the game window because its tab is not shown this pass, so no
child window can paint over the tab that is.

<a id="rustdoc-item-784"></a>

### `scene_window_event`

```rust
pub(in runner) fn scene_window_event(self: &mut Self, view: usize, event: &WindowEvent);
```

Routes one scene window's event: activates the viewport on a press that
is not over the UI's chips, starts camera navigation on its chord,
starts a gizmo drag or asks for a pick on a left press, feeds a drag in
flight its moves, and ends whatever the release ends.

The viewport that owns an interaction keeps it: winit reports a drag's
moves to the window whose press started it, even when the pointer
leaves that window, so a gizmo drag or a navigation that crosses the
viewport's edge carries on and no other viewport takes the pointer
mid-drag.

<a id="rustdoc-item-786"></a>

### `activate_view`

```rust
pub(in runner) fn activate_view(self: &mut Self, view: usize);
```

Makes `view` the active viewport: the one that camera navigation, the
gizmo's handle length and the scripted viewport commands address.

Only a press inside a scene view reaches here, so a click on the
editor's own UI never activates a viewport.

<a id="rustdoc-item-787"></a>

### `present_popouts`

```rust
pub(in runner) fn present_popouts(self: &mut Self, event_loop: &ActiveEventLoop, frames: &mut [pill_editor_core::boundary::PopoutFrame]);
```

Reconciles the popped-out windows with the shell's frames and paints
them.

The shell reports one frame per popped-out tab, so those frames are the
windows: a tab that appears gets a window, a tab that disappears has its
window closed, and every other frame is painted into its own window
through its own renderer. The pass itself already ran in the shell, so
nothing here reads egui's context.

<a id="rustdoc-item-789"></a>

### `open_popout`

```rust
pub(in runner) fn open_popout(self: &mut Self, event_loop: &ActiveEventLoop, tab: &str, title: &str);
```

Opens one popped-out tab's window, a plain top-level window with its own
swapchain and its own egui renderer.

<a id="rustdoc-item-790"></a>

### `publish_popout_geometry`

```rust
pub(in runner) fn publish_popout_geometry(self: &mut Self);
```

Refreshes each popped-out window's input record with its geometry, its
focus and this frame's rate. The record's events were appended earlier,
as the window reported them.

<a id="rustdoc-item-791"></a>

### `close_popout`

```rust
pub(in runner) fn close_popout(self: &mut Self, tab: &str);
```

Closes `tab`'s window and redocks its tab. Closing a window is a
redock, so the tab is never lost that way.

<a id="rustdoc-item-792"></a>

### `popout_event`

```rust
pub(in runner) fn popout_event(self: &mut Self, tab: &str, event: InputEvent);
```

Appends one event to `tab`'s input record, and keeps the window's own
cursor position alongside it.

<a id="rustdoc-item-793"></a>

### `clear_popout_events`

```rust
pub(in runner) fn clear_popout_events(self: &mut Self);
```

Clears every popped-out window's event list once the frame that read it
has been presented, so no event is replayed into a second pass.

<a id="rustdoc-item-794"></a>

### `present_ui`

```rust
pub(in runner) fn present_ui(self: &mut Self, event_loop: &ActiveEventLoop);
```

Draws one editor frame: the shell's frame through the overlay, or the
runner's own fallback UI while no shell module is loaded.

With no overlay at all, only the popped-out windows are painted; the
main window's frame is skipped, and creating the composition overlay is
retried.

<a id="rustdoc-item-795"></a>

### `fallback_frame`

```rust
pub(in runner) fn fallback_frame(self: &mut Self) -> EguiShellFrame;
```

Builds the safe-mode panel's frame, used while no shell module is
loaded: the build errors that stopped it, each with its `file:line`,
and a Retry button that asks the host to rebuild the module. The scene
keeps rendering behind the panel, because the editor's own frame is
untouched.

<a id="rustdoc-item-797"></a>

### `retry_overlay`

```rust
pub(in runner) fn retry_overlay(self: &mut Self);
```

Tries to create the composition overlay again, at most once every 120
frames.

The window-surface posture is never retried: either
`PILL_EDITOR_NO_OVERLAY` asked for it, or it was already taken as the
fallback. The composition overlay is the posture that failed, so it is
the one worth another attempt.

<a id="rustdoc-item-798"></a>

### `retry_shell_module`

```rust
pub(in runner) fn retry_shell_module(self: &mut Self);
```

Asks the host to rebuild the shell module and logs the outcome.

`retry_extension` runs the same load a first start would, or asks a
loaded generation to rebuild as if its sources had been saved, so a fix
made while the editor is in safe mode takes effect without a restart.

<a id="rustdoc-item-799"></a>

### `apply_cursor_icon`

```rust
pub(in runner) fn apply_cursor_icon(self: &mut Self, icon: egui::CursorIcon);
```

Sets the cursor shape egui asked for, when it maps onto one of winit's
shapes; any other icon leaves the cursor as it is.

The resize shapes matter as much as the pointing hand: the dock asks
for one over a splitter, and without it the wider grab area around the
splitter is invisible to the person dragging it.

<a id="rustdoc-item-800"></a>

### `apply_ime`

```rust
pub(in runner) fn apply_ime(self: &mut Self, allowed: bool, rect: Option<pill_editor_core::boundary::ShellRect>);
```

Applies the shell's IME state to the main window.

egui decides when a text field wants the input method, and where its
caret is. This executable owns the window, so it is the only place that
can pass those decisions to the platform. The rectangle is in logical
points, the unit the window's IME cursor area takes.

<a id="rustdoc-item-802"></a>

### `navigation_for`

```rust
pub(in runner) fn navigation_for(self: &Self, button: CameraButton) -> Option<CameraNavigation>;
```

The navigation gesture a press means right now, if any: no gesture
while a gizmo drag or another navigation owns the pointer.

<a id="rustdoc-item-804"></a>

### `press_scene`

```rust
pub(in runner) fn press_scene(self: &mut Self, view: usize, x: f32, y: f32);
```

Handle a left press: a handle under the pointer starts its drag in this
same press, and only a miss queues the object pick.

The CPU hit test answers first because the pick's answer arrives a frame
later. Without it, a handle highlighted under the pointer could lose the
press to the pick, which would clear the selection. The hover and the
press read the same hitbox, so the highlight and the grab always agree.

<a id="rustdoc-item-805"></a>

### `release_scene`

```rust
pub(in runner) fn release_scene(self: &mut Self, view: usize);
```

A left release in `view`: it ends the gizmo drag a press started -
the drag applied its moves all along - and does nothing when the
press became a selection.

<a id="rustdoc-item-806"></a>

### `begin_camera_navigation`

```rust
pub(in runner) fn begin_camera_navigation(self: &mut Self, view: usize, navigation: CameraNavigation, start: (f32, f32));
```

Begin a camera navigation: the press records the anchor pixel every
later move measures its delta against.

<a id="rustdoc-item-807"></a>

### `update_camera_navigation`

```rust
pub(in runner) fn update_camera_navigation(self: &mut Self, point: (f32, f32));
```

Apply one navigation move. The pixel delta since the last move is
applied through the gesture's own limits.

<a id="rustdoc-item-808"></a>

### `apply_camera_gesture`

```rust
pub(in runner) fn apply_camera_gesture(self: &mut Self, view: usize, navigation: CameraNavigation, delta_x: f32, delta_y: f32);
```

Move one view's camera by a gesture's pixel delta. The mouse drags and
the scripted channel both call this.

<a id="rustdoc-item-809"></a>

### `end_camera_navigation`

```rust
pub(in runner) fn end_camera_navigation(self: &mut Self);
```

End the navigation in flight, logging the gesture that finished.

<a id="rustdoc-item-810"></a>

### `zoom_camera`

```rust
pub(in runner) fn zoom_camera(self: &mut Self, view: usize, lines: f32);
```

Zoom one view's camera by a wheel's line count.

<a id="rustdoc-item-811"></a>

### `update_hover`

```rust
pub(in runner) fn update_hover(self: &mut Self, view: usize, point: (f32, f32));
```

Update the hovered handle from the pointer's ray, tested against the
handles the last frame drew. The radius follows the handle length, so it
matches the drawn line rather than a fixed world distance, and the
preference scales it.

<a id="rustdoc-item-812"></a>

### `handle_at`

```rust
pub(in runner) fn handle_at(self: &Self, view: usize, x: f32, y: f32) -> Option<u32>;
```

The handle under one pixel of one view, by the CPU ray test.

The hover highlight and the press both answer through this one call,
so a handle that lights up under the pointer is a handle the press
grabs.

<a id="rustdoc-item-813"></a>

### `set_hovered_handle`

```rust
pub(in runner) fn set_hovered_handle(self: &mut Self, view: usize, handle: Option<u32>);
```

Record the hovered handle, logging the change once - the suite's
window into the feedback states.

<a id="rustdoc-item-814"></a>

### `publish_cameras`

```rust
pub(in runner) fn publish_cameras(self: &mut Self);
```

Publish every view's camera binding whose camera moved: the renderer
reads the binding, so a navigation shows on the next frame.

<a id="rustdoc-item-815"></a>

### `scene_point_is_ui`

```rust
pub(in runner) fn scene_point_is_ui(self: &Self, view: usize) -> bool;
```

Whether a scene view's pointer is over one of the overlay's chips. The
pointer's child-local pixels are mapped into the main window's logical
points, because that is where the shell reported the chips.

<a id="rustdoc-item-816"></a>

### `scene_view_at`

```rust
pub(in runner) fn scene_view_at(self: &Self, x: f32, y: f32) -> Option<usize>;
```

The scene view whose window holds a main-window physical point, if
one does: a scripted click inside it is a scene click.

<a id="rustdoc-item-818"></a>

### `queue_scene_pick_at`

```rust
pub(in runner) fn queue_scene_pick_at(self: &mut Self, view: usize, x: u32, y: u32) -> Option<u64>;
```

Queue one pick at an explicit surface pixel and return its id. The
answer arrives in [`Self::drain_scene_picks`](#rustdoc-item-817). This is the half the
click pick and the scripted gizmo grab share.

<a id="rustdoc-item-817"></a>

### `drain_scene_picks`

```rust
pub(in runner) fn drain_scene_picks(self: &mut Self);
```

Apply the answers to scene picks. An entity moves the shared selection
to it, empty space clears the selection, and a handle starts a gizmo
drag. The next publish derives the outline and the handles from the new
selection.

<a id="rustdoc-item-820"></a>

### `publish_badges`

```rust
pub(in runner) fn publish_badges(self: &mut Self);
```

Project every visible entity into every visible scene view, for the
shell's badges.

Only this side can say where an entity appears on screen, because it
owns the views' cameras and the renderer's projection terms. Each view
is capped at [`pill_editor_core::boundary::BADGES_PER_VIEW_MAX`], and an
entity behind the camera or outside the viewport is left out, so the
overlay stays readable instead of covering the scene with chips.

<a id="rustdoc-item-821"></a>

### `entity_translations`

```rust
pub(in runner) fn entity_translations(self: &mut Self) -> Vec<(Entity, [f32; 3])>;
```

Every live entity that carries a transform, with its world translation,
in slot order.

The transform's component id and the `translation` field's place in its
row are resolved once, and each entity's three floats are then read
straight from its row bytes. That keeps the walk cheap for a world of
thousands of entities, which the editor repeats every frame. The field
layout is the one the generic field path reads, so the executable still
needs no query of its own outside a frame. A transform whose
`translation` is not three `f32`s yields no translations at all.

<a id="rustdoc-item-822"></a>

### `apply_recovered_state`

```rust
pub(in runner) fn apply_recovered_state(self: &mut Self);
```

Apply the recovery document a previous run left behind.

The document is applied on the first frame where the shell's session
exists, because the dock lives in that session. The shell builds its
own default or saved dock when it loads, and the recovered arrangement
replaces it before that frame draws. The selection is restored from
display handles looked up in the live entity table: a recovered run
spawns the same entities, and a run that does not simply selects less.

<a id="rustdoc-item-824"></a>

### `autosave_recovery`

```rust
pub(in runner) fn autosave_recovery(self: &mut Self);
```

Write the recovery document when the key built from the arrangement and
the selection changed. The key is compared on a slow cadence, so a
change reaches the file within [`RECOVERY_AUTOSAVE_FRAMES`](../constant.RECOVERY_AUTOSAVE_FRAMES.md#rustdoc-item-823) frames.

<a id="rustdoc-item-825"></a>

### `publish_selection_outline`

```rust
pub(in runner) fn publish_selection_outline(self: &mut Self);
```

Publish the shared selection as the renderer's outline set: the orange
outline drawn around every selected entity, whether the Entities tab or
a scene pick moved the selection. One resource write per change, before
the frame that draws it.

<a id="rustdoc-item-826"></a>

### `run_bound_command`

```rust
pub(in runner) fn run_bound_command(self: &mut Self, key: KeyCode, modifiers: EngineModifiers) -> bool;
```

Run the command the active keymap binds to a chord, if any, and report
whether a command was bound.

The registry is the only source of chords, so a preset or a keybindings
override changes what a key does without a restart and without a second
table in this executable. A chord bound to a command this executable
does not implement is found, logs `[editor] shortcut has no action
yet`, and does nothing.

<a id="rustdoc-item-829"></a>

### `visible_scene_view`

```rust
pub(in runner) fn visible_scene_view(self: &Self) -> Option<usize>;
```

The first visible scene view, the scripted drag's default target.

<a id="rustdoc-item-830"></a>

### `resolve_edit_target`

```rust
pub(in runner) fn resolve_edit_target(self: &mut Self, entity_text: &str, component_text: &str, field: &str) -> Result<(Entity, String, FieldValue), String>;
```

Resolve a scripted edit's target: the entity, the registered
component name and the field's current value.

#### Errors

Returns a message naming the entity, the component or the field that
could not be found, which the scripted channel reports back.

<a id="rustdoc-item-832"></a>

### `queue_settings_value`

```rust
pub(in runner) fn queue_settings_value(self: &mut Self, path: &str, key: &str, patched: serde_json::Value);
```

Queue the recorded step that writes `patched` over `path`'s settings.

<a id="rustdoc-item-833"></a>

### `pick_reference`

```rust
pub(in runner) fn pick_reference(self: &mut Self, path: &str, key: &str, guid: &str);
```

Queue the edit a picker row's choice makes: the chosen guid, written in
the shape the field's document uses.

The row decides the shape - the object form for a named reference, a
bare guid for a texture slot - so a scripted pick and a click cannot
write different documents.

<a id="rustdoc-item-835"></a>

### `sync_panels`

```rust
pub(in runner) fn sync_panels(self: &mut Self);
```

Apply the module panels' registration requests.

A request names a draw function that lives in the requesting module's
image, so the executable ties it to that module's liveness marker. The
registry hands the function out only while the marker is alive, and a
reload drops the marker (see [`Self::fold_host_notices`](#rustdoc-item-834)).

<a id="rustdoc-item-836"></a>

### `apply_clipboard`

```rust
pub(in runner) fn apply_clipboard(self: &mut Self);
```

Carry out the clipboard request the shell queued.

A write puts the payload on the OS clipboard. A read decodes what it
carries and applies the paste as one recorded step. Anything that could
not be pasted - an unregistered component, a field this build no longer
carries - is named in a notice, because a paste that quietly dropped
part of an entity is worse than one that says what it left out.

<a id="rustdoc-item-837"></a>

### `apply_paste`

```rust
pub(in runner) fn apply_paste(self: &mut Self);
```

Read the OS clipboard and apply what it carries, as one recorded step.

<a id="rustdoc-item-720"></a>

### `apply_panel_commands`

```rust
pub(in runner) fn apply_panel_commands(self: &mut Self);
```

Apply what the module panels asked for.

The same contract `EditorCommand` follows: a panel queues a request, the
executable applies it at the frame boundary, so a panel from a module
never leaves the world half-edited.

<a id="rustdoc-item-838"></a>

### `panel_field_write`

```rust
pub(in runner) fn panel_field_write(self: &mut Self, entity: Entity, component: &str, field: &str, value_text: &str);
```

Write one component field from a panel, recorded.

<a id="rustdoc-item-839"></a>

### `panel_element_write`

```rust
pub(in runner) fn panel_element_write(self: &mut Self, entity: Entity, component: &str, field: &str, index: usize, value_text: &str);
```

Write one array element from a panel, recorded.

<a id="rustdoc-item-840"></a>

### `publish_snapshot`

```rust
pub(in runner) fn publish_snapshot(self: &mut Self);
```

Capture the editor snapshot the shell's tabs read, when the shell loaded
and registered one.

The asset listing refreshes on its slow cadence, or at once after a file
command, because reading it touches the filesystem. The detail tier (the
Inspector's data) is rebuilt for the current selection every frame: that
is one entity's components, cheap to read, and it keeps the tab's values
current.

<a id="rustdoc-item-842"></a>

### `apply_pending_commands`

```rust
pub(in runner) fn apply_pending_commands(self: &mut Self);
```

Apply the batches the shell's asset actions and the scripted channel
queued, then publish what the frame needs to follow them.

The batches themselves are applied by the shared core drain
([`pill_editor_core::drain::apply_pending`]), so the browser editor runs
exactly this contract. The parts only this executable can do are the
asset listing refresh a file batch asks for and the reveal and focus
requests.

<a id="rustdoc-item-843"></a>

### `apply_focuses`

```rust
pub(in runner) fn apply_focuses(self: &mut Self);
```

Carry out every queued focus request: the selection moves to the asset
and the Assets panel opens the folder that holds it.

The shell cannot do either. The selection is a world resource, and the
open folder lives in the session the shell only borrows for one pass, so
the request comes here. Handling it in one place also produces the one
log line a suite can read.

<a id="rustdoc-item-844"></a>

### `apply_reveals`

```rust
pub(in runner) fn apply_reveals(self: &mut Self);
```

Open the platform's file manager for every queued reveal.

The shell knows the project-relative path, while this side knows where
the project lives and which file manager the OS has. The request
therefore crosses as a path, and the answer is an OS process. A refusal
(no mounted directory, a path that left the root, a path that no longer
exists) becomes a console line, never a panic.

<a id="rustdoc-item-845"></a>

### `persist_gizmo_settings`

```rust
pub(in runner) fn persist_gizmo_settings(self: &mut Self);
```

Write a changed gizmo choice to the project's preferences entry.

The executable owns this write because it is the side that knows the
project. The file coming back through the live reader is what keeps the
snapshot's remembered entry accurate. An unchanged choice writes
nothing.

<a id="rustdoc-item-847"></a>

### `watch_preferences`

```rust
pub(in runner) fn watch_preferences(self: &mut Self);
```

Read the preferences file and apply its settings whenever its text
changes.

The applied settings are the camera keymap, the gizmo's hit radius and
snapping steps, the asset previews and the history limits. The parsed
document that the snapshot's preferences view and the dump read is
refreshed here too.

The file is read when its metadata moved, and once per
[`STATE_FILE_POLL_FRAMES`](../constant.STATE_FILE_POLL_FRAMES.md#rustdoc-item-846) regardless, so a coarse or unchanged
timestamp still reaches the editor within a fraction of a second. The
tool's mode, space and toggle keep whatever the world state holds, so
the stale copy a persisting write leaves behind never moves the live
tool. The snapping steps come from the file, one set for every project.

<a id="rustdoc-item-848"></a>

### `watch_theme`

```rust
pub(in runner) fn watch_theme(self: &mut Self);
```

Resolve the editor's theme layers again, and record a new generation
when the result changed.

Two layers sit over the code default: the user's file, named by the
`theme` preference and read from disk, and the project's, named by
`editor_settings.yaml` and loaded through the project's asset store so
the host's watcher reimports an edited file. Where both name the same
item, the project wins.

A layer that cannot be read, loaded or merged logs a warning and is
skipped, so one broken file never costs the other layers' values. A
result that matches the theme already applied leaves the generation
alone. The poll re-merges at least once per [`STATE_FILE_POLL_FRAMES`](../constant.STATE_FILE_POLL_FRAMES.md#rustdoc-item-846)
frames and whenever a stamp moves.

<a id="rustdoc-item-849"></a>

### `stamp_fonts`

```rust
pub(in runner) fn stamp_fonts(self: &mut Self) -> bool;
```

Stamp each family's resolved font source and report whether one moved.

One `stat` per family per poll; a moved stamp makes the poll run the
merge, which re-reads the fonts and installs them again.

<a id="rustdoc-item-850"></a>

### `refresh_fonts`

```rust
pub(in runner) fn refresh_fonts(self: &mut Self, theme: &pill_ui_theme::Theme, user_overrides: Option<&ThemeOverrides>, project_overrides: Option<&ThemeOverrides>, user_directory: Option<&std::path::Path>);
```

Load the fonts the applied layers name, as the bytes the UI kit
installs.

The merged theme's paths say which family each layer named, so a layer
that names only `body` keeps the lower layer's other two. A project font
loads through the asset store and must be under `editor/`; a user font
is a file relative to the user document's own directory. A font that
cannot be loaded logs a warning and leaves its family to the built-in
ones, with the family name still registered.

<a id="rustdoc-item-852"></a>

### `read_font_bytes`

```rust
pub(in runner) fn read_font_bytes(self: &mut Self, source: &FontSource) -> Option<Vec<u8>>;
```

The bytes one font source holds, or `None` with the refusal logged.

A refusal logs once per source and text: the merge re-reads the fonts
on every poll it runs.

<a id="rustdoc-item-854"></a>

### `read_font_source`

```rust
pub(in runner) fn read_font_source(self: &mut Self, source: &FontSource) -> Result<Option<Vec<u8>>, String>;
```

The bytes one font source holds (`None` when the store holds no
copy), or the refusal's text.

<a id="rustdoc-item-855"></a>

### `project_layer_settled`

```rust
pub(in runner) fn project_layer_settled(self: &mut Self) -> bool;
```

Whether the project layer's content is the version last merged, so a
poll that found no stamp moved can stop before merging.

<a id="rustdoc-item-856"></a>

### `load_project_layer`

```rust
pub(in runner) fn load_project_layer(self: &mut Self, path_moved: bool, file_moved: bool) -> Option<ThemeOverrides>;
```

Load the project layer's document, reusing the cached handle.

`path_moved` means the resolved path differs from the one the handle was
loaded from, so the file is imported (and scope-checked) again.
`file_moved` means the same file changed, so the store's copy is read
again.

<a id="rustdoc-item-858"></a>

### `watch_keybindings`

```rust
pub(in runner) fn watch_keybindings(self: &mut Self);
```

Apply the keybindings file whenever it changes.

The registry owns the preset and the overrides. This function reads the
file, hands it over and reports what came back: the preset, the number
of overrides, every problem the file had, and one line per chord that
two commands now answer to. A missing or malformed file falls back to
[`editor_default_keybindings`](../fn.editor_default_keybindings.md#rustdoc-item-857), so Unity's table stands until the file
names a preset.

<a id="rustdoc-item-859"></a>

### `open_problem`

```rust
pub(in runner) fn open_problem(self: &mut Self, index: usize);
```

Open the Problems row at `index` in the configured code editor.

Both callers share this body: the frame-boundary drain when a shell pass
asked for a row, and the scripted channel's `problem open`, which runs
it at once so a suite's wait cannot race the spawn.

The `code_editor_command` preference names the program and its flags.
The row's `file:line` is appended as one argument, which is the form VS
Code, CLion and every other editor's command line accepts. A missing
or empty preference falls back to `code`.

<a id="rustdoc-item-860"></a>

### `publish_console_lines`

```rust
pub(in runner) fn publish_console_lines(self: &mut Self);
```

Fold the capture ring's new lines into the Console's history.

One owned copy per line, capped by the model: the ring's own strings
belong to `pill_core`, and the tab must outlive every reload that
happened while the line was being written.

<a id="rustdoc-item-861"></a>

### `report_scene_title`

```rust
pub(in runner) fn report_scene_title(self: &mut Self);
```

Report the open scene and its unsaved marker when they change.

The title is recomputed every frame from the session resource and
logged only when it changed, so the log names each state the document
went through - which is what the editor suite waits for. The window's
own title is fixed (`Pill`), so nothing here touches it.

<a id="rustdoc-item-862"></a>

### `start_drag_out`

```rust
pub(in runner) fn start_drag_out(self: &mut Self, path: &str);
```

Hand one asset to the OS as a file drag.

The shell reports the asset's project-relative path; the target needs a
file on disk, so it is resolved through the host's asset directory
first. The drag itself blocks in OLE's modal loop, which is why nothing
else happens on this thread until the person drops or cancels.

<a id="rustdoc-item-834"></a>

### `fold_host_notices`

```rust
pub(in runner) fn fold_host_notices(self: &mut Self);
```

Fold the host's queued notices into the editor's notice resource.

Every notice becomes a toast line; a failure also becomes Problems rows
for its module, and a clean reload clears the rows its module left
behind. The resource is rewritten only when something arrived, so the
shell's read stays cheap.

<a id="rustdoc-item-863"></a>

### `push_toast`

```rust
pub(in runner) fn push_toast(self: &mut Self, level: NoticeLevel, text: String);
```

Queue one toast the editor itself raised, and publish it to the shell.

The host's notices arrive through `fold_host_notices`, which returns
early when the host said nothing; an editor warning (a keybinding
conflict, a refused drop) has to reach the same event list and the
world resource on its own, or the stack would only ever show reloads.

<a id="rustdoc-item-865"></a>

### `undock_tab`

```rust
pub(in runner) fn undock_tab(self: &mut Self, tab: EditorTab);
```

Float a dock tab into its own egui window, through the shell's state.

<a id="rustdoc-item-866"></a>

### `activate_tab`

```rust
pub(in runner) fn activate_tab(self: &mut Self, tab: EditorTab);
```

Bring a dock tab to the front of its group, through the shell's
state: the scripted channel's stand-in for clicking a tab button.
The game viewport depends on it - only the tab that is drawn reports
a rectangle - and so do the suite's checks of the other tabs.

<a id="rustdoc-item-867"></a>

### `drain_shell_requests`

```rust
pub(in runner) fn drain_shell_requests(self: &mut Self);
```

Drain what the shell pass asked for, from the frame it left.

The pass raises its asks while it draws and `settle_pass` moves them
onto [`EguiShellFrame`]; this phase answers them after the pass and
before presentation: undo and redo through the scripted channel's own
walk, a dock tab through the shared activation, a Problems row through
[`Self::open_problem`](#rustdoc-item-859), and a quit through the frame's flag.

<a id="rustdoc-item-868"></a>

### `request_quit`

```rust
pub(in runner) fn request_quit(self: &mut Self);
```

Leave the editor: write the dock layout, then set the quit flag.

Every way out - the menu, the scripted channel, the test deadline -
comes through here, so the layout a restart loads is always the one
the last session ended with.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `SimdFrom<T, S>`
- `SimdInto<T, S>`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
