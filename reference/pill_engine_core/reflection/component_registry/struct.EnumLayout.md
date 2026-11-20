<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7297"></a>

# Struct `pill_engine_core::reflection::component_registry::EnumLayout`

```rust
pub struct EnumLayout;
```

Source: `engine\pill_engine_core\src\reflection\component_registry.rs:306`

The shape of a fieldless enum with an integer representation, as a
`#[derive(PillMirror)]` declares it.

The strings borrow the declaring DLL's static data, so a value is only read
while that DLL registers its components: the world copies what it needs into
the field's own tag before the registration ends.

## Fields

<a id="rustdoc-item-7535"></a>

### `representation`

```rust
representation: &'static str
```

The integer type the enum is stored as (`u8`, `i32`, ...).

<a id="rustdoc-item-7536"></a>

### `variants`

```rust
variants: Vec<(&'static str, i64)>
```

Every variant's name and discriminant, in declaration order.

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
