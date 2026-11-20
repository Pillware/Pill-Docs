<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-511"></a>

# Struct `pill_engine::declarations::PillResourceDescriptor`

```rust
pub struct PillResourceDescriptor;
```

Source: `engine\pill_engine\src\declarations.rs:215`

One ECS resource declared with `#[derive(PillResource)]`.

## Fields

<a id="rustdoc-item-509"></a>

### `type_name`

```rust
type_name: &'static str
```

The type's stored name, `<crate>::<Type>`.

<a id="rustdoc-item-510"></a>

### `register`

```rust
register: fn (_: &mut crate::World)
```

Declares the resource with a world.

A function pointer rather than the type itself: the derive emits the
call, so whether the type is a plain resource or a manager resource is
decided where the type is declared.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `Collect`
