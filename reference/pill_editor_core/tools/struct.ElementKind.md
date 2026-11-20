<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-10806"></a>

# Struct `pill_editor_core::tools::ElementKind`

```rust
pub struct ElementKind;
```

Source: `editor\pill_editor_core\src\tools.rs:247`

What one kind of element a tool exposes looks like and allows.

Plain owned data: the editor keeps what a tool's reporting hook filled in,
even after the image that declared the kind is gone.

## Fields

<a id="rustdoc-item-10799"></a>

### `name`

```rust
name: String
```

The kind's name, which is what a selection stores and what a refusal
names.

<a id="rustdoc-item-10800"></a>

### `shape`

```rust
shape: pill_engine::GizmoPointShape
```

The silhouette the editor draws its handles as.

<a id="rustdoc-item-10802"></a>

### `size_pixels`

```rust
size_pixels: f32
```

How wide its handles draw, in pixels, in every view.

<a id="rustdoc-item-10803"></a>

### `color`

```rust
color: [f32; 4]
```

The colour its idle handles draw in.

<a id="rustdoc-item-10804"></a>

### `multi_select`

```rust
multi_select: bool
```

Whether a Ctrl/Shift click may extend a selection of this kind.

<a id="rustdoc-item-10805"></a>

### `box_select`

```rust
box_select: bool
```

Whether a marquee over empty space selects the elements it covers.

## Associated functions and methods

<a id="rustdoc-item-10807"></a>

### `new`

```rust
pub fn new<impl Into<String>: Into<String>>(name: impl Into<String>) -> ElementKind;
```

A kind with the editor's defaults: a circular handle nine pixels wide,
white, multi-select and box-select allowed.

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
