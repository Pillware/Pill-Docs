<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7533"></a>

# Struct `pill_editor_core::toolbox::ToolboxState`

```rust
pub struct ToolboxState<'a>;
```

Source: `editor\pill_editor_core\src\toolbox.rs:153`

What the toolbox's rows show: the gizmo's settings, the tool frame it is
in, the two switches and the component tools the selection is offered. A
row reads this, and the command a click queues changes it for the next
frame.

## Fields

<a id="rustdoc-item-10545"></a>

### `gizmo`

```rust
gizmo: crate::gizmo::GizmoSettings
```

The gizmo's mode, space and snapping.

<a id="rustdoc-item-10546"></a>

### `grid`

```rust
grid: bool
```

Whether the scene grid is on.

<a id="rustdoc-item-10547"></a>

### `gizmos`

```rust
gizmos: bool
```

Whether the engine's component gizmos draw.

<a id="rustdoc-item-10548"></a>

### `frame`

```rust
frame: Option<&'a str>
```

The name of the tool frame the gizmo is in, when the active tool offers
one and the space row has reached it.

<a id="rustdoc-item-10549"></a>

### `component_tools`

```rust
component_tools: &'a [crate::editor_state::ComponentToolRow]
```

The component tools the selection's entity is offered, in the order
their rows stack. Empty means no row for any of them.

## Associated functions and methods

<a id="rustdoc-item-10550"></a>

### `component_tool_active`

```rust
pub fn component_tool_active(self: &Self) -> bool;
```

Whether an offered component tool is the active one.

Exactly one tool is active at a time, so a component tool's row and the
three built-in tool rows never both look active.

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
- `StructuralPartialEq`
- `PartialEq`
