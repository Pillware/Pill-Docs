<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4202"></a>

# Struct `pill_editor_core::history::HistoryEntry`

```rust
pub struct HistoryEntry;
```

Source: `editor\pill_editor_core\src\history.rs:40`

One undoable step.

## Fields

<a id="rustdoc-item-4195"></a>

### `label`

```rust
label: String
```

What the step is called in the history's log lines
("set PhysicsState.position_x").

<a id="rustdoc-item-4196"></a>

### `entry`

```rust
entry: HistoryEntryKind
```

What undoing and redoing this step does.

<a id="rustdoc-item-4198"></a>

### `touched`

```rust
touched: Vec<String>
```

Component and field identifiers the entry addresses.

<a id="rustdoc-item-4199"></a>

### `memory_bytes`

```rust
memory_bytes: usize
```

Approximate size the entry keeps alive, including the bytes of a file
a restore has to write back.

<a id="rustdoc-item-4200"></a>

### `coalesce_key`

```rust
coalesce_key: Option<String>
```

Continuous edits sharing a key merge while they arrive back to back.

<a id="rustdoc-item-4201"></a>

### `coalesced_at_millis`

```rust
coalesced_at_millis: u64
```

Arrival time of the newest coalesced edit, in milliseconds.

## Associated functions and methods

<a id="rustdoc-item-4203"></a>

### `engine`

```rust
pub fn engine<impl Into<String>: Into<String>>(label: impl Into<String>, forward: Vec<EditorCommand>, inverse: Vec<EditorCommand>) -> Self;
```

Builds an entry from the commands an edit applied and the commands that
reverse it.

<a id="rustdoc-item-4204"></a>

### `selection`

```rust
pub fn selection(before: Option<Entity>, after: Option<Entity>) -> Self;
```

Builds an entry for a selection change from the selection before and
after it.

<a id="rustdoc-item-4205"></a>

### `coalescing`

```rust
pub fn coalescing<impl Into<String>: Into<String>>(self: Self, coalesce_key: impl Into<String>, coalesced_at_millis: u64) -> Self;
```

Marks the entry as one of a continuous edit sequence.

`coalesce_key` names the control being edited and `coalesced_at_millis`
is when the edit arrived. A later push with the same key merges into
this entry while it arrives within the coalesce window.

<a id="rustdoc-item-4206"></a>

### `remap_entity`

```rust
pub fn remap_entity(self: &mut Self, previous: Entity, assigned: Entity);
```

Replaces `previous` with `assigned` wherever this entry names an
entity.

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
