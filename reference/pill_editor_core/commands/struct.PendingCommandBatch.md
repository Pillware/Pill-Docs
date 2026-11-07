<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1872"></a>

# Struct `pill_editor_core::commands::PendingCommandBatch`

```rust
pub struct PendingCommandBatch;
```

Source: `editor\pill_editor_core\src\commands.rs:1181`

One queued batch and what the executable does with it at the frame
boundary.

## Fields

<a id="rustdoc-item-1920"></a>

### `commands`

```rust
commands: Vec<crate::editor_state::EditorCommand>
```

The commands to apply, in order.

<a id="rustdoc-item-1921"></a>

### `record`

```rust
record: bool
```

Whether the batch is an edit the history records.

<a id="rustdoc-item-1922"></a>

### `label`

```rust
label: String
```

History label, when recorded.

<a id="rustdoc-item-1923"></a>

### `coalesce_key`

```rust
coalesce_key: Option<String>
```

Continuous-edit key, when recorded.

<a id="rustdoc-item-1924"></a>

### `replay`

```rust
replay: Option<crate::drain::HistoryDirection>
```

The history move this batch replays, when it is one.

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
