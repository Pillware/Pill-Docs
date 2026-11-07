<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5139"></a>

# Enum `pill_editor_core::layout::dock::EditorTab`

```rust
pub enum EditorTab { ... }
```

Source: `editor\pill_editor_core\src\layout\dock.rs:56`

One tab of the egui editor.

The enum is serialized into the saved layout, so adding a tab is a
schema change (`LAYOUT_SCHEMA_VERSION`).

## Variants

<a id="rustdoc-item-5127"></a>

### `Scene`

```rust
Scene
```

A scene view's placeholder: the shell measures this tab's body and
draws nothing, so that view's child window shows through. The payload
is the view's index, which is what pairs the tab with a child window,
a renderer surface and a camera.

<a id="rustdoc-item-5128"></a>

### `Game`

```rust
Game
```

The game viewport's placeholder: like the scene tabs, but its child
window carries the primary surface, so it shows the project through
the project's own camera.

<a id="rustdoc-item-5129"></a>

### `Entities`

```rust
Entities
```

The world's entities: id, name, click to select.

<a id="rustdoc-item-5130"></a>

### `Systems`

```rust
Systems
```

The world's systems: name, stage, enabled.

<a id="rustdoc-item-5131"></a>

### `Inspector`

```rust
Inspector
```

The selected entity's detail: its components and their field values.

<a id="rustdoc-item-5132"></a>

### `Assets`

```rust
Assets
```

The project's assets: the folder tree, the tile grid and the toolbar.

<a id="rustdoc-item-5133"></a>

### `Console`

```rust
Console
```

The engine's and the project's recent log lines.

<a id="rustdoc-item-5134"></a>

### `Problems`

```rust
Problems
```

Build errors and warnings, grouped by module.

<a id="rustdoc-item-5135"></a>

### `Statistics`

```rust
Statistics
```

Frame, pass and per-tab timings.

<a id="rustdoc-item-5136"></a>

### `Preferences`

```rust
Preferences
```

The preferences file's editor-wide rows and the current project's
remembered gizmo choices.

<a id="rustdoc-item-5138"></a>

### `Module`

```rust
Module
```

A panel a module registered: the payload is the panel's slot in the
registry, which stays the same across that module's reload. The tab's
title comes from the registry, which adds a note once the panel's
module has unloaded.

## Associated functions and methods

<a id="rustdoc-item-5140"></a>

### `ALL`

```rust
const ALL: [EditorTab; 11] = _;
```

Every built-in tab, in the order the Window menu lists them.

<a id="rustdoc-item-5141"></a>

### `scene_view`

```rust
pub fn scene_view(self: Self) -> Option<u8>;
```

The view index, when this is a scene view's tab.

<a id="rustdoc-item-5142"></a>

### `title`

```rust
pub fn title(self: Self) -> String;
```

The tab's display title.

A title, not a `&'static str`: the scene views are numbered, so the
second and later ones build their own name.

<a id="rustdoc-item-5143"></a>

### `name`

```rust
pub fn name(self: Self) -> String;
```

The wire name the logs and the scripted channel use: `scene`, then
`scene2` for the second view and on.

<a id="rustdoc-item-5144"></a>

### `module_slot`

```rust
pub fn module_slot(self: Self) -> Option<u16>;
```

The panel slot, when this is a module panel's tab.

<a id="rustdoc-item-5145"></a>

### `from_wire`

```rust
pub fn from_wire(name: &str) -> Option<EditorTab>;
```

The tab a wire name names: the inverse of [`EditorTab::name`](#rustdoc-item-5143).

The scripted channel and the frontend's popout windows share this
parser, so a name that parses in one place parses in the other. A
module panel's tab carries its slot (`module:3`), because the bare
word cannot identify one. A scene view is `scene`, `scene2`,
`scene3`: the printed number is one more than the view's index,
because a person counts views from one. Returns `None` for a name no
tab answers to.

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
- `AsId`
- `AsIdSalt`
- `SerializableAny`
- `DeserializeOwned`
- `Equivalent<K>`
- `Comparable<K>`
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
- `Hash`
- `PartialOrd`
- `Ord`
- `Serialize`
- `Deserialize<'de>`
