<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4406"></a>

# Struct `pill_engine_core::reflection::component_registry::CloneValueProbe`

```rust
pub struct CloneValueProbe<T>;
```

Source: `engine\pill_engine_core\src\reflection\component_registry.rs:250`

Lets generated registration code record a component's row-cloning function
when the type implements `Clone`, and do nothing when it does not, without
the derive knowing which.

It works exactly like [`DefaultValueProbe`](struct.DefaultValueProbe.md#rustdoc-item-7465): the generated code calls
`(&CloneValueProbe::<T>::new()).record_clone_value(world)` with both traits
in scope, and method lookup prefers [`RecordCloneValue`](trait.RecordCloneValue.md#rustdoc-item-7500) on the probe over
[`SkipCloneValue`](trait.SkipCloneValue.md#rustdoc-item-7501) on a reference to it.

A recorded clone function is what lets the engine copy a storage row by row
for a type that owns heap data. A type without one can still be copied, but
only when its rows are plain bytes (see the copy rules in
[`crate::world::EntityStorage`](../../ecs/world/storage/struct.EntityStorage.md#rustdoc-item-4849)).

## Fields

<a id="rustdoc-item-7499"></a>

### `0`

```rust
0: std::marker::PhantomData<T>
```

_No documentation provided._

## Associated functions and methods

<a id="rustdoc-item-7502"></a>

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
- `RecordCloneValue`
