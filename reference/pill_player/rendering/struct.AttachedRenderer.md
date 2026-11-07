<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-179"></a>

# Struct `pill_player::rendering::AttachedRenderer`

```rust
pub struct AttachedRenderer;
```

Source: `hosting\pill_player\src\rendering.rs:89`

A renderer backend and the window it draws on.

Fields drop in declaration order. The backend's surface is built on the
window's raw handles, so the backend must not outlive the window.

## Fields

<a id="rustdoc-item-170"></a>

### `renderer`

```rust
renderer: Box<dyn PillRenderer>
```

The backend drawing on the primary window; declared first so it drops
first.

<a id="rustdoc-item-171"></a>

### `primary_surface`

```rust
primary_surface: SurfaceRecord
```

The primary window, kept in the same record as every extra surface. A
per-surface operation is then one lookup instead of a branch, and a
backend swap repeats the same steps for both. Declared after
`renderer`, so the backend drops before the window it draws on.

<a id="rustdoc-item-172"></a>

### `has_presented_scene`

```rust
has_presented_scene: bool
```

Whether a frame with draw calls has been presented, for the one-time
first-frame line.

<a id="rustdoc-item-173"></a>

### `last_reported_pass_count`

```rust
last_reported_pass_count: u32
```

The pass count last written to the log, so a frame that changes how
much it draws is reported once rather than every frame.

<a id="rustdoc-item-176"></a>

### `detached`

```rust
detached: bool
```

Whether [`Self::detach_backend`](#rustdoc-item-174) dropped the backend and nothing has
replaced it yet. [`Self::replace_backend`](#rustdoc-item-175) asserts this, because
assigning over a live backend drops it while its module may be gone.

<a id="rustdoc-item-177"></a>

### `extra_surfaces`

```rust
extra_surfaces: std::collections::BTreeMap<u32, SurfaceRecord>
```

Every surface attached after the primary window, by surface id.
Declared after `renderer`, so the backend drops first.

## Associated functions and methods

<a id="rustdoc-item-180"></a>

### `attach`

```rust
pub fn attach<W: RendererWindow, impl FnOnce(RawWindowData) -> Result<Box<dyn PillRenderer>, RendererError>: FnOnce(RawWindowData) -> Result<Box<dyn PillRenderer>, RendererError>>(window: W, width: u32, height: u32, attach: impl FnOnce(RawWindowData) -> Result<Box<dyn PillRenderer>, RendererError>) -> Result<Self, RendererError>;
```

Attach a backend built by `attach` to `window`.

#### Errors

Returns a [`RendererError`] when the window cannot give its handles or
`attach` fails.

<a id="rustdoc-item-181"></a>

### `attach_async`

```rust
pub async fn attach_async<W, F, impl FnOnce(RawWindowData) -> F: FnOnce(RawWindowData) -> F>(window: W, width: u32, height: u32, attach: impl FnOnce(RawWindowData) -> F) -> Result<Self, RendererError> where W: RendererWindow, F: Future<Output = _>;
```

Like [`Self::attach`](#rustdoc-item-180), but the backend is built asynchronously: `attach`
returns a future that produces it.

#### Errors

Returns a [`RendererError`] when the window cannot give its handles or
the future fails.

<a id="rustdoc-item-182"></a>

### `from_parts`

```rust
pub(in rendering) fn from_parts(renderer: Box<dyn PillRenderer>, window: Box<dyn Any>, window_data: RawWindowData, width: u32, height: u32) -> Self;
```

Build a renderer from a backend and the parts of its window.

This is the one place the struct is built, so the synchronous and
asynchronous attach paths cannot drift apart.

<a id="rustdoc-item-183"></a>

### `surface_record_mut`

```rust
pub(in rendering) fn surface_record_mut(self: &mut Self, id: SurfaceId) -> Option<&mut SurfaceRecord>;
```

The record for surface `id`: the primary window, or one attached later.

<a id="rustdoc-item-185"></a>

### `retarget`

```rust
pub fn retarget<W: RendererWindow, impl FnOnce(RawWindowData) -> Result<Box<dyn PillRenderer>, RendererError>: FnOnce(RawWindowData) -> Result<Box<dyn PillRenderer>, RendererError>>(self: &mut Self, window: W, width: u32, height: u32, attach: impl FnOnce(RawWindowData) -> Result<Box<dyn PillRenderer>, RendererError>) -> Result<(), RendererError>;
```

Move rendering to a new window, with a backend built by `attach`.

The replacement is built before the current backend is dropped, so a
failure leaves the current window drawn.

#### Errors

Returns a [`RendererError`] when the new window cannot give its handles
or `attach` fails.

<a id="rustdoc-item-186"></a>

### `retarget_async`

```rust
pub async fn retarget_async<W, F, impl FnOnce(RawWindowData) -> F: FnOnce(RawWindowData) -> F>(self: &mut Self, window: W, width: u32, height: u32, attach: impl FnOnce(RawWindowData) -> F) -> Result<(), RendererError> where W: RendererWindow, F: Future<Output = _>;
```

Like [`Self::retarget`](#rustdoc-item-185), but the backend is built asynchronously:
`attach` returns a future that produces it.

#### Errors

Returns a [`RendererError`] when the new window cannot give its handles
or the future fails.

<a id="rustdoc-item-187"></a>

### `install_attachment`

```rust
pub(in rendering) fn install_attachment(self: &mut Self, (renderer, window, window_data): (Box<dyn PillRenderer>, Box<dyn Any>, RawWindowData), width: u32, height: u32);
```

Take over a backend and the window it was built on, replacing both.

<a id="rustdoc-item-175"></a>

### `replace_backend`

```rust
pub fn replace_backend(self: &mut Self, renderer: Box<dyn PillRenderer>);
```

Replace the backend on the same window, keeping the viewport, the pacing
and every extra surface.

The current backend must be detached first ([`Self::detach_backend`](#rustdoc-item-174)).
Assigning over a live backend drops it, and a backend that lives in a
module the host is about to unload must be gone before that unload.
Every caller detaches first, and this asserts it in debug builds.

#### Panics

Panics in debug builds if the current backend has not been detached.

<a id="rustdoc-item-188"></a>

### `replay_surfaces`

```rust
pub(in rendering) fn replay_surfaces(self: &mut Self);
```

Tell a new backend what the one it replaced was told: the primary
surface's viewport and pacing first, then every extra surface.

The pacing is easy to forget. Without it, a window the frontend asked to
hold would start presenting again on the first frame after a renderer
reload. The primary keeps it in its surface record for the same reason
the extra surfaces do.

<a id="rustdoc-item-189"></a>

### `reattach_extra_surfaces`

```rust
pub(in rendering) fn reattach_extra_surfaces(self: &mut Self);
```

Attach every extra surface to the current backend again, with its size,
viewport and pacing, after the backend was replaced (a renderer reload)
or moved to another window.

A surface the new backend refuses stays in the map and its refusal is
logged: its window is still open, and the next replacement tries again.

<a id="rustdoc-item-192"></a>

### `attach_surface`

```rust
pub fn attach_surface<W: RendererWindow>(self: &mut Self, id: SurfaceId, window: W, width: u32, height: u32, surface_options: SurfaceOptions) -> Result<(), RendererError>;
```

Draw into another window as surface `id`, sized `width` by `height`
physical pixels. The window stays alive until [`Self::detach_surface`](#rustdoc-item-190).

The world's [`pill_renderer_api::SurfaceCameras`] decides which camera
draws into the surface; a surface with no binding stays empty.

A backend that draws only one surface - the placeholder a development
host holds while its renderer module builds or reloads - leaves the
surface pending instead of refusing it. The surface is kept and attached
to the next backend that replaces this one.

#### Errors

Returns a [`RendererError`] when the window cannot give its handles or
the backend refuses the surface for another reason.

<a id="rustdoc-item-190"></a>

### `detach_surface`

```rust
pub fn detach_surface(self: &mut Self, id: SurfaceId);
```

Stop drawing into surface `id`, then release its window.

<a id="rustdoc-item-193"></a>

### `resize_surface`

```rust
pub fn resize_surface(self: &mut Self, id: SurfaceId, width: u32, height: u32);
```

Forward a physical resize of surface `id`.

One method serves every surface. The size is recorded in the surface's
own record, so the caller does not need to know whether it resizes the
primary window or an extra surface.

<a id="rustdoc-item-194"></a>

### `set_surface_viewport`

```rust
pub fn set_surface_viewport(self: &mut Self, id: SurfaceId, viewport: Option<RenderViewport>);
```

Restrict drawing to a region of surface `id`; `None` draws all of it.

<a id="rustdoc-item-196"></a>

### `set_surface_ready`

```rust
pub fn set_surface_ready(self: &mut Self, id: SurfaceId, ready: bool);
```

Whether surface `id` may present on the next frame; see
[`PillRenderer::set_surface_ready`]. Applies to the primary surface too,
which keeps it in its record so a backend swap cannot lose it.

<a id="rustdoc-item-197"></a>

### `extra_surface_ids`

```rust
pub fn extra_surface_ids(self: &Self) -> Vec<SurfaceId>;
```

The ids of the surfaces attached after the primary window.

<a id="rustdoc-item-174"></a>

### `detach_backend`

```rust
pub fn detach_backend(self: &mut Self);
```

Drop the backend and draw nothing until another one replaces it.

For a host whose backend lives in a module about to be unloaded: the
backend must go while that module is still mapped.

<a id="rustdoc-item-199"></a>

### `renderer`

```rust
pub fn renderer(self: &Self) -> &dyn PillRenderer;
```

The current backend; [`Self::detach_backend`](#rustdoc-item-174) leaves the headless one.

<a id="rustdoc-item-200"></a>

### `window_data`

```rust
pub fn window_data(self: &Self) -> RawWindowData;
```

The primary window's handles as data.

<a id="rustdoc-item-201"></a>

### `surface_size`

```rust
pub fn surface_size(self: &Self) -> (u32, u32);
```

The surface size last handed to the backend.

<a id="rustdoc-item-202"></a>

### `viewport`

```rust
pub fn viewport(self: &Self) -> Option<RenderViewport>;
```

The region drawn to, or `None` for the whole window.

<a id="rustdoc-item-203"></a>

### `render`

```rust
pub fn render(self: &mut Self, world: &World) -> Result<(), RendererError>;
```

Draw the frame the `rendering` system left in `world`, if it left one.

The renderer reads the frame and the asset store straight out of the
world instead of being handed a copy of the assets. Both borrows last
for the whole call, which stops the store from changing while a frame
that uses it is being drawn.

A world with no frame, or with no asset store, draws nothing. That is
not an error.

#### Errors

Returns whatever the backend's `render` returns.

<a id="rustdoc-item-205"></a>

### `present`

```rust
pub fn present(self: &mut Self, world: &mut World) -> Result<(), RendererError>;
```

Draw the frame the `rendering` system left in `world`, then hand back
the picks and previews the GPU finished since the last frame.

The order matters: the renderer cannot answer a request made this frame
before the draw that produces the answer. A frontend that delivered
first would read the previous frame's results again. Both windowed
drivers call this one method, so neither of them can get the order
wrong.

#### Errors

Returns what [`Self::render`](#rustdoc-item-203) returns.

<a id="rustdoc-item-207"></a>

### `deliver_pick_results`

```rust
pub(in rendering) fn deliver_pick_results(self: &mut Self, world: &mut World);
```

Move the picks the renderer has answered since the last call into the
world's [`pill_renderer_api::PickResults`].

An answer arrives a few frames after its request, when the GPU
finishes. A world without the resource drops the answers. Callers reach
this through [`Self::present`](#rustdoc-item-205), which delivers them after the draw.

<a id="rustdoc-item-209"></a>

### `deliver_preview_results`

```rust
pub(in rendering) fn deliver_preview_results(self: &mut Self, world: &mut World);
```

Move the previews the renderer has read back since the last call into
the world's [`pill_renderer_api::PreviewResults`].

Like a pick, a preview is answered a few frames after it was asked. A
world without the resource drops the result.

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
