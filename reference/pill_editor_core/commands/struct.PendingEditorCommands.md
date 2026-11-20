<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-167"></a>

# Struct `pill_editor_core::commands::PendingEditorCommands`

```rust
pub struct PendingEditorCommands;
```

Source: `editor\pill_editor_core\src\commands.rs:1150`

The world resource holding the engine mutations queued by command
handlers.

The shell has no `Engine`, so its handlers queue [`EditorCommand`](../editor_state/command/enum.EditorCommand.md#rustdoc-item-1157)s
instead; the executable applies each batch at the frame boundary through
[`crate::drain::apply_pending`](../drain/fn.apply_pending.md#rustdoc-item-1924).

## Fields

<a id="rustdoc-item-1920"></a>

### `batches`

```rust
batches: Vec<PendingCommandBatch>
```

The queued batches, drained by the executable.

<a id="rustdoc-item-1922"></a>

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

<a id="rustdoc-item-1923"></a>

### `focuses`

```rust
focuses: Vec<String>
```

Keys the shell asked the editor to show in the Assets panel, in request
order. Not commands either: moving a selection changes nothing in the
world, and only the executable owns the panel's open folder.

## Associated functions and methods

<a id="rustdoc-item-1925"></a>

### `push`

```rust
pub fn push(self: &mut Self, commands: Vec<EditorCommand>);
```

Queues a batch that is applied but never recorded as an undo step
(pause, step, a scripted command that is not an edit).

<a id="rustdoc-item-1926"></a>

### `push_replay`

```rust
pub fn push_replay(self: &mut Self, commands: Vec<EditorCommand>, direction: HistoryDirection, label: Option<&str>);
```

Queues the batch that replays one step of the undo history.

The batch keeps `direction` because the step is popped before its
commands run. When a replay fails, the executable puts the step back on
the side it came from; without that, the history would claim an edit
that never happened. `label` is the step's own label, which the
editor API's history callback reports.

<a id="rustdoc-item-1928"></a>

### `reveal`

```rust
pub fn reveal<impl Into<String>: Into<String>>(self: &mut Self, path: impl Into<String>);
```

Asks the executable to show `path` in the platform's file manager.
`path` is an asset key, relative to the asset root that holds it (the
project's `res` or a module's resources).

<a id="rustdoc-item-1929"></a>

### `take_reveals`

```rust
pub fn take_reveals(self: &mut Self) -> Vec<String>;
```

Takes the reveal requests that are waiting for the executable.

<a id="rustdoc-item-1930"></a>

### `focus_asset`

```rust
pub fn focus_asset<impl Into<String>: Into<String>>(self: &mut Self, key: impl Into<String>);
```

Asks the editor to show `key` in the Assets panel: the selection moves
to the asset and the panel opens the folder that holds it.

<a id="rustdoc-item-1931"></a>

### `take_focuses`

```rust
pub fn take_focuses(self: &mut Self) -> Vec<String>;
```

Takes the focus requests that are waiting for the executable.

<a id="rustdoc-item-1932"></a>

### `push_recorded`

```rust
pub fn push_recorded<impl Into<String>: Into<String>>(self: &mut Self, commands: Vec<EditorCommand>, label: impl Into<String>, coalesce_key: Option<String>);
```

Queues an edit the history should record as one undo step.

`coalesce_key` merges continuous edits (a slider drag) that arrive
back to back under the same key into the previous step.

<a id="rustdoc-item-1935"></a>

### `push_recorded_with_phase`

```rust
pub fn push_recorded_with_phase<impl Into<String>: Into<String>>(self: &mut Self, commands: Vec<EditorCommand>, label: impl Into<String>, coalesce_key: Option<String>, phase: FieldEditPhase);
```

[`Self::push_recorded`](#rustdoc-item-1932) with the interaction phase its field edits
report to the editor API's callbacks.

A continuous control queues [`FieldEditPhase::Interactive`](../hooks/events/enum.FieldEditPhase.md#rustdoc-item-1933) frames while
it is dragged and one [`FieldEditPhase::Committed`](../hooks/events/enum.FieldEditPhase.md#rustdoc-item-1934) batch on release;
every other edit is a single committed batch.

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
