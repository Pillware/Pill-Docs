<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1832"></a>

# Struct `pill_editor_core::gizmo::GizmoSettings`

```rust
pub struct GizmoSettings;
```

Source: `editor\pill_editor_core\src\gizmo.rs:317`

The tool's settings: what it edits, in which space, and how it snaps.

The preferences file stores them, snapping steps included, so a step can be
edited by hand and the panel and the file always show the same values.

## Fields

<a id="rustdoc-item-3916"></a>

### `mode`

```rust
mode: GizmoMode
```

The active mode.

<a id="rustdoc-item-3917"></a>

### `space`

```rust
space: GizmoSpace
```

Whether the handles align with the entity's own orientation.

<a id="rustdoc-item-3918"></a>

### `snap`

```rust
snap: bool
```

Whether dragging snaps.

<a id="rustdoc-item-3919"></a>

### `translate_step`

```rust
translate_step: f32
```

Translate snapping step, in world units.

<a id="rustdoc-item-3920"></a>

### `rotate_step_degrees`

```rust
rotate_step_degrees: f32
```

Rotate snapping step, in degrees.

<a id="rustdoc-item-3921"></a>

### `scale_step`

```rust
scale_step: f32
```

Scale snapping step, as a factor increment.

## Associated functions and methods

<a id="rustdoc-item-3922"></a>

### `step_for`

```rust
pub fn step_for(self: &Self, mode: GizmoMode) -> f32;
```

The snapping step that belongs to `mode`.

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
- `DeserializeOwned`
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
- `StructuralPartialEq`
- `PartialEq`
- `Serialize`
- `Deserialize<'de>`
- `Default`
