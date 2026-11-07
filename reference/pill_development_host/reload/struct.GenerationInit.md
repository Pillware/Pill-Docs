<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3576"></a>

# Struct `pill_development_host::reload::GenerationInit`

```rust
pub(crate) struct GenerationInit;
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\reload.rs:247`

What one generation's `init` registered while its image was loaded.

## Fields

<a id="rustdoc-item-3571"></a>

### `status`

```rust
status: u32
```

Status the artifact's entry point returned. Zero means success.

<a id="rustdoc-item-3572"></a>

### `registered_type_names`

```rust
registered_type_names: Vec<String>
```

Persistable component type names this generation registered, for
forgotten-type detection on the next reload.

<a id="rustdoc-item-3573"></a>

### `registered_schemas`

```rust
registered_schemas: Vec<(String, u64)>
```

Schema hash of each of those types as this generation declared it.

<a id="rustdoc-item-3574"></a>

### `registered_resource_ids`

```rust
registered_resource_ids: Vec<pill_engine::ResourceId>
```

Resource ids this generation claimed, so retiring it releases exactly
those and no other subject's.

<a id="rustdoc-item-3575"></a>

### `component_names`

```rust
component_names: Vec<String>
```

Every component type name registered, plain and persistable alike, for
the C# backend's bindings.

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
