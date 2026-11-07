<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-940"></a>

# Module `pill_core::math`

Source: `engine\pill_core\src\math.rs:1`

Math type aliases over `glam` and the direction vocabulary.
Type aliases for `glam`'s vector and matrix types, a color alias, and an
enum that names directions.

## Responsibilities

- Give engine code one set of names for `glam`'s vector and matrix types,
  and for an RGB color.
- Define [`Direction`], named axes for transform and input code.

## Design

The file holds type aliases and one enum with no data, and `glam` is its
only dependency. The enum lets calling code name an axis in words instead
of passing a `glam` vector.

## Module contents

### Enums
- [`Direction`](enum.Direction.md#rustdoc-item-908) — A direction along one of the coordinate axes.

### Type aliases
- [`Color`](type.Color.md#rustdoc-item-889) — An RGB color with no alpha channel, stored as a [`Vector3f`].
- [`Matrix3f`](type.Matrix3f.md#rustdoc-item-890) — A 3x3 matrix of `f32` values, stored as three `Vec3` columns. `col` and
- [`Matrix3fA`](type.Matrix3fA.md#rustdoc-item-892) — A 3x3 matrix of `f32` values whose columns are `Vec3A` values. It does the
- [`Matrix4f`](type.Matrix4f.md#rustdoc-item-894) — A 4x4 matrix of `f32` values.
- [`Vector2f`](type.Vector2f.md#rustdoc-item-883) — A 2D vector of `f32` components.
- [`Vector2i`](type.Vector2i.md#rustdoc-item-881) — A 2D vector of `i32` components.
- [`Vector3f`](type.Vector3f.md#rustdoc-item-885) — A 3D vector of `f32` components.
- [`Vector4f`](type.Vector4f.md#rustdoc-item-887) — A 4D vector of `f32` components.
