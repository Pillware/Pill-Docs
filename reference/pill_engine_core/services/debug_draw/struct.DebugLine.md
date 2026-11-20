<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-8231"></a>

# Struct `pill_engine_core::services::debug_draw::DebugLine`

```rust
pub struct DebugLine;
```

Source: `engine\pill_engine_core\src\services\debug_draw.rs:121`

One line segment of a frame.

## Fields

<a id="rustdoc-item-8226"></a>

### `start`

```rust
start: [f32; 3]
```

Where it starts, in world space.

<a id="rustdoc-item-8227"></a>

### `end`

```rust
end: [f32; 3]
```

Where it ends, in world space.

<a id="rustdoc-item-8228"></a>

### `color`

```rust
color: DebugColor
```

Its colour.

<a id="rustdoc-item-8229"></a>

### `depth_test`

```rust
depth_test: bool
```

Whether scene geometry hides it.

<a id="rustdoc-item-8230"></a>

### `chrome`

```rust
chrome: bool
```

Whether only an editor view draws it.

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
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `Debug`
- `Clone`
- `Copy`
- `StructuralPartialEq`
- `PartialEq`
