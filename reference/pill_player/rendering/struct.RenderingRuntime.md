<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-237"></a>

# Struct `pill_player::rendering::RenderingRuntime`

```rust
pub struct RenderingRuntime;
```

Source: `hosting\pill_player\src\rendering.rs:613`

A statically linked project running in a window.

Fields drop in declaration order. The engine goes first, as in every host,
then the backend, then the window it drew on.

## Fields

<a id="rustdoc-item-234"></a>

### `runtime`

```rust
runtime: crate::Runtime
```

The engine and its frame state.

<a id="rustdoc-item-236"></a>

### `attached_renderer`

```rust
attached_renderer: AttachedRenderer
```

The linked renderer's backend on the window.

## Associated functions and methods

<a id="rustdoc-item-238"></a>

### `retarget_render_window`

```rust
pub async fn retarget_render_window<W: RendererWindow>(self: &mut Self, window: W, width: u32, height: u32) -> Result<(), RendererError>;
```

Move rendering to a newly created window; see
[`AttachedRenderer::retarget_async`](struct.AttachedRenderer.md#rustdoc-item-186).

#### Errors

Returns a [`RendererError`] when the new window cannot be attached,
including when this build links no renderer to move.

<a id="rustdoc-item-239"></a>

### `run_frame`

```rust
pub fn run_frame(self: &mut Self) -> Result<(), RendererError>;
```

Execute one ECS frame and present its resulting world to the surface.

#### Errors

Returns a [`RendererError`] when the renderer fails.

<a id="rustdoc-item-241"></a>

### `frames_per_second`

```rust
pub fn frames_per_second(self: &Self) -> f64;
```

Live frame rate; see [`Runtime::frames_per_second`](../runtime/struct.Runtime.md#rustdoc-item-240).

<a id="rustdoc-item-242"></a>

### `engine`

```rust
pub fn engine(self: &Self) -> &Engine;
```

Read-only engine access.

<a id="rustdoc-item-243"></a>

### `engine_mut`

```rust
pub fn engine_mut(self: &mut Self) -> &mut Engine;
```

Mutable engine access for frame-boundary work.

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
