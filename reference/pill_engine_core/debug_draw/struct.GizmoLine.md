<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3793"></a>

# Struct `pill_engine_core::debug_draw::GizmoLine`

```rust
pub struct GizmoLine;
```

Source: `engine\pill_engine_core\src\debug_draw.rs:156`

One gizmo line, drawn on top of everything and pickable by its handle id.

## Fields

<a id="rustdoc-item-3789"></a>

### `start`

```rust
start: [f32; 3]
```

Where it starts, in world space.

<a id="rustdoc-item-3790"></a>

### `end`

```rust
end: [f32; 3]
```

Where it ends, in world space.

<a id="rustdoc-item-3791"></a>

### `color`

```rust
color: DebugColor
```

Its colour.

<a id="rustdoc-item-3792"></a>

### `handle`

```rust
handle: u32
```

The id a pick of this line reports. It must fit in the low 31 bits,
because a pick sets the top bit to mark a handle.

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
- `Clone`
- `Copy`
- `StructuralPartialEq`
- `PartialEq`
