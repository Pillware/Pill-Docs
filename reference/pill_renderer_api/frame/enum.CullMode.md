<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-496"></a>

# Enum `pill_renderer_api::frame::CullMode`

```rust
pub enum CullMode { ... }
```

Source: `rendering\pill_renderer_api\src\frame.rs:85`

Which faces a pass drops.

## Variants

<a id="rustdoc-item-493"></a>

### `Back`

```rust
Back
```

Back faces, which is the default for solid geometry.

<a id="rustdoc-item-494"></a>

### `Front`

```rust
Front
```

Front faces, for looking at the inside of a shape.

<a id="rustdoc-item-495"></a>

### `None`

```rust
None
```

No faces. A fullscreen triangle has no outside to drop, and two-sided
geometry has no inside.

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
- `DeserializeOwned`
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
- `Copy`
- `Debug`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
- `Default`
- `Serialize`
- `Deserialize<'de>`
