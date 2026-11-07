<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1697"></a>

# Struct `pill_csharp_bridge::manifest_apply::PreparedManifest`

```rust
pub(crate) struct PreparedManifest<'declaration, Declaration, Binding>;
```

Visibility: `crate` · Source: `csharp\pill_csharp_bridge\src\manifest_apply.rs:213`

One kind's declarations, resolved against the live table and ready to
apply. [`prepare_manifest`](fn.prepare_manifest.md#rustdoc-item-1696) produces it, and nothing in it has changed the
engine yet.

## Fields

<a id="rustdoc-item-1693"></a>

### `previous`

```rust
previous: std::collections::HashMap<super::components::StableComponentId, Binding>
```

The table the resolutions were made against. It is passed on so the
execute half writes into it instead of reading the table again.

<a id="rustdoc-item-1694"></a>

### `vanished_identities`

```rust
vanished_identities: Vec<super::components::StableComponentId>
```

The entries the manifest stopped naming, retired after everything else.

<a id="rustdoc-item-1695"></a>

### `resolutions`

```rust
resolutions: Vec<(super::components::StableComponentId, Resolution<'declaration, Declaration>)>
```

Each arriving entry and what has to happen to it.

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
