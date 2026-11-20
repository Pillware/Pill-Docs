<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6167"></a>

# Struct `pill_editor_core::hooks::requests::EditorHookRequests`

```rust
pub struct EditorHookRequests;
```

Source: `editor\pill_editor_core\src\hooks\requests.rs:78`

The callback requests queued since the executable last looked.

A request is taken once, so one queued by a module that has since unloaded
cannot be bound to a live entry.

## Fields

<a id="rustdoc-item-6166"></a>

### `pending`

```rust
pending: Vec<HookRequest>
```

The requests, oldest first.

## Associated functions and methods

<a id="rustdoc-item-6168"></a>

### `push`

```rust
pub fn push(self: &mut Self, request: HookRequest);
```

Queues one request.

<a id="rustdoc-item-6169"></a>

### `drain`

```rust
pub fn drain(self: &mut Self) -> Vec<HookRequest>;
```

Takes every queued request and leaves the queue empty.

<a id="rustdoc-item-6170"></a>

### `ensure`

```rust
pub fn ensure(world: &mut pill_engine::World);
```

Registers the resource, inserting a default only when the world has
none.

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
