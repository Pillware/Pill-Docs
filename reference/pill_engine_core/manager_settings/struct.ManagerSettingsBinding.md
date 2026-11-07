<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-8331"></a>

# Struct `pill_engine_core::manager_settings::ManagerSettingsBinding`

```rust
pub(crate) struct ManagerSettingsBinding;
```

Visibility: `crate` · Source: `engine\pill_engine_core\src\manager_settings.rs:158`

One manager's binding: the path it reads and the fingerprint of what reached
it.

## Fields

<a id="rustdoc-item-8359"></a>

### `path`

```rust
path: String
```

The asset path the manager reads.

<a id="rustdoc-item-8360"></a>

### `applied_fingerprint`

```rust
applied_fingerprint: Option<u64>
```

The fingerprint of the bytes last applied, or `None` when nothing has
been applied yet.

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
- `Debug`
- `Clone`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
