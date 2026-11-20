<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4764"></a>

# Struct `pill_engine_core::ecs::world::lifecycle::PendingScriptEvent`

```rust
pub(in ecs::world) struct PendingScriptEvent;
```

Visibility: `{'restricted': {'parent': 4727, 'path': '::ecs::world'}}` · Source: `engine\pill_engine_core\src\ecs\world\lifecycle.rs:47`

One script component waiting for its `on_create` and `on_start` passes.

## Fields

<a id="rustdoc-item-4758"></a>

### `entity`

```rust
entity: crate::entity::Entity
```

The entity carrying the component.

<a id="rustdoc-item-4759"></a>

### `script_type`

```rust
script_type: String
```

The registered type's key, as `register_script_component` recorded it.

<a id="rustdoc-item-4760"></a>

### `create_cause`

```rust
create_cause: crate::scripting::CreateCause
```

Why the component started existing.

<a id="rustdoc-item-4761"></a>

### `duplicated_from`

```rust
duplicated_from: Option<crate::entity::Entity>
```

The entity it was copied from, when a paste or a duplicate named one.

<a id="rustdoc-item-4762"></a>

### `start_cause`

```rust
start_cause: Option<crate::scripting::StartCause>
```

Why the script starts running, or `None` when this entry only reports a
component starting to exist. A restored edit world has not started
running; a play session tells it so through its own scan.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
