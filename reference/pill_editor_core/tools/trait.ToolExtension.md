<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-11377"></a>

# Trait `pill_editor_core::tools::ToolExtension`

```rust
pub trait ToolExtension { ... }
```

Source: `editor\pill_editor_core\src\tools.rs:794`

A crate's addition to a tool another crate owns.

There is no tool object and no `self` here on purpose. A registry record
outlives the image that registered it, so the extension states its
declaration and its hooks as associated items: the registry copies them
into a [`RegisteredExtension`](struct.RegisteredExtension.md#rustdoc-item-11376) and a reload registers the arriving image's
hooks in place of the old ones.

An extension only ever **adds**. It cannot remove or rename what the base
tool declares, and nothing it declares is visible while its base tool is
not the active one.

## Required and provided items

<a id="rustdoc-item-11369"></a>

### `name`

```rust
fn name() -> &'static str;
```

The extension's own name: what `dump tools` and the logs show.

<a id="rustdoc-item-11370"></a>

### `extends_tool`

```rust
fn extends_tool() -> &'static str;
```

The base tool it extends, by the name a command spells.

<a id="rustdoc-item-11371"></a>

### `for_kinds`

```rust
fn for_kinds() -> &'static [&'static str];
```

The kinds of the base tool its additions apply to.

Empty, the default, means every kind the base tool reports. A non-empty
list keeps its menu rows, presses and keys out of the other kinds, so
an extension's rows never appear for an element they do not describe.

<a id="rustdoc-item-11372"></a>

### `requires_component`

```rust
fn requires_component() -> Option<&'static str>;
```

The component an entity must carry for the extension to be attached.

It is matched against the entity's component names by full name or by
`::` suffix, the way every other component name in the editor is. `None`
attaches the extension to every entity its base tool edits.

<a id="rustdoc-item-11373"></a>

### `order`

```rust
fn order() -> i32;
```

Where the extension sorts against the others on the same base.

Lower runs first: its menu rows come earlier and its chord wins a clash.
Equal values keep name order, so the chain never depends on the order
the crates happened to register in.

<a id="rustdoc-item-11374"></a>

### `keys`

```rust
fn keys() -> &'static [&'static str];
```

The chords it answers, as the keys module spells them (`x`, `delete`).

<a id="rustdoc-item-11375"></a>

### `hooks`

```rust
fn hooks() -> ToolExtensionHooks;
```

What it adds to the tool. Every hook defaults to nothing.
