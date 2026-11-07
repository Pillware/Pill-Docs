<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2673"></a>

# Enum `pill_development_host::reload::GraveyardPolicy`

```rust
pub(crate) enum GraveyardPolicy { ... }
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\reload.rs:171`

Whether a subject's retired images are ever unloaded.

## Variants

<a id="rustdoc-item-3466"></a>

### `Bounded`

```rust
Bounded
```

Keep at most [`MAX_GRAVEYARD_GENERATIONS`](constant.MAX_GRAVEYARD_GENERATIONS.md#rustdoc-item-3426) retired images loaded, and
release the oldest beyond that once no column still needs its tables.

<a id="rustdoc-item-2679"></a>

### `KeepAll`

```rust
KeepAll
```

Never unload a retired image.

For a subject whose images leave pointers behind that this code cannot
track or free. The renderer module is one: wgpu, the graphics driver and
the `tracing` callsite registry in the shared `pill_core.dll` all hold
state that points into the image that created it, and releasing a
renderer image hangs the host's frame loop. The cost is one loaded image
per reload, which a development session can afford.

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
