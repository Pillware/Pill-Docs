<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-11196"></a>

# Struct `pill_editor_core::tools::ElementHandle`

```rust
pub struct ElementHandle;
```

Source: `editor\pill_editor_core\src\tools.rs:562`

One element of one frame, as the editor draws and picks it.

The editor builds these every frame from the active tool's report, so a
handle can never outlive the element it names. The fields are what the draw
call and the hit test need, so neither has to read the tool again.

## Fields

<a id="rustdoc-item-11187"></a>

### `handle`

```rust
handle: u32
```

The handle id the element is pickable by.

<a id="rustdoc-item-11188"></a>

### `entity`

```rust
entity: pill_engine::Entity
```

The entity the element belongs to.

<a id="rustdoc-item-11189"></a>

### `element`

```rust
element: u64
```

The tool's own id for the element.

<a id="rustdoc-item-11190"></a>

### `kind`

```rust
kind: String
```

The kind's name, as the tool reported it.

<a id="rustdoc-item-11191"></a>

### `transform`

```rust
transform: ElementTransform
```

Where it sits and which way it is turned, in world space: the press
capture a drag restores reads it from here.

<a id="rustdoc-item-11192"></a>

### `shape`

```rust
shape: pill_engine::GizmoPointShape
```

The silhouette the handle draws as.

<a id="rustdoc-item-11193"></a>

### `size_pixels`

```rust
size_pixels: f32
```

How wide it draws, in pixels, in every view.

<a id="rustdoc-item-11194"></a>

### `color`

```rust
color: [f32; 4]
```

The colour it draws in, with its selection and hover state applied.

<a id="rustdoc-item-11195"></a>

### `selected`

```rust
selected: bool
```

Whether it is part of the current selection.

## Associated functions and methods

<a id="rustdoc-item-11197"></a>

### `target`

```rust
pub fn target(self: &Self) -> ElementHandleTarget;
```

What a pick on this handle means.

<a id="rustdoc-item-11198"></a>

### `covers_pixel`

```rust
pub fn covers_pixel(self: &Self, x: f32, y: f32, centre: (f32, f32)) -> bool;
```

Whether a press at `x`/`y`, in the same pixels the handle was
projected to, hits it.

The test is a square around the handle's centre, half its pixel size
plus [`ELEMENT_PICK_SLACK_PIXELS`](constant.ELEMENT_PICK_SLACK_PIXELS.md#rustdoc-item-11186) wide on each side: the shape of the
pick quad, not its silhouette. A circle's corners are therefore
pickable too, exactly as they are in the pick buffer.

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
- `StructuralPartialEq`
- `PartialEq`
