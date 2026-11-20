<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4272"></a>

# Enum `pill_development_host::runtime::RendererStep`

```rust
pub(in runtime) enum RendererStep { ... }
```

Visibility: `{'restricted': {'parent': 4115, 'path': '::runtime'}}` · Source: `hosting\pill_development_host\src\runtime.rs:710`

What a renderer step did, for the pause decision.

## Variants

<a id="rustdoc-item-4269"></a>

### `Unchanged`

```rust
Unchanged
```

Nothing reloaded; whatever was attached stays.

<a id="rustdoc-item-4270"></a>

### `Attached`

```rust
Attached
```

A generation loaded or reloaded and is attached to the window.

<a id="rustdoc-item-4271"></a>

### `Failed`

```rust
Failed
```

A reload or first load was attempted and did not end with a new
generation attached (build, `init` or attach failed; a rollback may
have re-attached the previous generation).

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
