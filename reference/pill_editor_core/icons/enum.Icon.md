<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4468"></a>

# Enum `pill_editor_core::icons::Icon`

```rust
pub enum Icon { ... }
```

Source: `editor\pill_editor_core\src\icons.rs:76`

One Phosphor icon, named the way the package names it.

## Variants

<a id="rustdoc-item-4431"></a>

### `Cube`

```rust
Cube
```

A solid cube: the first scene view.

<a id="rustdoc-item-4432"></a>

### `CubeTransparent`

```rust
CubeTransparent
```

A wireframe cube: the second scene view.

<a id="rustdoc-item-4433"></a>

### `MonitorPlay`

```rust
MonitorPlay
```

A display with a play mark: the project's own view.

<a id="rustdoc-item-4434"></a>

### `TreeStructure`

```rust
TreeStructure
```

A hierarchy of nodes: the entity list.

<a id="rustdoc-item-4435"></a>

### `Gear`

```rust
Gear
```

A cog: the system list.

<a id="rustdoc-item-4436"></a>

### `SlidersHorizontal`

```rust
SlidersHorizontal
```

Three sliders: the selected entity's detail.

<a id="rustdoc-item-4437"></a>

### `FolderOpen`

```rust
FolderOpen
```

An open folder: the asset browser.

<a id="rustdoc-item-4438"></a>

### `Faders`

```rust
Faders
```

The fader bank: the preferences.

<a id="rustdoc-item-4439"></a>

### `ArrowsOutCardinal`

```rust
ArrowsOutCardinal
```

Arrows out of a centre: the translate tool.

<a id="rustdoc-item-4440"></a>

### `ArrowsClockwise`

```rust
ArrowsClockwise
```

The clockwise arc: the rotate tool.

<a id="rustdoc-item-4441"></a>

### `ArrowsOut`

```rust
ArrowsOut
```

Arrows out of a box: the scale tool.

<a id="rustdoc-item-4442"></a>

### `GlobeHemisphereWest`

```rust
GlobeHemisphereWest
```

A globe: world space.

<a id="rustdoc-item-4443"></a>

### `MapPin`

```rust
MapPin
```

A map pin: local space.

<a id="rustdoc-item-4444"></a>

### `Magnet`

```rust
Magnet
```

A horseshoe magnet: snapping.

<a id="rustdoc-item-4445"></a>

### `GridFour`

```rust
GridFour
```

A four-cell grid: the scene grid.

<a id="rustdoc-item-4446"></a>

### `Plus`

```rust
Plus
```

A plus: create.

<a id="rustdoc-item-4447"></a>

### `Trash`

```rust
Trash
```

A bin: delete.

<a id="rustdoc-item-4448"></a>

### `PencilSimple`

```rust
PencilSimple
```

A pencil: rename.

<a id="rustdoc-item-4449"></a>

### `FileArrowDown`

```rust
FileArrowDown
```

A file with a down arrow: write metadata.

<a id="rustdoc-item-4450"></a>

### `Power`

```rust
Power
```

The power symbol: a system's on/off switch.

<a id="rustdoc-item-4451"></a>

### `Pause`

```rust
Pause
```

Two bars: pause the project.

<a id="rustdoc-item-4452"></a>

### `Play`

```rust
Play
```

A triangle: resume the project.

<a id="rustdoc-item-4453"></a>

### `SkipForward`

```rust
SkipForward
```

A bar and a triangle: advance one frame.

<a id="rustdoc-item-4454"></a>

### `PlusCircle`

```rust
PlusCircle
```

A circled plus: add an entity or a component.

<a id="rustdoc-item-4455"></a>

### `MinusCircle`

```rust
MinusCircle
```

A circled minus: remove a component.

<a id="rustdoc-item-4456"></a>

### `CheckCircle`

```rust
CheckCircle
```

A circled tick: confirm.

<a id="rustdoc-item-4457"></a>

### `XCircle`

```rust
XCircle
```

A circled cross: a problem or an error.

<a id="rustdoc-item-4458"></a>

### `FloppyDisk`

```rust
FloppyDisk
```

A floppy disk: save.

<a id="rustdoc-item-4459"></a>

### `ArrowSquareOut`

```rust
ArrowSquareOut
```

A box with an arrow leaving it: pop a tab out into its own window.

<a id="rustdoc-item-4460"></a>

### `ArrowSquareIn`

```rust
ArrowSquareIn
```

A box with an arrow entering it: move a popped-out tab back into the
dock.

<a id="rustdoc-item-4461"></a>

### `Folder`

```rust
Folder
```

A closed folder: a folder row of the project browser.

<a id="rustdoc-item-4462"></a>

### `CaretRight`

```rust
CaretRight
```

A right-pointing chevron: a closed tree row.

<a id="rustdoc-item-4463"></a>

### `CaretDown`

```rust
CaretDown
```

A down-pointing chevron: an open tree row.

<a id="rustdoc-item-4464"></a>

### `File`

```rust
File
```

A blank sheet: a file with no more specific kind.

<a id="rustdoc-item-4465"></a>

### `Image`

```rust
Image
```

A framed picture: a texture or an image file.

<a id="rustdoc-item-4466"></a>

### `Sphere`

```rust
Sphere
```

A shaded ball: a material.

<a id="rustdoc-item-4467"></a>

### `Code`

```rust
Code
```

Angle brackets: a shader or another source file.

## Associated functions and methods

<a id="rustdoc-item-4469"></a>

### `ALL`

```rust
const ALL: [Icon; 37] = _;
```

Every icon, in declaration order.

<a id="rustdoc-item-4470"></a>

### `codepoint`

```rust
pub fn codepoint(self: Self) -> u32;
```

The icon's codepoint in the vendored fonts: the regular font draws
its line art there, and the duotone font its fill.

<a id="rustdoc-item-4471"></a>

### `name`

```rust
pub fn name(self: Self) -> &'static str;
```

The icon's Phosphor name, as the package spells it.

<a id="rustdoc-item-4472"></a>

### `glyph`

```rust
pub fn glyph(self: Self) -> char;
```

The glyph the regular font draws for the icon.

<a id="rustdoc-item-4473"></a>

### `duotone`

```rust
pub fn duotone(self: Self) -> (char, char);
```

The glyphs the duotone font draws for the icon: its fill shape, and
the line art one codepoint further.

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
