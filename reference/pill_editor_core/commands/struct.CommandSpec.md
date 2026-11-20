<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1508"></a>

# Struct `pill_editor_core::commands::CommandSpec`

```rust
pub struct CommandSpec;
```

Source: `editor\pill_editor_core\src\commands.rs:414`

One registered command.

## Fields

<a id="rustdoc-item-1502"></a>

### `id`

```rust
id: String
```

Stable identifier (`editor.pause_toggle`).

<a id="rustdoc-item-1503"></a>

### `title`

```rust
title: String
```

The title menus and the palette show.

<a id="rustdoc-item-1504"></a>

### `menu_path`

```rust
menu_path: Vec<String>
```

Menu path (`["Edit", "Undo"]`); an empty path means no menu bar row.

<a id="rustdoc-item-1505"></a>

### `shortcuts`

```rust
shortcuts: std::collections::BTreeMap<KeymapPreset, Vec<Chord>>
```

The default binding per preset; a preset that is absent leaves the
command unbound in it.

<a id="rustdoc-item-1506"></a>

### `global`

```rust
global: bool
```

Whether the shortcut is a global binding. A global binding is meant to
fire even while a text field has focus, where every other shortcut
yields to the field.

<a id="rustdoc-item-1507"></a>

### `separator_before`

```rust
separator_before: bool
```

Whether a menu draws a rule above this command's row, grouping it
with the rows after it.

## Associated functions and methods

<a id="rustdoc-item-1509"></a>

### `new`

```rust
pub fn new(id: &str, title: &str) -> Self;
```

Builds a command with a title and no menu or bindings yet.

<a id="rustdoc-item-1510"></a>

### `menu`

```rust
pub fn menu(self: Self, path: &[&str]) -> Self;
```

Adds a menu path.

<a id="rustdoc-item-1511"></a>

### `separator`

```rust
pub fn separator(self: Self) -> Self;
```

Marks that a rule is drawn above this command's menu row.

<a id="rustdoc-item-1512"></a>

### `bind`

```rust
pub fn bind(self: Self, preset: KeymapPreset, chord_text: &str) -> Self;
```

Adds one default chord for a preset.

#### Panics

Panics when `chord_text` is not valid chord text. Every caller is in
this file (the built-in table and its tests), so a bad string is a
mistake here rather than input to handle.

<a id="rustdoc-item-1513"></a>

### `global`

```rust
pub fn global(self: Self) -> Self;
```

Makes the shortcut global: it is meant to fire even while a text field
has focus.

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
