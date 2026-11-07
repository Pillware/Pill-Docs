<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3737"></a>

# Struct `pill_editor_core::gizmo::GizmoState`

```rust
pub struct GizmoState;
```

Source: `editor\pill_editor_core\src\gizmo.rs:45`

The gizmo tool's state: the settings the editor draws and drags with.

This is a world resource, not shell state. The executable owns the drag
(it holds the camera and receives the pick answers) and writes the
preferences file; the shell only queues the commands. Both sides meet here,
so a shell reload keeps the tool as it is, and the draw, the pick and the
drag always agree about which handles are on screen.

## Fields

<a id="rustdoc-item-3736"></a>

### `settings`

```rust
settings: GizmoSettings
```

What the tool edits, in which space, and how it snaps.

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
