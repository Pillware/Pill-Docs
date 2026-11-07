<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1429"></a>

# Enum `pill_editor::runner::CommandAction`

```rust
pub(in runner) enum CommandAction { ... }
```

Visibility: `{'restricted': {'parent': 483, 'path': '::runner'}}` · Source: `editor\pill_editor\src\runner\mod.rs:3836`

What a registry command id does in this executable.

The registry owns the ids, the titles and the chords; this maps an id to
the action it runs, so a rebinding reaches the same code a menu row or a
scripted command does. A command with no action here stays inert.

## Variants

<a id="rustdoc-item-1424"></a>

### `GizmoTool`

```rust
GizmoTool
```

Select a gizmo tool.

<a id="rustdoc-item-1425"></a>

### `Undo`

```rust
Undo
```

Step the history back one entry.

<a id="rustdoc-item-1426"></a>

### `Redo`

```rust
Redo
```

Step the history forward one entry.

<a id="rustdoc-item-1427"></a>

### `PauseToggle`

```rust
PauseToggle
```

Flip the engine's pause flag.

<a id="rustdoc-item-1428"></a>

### `Step`

```rust
Step
```

Advance exactly one frame.

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
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `SerializableAny`
- `Equivalent<K>`
- `SimdFrom<T, S>`
- `SimdInto<T, S>`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `WasmNotSendSync`
- `WasmNotSend`
- `WasmNotSync`
- `Clone`
- `Copy`
- `Debug`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
