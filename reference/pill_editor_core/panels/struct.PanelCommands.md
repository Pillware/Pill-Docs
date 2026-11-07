<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6253"></a>

# Struct `pill_editor_core::panels::PanelCommands`

```rust
pub struct PanelCommands;
```

Source: `editor\pill_editor_core\src\panels.rs:387`

The commands this frame's panels asked for, applied by the executable at
the frame boundary.

This is a resource rather than a queue the shell owns. The shell is
replaced on every reload, and a command queued by a panel of the old
generation must still be applied by the executable, which survives the
reload.

## Fields

<a id="rustdoc-item-6252"></a>

### `commands`

```rust
commands: Vec<PanelCommand>
```

The commands, oldest first.

## Associated functions and methods

<a id="rustdoc-item-6254"></a>

### `drain`

```rust
pub fn drain(self: &mut Self) -> Vec<PanelCommand>;
```

Takes every queued command and leaves the queue empty.

<a id="rustdoc-item-6255"></a>

### `push`

```rust
pub fn push(self: &mut Self, command: PanelCommand);
```

Queues one command, as a panel body does through its `PanelContext`.

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
