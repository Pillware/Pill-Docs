<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7532"></a>

# Enum `pill_editor_core::toolbox::ToolboxItem`

```rust
pub enum ToolboxItem { ... }
```

Source: `editor\pill_editor_core\src\toolbox.rs:180`

One row of the floating toolbox.

## Variants

<a id="rustdoc-item-10590"></a>

### `Translate`

```rust
Translate
```

The translate tool's row.

<a id="rustdoc-item-10591"></a>

### `Rotate`

```rust
Rotate
```

The rotate tool's row.

<a id="rustdoc-item-10592"></a>

### `Scale`

```rust
Scale
```

The scale tool's row.

<a id="rustdoc-item-10594"></a>

### `ComponentTool`

```rust
ComponentTool
```

One component tool's row, by its place in
[`ToolboxState::component_tools`](struct.ToolboxState.md#rustdoc-item-10549).

<a id="rustdoc-item-10595"></a>

### `Space`

```rust
Space
```

The space toggle's row: switches the gizmo between world and local
space. The label names the space the gizmo is in.

<a id="rustdoc-item-10596"></a>

### `Snap`

```rust
Snap
```

The snapping toggle's row.

<a id="rustdoc-item-10597"></a>

### `Grid`

```rust
Grid
```

The scene grid's switch row.

<a id="rustdoc-item-10598"></a>

### `Gizmos`

```rust
Gizmos
```

The component gizmos' switch row.

## Associated functions and methods

<a id="rustdoc-item-10599"></a>

### `name`

```rust
pub fn name<'a>(self: Self, state: &ToolboxState<'a>) -> &'a str;
```

Returns the row's name in the log: the shell writes it with each row
(`item="translate"`), and the editor's test suite finds a row by it.
A component tool's row is named by the tool itself.

<a id="rustdoc-item-10600"></a>

### `icon`

```rust
pub fn icon(self: Self, state: &ToolboxState<'_>) -> Icon;
```

Returns the row's icon: the tool's own mark, a globe or a map pin for
the space the gizmo is in, a magnet or a grid for the two switches, and
the component icon the Inspector uses for a structural component on a
component tool's row.

<a id="rustdoc-item-10601"></a>

### `label`

```rust
pub fn label<'a>(self: Self, state: &ToolboxState<'a>) -> &'a str;
```

Returns the label the row shows for the current state: a fixed word for
the built-in tools and the toggles, the space the gizmo is in for the
space row - the tool frame's own name when the row has reached one - and
the tool's own label for a component tool.

<a id="rustdoc-item-10602"></a>

### `active`

```rust
pub fn active(self: Self, state: &ToolboxState<'_>) -> bool;
```

Returns whether the row looks active: the selected tool, and each
toggle in its non-default state (local space or a tool frame, snapping
on, grid on).

Exactly one tool is active at a time, so while an offered component
tool is the active one none of the three built-in tool rows looks
active.

<a id="rustdoc-item-10604"></a>

### `menu_label`

```rust
pub fn menu_label<'a>(self: Self, state: &ToolboxState<'a>) -> &'a str;
```

Returns the label the scene viewport's menu shows: "Snapping" where the
panel says "Snap", and the panel's word for the other rows. The menu
lists the two spaces as rows of their own, so the space toggle only
needs its own name here. It draws [`TOOL_ROWS`](constant.TOOL_ROWS.md#rustdoc-item-10603) and not a component
tool's row, so only the fixed rows reach it.

<a id="rustdoc-item-10606"></a>

### `command`

```rust
pub fn command(self: Self, state: &ToolboxState<'_>) -> EditorCommand;
```

Returns the command a click queues: a built-in tool row selects that
tool, a component tool's row activates or clears it, the space row
walks to the next space, and the other rows flip their switch.

The space row queues the cycle rather than one space, so it can reach a
frame the active tool offers; the viewport menu and the Preferences tab
still queue one named space through [`space_command`](fn.space_command.md#rustdoc-item-10605).

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
