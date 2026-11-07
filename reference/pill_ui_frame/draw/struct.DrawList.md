<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-233"></a>

# Struct `pill_ui_frame::draw::DrawList`

```rust
pub struct DrawList;
```

Source: `rendering\pill_ui_frame\src\draw.rs:179`

Everything one frame of UI asks a backend to draw.

It holds the vertices, the indices and the commands that use them, in
submission order. The owner clears and rebuilds it every frame. The list
owns no GPU resources and is plain data any backend can read.

## Fields

<a id="rustdoc-item-267"></a>

### `vertices`

```rust
vertices: Vec<UiVertex>
```

The frame's vertices, referenced by index.

<a id="rustdoc-item-229"></a>

### `indices`

```rust
indices: Vec<u32>
```

The frame's indices, in draw order.

<a id="rustdoc-item-269"></a>

### `commands`

```rust
commands: Vec<DrawCommand>
```

Clip changes and draws, in submission order.

<a id="rustdoc-item-270"></a>

### `clip_depth`

```rust
clip_depth: u32
```

The number of clips that are currently open, which keeps pushes and pops balanced.

## Associated functions and methods

<a id="rustdoc-item-272"></a>

### `new`

```rust
pub fn new() -> DrawList;
```

An empty list, ready for a frame.

<a id="rustdoc-item-273"></a>

### `is_empty`

```rust
pub fn is_empty(self: &Self) -> bool;
```

Returns `true` when nothing would be drawn, which means no vertices and no commands.

<a id="rustdoc-item-274"></a>

### `clear`

```rust
pub fn clear(self: &mut Self);
```

Forget the previous frame's work, keeping the allocations.

<a id="rustdoc-item-276"></a>

### `push_clip`

```rust
pub fn push_clip(self: &mut Self, rect: Rect);
```

Clip every following draw to `rect` until the matching
[`Self::pop_clip`](#rustdoc-item-275).

The backend intersects this with whatever clip is already active.

<a id="rustdoc-item-275"></a>

### `pop_clip`

```rust
pub fn pop_clip(self: &mut Self);
```

Closes the most recent [`Self::push_clip`](#rustdoc-item-276).

#### Panics

Panics in debug builds when no clip is open, which means there is one
more pop than push. A release build still records the pop as a
[`DrawCommand::PopClip`](enum.DrawCommand.md#rustdoc-item-227).

<a id="rustdoc-item-277"></a>

### `push_quad`

```rust
pub fn push_quad(self: &mut Self, texture_id: TextureId, rect: Rect, uv_min: Vector2f, uv_max: Vector2f, color: Color);
```

Appends a rectangle that samples the part of `texture_id` between
`uv_min` and `uv_max`.

The vertices go in top-left, top-right, bottom-right, bottom-left
order, so `uv_min` is on the rectangle's top-left corner and `uv_max` on
its bottom-right one, whatever the texture's orientation.

<a id="rustdoc-item-278"></a>

### `append_draw`

```rust
pub(in draw) fn append_draw(self: &mut Self, texture_id: TextureId, first_index: u32, index_count: u32);
```

Extends the previous draw command when it samples the same texture and
the new indices follow the old ones directly. Otherwise it starts a new
draw command.

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
