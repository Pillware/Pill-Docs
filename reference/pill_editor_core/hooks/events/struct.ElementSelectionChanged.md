<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5770"></a>

# Struct `pill_editor_core::hooks::events::ElementSelectionChanged`

```rust
pub struct ElementSelectionChanged;
```

Source: `editor\pill_editor_core\src\hooks\events.rs:358`

One element-selection change.

## Fields

<a id="rustdoc-item-5766"></a>

### `entity`

```rust
entity: Option<pill_engine::Entity>
```

The entity the elements belong to now.

<a id="rustdoc-item-5767"></a>

### `kind`

```rust
kind: String
```

The kind the elements belong to.

<a id="rustdoc-item-5768"></a>

### `previous`

```rust
previous: Vec<u64>
```

The previously selected element ids.

<a id="rustdoc-item-5769"></a>

### `current`

```rust
current: Vec<u64>
```

The element ids selected now.

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
- `Equivalent<K>`
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
- `Debug`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
