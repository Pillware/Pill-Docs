<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2286"></a>

# Struct `pill_master_renderer::resources::renderer_camera::CameraParametersData`

```rust
pub struct CameraParametersData;
```

Source: `extensions\pill_master_renderer\pill_master_renderer\src\resources\renderer_camera.rs:55`

The camera values the shaders read, in the layout of the HLSL
`CameraParams` constant buffer.

The struct here and the HLSL structure are one layout written twice. The
HLSL side is the `pill_master_renderer_data` crate's
`shader_sources/common_shaders/include/common.hlsl`. A field changed here
has to be changed there in the same pass, or every value after it is read
from the wrong place.

## Fields

<a id="rustdoc-item-2282"></a>

### `position`

```rust
position: pill_core::math::Vector4f
```

Camera position in world space.

The shader declares three components, and the fourth is kept at zero:
it is the padding that puts the matrix after it at the offset both
sides expect.

<a id="rustdoc-item-2284"></a>

### `view_projection_matrix`

```rust
view_projection_matrix: pill_core::math::Matrix4f
```

The view and projection matrices combined, applied to world-space
positions by the vertex shader.

<a id="rustdoc-item-2285"></a>

### `inverse_view_projection_matrix`

```rust
inverse_view_projection_matrix: pill_core::math::Matrix4f
```

The inverse of [`Self::view_projection_matrix`](#rustdoc-item-2284). It takes a clip-space
point back to world space, which is how a skybox turns a pixel into the
direction the camera looks along.

## Associated functions and methods

<a id="rustdoc-item-2287"></a>

### `new`

```rust
pub fn new() -> Self;
```

Creates the empty value: the camera at the origin, with identity
matrices, which the first update replaces.

`Default` calls this, so both ways of building the parameters agree on
what "empty" means.

<a id="rustdoc-item-2288"></a>

### `update_data`

```rust
pub fn update_data(self: &mut Self, camera_component: &CameraComponent, transform_component: &TransformComponent, aspect: f32) -> Option<String>;
```

Rebuilds the uniform values from the camera and transform components.

`aspect` is the drawing viewport's width divided by its height. It is
passed in rather than read here, so the projection follows the viewport
the renderer actually draws into. Returns a description of every
projection input that had to be replaced, or `None` when all of the
component's values were usable.

<a id="rustdoc-item-2289"></a>

### `calculate_view_matrix`

```rust
pub(in resources::renderer_camera) fn calculate_view_matrix(transform_component: &TransformComponent) -> Matrix4f;
```

Builds the view matrix: it looks from the transform's position along
the transform's forward axis.

The rotation decides where forward points. A degenerate rotation would
spread NaN values through every basis vector of the matrix, so it is
replaced before this function uses it.

<a id="rustdoc-item-2290"></a>

### `calculate_projection_matrix`

```rust
pub(in resources::renderer_camera) fn calculate_projection_matrix(vertical_fov: f32, near: f32, far: f32, aspect: f32) -> Matrix4f;
```

Builds the perspective matrix for wgpu's 0-to-1 depth range.

The DirectX convention uses that range, which is why glam is asked for
it rather than for the OpenGL one. `vertical_fov` is in degrees, as the
component stores it. The inputs arrive already cleaned up, so
`perspective` never divides by a zero angle or a non-positive plane
distance.

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
- `AnyBitPattern`
- `CheckedBitPattern`
- `NoUninit`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `WasmNotSendSync`
- `WasmNotSend`
- `WasmNotSync`
- `Debug`
- `Copy`
- `Clone`
- `Pod`
- `Zeroable`
- `Default`
