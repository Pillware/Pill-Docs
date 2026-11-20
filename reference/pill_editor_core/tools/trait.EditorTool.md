<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-10745"></a>

# Trait `pill_editor_core::tools::EditorTool`

```rust
pub trait EditorTool { ... }
```

Source: `editor\pill_editor_core\src\tools.rs:121`

What a tool is described by.

The built-ins implement it here; an extension's tool implements it in its
own editor crate and the editor core copies the answer into a
[`RegisteredTool`](struct.RegisteredTool.md#rustdoc-item-10751) record, so nothing holds a pointer into a reloadable
image.

## Required and provided items

<a id="rustdoc-item-10746"></a>

### `name`

```rust
fn name(self: &Self) -> &'static str;
```

The name a command and the scripted channel spell.

<a id="rustdoc-item-10747"></a>

### `label`

```rust
fn label(self: &Self) -> &'static str;
```

The label the toolbox row and the menus show.

<a id="rustdoc-item-10748"></a>

### `shortcut`

```rust
fn shortcut(self: &Self) -> Option<&'static str>;
```

The keyboard shortcut's text, when the tool has one.

<a id="rustdoc-item-10749"></a>

### `is_global`

```rust
fn is_global(self: &Self) -> bool;
```

Whether the tool is offered whatever the selection holds.

The built-ins are global. A component tool answers `false`, because it
is offered only while its component is selected.

<a id="rustdoc-item-10750"></a>

### `requires_component`

```rust
fn requires_component(self: &Self) -> Option<&'static str>;
```

The component that makes the tool offered for an entity.

The name is matched against an entity's component names by full name or
by its `::` suffix, so a crate names its own component without spelling
the module path. `None`, the default, means no entity offers the tool:
that is a global tool, which needs no row of its own, and a tool that
declares nothing (a test fixture), which stays out of the toolbox.
