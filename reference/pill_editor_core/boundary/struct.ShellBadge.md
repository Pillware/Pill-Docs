<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-202"></a>

# Struct `pill_editor_core::boundary::ShellBadge`

```rust
pub struct ShellBadge;
```

Source: `editor\pill_editor_core\src\boundary.rs:110`

One entity's badge in one scene view.

## Fields

<a id="rustdoc-item-242"></a>

### `view`

```rust
view: usize
```

The scene view the badge belongs to, as a view index.

<a id="rustdoc-item-243"></a>

### `x`

```rust
x: f32
```

Where the entity projects to along x, in the main window's logical
points.

<a id="rustdoc-item-244"></a>

### `y`

```rust
y: f32
```

Where the entity projects to along y, in the main window's logical
points.

<a id="rustdoc-item-245"></a>

### `entity`

```rust
entity: pill_engine::Entity
```

The entity the badge names; a click selects it.

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
