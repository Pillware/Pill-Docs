<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4116"></a>

# Struct `pill_editor_core::gizmo::GizmoState`

```rust
pub struct GizmoState;
```

Source: `editor\pill_editor_core\src\gizmo.rs:48`

The gizmo tool's state: the settings the editor draws and drags with.

This is a world resource, not shell state. The executable owns the drag
(it holds the camera and receives the pick answers) and writes the
preferences file; the shell only queues the commands. Both sides meet here,
so a shell reload keeps the tool as it is, and the draw, the pick and the
drag always agree about which handles are on screen.

## Fields

<a id="rustdoc-item-4113"></a>

### `settings`

```rust
settings: GizmoSettings
```

What the tool edits, in which space, and how it snaps.

<a id="rustdoc-item-4115"></a>

### `tool_frame`

```rust
tool_frame: Option<u8>
```

The active tool's frame the gizmo draws in, when the space row is on
one. `None` means [`GizmoSettings::space`](struct.GizmoSettings.md#rustdoc-item-4114) decides, and a frame index
the tool no longer offers falls back to it as well.

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
- `Copy`
- `Debug`
- `Default`
- `Resource`
