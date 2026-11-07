<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-9"></a>

# Enum `pill_development_host::analytics::ModuleKind`

```rust
pub(crate) enum ModuleKind { ... }
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\analytics.rs:98`

Which pipeline a module belongs to. It is shown in the report's `kind`
column.

## Variants

<a id="rustdoc-item-7"></a>

### `Extension`

```rust
Extension
```

An extension loaded from its private hot-load copy.

<a id="rustdoc-item-8"></a>

### `Project`

```rust
Project
```

The active project module.

## Associated functions and methods

<a id="rustdoc-item-10"></a>

### `label`

```rust
pub(in analytics) fn label(self: Self) -> &'static str;
```

The value printed in the report's `kind` column.

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
- `Equivalent<K>`
- `Clone`
- `Copy`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
