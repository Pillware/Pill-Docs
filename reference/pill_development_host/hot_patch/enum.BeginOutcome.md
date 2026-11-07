<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2439"></a>

# Enum `pill_development_host::hot_patch::BeginOutcome`

```rust
pub(crate) enum BeginOutcome { ... }
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\hot_patch\mod.rs:250`

What starting a patch attempt found, and whether a build is owed.

The frame loop reads them this way: `Unchanged` and `NotPatchable` leave the
pending edit for the reload path, `Failed` reports what is still running, and
`Ready` hands the build to a worker whose product is installed by
[`HotPatchSession::activate_attempt`](struct.HotPatchSession.md#rustdoc-item-2438).

## Variants

<a id="rustdoc-item-2429"></a>

### `Unchanged`

```rust
Unchanged
```

Nothing relevant changed.

<a id="rustdoc-item-2431"></a>

### `NotPatchable`

```rust
NotPatchable
```

The change is real but out of scope; the caller should reload normally.

<a id="rustdoc-item-2435"></a>

### `Failed`

```rust
Failed
```

Preparing the replacement failed; the caller should reload normally.

<a id="rustdoc-item-2437"></a>

### `Ready`

```rust
Ready
```

A build is owed: hand it to a worker, then activate its product.

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
