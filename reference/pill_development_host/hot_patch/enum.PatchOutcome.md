<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2403"></a>

# Enum `pill_development_host::hot_patch::PatchOutcome`

```rust
pub(crate) enum PatchOutcome { ... }
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\hot_patch\mod.rs:200`

What one attempt at a fast patch did.

## Variants

<a id="rustdoc-item-2395"></a>

### `Patched`

```rust
Patched
```

A function's implementation was replaced; no reload is needed.

<a id="rustdoc-item-2396"></a>

### `Unchanged`

```rust
Unchanged
```

Nothing relevant changed.

<a id="rustdoc-item-2398"></a>

### `NotPatchable`

```rust
NotPatchable
```

The change is real but out of scope; the caller should reload normally.

<a id="rustdoc-item-2402"></a>

### `Failed`

```rust
Failed
```

A patch was attempted and failed. The previous implementation is intact
and the caller should reload normally.

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
- `Debug`
