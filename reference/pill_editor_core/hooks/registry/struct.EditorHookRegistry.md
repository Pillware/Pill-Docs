<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6073"></a>

# Struct `pill_editor_core::hooks::registry::EditorHookRegistry`

```rust
pub struct EditorHookRegistry;
```

Source: `editor\pill_editor_core\src\hooks\registry.rs:262`

Every callback a module registered, live or not.

## Fields

<a id="rustdoc-item-6072"></a>

### `registrations`

```rust
registrations: Vec<HookRegistration>
```

The registrations, oldest first.

## Associated functions and methods

<a id="rustdoc-item-6074"></a>

### `register`

```rust
pub fn register(self: &mut Self, source: &str, event: HookEvent, callback: HookCallback, liveness: &Arc<ModuleLiveness>);
```

Registers one callback, replacing the callback the same crate registered
for the same event.

Dead registrations are dropped on the way through, so a reload leaves
one live entry per crate and event instead of one per generation.

<a id="rustdoc-item-6076"></a>

### `live_all`

```rust
pub(crate) fn live_all(self: &Self) -> Vec<LiveHook>;
```

Every live callback, in registration order.

<a id="rustdoc-item-6077"></a>

### `entries`

```rust
pub fn entries(self: &Self) -> &[HookRegistration];
```

Returns every registration, in registration order.

<a id="rustdoc-item-6078"></a>

### `ensure`

```rust
pub fn ensure(world: &mut pill_engine::World);
```

Registers the resource, inserting a default only when the world has
none, so a reload keeps the live registrations.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
- `SimdFrom<T, S>`
- `SimdInto<T, S>`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `IntoEither`
- `Instrument`
- `WithSubscriber`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `Debug`
- `Default`
- `Resource`
