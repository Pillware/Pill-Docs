<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2769"></a>

# Struct `pill_editor_core::hooks::dispatch::HookSession`

```rust
pub struct HookSession;
```

Source: `editor\pill_editor_core\src\hooks\dispatch.rs:73`

One drain's callbacks, notices and follow-ups.

## Fields

<a id="rustdoc-item-5122"></a>

### `live`

```rust
live: Vec<crate::hooks::registry::LiveHook>
```

Every live callback, copied out of the registry.

<a id="rustdoc-item-5125"></a>

### `notices`

```rust
notices: Vec<crate::hooks::context::HookNotice>
```

The notices the callbacks posted this drain.

<a id="rustdoc-item-5126"></a>

### `queue`

```rust
queue: crate::hooks::context::HookQueue
```

The commands the callbacks queued.

<a id="rustdoc-item-5127"></a>

### `cause`

```rust
cause: crate::hooks::events::FieldEditCause
```

What made the current batch happen.

<a id="rustdoc-item-5128"></a>

### `phase`

```rust
phase: crate::hooks::events::FieldEditPhase
```

The interaction phase of the current batch.

## Associated functions and methods

<a id="rustdoc-item-5129"></a>

### `new`

```rust
pub(crate) fn new(world: &World) -> Self;
```

Builds a session from the world's live registrations.

<a id="rustdoc-item-5130"></a>

### `has`

```rust
pub(in hooks::dispatch) fn has(self: &Self, event: HookEvent) -> bool;
```

Whether any live callback answers `event`.

<a id="rustdoc-item-5132"></a>

### `prepare_field_batch`

```rust
pub(crate) fn prepare_field_batch(self: &mut Self, engine: &mut Engine, commands: &mut [EditorCommand], cause: FieldEditCause, phase: FieldEditPhase) -> bool;
```

Runs the before-callbacks over one batch.

Returns `false` when a callback refused the batch: nothing may apply, no
history step may be recorded, and the refusal is already a notice and a
log line.

<a id="rustdoc-item-5133"></a>

### `after_field_command`

```rust
pub(crate) fn after_field_command(self: &mut Self, engine: &mut Engine, command: &EditorCommand, inverse: Option<&EditorCommand>);
```

Runs the after-callbacks for one command that applied successfully.

<a id="rustdoc-item-5134"></a>

### `fire_command_events`

```rust
pub(in hooks::dispatch) fn fire_command_events(self: &mut Self, engine: &mut Engine, command: &EditorCommand, inverse: Option<&EditorCommand>);
```

Fires the event one applied command means, when it has one.

<a id="rustdoc-item-5135"></a>

### `call_asset`

```rust
pub(in hooks::dispatch) fn call_asset(self: &mut Self, engine: &mut Engine, kind: AssetEditKind, path: &str);
```

Fires one asset edit at the callbacks that answer it.

<a id="rustdoc-item-5137"></a>

### `fire_history`

```rust
pub(crate) fn fire_history(self: &mut Self, engine: &mut Engine, direction: &str, label: &str);
```

Fires the history event for one replay batch.

<a id="rustdoc-item-5138"></a>

### `fire_diffs`

```rust
pub(crate) fn fire_diffs(self: &mut Self, engine: &mut Engine);
```

Compares the live selection and tool state with the last reported one
and fires what changed.

<a id="rustdoc-item-5139"></a>

### `take_queued_batches`

```rust
pub(crate) fn take_queued_batches(self: &mut Self) -> Vec<PendingCommandBatch>;
```

Takes what the callbacks queued outside a command, as the batches it
needs.

A callback answering a diff (the selection, the tool or the element
slot) runs after every batch of the drain, so its edits have no batch to
join: they become one recorded step labelled after the callback that
queued them, `hook {source}`. Its controls (a tool, a space, snapping)
never record, so they run as one unrecorded batch of their own, exactly
what the toolbox's rows queue.

<a id="rustdoc-item-5140"></a>

### `publish_notices`

```rust
pub(crate) fn publish_notices(self: &mut Self, world: &mut World);
```

Fold this drain's notices into the world's queue for the executable.

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
- `CommandObserver`
