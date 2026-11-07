<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4015"></a>

# Enum `pill_development_host::runtime::RendererStep`

```rust
pub(in runtime) enum RendererStep { ... }
```

Visibility: `{'restricted': {'parent': 3859, 'path': '::runtime'}}` · Source: `hosting\pill_development_host\src\runtime.rs:696`

What a renderer step did, for the pause decision.

## Variants

<a id="rustdoc-item-4012"></a>

### `Unchanged`

```rust
Unchanged
```

Nothing reloaded; whatever was attached stays.

<a id="rustdoc-item-4013"></a>

### `Attached`

```rust
Attached
```

A generation loaded or reloaded and is attached to the window.

<a id="rustdoc-item-4014"></a>

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
