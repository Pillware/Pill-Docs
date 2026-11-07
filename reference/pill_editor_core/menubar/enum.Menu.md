<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5398"></a>

# Enum `pill_editor_core::menubar::Menu`

```rust
pub enum Menu { ... }
```

Source: `editor\pill_editor_core\src\menubar.rs:55`

One menu of the bar. The variants are in the order the titles are drawn.

## Variants

<a id="rustdoc-item-5392"></a>

### `File`

```rust
File
```

The scene rows, the `.meta` sidecar write, the Preferences tab and
quitting the editor.

<a id="rustdoc-item-5393"></a>

### `Edit`

```rust
Edit
```

History, the clipboard and entity deletion.

<a id="rustdoc-item-5394"></a>

### `Create`

```rust
Create
```

A new entity, a new scene and a new asset.

<a id="rustdoc-item-5395"></a>

### `View`

```rust
View
```

The gizmo's tool, space and snapping, the scene grid and the
simulation controls.

<a id="rustdoc-item-5396"></a>

### `Window`

```rust
Window
```

The dock's tabs and one more scene view.

<a id="rustdoc-item-5397"></a>

### `Help`

```rust
Help
```

The About window.

## Associated functions and methods

<a id="rustdoc-item-5399"></a>

### `ALL`

```rust
const ALL: [Menu; 6] = _;
```

Every menu, in the order the titles follow the mark.

<a id="rustdoc-item-5400"></a>

### `title`

```rust
pub fn title(self: Self) -> &'static str;
```

Returns the label the bar draws for this menu.

<a id="rustdoc-item-5401"></a>

### `name`

```rust
pub fn name(self: Self) -> &'static str;
```

Returns the wire name the shell logs the menu under (`file`, `edit`,
...).

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
- `Hash`
