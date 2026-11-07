<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-193"></a>

# Struct `pill_engine::component_registry::ExportAddress`

```rust
pub struct ExportAddress;
```

Source: `engine\pill_engine\src\component_registry.rs:261`

The address of an exported function, as data.

A newtype so descriptors can live in a `static` inventory: a raw function
pointer is neither `Send` nor `Sync` on its own.

## Fields

<a id="rustdoc-item-266"></a>

### `0`

```rust
0: *const ()
```

_No documentation provided._

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
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Clone`
- `Copy`
- `Debug`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
- `Send`
- `Sync`
