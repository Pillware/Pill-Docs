<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4815"></a>

# Struct `pill_engine_core::ecs::world::scripting::ScriptRegistration`

```rust
pub(in ecs::world) struct ScriptRegistration;
```

Visibility: `{'restricted': {'parent': 4727, 'path': '::ecs::world'}}` · Source: `engine\pill_engine_core\src\ecs\world\scripting.rs:108`

One registered script type.

## Fields

<a id="rustdoc-item-4803"></a>

### `component_id`

```rust
component_id: crate::component::ComponentId
```

The type's component id, resolved to a bit at dispatch time so a
re-registration on a new bit is still found.

<a id="rustdoc-item-4804"></a>

### `on_update`

```rust
on_update: Option<fn (_: &mut crate::archetype::ComponentColumns, _: usize, _: crate::entity::Entity, _: *mut World, _: *mut crate::commands::CommandQueue)>
```

The adapter that calls `on_update`, absent when the declaration does
not implement it.

<a id="rustdoc-item-4805"></a>

### `on_update_order`

```rust
on_update_order: i32
```

Sort key of the update pass.

<a id="rustdoc-item-4806"></a>

### `on_create`

```rust
on_create: Option<fn (_: &mut crate::archetype::ComponentColumns, _: usize, _: crate::entity::Entity, _: *mut World, _: *mut crate::commands::CommandQueue, _: &crate::scripting::CreateInfo)>
```

The adapter that calls `on_create`, absent when the declaration does
not implement it.

<a id="rustdoc-item-4807"></a>

### `on_create_order`

```rust
on_create_order: i32
```

Sort key of the `on_create` pass.

<a id="rustdoc-item-4808"></a>

### `on_start`

```rust
on_start: Option<fn (_: &mut crate::archetype::ComponentColumns, _: usize, _: crate::entity::Entity, _: *mut World, _: *mut crate::commands::CommandQueue, _: &crate::scripting::StartInfo)>
```

The adapter that calls `on_start`, absent when the declaration does not
implement it.

<a id="rustdoc-item-4809"></a>

### `on_start_order`

```rust
on_start_order: i32
```

Sort key of the `on_start` pass.

<a id="rustdoc-item-4810"></a>

### `on_stop`

```rust
on_stop: Option<fn (_: &mut crate::archetype::ComponentColumns, _: usize, _: crate::entity::Entity, _: *mut World, _: *mut crate::commands::CommandQueue, _: &crate::scripting::StopInfo)>
```

The adapter that calls `on_stop`, absent when the declaration does not
implement it.

<a id="rustdoc-item-4811"></a>

### `on_stop_order`

```rust
on_stop_order: i32
```

Sort key of the `on_stop` pass.

<a id="rustdoc-item-4812"></a>

### `on_destroy`

```rust
on_destroy: Option<fn (_: &mut crate::archetype::ComponentColumns, _: usize, _: crate::entity::Entity, _: *mut World, _: *mut crate::commands::CommandQueue, _: &crate::scripting::DestroyInfo)>
```

The adapter that calls `on_destroy`, absent when the declaration does
not implement it.

<a id="rustdoc-item-4813"></a>

### `on_destroy_order`

```rust
on_destroy_order: i32
```

Sort key of the `on_destroy` pass.

<a id="rustdoc-item-4814"></a>

### `run_in_edit_mode`

```rust
run_in_edit_mode: bool
```

Whether the script runs while the editor edits as well as while it
plays.

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
