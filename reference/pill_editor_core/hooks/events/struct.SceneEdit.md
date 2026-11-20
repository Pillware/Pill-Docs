<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5657"></a>

# Struct `pill_editor_core::hooks::events::SceneEdit`

```rust
pub struct SceneEdit<'a>;
```

Source: `editor\pill_editor_core\src\hooks\events.rs:333`

One scene document change.

## Fields

<a id="rustdoc-item-5655"></a>

### `loaded`

```rust
loaded: bool
```

`true` for an opened file, `false` for a new empty scene.

<a id="rustdoc-item-5656"></a>

### `path`

```rust
path: Option<&'a str>
```

The opened file's path, when one was opened.

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
- `SerializableAny`
- `SimdFrom<T, S>`
- `SimdInto<T, S>`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `IntoEither`
- `Instrument`
- `WithSubscriber`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `Clone`
- `Copy`
- `Debug`
