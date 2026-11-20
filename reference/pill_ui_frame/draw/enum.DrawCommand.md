<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-237"></a>

# Enum `pill_ui_frame::draw::DrawCommand`

```rust
pub enum DrawCommand { ... }
```

Source: `rendering\pill_ui_frame\src\draw.rs:152`

One entry in a [`DrawList`](struct.DrawList.md#rustdoc-item-236)'s command stream: open a clip, close a clip, or
draw an index range from one texture.

## Variants

<a id="rustdoc-item-229"></a>

### `PushClip`

```rust
PushClip
```

Clips every draw after this one to `rect`, intersected with the clip
already in force.

<a id="rustdoc-item-230"></a>

### `PopClip`

```rust
PopClip
```

Return to the clip that was active before the matching push.

<a id="rustdoc-item-235"></a>

### `Draw`

```rust
Draw
```

Draw the given index range from `texture`.

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
- `StructuralPartialEq`
- `PartialEq`
