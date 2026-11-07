<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3930"></a>

# Struct `pill_development_host::runtime::RenderingHost`

```rust
pub struct RenderingHost;
```

Source: `hosting\pill_development_host\src\runtime.rs:712`

The development host with the engine renderer drawing on native surfaces.

Keeping the renderer beside [`DevHost`](struct.DevHost.md#rustdoc-item-3922) makes its creation and lifetime part
of host setup. Executable crates never construct or retain GPU resources.

## Fields

<a id="rustdoc-item-4051"></a>

### `host`

```rust
host: DevHost
```

The wrapped development host: the engine, the project and every
extension.

<a id="rustdoc-item-4052"></a>

### `attached_renderer`

```rust
attached_renderer: pill_player::AttachedRenderer
```

The backend and the window it draws on; the backend drops first.
Declared before `renderer_module` so the backend is detached while the
module it lives in is still mapped.

<a id="rustdoc-item-4054"></a>

### `renderer_module`

```rust
renderer_module: crate::renderer_module::RendererModule
```

The renderer module the backend lives in.

<a id="rustdoc-item-4055"></a>

### `paused`

```rust
paused: Option<PauseReason>
```

Why rendering is paused, or `None` while it runs.

Set when the renderer's data crate reloaded with a different component
layout, and no renderer built against the new layout could take over.
The live renderer's `rendering` system and `render` would read the new
rows through the old field offsets. While paused, the renderer's owner
is disabled and `render` is skipped, so the window keeps its last frame.

<a id="rustdoc-item-4056"></a>

### `scene_quiet`

```rust
scene_quiet: bool
```

Whether the frontend last reported the scene quiet. With the project
also paused, a reload-free boundary and no renderer change, the frame
skips the render and the surfaces keep their last image.

<a id="rustdoc-item-4057"></a>

### `scene_drawn_last_frame`

```rust
scene_drawn_last_frame: bool
```

Whether the last frame drew the surfaces; the frontend clears its
scene-changed flag on the frames this is true.

<a id="rustdoc-item-4058"></a>

### `shader_watcher`

```rust
shader_watcher: Option<shader::ShaderWatcher>
```

Watches the renderer data crate's `shader_sources/` tree and queues
what it re-cooks. `None` without a renderer, or when its data crate has
no shaders or the watch could not start.

<a id="rustdoc-item-4060"></a>

### `project_shader_watcher`

```rust
project_shader_watcher: Option<shader::ShaderWatcher>
```

Watches the project's own shader sources under its asset directory and
queues what it re-cooks. `None` when the project has no asset
directory, or when the watch could not start.

<a id="rustdoc-item-4061"></a>

### `unsupported_data_check_pending`

```rust
unsupported_data_check_pending: bool
```

Set whenever a renderer backend attaches; the next frame then reports
the render data the renderer ignores, once per renderer generation.

## Associated functions and methods

<a id="rustdoc-item-4062"></a>

### `retarget_render_window`

```rust
pub fn retarget_render_window<W>(self: &mut Self, window: W, width: u32, height: u32) -> Result<(), RendererError> where W: RendererWindow + 'static;
```

Move rendering to a newly created native window surface.

The existing ECS host and project module remain alive. A replacement is
constructed before the old renderer is dropped, so initialization
failure leaves the current surface untouched.

#### Errors

Returns a [`RendererError`] when the replacement window's surface cannot
be created or the renderer cannot attach to it.

<a id="rustdoc-item-4064"></a>

### `resize_surface`

```rust
pub fn resize_surface(self: &mut Self, id: pill_renderer_api::SurfaceId, width: u32, height: u32);
```

Forward a physical resize of surface `id` to the engine renderer.

<a id="rustdoc-item-4065"></a>

### `reload_renderer_if_changed`

```rust
pub(in runtime) fn reload_renderer_if_changed(self: &mut Self) -> RendererStep;
```

Reload the renderer module when its sources changed, and keep the
window drawn by whichever generation is current afterwards.

The backend runs code inside the module image, so it is detached in the
reload's `before_commit` hook. That runs after the replacement has built
and loaded, and before the swap retires the old image. At that moment
the image the backend calls into is still mapped, and the host draws
nothing until the attach below.

After the commit the slot holds the new generation, or the old one if
the new `init` failed and the transaction rolled back. Both are
attached the same way. A failed build or load leaves the backend as it
was, and a failed attach leaves the window undrawn until the next
source change.

<a id="rustdoc-item-4066"></a>

### `renderer_step`

```rust
pub(in runtime) fn renderer_step(self: &mut Self, data_extension: Option<&str>, reloaded_extensions: &[String], schemas_before: Option<Vec<(String, Option<u64>)>>) -> RendererStep;
```

The renderer step of one frame boundary, run between the host's reload
phase and its frame phase. It reloads the renderer when its own sources
changed, or when its data crate just reloaded, then pauses or resumes
rendering accordingly.

Module builds are synchronous, so a data reload and the renderer
rebuild it requests complete in the same boundary. In the normal case
no frame runs between the two swaps and nothing pauses. The pause covers
the rest: a layout change whose renderer could not be rebuilt,
initialized or attached.

<a id="rustdoc-item-4067"></a>

### `deliver_shader_changes`

```rust
pub(in runtime) fn deliver_shader_changes(self: &mut Self, data_extension: Option<&str>) -> bool;
```

Deliver everything the shader watchers re-cooked since the last frame.

The renderer's data crate and the project each have a tree of their
own, and their outputs reach the running world by different routes, so
each half is handled on its own. The result says whether anything was
delivered, which is one of the things that keeps an idle frame from
skipping its redraw.

<a id="rustdoc-item-4068"></a>

### `deliver_data_crate_shader_changes`

```rust
pub(in runtime) fn deliver_data_crate_shader_changes(self: &mut Self, data_extension: Option<&str>) -> bool;
```

Hand every shader the watcher re-cooked to the renderer data crate's
`pill_render_data_shader_changed`, which puts the WGSL into the shader
assets built from it.

The export is looked up again for every delivery, in the data module
generation that is current at this frame boundary. A shader edit made
while the data crate was rebuilding therefore reaches the generation
that replaced it. A data crate without the export (a shipping build,
where this path is compiled out) leaves the edits undelivered and logs
a warning.

<a id="rustdoc-item-4069"></a>

### `deliver_project_shader_changes`

```rust
pub(in runtime) fn deliver_project_shader_changes(self: &mut Self) -> bool;
```

Reimport every project shader whose cooked text the project watcher
replaced.

A project's shader asset reads the `.wgsl` cooked beside its `.hlsl`
source at import time, so the cook alone changes nothing: the asset has
to be decoded again for the new text to reach its slot and for the
renderer to rebuild the shader from it. `ImportRegistry::reimport` is
that decode, and it imports a source nothing has loaded yet.

The registry and the store are read from the world on every delivery,
so a reloaded renderer data crate's registrations are the ones used.

<a id="rustdoc-item-4070"></a>

### `report_unsupported_render_data`

```rust
pub(in runtime) fn report_unsupported_render_data(self: &Self, data_extension: Option<&str>);
```

Warn once about each render component the attached renderer ignores.

Only shared components are candidates, and only those the data crate
registered and at least one entity carries. They have to be shared:
that is how render data reaches the renderer module at all. The
module's own copy of a type finds the world's column by the shared
identity. A plain component the data crate registers along the way is
not render data.

A candidate the renderer's `RenderCapabilities::consumed_components`
does not name draws nothing, and the project should hear that rather
than wonder why its directional light has no effect.

<a id="rustdoc-item-4071"></a>

### `set_surface_viewport`

```rust
pub fn set_surface_viewport(self: &mut Self, id: pill_renderer_api::SurfaceId, viewport: Option<RenderViewport>);
```

Restrict engine drawing to a region of surface `id`.

Use `None` for full-surface rendering. Embedded frontends can leave the
corresponding WebView region transparent and keep surrounding UI
panels opaque.

<a id="rustdoc-item-4072"></a>

### `set_scene_quiet`

```rust
pub fn set_scene_quiet(self: &mut Self, quiet: bool);
```

Tell the host the frontend has nothing for the scene surfaces to draw.
With the project also paused and nothing reloading, the next frame skips
the render and the surfaces keep their last image. The frontend clears
the hint on anything that changes them.

<a id="rustdoc-item-4073"></a>

### `scene_drawn_last_frame`

```rust
pub fn scene_drawn_last_frame(self: &Self) -> bool;
```

Whether the last frame drew the surfaces; the frontend clears its
scene-changed flag on the frames this is true.

<a id="rustdoc-item-4074"></a>

### `run_frame`

```rust
pub fn run_frame(self: &mut Self) -> Result<(), RendererError>;
```

Execute one ECS frame and present its resulting world to the surface.

#### Errors

Returns a [`RendererError`] when the renderer cannot draw the frame.

<a id="rustdoc-item-4075"></a>

### `host`

```rust
pub fn host(self: &Self) -> &DevHost;
```

The wrapped development host.

The editor and other embedded frontends reach the engine, assets and
diagnostics through this one accessor. One passthrough method per call
would be a second API to keep aligned with `DevHost`'s, and the methods
it would mirror protect no invariant - they are straight calls.

<a id="rustdoc-item-4076"></a>

### `host_mut`

```rust
pub fn host_mut(self: &mut Self) -> &mut DevHost;
```

The wrapped development host, mutably.

Used for the frame-boundary work frontends own: applying command
batches and asset edits between frames.

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
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `FrameDriver`
- `WindowedFrameDriver`
