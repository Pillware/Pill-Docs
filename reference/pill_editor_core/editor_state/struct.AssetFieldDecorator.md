<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3293"></a>

# Struct `pill_editor_core::editor_state::AssetFieldDecorator`

```rust
pub struct AssetFieldDecorator;
```

Source: `editor\pill_editor_core\src\editor_state\mod.rs:476`

One field decorator an asset type declares, as the Inspector reads it.

## Fields

<a id="rustdoc-item-3332"></a>

### `key`

```rust
key: String
```

The document key the decorator applies to.

<a id="rustdoc-item-3333"></a>

### `decorator`

```rust
decorator: pill_engine::FieldDecorator
```

How the row draws.

## Associated functions and methods

<a id="rustdoc-item-3335"></a>

### `find`

```rust
pub fn find<'a>(decorators: &'a [Self], key: &str) -> Option<&'a pill_engine::FieldDecorator>;
```

The decorator declared for `key`, if the type declared one.

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
- `Debug`
- `StructuralPartialEq`
- `PartialEq`
