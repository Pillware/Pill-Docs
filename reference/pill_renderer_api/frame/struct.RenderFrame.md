<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-188"></a>

# Struct `pill_renderer_api::frame::RenderFrame`

```rust
pub struct RenderFrame;
```

Source: `rendering\pill_renderer_api\src\frame.rs:321`

One frame's renderer input: the instances, the pass chain, the surface
cameras and the clock, extracted from the world and handed to the renderer.

Everything in it is an owned plain value, so a frame outlives the artifact
that filled it.

The shared name is a fixed identity rather than a path: the host and the
renderer module find the same resource by this string across the artifact
boundary. It spells the renderer module's path rather than this crate's, and
that spelling is part of the identity, so leave it exactly as it is.

## Fields

<a id="rustdoc-item-794"></a>

### `instances`

```rust
instances: Vec<RenderInstance>
```

Every drawable collected from the world this update, in traversal order.

<a id="rustdoc-item-795"></a>

### `passes`

```rust
passes: Vec<ResolvedPass>
```

The chain to run this frame, resolved from the pipeline the game
selected. An empty chain asks for a cleared frame and nothing else,
which is what a pipeline with every pass disabled means.

<a id="rustdoc-item-796"></a>

### `chain_source`

```rust
chain_source: Option<ChainSource>
```

What the current `passes` were resolved from.

Resolving clones every pass's strings and maps, so it only happens again
when this value moves. `chain_generation` is the renderer's cheap test
that the chain it built its pipelines from is still this chain.

<a id="rustdoc-item-797"></a>

### `chain_generation`

```rust
chain_generation: u64
```

Increased by one each time `passes` is resolved again.

<a id="rustdoc-item-798"></a>

### `seconds`

```rust
seconds: f32
```

Seconds since the frame loop started.

It travels in the engine's parameters, so a shader can animate without
the game passing a value through a pass parameter. A pass parameter is
read once, when the chain is built, not once per frame.

<a id="rustdoc-item-799"></a>

### `delta_seconds`

```rust
delta_seconds: f32
```

This frame's own duration: the amount `seconds` grows by.

<a id="rustdoc-item-191"></a>

### `surface_views`

```rust
surface_views: std::collections::BTreeMap<crate::SurfaceId, crate::SurfaceView>
```

The camera each surface draws through this frame, by surface id.

A surface that is missing here is not drawn, and that includes the
primary one ([`crate::SurfaceId::PRIMARY`](../surface/struct.SurfaceId.md#rustdoc-item-182)): its camera is the one
[`crate::SurfaceCameras`](../surface/struct.SurfaceCameras.md#rustdoc-item-800) binds to it, or the frame's chosen world
camera when it has no binding. The renderer's frame writer fills this
once per frame.

<a id="rustdoc-item-802"></a>

### `debug`

```rust
debug: pill_engine::DebugFrame
```

What systems debug-drew for this frame: lines, labels and gizmo handles.
It is empty while debug drawing is off.

<a id="rustdoc-item-805"></a>

### `outlines`

```rust
outlines: crate::SelectionOutlines
```

The entities to outline this frame, and the outline colour.

This is the [`crate::SelectionOutlines`](../picking/struct.SelectionOutlines.md#rustdoc-item-804) resource's value, carried whole
instead of copied field by field, so an editor writes one resource and
the renderer reads one value. An empty `entities` list means no outline.

<a id="rustdoc-item-807"></a>

### `grid_cell_size`

```rust
grid_cell_size: Option<f32>
```

The distance between the scene grid's minor lines, in world units, when
a frontend turned the grid on. `None` draws no grid.

The grid is drawn on the surfaces in [`Self::editor_views`](#rustdoc-item-806), the same
view-bound surfaces that carry the editor's other chrome, so the frame
names that set once instead of twice.

<a id="rustdoc-item-806"></a>

### `editor_views`

```rust
editor_views: Vec<crate::SurfaceId>
```

The surfaces this frame marks as editor views, in ascending order.

A surface bound to a view camera is an editor's own viewport: it draws
the grid, when the grid is on, and carries the editor's chrome - the
transform gizmo and the selection outlines. A surface drawn through a
world camera is a game's window and never gets that chrome. An empty
list means no editor is looking.

<a id="rustdoc-item-808"></a>

### `pick_requests`

```rust
pick_requests: Vec<crate::PickRequest>
```

The picks asked for since the last frame. The renderer answers them
through [`crate::PillRenderer::take_pick_results`](../api/trait.PillRenderer.md#rustdoc-item-199).

<a id="rustdoc-item-810"></a>

### `preview_requests`

```rust
preview_requests: Vec<crate::PreviewRequest>
```

The previews asked for since the last frame. The renderer draws at most
one per frame and answers every request through
[`crate::PillRenderer::take_preview_results`](../api/trait.PillRenderer.md#rustdoc-item-202).

<a id="rustdoc-item-812"></a>

### `sequence`

```rust
sequence: u64
```

The number of this frame, counting from one. It is packed into the
engine parameters beside the clocks.

<a id="rustdoc-item-813"></a>

### `ui`

```rust
ui: pill_ui_frame::UiFrame
```

The UI to draw over the frame: the draw lists that a game's or a tool's
UI pass built this update, per surface, and the textures they sample. An
empty value means no UI.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `CloneToUninit`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
- `ToOwned`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Clone`
- `Debug`
- `Resource`
- `Default`
