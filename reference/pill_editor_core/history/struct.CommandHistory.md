<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4366"></a>

# Struct `pill_editor_core::history::CommandHistory`

```rust
pub struct CommandHistory;
```

Source: `editor\pill_editor_core\src\history.rs:170`

The editor's undo stack.

## Fields

<a id="rustdoc-item-4359"></a>

### `entries`

```rust
entries: Vec<HistoryEntry>
```

Oldest first; `entries[cursor]` is the next redo.

<a id="rustdoc-item-4361"></a>

### `cursor`

```rust
cursor: usize
```

Number of entries currently applied.

<a id="rustdoc-item-4362"></a>

### `step_cap`

```rust
step_cap: usize
```

Maximum number of entries.

<a id="rustdoc-item-4363"></a>

### `memory_budget_bytes`

```rust
memory_budget_bytes: usize
```

Maximum retained bytes.

<a id="rustdoc-item-4364"></a>

### `memory_used_bytes`

```rust
memory_used_bytes: usize
```

Sum of the entries' `memory_bytes`.

<a id="rustdoc-item-4365"></a>

### `registry_stamp`

```rust
registry_stamp: u64
```

The registry stamp (a hash of the registered components and their
fields) that the last prune ran against. It starts at zero, so the first
prune that gets a real stamp does the walk.

## Associated functions and methods

<a id="rustdoc-item-4367"></a>

### `DEFAULT_STEP_CAP`

```rust
const DEFAULT_STEP_CAP: usize = 500;
```

Steps kept when the preferences do not say otherwise.

<a id="rustdoc-item-4368"></a>

### `DEFAULT_MEMORY_BUDGET_BYTES`

```rust
const DEFAULT_MEMORY_BUDGET_BYTES: usize = _;
```

Bytes kept when the preferences do not say otherwise.

<a id="rustdoc-item-4369"></a>

### `DEFAULT_COALESCE_WINDOW`

```rust
const DEFAULT_COALESCE_WINDOW: Duration = _;
```

Continuous edits within this window merge into one step.

<a id="rustdoc-item-4370"></a>

### `new`

```rust
pub fn new(step_cap: usize, memory_budget_bytes: usize) -> Self;
```

Creates a history that enforces `step_cap` entries and
`memory_budget_bytes` bytes.

<a id="rustdoc-item-4371"></a>

### `ensure`

```rust
pub fn ensure(world: &mut pill_engine::World);
```

Registers the history resource, inserting a default only when the world
has none, so a reload keeps the live history.

<a id="rustdoc-item-4372"></a>

### `clear`

```rust
pub fn clear(self: &mut Self);
```

Drops every recorded step but keeps the configured limits.

Starting a new scene or opening a file clears the history this way. The
entries name entities the previous document owned, and undoing one
would edit a world those entities never belonged to.

<a id="rustdoc-item-4373"></a>

### `set_limits`

```rust
pub fn set_limits(self: &mut Self, step_cap: usize, memory_budget_bytes: usize) -> PushOutcome;
```

Applies the limits the preferences set and trims while the history is
over either of them.

The returned outcome says how many entries that dropped and which limit
caused it, so the caller can log it.

<a id="rustdoc-item-4374"></a>

### `push`

```rust
pub fn push(self: &mut Self, incoming_entry: HistoryEntry, now_millis: u64, coalesce_window: Duration) -> PushOutcome;
```

Pushes one step, merging it into the entry before it when the two
coalesce.

`now_millis` is when the step arrived, and `coalesce_window` is how
close two coalescing edits must be to merge. A push after an undo drops
the redo tail, because the user has started a new branch.

<a id="rustdoc-item-4375"></a>

### `trim`

```rust
pub(in history) fn trim(self: &mut Self) -> (usize, Option<TrimReason>);
```

Drops the oldest entries until both limits hold.

<a id="rustdoc-item-4376"></a>

### `pop_undo`

```rust
pub fn pop_undo(self: &mut Self) -> Option<HistoryEntry>;
```

Pops the newest applied step for undoing.

<a id="rustdoc-item-4377"></a>

### `pop_redo`

```rust
pub fn pop_redo(self: &mut Self) -> Option<HistoryEntry>;
```

Pops the next unapplied step for redoing.

<a id="rustdoc-item-4378"></a>

### `undo_rollback`

```rust
pub fn undo_rollback(self: &mut Self);
```

Puts the cursor back after an undo whose commands failed.

The step is popped before its commands run. When one of them fails, the
world still shows the edit, so the step must be undoable again rather
than offered as redoable.

<a id="rustdoc-item-4379"></a>

### `redo_rollback`

```rust
pub fn redo_rollback(self: &mut Self);
```

Puts the cursor back after a redo whose commands failed.

<a id="rustdoc-item-4380"></a>

### `steps`

```rust
pub fn steps(self: &Self) -> usize;
```

Entries currently held (applied plus redoable).

<a id="rustdoc-item-4381"></a>

### `undo_depth`

```rust
pub fn undo_depth(self: &Self) -> usize;
```

Steps available to undo.

<a id="rustdoc-item-4382"></a>

### `redo_depth`

```rust
pub fn redo_depth(self: &Self) -> usize;
```

Steps available to redo.

<a id="rustdoc-item-4383"></a>

### `memory_bytes`

```rust
pub fn memory_bytes(self: &Self) -> usize;
```

Retained size in bytes.

<a id="rustdoc-item-4384"></a>

### `remap_entity`

```rust
pub fn remap_entity(self: &mut Self, previous: Entity, assigned: Entity);
```

Follows an entity to the fresh handle a restore assigned it.

<a id="rustdoc-item-4385"></a>

### `drop_stale`

```rust
pub fn drop_stale<impl Fn(&str) -> bool: Fn(&str) -> bool>(self: &mut Self, is_valid: impl Fn(&str) -> bool, registry_stamp: u64) -> usize;
```

Drops every entry that names an identifier `is_valid` rejects.

`is_valid` is asked about `"component"` and `"component.field"`
strings. One rejected identifier is enough to drop the whole entry,
because undoing it would target storage that no longer exists.

`registry_stamp` identifies the registry the check runs against: the
caller hashes the registered component names and their fields. An
unchanged stamp returns without walking the entries, so a caller can
ask again on every frame.

Returns how many entries were dropped.

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
