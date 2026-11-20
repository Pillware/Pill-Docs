<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-607"></a>

# Enum `pill_engine::declarations::DeclaredShape`

```rust
pub(in declarations) enum DeclaredShape { ... }
```

Visibility: `{'restricted': {'parent': 449, 'path': '::declarations'}}` · Source: `engine\pill_engine\src\declarations.rs:259`

What one declaration says about its type's shape.

A name can repeat because the same type arrived twice - one crate linked
into two images of one build - which is harmless, or because two different
types share it, which is the collision. The shape is what tells them apart.
Not `Eq`: a field decorator can carry a float.

## Variants

<a id="rustdoc-item-602"></a>

### `Component`

```rust
Component
```

A component: its persistable flag and field layout.

<a id="rustdoc-item-606"></a>

### `ValueType`

```rust
ValueType
```

A mirrored value type: its size, alignment and field layout.

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
- `Clone`
- `Copy`
- `StructuralPartialEq`
- `PartialEq`
