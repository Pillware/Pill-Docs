<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4409"></a>

# Struct `pill_engine_core::ecs::resource::CloneResourceProbe`

```rust
pub struct CloneResourceProbe<T>;
```

Source: `engine\pill_engine_core\src\ecs\resource.rs:286`

Lets a generic insert path record a resource's cloning function when the
type implements `Clone`, and do nothing when it does not.

The resource counterpart of
[`CloneValueProbe`](../../reflection/component_registry/struct.CloneValueProbe.md#rustdoc-item-4406), with the
same autoref trick: [`RecordResourceClone`](trait.RecordResourceClone.md#rustdoc-item-4407) answers on the probe itself when
`T: Clone`, and [`SkipResourceClone`](trait.SkipResourceClone.md#rustdoc-item-4408) on a reference to it otherwise.

## Fields

<a id="rustdoc-item-4405"></a>

### `0`

```rust
0: std::marker::PhantomData<T>
```

_No documentation provided._

## Associated functions and methods

<a id="rustdoc-item-4410"></a>

### `new`

```rust
pub const fn new() -> Self;
```

A probe for the resource `T`.

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
