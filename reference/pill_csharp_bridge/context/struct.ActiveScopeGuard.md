<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1073"></a>

# Struct `pill_csharp_bridge::context::ActiveScopeGuard`

```rust
pub(crate) struct ActiveScopeGuard;
```

Visibility: `crate` · Source: `csharp\pill_csharp_bridge\src\context.rs:109`

Keeps the thread-local invocation scope installed for exactly one managed
invocation.

The scope installers create it, and it is dropped when the invocation ends.
Its drop clears every raw pointer from the thread-local scope, including
when managed execution unwinds through a panic.

## Associated functions and methods

<a id="rustdoc-item-1074"></a>

### `install_scope_with_commands`

```rust
pub(crate) fn install_scope_with_commands(world: &mut World, queue: &mut CommandQueue, access: &[NativeSystemAccess], bindings: &std::collections::HashMap<StableComponentId, ComponentBinding>, uses_commands: bool) -> Option<Self>;
```

Publishes one scheduled system's world, command queue, component
bindings, and declared access list for its synchronous managed
callbacks.

<a id="rustdoc-item-1075"></a>

### `install_exclusive_scope`

```rust
pub(crate) fn install_exclusive_scope(world: &mut World, queue: &mut CommandQueue, bindings: &std::collections::HashMap<StableComponentId, ComponentBinding>) -> Option<Self>;
```

Publishes a startup method's scope. It holds the whole world, a command
queue, and the component bindings, and every resource is reachable.

Startup methods run one at a time before the scheduler starts, so the
scope holds the world exclusively and needs no access list. That is why
a startup method can take `Res<T>` / `ResMut<T>` parameters it never
declared to a scheduler.

<a id="rustdoc-item-1076"></a>

### `install_scope`

```rust
pub(in context) fn install_scope(world: &mut World, queue: *mut CommandQueue, access: &[NativeSystemAccess], bindings: &std::collections::HashMap<StableComponentId, ComponentBinding>, uses_commands: bool, exclusive: bool) -> Option<Self>;
```

Installs the complete scope in one assignment, after rejecting a nested
invocation that would overwrite the raw pointers already stored.

Returns `None` when a scope is already installed on this thread. That
means a C# system re-entered the host while it was running, which is a
mistake in the managed code. It must not panic: unwinding through the
.NET frames that called in is undefined behaviour at the FFI boundary,
so the condition is reported instead of raised.

The nested-invocation check is the only fallible step and it runs before
anything is changed, so a rejection leaves no stale state behind.

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
- `Drop`
