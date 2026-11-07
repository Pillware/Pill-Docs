<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-187"></a>

# Struct `pill_renderer_api::components::viewport::RenderViewport`

```rust
pub struct RenderViewport;
```

Source: `rendering\pill_renderer_api\src\components\viewport.rs:24`

A rectangle of the target that a frame draws into, in pixels.

The renderer may hold one for a surface and draw only inside it. When it
holds none, or the one it holds has no area left inside the target, it
draws the whole target instead.

## Fields

<a id="rustdoc-item-301"></a>

### `x`

```rust
x: u32
```

Left edge of the rectangle within the target, in pixels.

<a id="rustdoc-item-302"></a>

### `y`

```rust
y: u32
```

Top edge of the rectangle within the target, in pixels.

<a id="rustdoc-item-303"></a>

### `width`

```rust
width: u32
```

Width of the rectangle, in pixels.

<a id="rustdoc-item-304"></a>

### `height`

```rust
height: u32
```

Height of the rectangle, in pixels.

## Associated functions and methods

<a id="rustdoc-item-306"></a>

### `new`

```rust
pub const fn new(x: u32, y: u32, width: u32, height: u32) -> Self;
```

Creates a viewport from explicit pixel bounds.

Nothing is checked here: the values are stored unchanged. To fit the
rectangle to a target that may be smaller, use
[`RenderViewport::clamped_to`](#rustdoc-item-305).

<a id="rustdoc-item-307"></a>

### `full`

```rust
pub const fn full(target_width: u32, target_height: u32) -> Self;
```

Returns a viewport that covers the whole target.

It starts at the origin and measures `target_width` by
`target_height`. The renderer substitutes it when no viewport is set,
or when an explicit one would draw nothing.

<a id="rustdoc-item-305"></a>

### `clamped_to`

```rust
pub fn clamped_to(self: Self, target_width: u32, target_height: u32) -> Option<Self>;
```

Clips the rectangle to a target of the given pixel size.

Returns `None` when nothing of the rectangle stays inside the target:
the origin is at or past the target's edge, or the visible width or
height is zero. The renderer treats `None` as "draw the full target".

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
- `Debug`
- `Default`
- `Clone`
- `Copy`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
