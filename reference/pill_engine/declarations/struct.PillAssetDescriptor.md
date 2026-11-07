<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-464"></a>

# Struct `pill_engine::declarations::PillAssetDescriptor`

```rust
pub struct PillAssetDescriptor;
```

Source: `engine\pill_engine\src\declarations.rs:153`

One asset type declared with `#[derive(PillAsset)]`.

## Fields

<a id="rustdoc-item-462"></a>

### `type_name`

```rust
type_name: &'static str
```

Fully-qualified type path: the declaring module's path plus the type's
name.

<a id="rustdoc-item-463"></a>

### `register`

```rust
register: fn (_: &mut crate::World)
```

Declares the asset type with a world.

A function pointer rather than the type itself: the derive emits the
call, so whether the type imports from a source file or is its own
document file is decided where the type is declared.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Collect`
