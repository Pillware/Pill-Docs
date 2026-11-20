<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5866"></a>

# Struct `pill_engine_core::engine::PlayRefusal`

```rust
pub struct PlayRefusal;
```

Source: `engine\pill_engine_core\src\engine.rs:295`

Why a play session could not start.

Every type that made the copy impossible is named, components first, so one
message tells a person the whole fix.

## Fields

<a id="rustdoc-item-5864"></a>

### `component_type_names`

```rust
component_type_names: Vec<String>
```

Component types that are neither `Clone` nor plain data.

<a id="rustdoc-item-5865"></a>

### `resource_type_names`

```rust
resource_type_names: Vec<String>
```

`Restore` resource types whose values could not be copied.

## Associated functions and methods

<a id="rustdoc-item-5867"></a>

### `is_empty`

```rust
pub fn is_empty(self: &Self) -> bool;
```

Whether the refusal names nothing.

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
- `ToString`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `Equivalent<K>`
- `Debug`
- `Clone`
- `Default`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
- `Display`
