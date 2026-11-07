<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-146"></a>

# Struct `pill_player::rendering::SurfaceRecord`

```rust
pub(in rendering) struct SurfaceRecord;
```

Visibility: `{'restricted': {'parent': 137, 'path': '::rendering'}}` · Source: `hosting\pill_player\src\rendering.rs:63`

The window one surface draws on, plus what is needed to attach it to
another backend.

The primary window and every extra surface are kept in the same record, so
a resize, a viewport change or a pacing change needs one lookup instead of
a branch, and a backend swap repeats the same steps for all of them.

## Fields

<a id="rustdoc-item-138"></a>

### `window`

```rust
window: Box<dyn Any>
```

The frontend window, held only to keep it alive while the backend draws
on it.

<a id="rustdoc-item-139"></a>

### `window_data`

```rust
window_data: pill_renderer_api::RawWindowData
```

The window's handles as data, for re-attaching to another backend.

<a id="rustdoc-item-140"></a>

### `size`

```rust
size: (u32, u32)
```

The surface size last handed to the backend.

<a id="rustdoc-item-141"></a>

### `viewport`

```rust
viewport: Option<pill_renderer_api::RenderViewport>
```

The region drawn to, or `None` for the whole surface.

<a id="rustdoc-item-143"></a>

### `surface_options`

```rust
surface_options: Option<pill_renderer_api::SurfaceOptions>
```

How the surface presents; `None` for the primary, which takes the
backend's default.

<a id="rustdoc-item-145"></a>

### `ready`

```rust
ready: bool
```

Whether the surface may present (the frontend's pacing).

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
