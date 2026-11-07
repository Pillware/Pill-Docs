<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3686"></a>

# Enum `pill_editor_core::layout::persistence::LayoutError`

```rust
pub enum LayoutError { ... }
```

Source: `editor\pill_editor_core\src\layout\persistence.rs:65`

A saved dock document the layout model refuses.

[`LayoutPersistenceError`](../../error/enum.LayoutPersistenceError.md#rustdoc-item-3693) keeps this type as the source of its `Validation`
variant, and that error's namespace is `editor::layout`, so the type lives
here with the layout code.

## Variants

<a id="rustdoc-item-5272"></a>

### `UnsupportedVersion`

```rust
UnsupportedVersion
```

The document carries a schema version this build does not write.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
- `ToString`
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
- `Debug`
- `Error`
- `Display`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
