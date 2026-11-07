<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5737"></a>

# Struct `pill_editor_core::panels::ModuleLiveness`

```rust
pub struct ModuleLiveness;
```

Source: `editor\pill_editor_core\src\panels.rs:41`

The liveness marker of one registration source.

The executable holds the one strong handle, per source, and drops it when
that module unloads. The registry stores a [`Weak`] to it, so a strong
count of zero means every panel the source registered is dead. A marker
struct on purpose: it holds no data, and only its strong count matters.

## Fields

<a id="rustdoc-item-5734"></a>

### `0`

```rust
0: ()
```

_No documentation provided._

## Associated functions and methods

<a id="rustdoc-item-5738"></a>

### `new`

```rust
pub fn new() -> Arc<ModuleLiveness>;
```

Creates a marker for one registering crate.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
- `SimdFrom<T, S>`
- `SimdInto<T, S>`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `IntoEither`
- `Instrument`
- `WithSubscriber`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `Debug`
- `Default`
