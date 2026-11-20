<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-565"></a>

# Struct `pill_engine::declarations::DuplicateDeclaredName`

```rust
pub struct DuplicateDeclaredName;
```

Source: `engine\pill_engine\src\declarations.rs:244`

A type name this artifact declares twice within one kind of declaration.

## Fields

<a id="rustdoc-item-563"></a>

### `kind`

```rust
kind: &'static str
```

The kind both declarations are: `component`, `resource`, `asset type`
or `value type`.

<a id="rustdoc-item-564"></a>

### `type_name`

```rust
type_name: &'static str
```

The name both declarations carry.

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
- `Equivalent<K>`
- `Debug`
- `Clone`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
