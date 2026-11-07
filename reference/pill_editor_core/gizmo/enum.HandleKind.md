<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3981"></a>

# Enum `pill_editor_core::gizmo::HandleKind`

```rust
pub enum HandleKind { ... }
```

Source: `editor\pill_editor_core\src\gizmo.rs:412`

What a handle id addresses.

## Variants

<a id="rustdoc-item-3977"></a>

### `Axis`

```rust
Axis
```

One axis of one mode.

<a id="rustdoc-item-3980"></a>

### `Plane`

```rust
Plane
```

A translation plane, spanned by two axes.

## Associated functions and methods

<a id="rustdoc-item-3982"></a>

### `axis`

```rust
pub fn axis(self: Self) -> Option<(GizmoMode, usize)>;
```

The axis a single-axis handle drags along; `None` for a plane.

<a id="rustdoc-item-3983"></a>

### `plane`

```rust
pub fn plane(self: Self) -> Option<(usize, usize)>;
```

The axis pair a plane handle spans; `None` for a single axis.

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
- `Equivalent<K>`
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
- `Eq`
