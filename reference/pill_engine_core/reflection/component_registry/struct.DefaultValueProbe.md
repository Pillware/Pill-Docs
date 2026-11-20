<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7465"></a>

# Struct `pill_engine_core::reflection::component_registry::DefaultValueProbe`

```rust
pub struct DefaultValueProbe<T>;
```

Source: `engine\pill_engine_core\src\reflection\component_registry.rs:186`

Lets generated registration code record a component's `Default` value
when the type has one, and do nothing when it does not, without the derive
knowing which.

The generated code calls `(&DefaultValueProbe::<T>::new()).record_default_value(world)`
with both traits in scope. Method lookup tries the probe itself before a
reference to it, so [`RecordDefaultValue`](trait.RecordDefaultValue.md#rustdoc-item-7463) - implemented for the probe when
`T: Default` - wins whenever it applies, and [`SkipDefaultValue`](trait.SkipDefaultValue.md#rustdoc-item-7464) -
implemented for a reference to any probe - answers otherwise.

## Fields

<a id="rustdoc-item-7462"></a>

### `0`

```rust
0: std::marker::PhantomData<T>
```

_No documentation provided._

## Associated functions and methods

<a id="rustdoc-item-7466"></a>

### `new`

```rust
pub const fn new() -> Self;
```

A probe for the component `T`.

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
- `Default`
- `RecordDefaultValue`
