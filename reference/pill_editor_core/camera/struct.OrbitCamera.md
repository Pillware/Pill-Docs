<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-727"></a>

# Struct `pill_editor_core::camera::OrbitCamera`

```rust
pub struct OrbitCamera;
```

Source: `editor\pill_editor_core\src\camera.rs:72`

One scene viewport's orbit camera.

The camera is not a world entity. The executable publishes it to the scene
surface as a view camera, so project systems can neither see nor move it.
Each scene view keeps its own, which is what makes navigation "the active
viewport's" rather than the editor's.

## Fields

<a id="rustdoc-item-723"></a>

### `pivot`

```rust
pivot: [f32; 3]
```

The point the camera looks at and orbits around.

<a id="rustdoc-item-724"></a>

### `yaw`

```rust
yaw: f32
```

Rotation around the world's Y axis, in radians.

<a id="rustdoc-item-725"></a>

### `pitch`

```rust
pitch: f32
```

Downward tilt, in radians; positive looks down at the pivot.

<a id="rustdoc-item-726"></a>

### `distance`

```rust
distance: f32
```

Distance from the pivot.

## Associated functions and methods

<a id="rustdoc-item-728"></a>

### `forward`

```rust
pub fn forward(self: &Self) -> [f32; 3];
```

The direction the camera looks along.

<a id="rustdoc-item-729"></a>

### `right`

```rust
pub fn right(self: &Self) -> [f32; 3];
```

The camera's right direction. It is always horizontal, and the gizmo
builds its screen-space rays from it.

<a id="rustdoc-item-730"></a>

### `up`

```rust
pub fn up(self: &Self) -> [f32; 3];
```

The camera's up direction. It is perpendicular to the look and right
directions, so it tilts with the pitch.

<a id="rustdoc-item-731"></a>

### `eye`

```rust
pub fn eye(self: &Self) -> [f32; 3];
```

The world position of the eye: the pivot moved back along the look
direction by `distance`.

<a id="rustdoc-item-732"></a>

### `rotation`

```rust
pub fn rotation(self: &Self) -> [f32; 4];
```

The camera's orientation as an `[x, y, z, w]` quaternion built from
yaw and pitch, ready for a transform's rotation field.

<a id="rustdoc-item-733"></a>

### `orbit`

```rust
pub fn orbit(self: &mut Self, delta_x: f32, delta_y: f32);
```

Turns the camera around the pivot by a drag's pixel delta. Dragging
right turns the view right, and dragging down raises the eye so it
looks more steeply down at the pivot.

<a id="rustdoc-item-734"></a>

### `pan`

```rust
pub fn pan(self: &mut Self, delta_x: f32, delta_y: f32, world_per_pixel: f32);
```

Moves the pivot so the world follows the drag, which means the pivot
moves the opposite way. `world_per_pixel` is the world height of one
screen pixel at the pivot's depth; the caller computes it from the
distance and the field of view.

<a id="rustdoc-item-735"></a>

### `dolly`

```rust
pub fn dolly(self: &mut Self, delta_y: f32);
```

Moves the eye along the view by a drag's pixel delta. Dragging up moves
closer and dragging down moves farther, at a rate that feels the same
at every distance.

<a id="rustdoc-item-736"></a>

### `zoom`

```rust
pub fn zoom(self: &mut Self, lines: f32);
```

Zooms by a wheel's line count. A positive count (wheel up) moves the
eye closer and a negative one moves it farther.

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
- `StructuralPartialEq`
- `PartialEq`
- `Default`
