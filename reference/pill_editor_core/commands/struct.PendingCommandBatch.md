<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1921"></a>

# Struct `pill_editor_core::commands::PendingCommandBatch`

```rust
pub struct PendingCommandBatch;
```

Source: `editor\pill_editor_core\src\commands.rs:1270`

One queued batch and what the executable does with it at the frame
boundary.

## Fields

<a id="rustdoc-item-1974"></a>

### `commands`

```rust
commands: Vec<crate::editor_state::EditorCommand>
```

The commands to apply, in order.

<a id="rustdoc-item-1975"></a>

### `record`

```rust
record: bool
```

Whether the batch is an edit the history records.

<a id="rustdoc-item-1976"></a>

### `label`

```rust
label: String
```

History label, when recorded.

<a id="rustdoc-item-1977"></a>

### `coalesce_key`

```rust
coalesce_key: Option<String>
```

Continuous-edit key, when recorded.

<a id="rustdoc-item-1978"></a>

### `replay`

```rust
replay: Option<crate::drain::HistoryDirection>
```

The history move this batch replays, when it is one.

<a id="rustdoc-item-1979"></a>

### `replay_label`

```rust
replay_label: Option<String>
```

The label of the history step this batch replays, when the replay
came from one.

<a id="rustdoc-item-1980"></a>

### `phase`

```rust
phase: crate::hooks::events::FieldEditPhase
```

The interaction phase its field edits report to the editor API's
callbacks.

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
