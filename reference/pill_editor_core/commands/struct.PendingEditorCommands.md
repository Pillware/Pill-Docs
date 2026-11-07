<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-167"></a>

# Struct `pill_editor_core::commands::PendingEditorCommands`

```rust
pub struct PendingEditorCommands;
```

Source: `editor\pill_editor_core\src\commands.rs:1089`

The world resource holding the engine mutations queued by command
handlers.

The shell has no `Engine`, so its handlers queue [`EditorCommand`](../editor_state/command/enum.EditorCommand.md#rustdoc-item-1112)s
instead; the executable applies each batch at the frame boundary through
[`crate::drain::apply_pending`](../drain/fn.apply_pending.md#rustdoc-item-1875).

## Fields

<a id="rustdoc-item-1871"></a>

### `batches`

```rust
batches: Vec<PendingCommandBatch>
```

The queued batches, drained by the executable.

<a id="rustdoc-item-1873"></a>

### `reveals`

```rust
reveals: Vec<String>
```

Asset keys the shell asked the executable to show in the platform's
file manager, in request order.

They are not commands: showing a file changes nothing in the world, so
there is nothing to undo. The shell also cannot reach the asset root;
only the executable knows where the project lives and which file
manager the OS has.

<a id="rustdoc-item-1874"></a>

### `focuses`

```rust
focuses: Vec<String>
```

Keys the shell asked the editor to show in the Assets panel, in request
order. Not commands either: moving a selection changes nothing in the
world, and only the executable owns the panel's open folder.

## Associated functions and methods

<a id="rustdoc-item-1876"></a>

### `push`

```rust
pub fn push(self: &mut Self, commands: Vec<EditorCommand>);
```

Queues a batch that is applied but never recorded as an undo step
(pause, step, a scripted command that is not an edit).

<a id="rustdoc-item-1877"></a>

### `push_replay`

```rust
pub fn push_replay(self: &mut Self, commands: Vec<EditorCommand>, direction: HistoryDirection);
```

Queues the batch that replays one step of the undo history.

The batch keeps `direction` because the step is popped before its
commands run. When a replay fails, the executable puts the step back on
the side it came from; without that, the history would claim an edit
that never happened.

<a id="rustdoc-item-1879"></a>

### `reveal`

```rust
pub fn reveal<impl Into<String>: Into<String>>(self: &mut Self, path: impl Into<String>);
```

Asks the executable to show `path` in the platform's file manager.
`path` is an asset key, relative to the asset root that holds it (the
project's `res` or a module's resources).

<a id="rustdoc-item-1880"></a>

### `take_reveals`

```rust
pub fn take_reveals(self: &mut Self) -> Vec<String>;
```

Takes the reveal requests that are waiting for the executable.

<a id="rustdoc-item-1881"></a>

### `focus_asset`

```rust
pub fn focus_asset<impl Into<String>: Into<String>>(self: &mut Self, key: impl Into<String>);
```

Asks the editor to show `key` in the Assets panel: the selection moves
to the asset and the panel opens the folder that holds it.

<a id="rustdoc-item-1882"></a>

### `take_focuses`

```rust
pub fn take_focuses(self: &mut Self) -> Vec<String>;
```

Takes the focus requests that are waiting for the executable.

<a id="rustdoc-item-1883"></a>

### `push_recorded`

```rust
pub fn push_recorded<impl Into<String>: Into<String>>(self: &mut Self, commands: Vec<EditorCommand>, label: impl Into<String>, coalesce_key: Option<String>);
```

Queues an edit the history should record as one undo step.

`coalesce_key` merges continuous edits (a slider drag) that arrive
back to back under the same key into the previous step.

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
- `SerializableAny`
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
- `Clone`
- `Debug`
- `Default`
- `Resource`
