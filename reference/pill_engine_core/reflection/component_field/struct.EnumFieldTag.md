<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7258"></a>

# Struct `pill_engine_core::reflection::component_field::EnumFieldTag`

```rust
pub struct EnumFieldTag;
```

Source: `engine\pill_engine_core\src\reflection\component_field\mod.rs:321`

The parsed form of an `enum:` field tag.

The tag is `enum:<representation>:<type>{<Variant>=<discriminant>,...}`.
The world builds it once, when a component registers, from the enum's
declaration in the registering DLL; carrying the variants in the tag keeps
them readable after that DLL unloads, and lets a reader that holds only a
value or a descriptor list the choices without asking the world.

## Fields

<a id="rustdoc-item-7255"></a>

### `representation`

```rust
representation: &'static str
```

The integer type the enum is stored as (`u8`, `i32`, ...).

<a id="rustdoc-item-7256"></a>

### `type_name`

```rust
type_name: &'static str
```

The enum's name as the component field spells it.

<a id="rustdoc-item-7257"></a>

### `variants`

```rust
variants: Vec<(&'static str, i64)>
```

Every variant's name and discriminant, in declaration order.

## Associated functions and methods

<a id="rustdoc-item-7259"></a>

### `variant_name`

```rust
pub fn variant_name(self: &Self, discriminant: i64) -> Option<&'static str>;
```

The name of the variant with `discriminant`, if one declares it.

<a id="rustdoc-item-7260"></a>

### `discriminant_of`

```rust
pub fn discriminant_of(self: &Self, name: &str) -> Option<i64>;
```

The discriminant of the variant called `name`, if there is one.

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
