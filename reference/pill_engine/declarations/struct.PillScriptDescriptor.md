<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-484"></a>

# Struct `pill_engine::declarations::PillScriptDescriptor`

```rust
pub struct PillScriptDescriptor;
```

Source: `engine\pill_engine\src\declarations.rs:204`

One script component declared with `#[script]`.

## Fields

<a id="rustdoc-item-483"></a>

### `register`

```rust
register: fn (_: &mut crate::World)
```

Registers the script with a world.

A function pointer rather than the type itself: the attribute emits the
call, so the component type is named at its own declaration site.

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
