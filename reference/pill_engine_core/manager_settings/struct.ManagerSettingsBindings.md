<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7255"></a>

# Struct `pill_engine_core::manager_settings::ManagerSettingsBindings`

```rust
pub(crate) struct ManagerSettingsBindings;
```

Visibility: `crate` · Source: `engine\pill_engine_core\src\manager_settings.rs:150`

The path each manager's settings asset was bound to, and the bytes it last
applied.

A world resource rather than a field of the manager, because it is the
engine's bookkeeping and has to outlive the manager's own reload: a module
that comes back with a new binding store would otherwise forget the path a
game chose.

## Fields

<a id="rustdoc-item-8330"></a>

### `bindings`

```rust
bindings: std::collections::BTreeMap<crate::resource::ResourceId, ManagerSettingsBinding>
```

One entry per manager that has been bound or applied.

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
- `Default`
- `Resource`
