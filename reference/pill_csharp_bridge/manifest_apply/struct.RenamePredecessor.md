<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-980"></a>

# Struct `pill_csharp_bridge::manifest_apply::RenamePredecessor`

```rust
pub(crate) struct RenamePredecessor<'binding, Binding>;
```

Visibility: `crate` · Source: `csharp\pill_csharp_bridge\src\manifest_apply.rs:90`

The live entry that an arriving declaration's alias reached.

The whole entry is passed because applying a rename retires the predecessor.
Once the data has moved, the registration is gone, so this is the only
description of what was there.

## Fields

<a id="rustdoc-item-1513"></a>

### `identity`

```rust
identity: super::components::StableComponentId
```

The table key the predecessor is bound under.

<a id="rustdoc-item-1514"></a>

### `alias`

```rust
alias: &'binding str
```

The alias that reached it, which is the name it was registered under.

<a id="rustdoc-item-1515"></a>

### `binding`

```rust
binding: &'binding Binding
```

Its live binding.

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
