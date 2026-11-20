<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-8288"></a>

# Struct `pill_editor_core::play_session::EditorPlaySession`

```rust
pub struct EditorPlaySession;
```

Source: `editor\pill_editor_core\src\play_session.rs:59`

The editor state a play session holds, if one is running.

## Fields

<a id="rustdoc-item-8286"></a>

### `held`

```rust
held: Option<HeldEditorState>
```

The held state; `None` between sessions.

## Associated functions and methods

<a id="rustdoc-item-8289"></a>

### `ensure`

```rust
pub fn ensure(world: &mut World);
```

Registers the resource, and keeps the value already in the world, so a
reload does not forget a running session's held state.

<a id="rustdoc-item-8290"></a>

### `is_holding`

```rust
pub fn is_holding(self: &Self) -> bool;
```

Whether a session is holding editor state.

<a id="rustdoc-item-8291"></a>

### `save`

```rust
pub fn save(world: &mut World);
```

Takes the editor state out of the world and keeps it.

Call it before the engine copies the world, so the copy a game runs
against cannot hold the document's history.

<a id="rustdoc-item-8292"></a>

### `restore`

```rust
pub fn restore(world: &mut World) -> bool;
```

Puts the held editor state back, and drops it.

Returns whether a session was holding anything. The history that took
the session's place is dropped, so a play-time step is never in the
document's stack.

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
- `Default`
- `Resource`
