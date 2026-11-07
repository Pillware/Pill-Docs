<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1029"></a>

# Struct `pill_csharp_bridge::context::ActiveScopeData`

```rust
pub(in context) struct ActiveScopeData;
```

Visibility: `{'restricted': {'parent': 1030, 'path': '::context'}}` · Source: `csharp\pill_csharp_bridge\src\context.rs:89`

One complete managed invocation scope.

Keeping every pointer in one value means installing the scope and clearing
it are one [`Cell::set`] call each, so a panic can never leave a partially
installed scope on this thread.

## Fields

<a id="rustdoc-item-1036"></a>

### `world`

```rust
world: *mut pill_engine::World
```

_No documentation provided._

<a id="rustdoc-item-1037"></a>

### `queue`

```rust
queue: *mut pill_engine::commands::CommandQueue
```

_No documentation provided._

<a id="rustdoc-item-1039"></a>

### `accesses`

```rust
accesses: (*const super::abi::NativeSystemAccess, usize)
```

_No documentation provided._

<a id="rustdoc-item-1040"></a>

### `bindings`

```rust
bindings: *const std::collections::HashMap<StableComponentId, ComponentBinding>
```

_No documentation provided._

<a id="rustdoc-item-1041"></a>

### `uses_commands`

```rust
uses_commands: bool
```

_No documentation provided._

<a id="rustdoc-item-1042"></a>

### `exclusive`

```rust
exclusive: bool
```

Whether the invocation holds the whole world, as a startup method does.
Every resource access is then allowed without a declaration, because
nothing else can be running.

<a id="rustdoc-item-1043"></a>

### `scope_token`

```rust
scope_token: u32
```

Invocation token copied into every chunk issued during this invocation.

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
- `Clone`
- `Copy`
