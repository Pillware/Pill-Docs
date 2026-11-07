<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4529"></a>

# Struct `pill_editor_core::icons::IconButton`

```rust
pub struct IconButton<'a>;
```

Source: `editor\pill_editor_core\src\icons.rs:306`

A button carrying a duotone icon and a label, drawn across the editor's
menus, tab headers and toolbars.

It uses the theme's button visuals: the hover and press feedback, and the
selected fill that marks the current choice. The icon sits before the
label. A row whose rectangle a panel has already fixed takes exactly that
rectangle through [`IconButton::fixed_size`](#rustdoc-item-4528).

## Fields

<a id="rustdoc-item-4521"></a>

### `icon`

```rust
icon: Icon
```

_No documentation provided._

<a id="rustdoc-item-4522"></a>

### `label`

```rust
label: &'a str
```

_No documentation provided._

<a id="rustdoc-item-4523"></a>

### `active`

```rust
active: bool
```

_No documentation provided._

<a id="rustdoc-item-4524"></a>

### `fill_override`

```rust
fill_override: Option<egui::Color32>
```

_No documentation provided._

<a id="rustdoc-item-4526"></a>

### `fixed_size`

```rust
fixed_size: Option<egui::Vec2>
```

_No documentation provided._

## Associated functions and methods

<a id="rustdoc-item-4530"></a>

### `new`

```rust
pub fn new(icon: Icon, label: &'a str) -> Self;
```

Creates a button for `icon` and `label`. An empty `label` shows the
icon on its own.

<a id="rustdoc-item-4531"></a>

### `active`

```rust
pub fn active(self: Self, active: bool) -> Self;
```

Marks the button as the current choice: a checked menu item or a tool
that is on.

<a id="rustdoc-item-4532"></a>

### `fill`

```rust
pub fn fill(self: Self, fill: Color32) -> Self;
```

Uses `fill` instead of the theme's button fill, so a panel floating
over the scene can keep its own palette.

<a id="rustdoc-item-4528"></a>

### `fixed_size`

```rust
pub fn fixed_size(self: Self, fixed_size: Vec2) -> Self;
```

Gives the button exactly `fixed_size` instead of the size its icon and
label need.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
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
- `Widget`
