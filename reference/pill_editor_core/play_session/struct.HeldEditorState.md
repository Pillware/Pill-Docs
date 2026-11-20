<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-8258"></a>

# Struct `pill_editor_core::play_session::HeldEditorState`

```rust
pub struct HeldEditorState;
```

Source: `editor\pill_editor_core\src\play_session.rs:42`

What a play session keeps aside and puts back at Stop.

## Fields

<a id="rustdoc-item-8255"></a>

### `history`

```rust
history: crate::history::CommandHistory
```

The undo stack as it was before Play. The live stack is empty while the
session runs, so a play-time edit cannot reach the document's history.

<a id="rustdoc-item-8256"></a>

### `selection`

```rust
selection: crate::editor_state::EditorSelection
```

The selection as it was before Play. A game that selects something must
not leave the Inspector pointed at an entity that Stop destroys.

<a id="rustdoc-item-8257"></a>

### `scene_dirty`

```rust
scene_dirty: bool
```

Whether the open scene was unsaved before Play.

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
