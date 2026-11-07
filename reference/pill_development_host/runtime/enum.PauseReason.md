<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3976"></a>

# Enum `pill_development_host::runtime::PauseReason`

```rust
pub(in runtime) enum PauseReason { ... }
```

Visibility: `{'restricted': {'parent': 3859, 'path': '::runtime'}}` · Source: `hosting\pill_development_host\src\runtime.rs:686`

Why a windowed host stopped rendering; see [`RenderingHost`](struct.RenderingHost.md#rustdoc-item-3930)'s `paused`.

## Variants

<a id="rustdoc-item-3975"></a>

### `StaleRendererAfterDataLayoutChange`

```rust
StaleRendererAfterDataLayoutChange
```

The renderer's data crate reloaded with a different component layout,
and the renderer rebuilt against it failed to build, initialize or
attach.

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
- `Equivalent<K>`
- `Clone`
- `Copy`
- `Debug`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
