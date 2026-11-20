<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-790"></a>

# Enum `pill_engine_core::assets::import_registry::FieldDecorator`

```rust
pub enum FieldDecorator { ... }
```

Source: `engine\pill_engine_core\src\assets\import_registry.rs:577`

How one field of an asset's settings document draws in the Inspector.

Plain data on purpose: a declaration crosses the registry, which outlives
the crate that made it, so it holds no function pointer and no borrow. The
editor turns a decorator into a widget; anything that does not read it draws
the row exactly as it would without one.

## Variants

<a id="rustdoc-item-787"></a>

### `Range`

```rust
Range
```

The value is a number between `min` and `max`, so the row draws as a
slider.

<a id="rustdoc-item-789"></a>

### `Tooltip`

```rust
Tooltip
```

The row's label carries this explanation as hover text.

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
- `StructuralPartialEq`
- `PartialEq`
