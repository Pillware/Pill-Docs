<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5032"></a>

# Struct `pill_editor_core::hooks::context::HookQueue`

```rust
pub(crate) struct HookQueue;
```

Visibility: `crate` · Source: `editor\pill_editor_core\src\hooks\context.rs:107`

The commands the callbacks of one drain queued.

The edits go into the batch that is being applied, so one undo step holds
them with the command that caused them. The controls (a tool, a space,
snapping) are not edits: they run as an unrecorded batch of their own, which
is what the toolbox's rows queue.

## Fields

<a id="rustdoc-item-5028"></a>

### `edits`

```rust
edits: Vec<crate::editor_state::EditorCommand>
```

The edits, in the order their callbacks queued them.

<a id="rustdoc-item-5029"></a>

### `controls`

```rust
controls: Vec<crate::editor_state::EditorCommand>
```

The controls, in the order their callbacks queued them.

<a id="rustdoc-item-5030"></a>

### `source`

```rust
source: Option<String>
```

The source of the first callback that queued an edit, which names the
batch a callback answering a diff needed.

<a id="rustdoc-item-5031"></a>

### `reported_drop`

```rust
reported_drop: bool
```

Whether a replay's dropped command has already been reported.

## Associated functions and methods

<a id="rustdoc-item-5033"></a>

### `push_edit`

```rust
pub(in hooks::context) fn push_edit(self: &mut Self, command: EditorCommand, source: &str);
```

Queues one edit for the batch that is applying.

<a id="rustdoc-item-5034"></a>

### `push_control`

```rust
pub(in hooks::context) fn push_control(self: &mut Self, command: EditorCommand);
```

Queues one control, which never joins an undo step.

<a id="rustdoc-item-5035"></a>

### `report_drop`

```rust
pub(in hooks::context) fn report_drop(self: &mut Self, source: &str);
```

Reports the first command a replay dropped.

A replay fires every callback of the edit, so a line per dropped command
would bury the log; one line per drain says what happened.

<a id="rustdoc-item-5036"></a>

### `take_edits`

```rust
pub(crate) fn take_edits(self: &mut Self) -> (Vec<EditorCommand>, Option<String>);
```

Takes the queued edits and the callback that queued the first one.

<a id="rustdoc-item-5037"></a>

### `take_controls`

```rust
pub(crate) fn take_controls(self: &mut Self) -> Vec<EditorCommand>;
```

Takes the queued controls.

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
