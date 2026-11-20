<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4316"></a>

# Struct `pill_engine_core::services::gizmos::GizmoRegistry`

```rust
pub struct GizmoRegistry;
```

Source: `engine\pill_engine_core\src\services\gizmos.rs:564`

Every gizmo registered in this world, the types an editor has hidden, and
what each gizmo drew last frame.

It is kept across a reload (`PlayState::Keep`) and refilled by the image that
is loading, so a reload replaces the declared function pointers instead of
reading through one that was unloaded.

## Fields

<a id="rustdoc-item-8945"></a>

### `entries`

```rust
entries: Vec<GizmoEntry>
```

Every registered gizmo, sorted by type name.

<a id="rustdoc-item-8946"></a>

### `hidden_types`

```rust
hidden_types: std::collections::BTreeSet<String>
```

The component type names an editor has hidden.

<a id="rustdoc-item-8948"></a>

### `enabled`

```rust
enabled: bool
```

Whether the pass draws at all.

## Associated functions and methods

<a id="rustdoc-item-8949"></a>

### `is_enabled`

```rust
pub fn is_enabled(self: &Self) -> bool;
```

Whether the pass draws.

<a id="rustdoc-item-8950"></a>

### `set_enabled`

```rust
pub fn set_enabled(self: &mut Self, enabled: bool);
```

Turns every gizmo on or off, which is the toolbox's switch.

<a id="rustdoc-item-8951"></a>

### `publish`

```rust
pub fn publish(self: &mut Self, declarations: &[GizmoDeclaration]);
```

Registers `declarations`, replacing every entry the same packages
published before.

The replacement is per owner because one artifact publishes the
declarations of every crate it links: a reload must drop the old image's
pointers and take the new image's in one step.

<a id="rustdoc-item-8952"></a>

### `entries`

```rust
pub fn entries(self: &Self) -> &[GizmoEntry];
```

Every registered gizmo, sorted by type name.

<a id="rustdoc-item-8953"></a>

### `is_empty`

```rust
pub fn is_empty(self: &Self) -> bool;
```

Whether any gizmo is registered.

<a id="rustdoc-item-8954"></a>

### `len`

```rust
pub fn len(self: &Self) -> usize;
```

How many gizmos are registered.

<a id="rustdoc-item-8955"></a>

### `set_type_visible`

```rust
pub fn set_type_visible(self: &mut Self, type_name: &str, visible: bool);
```

Shows or hides a component type's gizmo.

<a id="rustdoc-item-8956"></a>

### `is_type_visible`

```rust
pub fn is_type_visible(self: &Self, type_name: &str) -> bool;
```

Whether a component type's gizmo draws, which is false once an editor
hid it.

<a id="rustdoc-item-8957"></a>

### `hidden_types`

```rust
pub fn hidden_types(self: &Self) -> impl Iterator<Item = _>;
```

The component type names an editor has hidden.

<a id="rustdoc-item-8958"></a>

### `set_draw_counts`

```rust
pub(in services::gizmos) fn set_draw_counts(self: &mut Self, counts: &[usize]);
```

Records what each gizmo drew in the frame that just ran.

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
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `Debug`
- `Clone`
- `Default`
- `Resource`
