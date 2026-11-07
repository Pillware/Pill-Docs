<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-314"></a>

# Struct `pill_ui_frame::frame::UiDraw`

```rust
pub struct UiDraw;
```

Source: `rendering\pill_ui_frame\src\frame.rs:31`

One surface's UI for a frame.

## Fields

<a id="rustdoc-item-311"></a>

### `surface`

```rust
surface: u32
```

The id of the surface to draw into. The primary surface has id `0`.

<a id="rustdoc-item-312"></a>

### `scale_factor`

```rust
scale_factor: f32
```

The scale factor of the monitor this list was built for. The list's
positions are in logical pixels, and the backend multiplies them by
this factor when it draws.

<a id="rustdoc-item-313"></a>

### `list`

```rust
list: crate::draw::DrawList
```

The vertices, indices and commands to draw for this surface.

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
- `Default`
