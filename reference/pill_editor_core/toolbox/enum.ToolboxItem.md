<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5566"></a>

# Enum `pill_editor_core::toolbox::ToolboxItem`

```rust
pub enum ToolboxItem { ... }
```

Source: `editor\pill_editor_core\src\toolbox.rs:161`

One row of the floating toolbox.

## Variants

<a id="rustdoc-item-8522"></a>

### `Translate`

```rust
Translate
```

The translate tool's row.

<a id="rustdoc-item-8523"></a>

### `Rotate`

```rust
Rotate
```

The rotate tool's row.

<a id="rustdoc-item-8524"></a>

### `Scale`

```rust
Scale
```

The scale tool's row.

<a id="rustdoc-item-8525"></a>

### `Space`

```rust
Space
```

The space toggle's row: switches the gizmo between world and local
space. The label names the space the gizmo is in.

<a id="rustdoc-item-8526"></a>

### `Snap`

```rust
Snap
```

The snapping toggle's row.

<a id="rustdoc-item-8527"></a>

### `Grid`

```rust
Grid
```

The scene grid's switch row.

## Associated functions and methods

<a id="rustdoc-item-8528"></a>

### `name`

```rust
pub fn name(self: Self) -> &'static str;
```

Returns the row's name in the log: the shell writes it with each row
(`item="translate"`), and the editor's test suite finds a row by it.

<a id="rustdoc-item-8529"></a>

### `icon`

```rust
pub fn icon(self: Self, state: &ToolboxState) -> Icon;
```

Returns the row's icon: the tool's own mark, a globe or a map pin for
the space the gizmo is in, and a magnet or a grid for the two toggles.

<a id="rustdoc-item-8530"></a>

### `label`

```rust
pub fn label(self: Self, state: &ToolboxState) -> &'static str;
```

Returns the label the row shows for the current state: a fixed word for
the tools and the two toggles, and the space the gizmo is in for the
space row.

<a id="rustdoc-item-8531"></a>

### `active`

```rust
pub fn active(self: Self, state: &ToolboxState) -> bool;
```

Returns whether the row looks active: the selected tool, and each
toggle in its non-default state (local space, snapping on, grid on).

<a id="rustdoc-item-8532"></a>

### `menu_label`

```rust
pub fn menu_label(self: Self) -> &'static str;
```

Returns the label the scene viewport's menu shows: "Snapping" where the
panel says "Snap", and the panel's word for the other rows. The menu
lists the two spaces as rows of their own, so the space toggle only
needs its own name here.

<a id="rustdoc-item-8533"></a>

### `command`

```rust
pub fn command(self: Self, state: &ToolboxState) -> EditorCommand;
```

Returns the command a click queues: a tool row selects that tool, the
space row switches to the other space, and the snapping and grid rows
flip their switch.

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
