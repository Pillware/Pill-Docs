<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-178"></a>

# Trait `pill_renderer_api::api::PillRenderer`

```rust
pub trait PillRenderer { ... }
```

Source: `rendering\pill_renderer_api\src\api.rs:144`

The contract a renderer implements and a frontend drives once per frame.

Boxing it as `Box<dyn PillRenderer>` lets a frontend swap the wgpu backend
for [`HeadlessRenderer`](struct.HeadlessRenderer.md#rustdoc-item-204) without touching its frame loop.

A wrapper that delegates to another renderer - the host's module renderer
does - must forward every method, including the ones with defaults. A
method it leaves out runs the trait's default instead of the wrapped
renderer's, and nothing reports the omission.

## Required and provided items

<a id="rustdoc-item-180"></a>

### `capabilities`

```rust
fn capabilities(self: &Self) -> RenderCapabilities;
```

Returns the limits of the device the renderer draws on.

The default returns zeroed limits, which is all a renderer with no GPU
behind it can say.

<a id="rustdoc-item-181"></a>

### `metrics`

```rust
fn metrics(self: &Self) -> RenderMetrics;
```

Returns the statistics of the most recent frame that drew.

The counts describe the last [`Self::render`](#rustdoc-item-2) call that drew a frame;
before the first such frame they are all zero.

<a id="rustdoc-item-183"></a>

### `resize_surface`

```rust
fn resize_surface(self: &mut Self, id: SurfaceId, width: u32, height: u32);
```

Tells the renderer that surface `id` now measures `width` by `height`
physical pixels. An id the renderer does not draw does nothing.

A zero width or height means the surface is minimized, and frames skip
it until a usable size arrives. The primary surface is resized through
its own id ([`SurfaceId::PRIMARY`](../surface/struct.SurfaceId.md#rustdoc-item-182)) like any other.

This method has no default on purpose: a renderer that forgot to
forward a resize would keep drawing at the old size, with nothing in
the log to say why.

<a id="rustdoc-item-185"></a>

### `set_surface_viewport`

```rust
fn set_surface_viewport(self: &mut Self, id: SurfaceId, viewport: Option<RenderViewport>);
```

Restricts drawing to a sub-region of surface `id`.

`None` restores full-surface rendering. Required for the same reason
[`Self::resize_surface`](#rustdoc-item-183) is.

<a id="rustdoc-item-2"></a>

### `render`

```rust
fn render(self: &mut Self, frame: &RenderFrame, assets: &AssetManager) -> Result<FrameOutcome, RendererError>;
```

Draws one frame from `assets` and presents it.

Returns [`FrameOutcome::Skipped`](enum.FrameOutcome.md#rustdoc-item-1) when there is nothing to present: a
minimized surface, a surface that may not present yet, or a frame
without a camera. That is a normal outcome, not an error.

The asset store is read, not copied. The renderer compares it with what
it last uploaded, and the borrow lasts for the call.

#### Errors

Fails with [`RendererError`](../error/enum.RendererError.md#rustdoc-item-179) when the GPU work itself fails: a lost or
out-of-memory surface, a renderer resource the call referenced that is
not in storage, or a command buffer that wgpu refuses at submission.

An asset that will not build is not an error. The pass that needed it
is reported and skipped.

<a id="rustdoc-item-190"></a>

### `invalidate_assets`

```rust
fn invalidate_assets(self: &mut Self);
```

Forces the next frame to rebuild every GPU object from the asset store.

Normally the renderer rebuilds only what changed, tracked by content
versions. This clears that bookkeeping, for a caller that replaced the
whole asset set and cannot trust the recorded versions any more.

<a id="rustdoc-item-194"></a>

### `attach_surface`

```rust
unsafe fn attach_surface(self: &mut Self, id: SurfaceId, window: RawWindowData, width: u32, height: u32, options: SurfaceOptions) -> Result<(), RendererError>;
```

Starts drawing into another surface: a second window or canvas, sized
`width` by `height` physical pixels. It is drawn after the primary
surface, through the camera the frame resolved for it
([`RenderFrame::surface_views`](../frame/struct.RenderFrame.md#rustdoc-item-191)). Attaching an id that is already
attached replaces that surface.

The default refuses, for a renderer that draws one surface only.

#### Errors

Returns [`RendererError::UnsupportedSurface`](../error/enum.RendererError.md#rustdoc-item-192) if the renderer draws a
single surface or `id` is [`SurfaceId::PRIMARY`](../surface/struct.SurfaceId.md#rustdoc-item-182). Any other failure is
one the surface creation itself reports.

#### Safety

`window` must name a live window that outlives the surface. The caller
keeps it alive until [`Self::detach_surface`](#rustdoc-item-193) is called or the renderer
is dropped, whichever comes first.

<a id="rustdoc-item-193"></a>

### `detach_surface`

```rust
fn detach_surface(self: &mut Self, _id: SurfaceId);
```

Stops drawing into a surface attached with [`Self::attach_surface`](#rustdoc-item-194) and
releases it. An id the renderer does not draw does nothing.

<a id="rustdoc-item-197"></a>

### `set_surface_ready`

```rust
fn set_surface_ready(self: &mut Self, _id: SurfaceId, _ready: bool);
```

Tells the renderer whether `id` may present on the next
[`Self::render`](#rustdoc-item-2).

Some window systems pace a surface themselves - a Wayland subsurface,
through its frame callbacks - so the frontend passes that state on. A
surface that may not present is skipped instead of waited for. Every
surface starts ready, and the primary surface is paced the same way.

<a id="rustdoc-item-199"></a>

### `take_pick_results`

```rust
fn take_pick_results(self: &mut Self) -> Vec<crate::PickResult>;
```

Takes the answers to the picks the GPU has finished since the last
call.

A pick is answered a few frames after it was asked, when the GPU has
read the result back, and the frame that asked never waits for it. A
pick on a surface the frame did not draw is answered in the same frame,
with no hit. The frontend writes what this returns into the world's
[`crate::PickResults`](../picking/struct.PickResults.md#rustdoc-item-198). The default answers nothing, for a renderer
without a pick buffer.

<a id="rustdoc-item-202"></a>

### `take_preview_results`

```rust
fn take_preview_results(self: &mut Self) -> Vec<crate::PreviewImage>;
```

Takes every preview the GPU has finished since the last call.

A preview is read back a few frames after it was asked, like a pick. A
request the renderer cannot draw is refused at once, so the caller does
not wait for an answer that will never come. The frontend writes what
this returns into the world's [`crate::PreviewResults`](../preview/struct.PreviewResults.md#rustdoc-item-201). The default
answers nothing, for a renderer without an off-screen preview target.
