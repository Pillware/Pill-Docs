<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3522"></a>

# Struct `pill_development_host::reload::ReloadCommit`

```rust
pub(crate) struct ReloadCommit;
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\reload.rs:236`

What a committed reload registered, for the caller to keep.

## Fields

<a id="rustdoc-item-3547"></a>

### `exposed_component_names`

```rust
exposed_component_names: Vec<String>
```

Every component type name the new generation registered, plain or
persistable.

A module's set goes on so the C# mirror can bind its native components.
A project's set replaces the project's own record, which the next module
reload reads when it gathers peer names.

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
