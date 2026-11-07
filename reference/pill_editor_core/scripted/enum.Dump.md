<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6746"></a>

# Enum `pill_editor_core::scripted::Dump`

```rust
pub enum Dump { ... }
```

Source: `editor\pill_editor_core\src\scripted.rs:357`

Which piece of editor state a `dump` logs.

## Variants

<a id="rustdoc-item-6934"></a>

### `Tabs`

```rust
Tabs
```

`dump tabs` - the dock's surfaces and their tabs.

<a id="rustdoc-item-6935"></a>

### `Scenes`

```rust
Scenes
```

`dump scenes` - the scene view rectangles and the game view's.

<a id="rustdoc-item-6936"></a>

### `Viewport`

```rust
Viewport
```

`dump viewport` - the active view, the interaction state, the hovered
handle and every view's camera.

<a id="rustdoc-item-6937"></a>

### `Grid`

```rust
Grid
```

`dump grid` - the scene grid's switch and the surfaces it draws on.

<a id="rustdoc-item-6938"></a>

### `Assets`

```rust
Assets
```

`dump assets` - the asset listing's rows.

<a id="rustdoc-item-6939"></a>

### `EngineAssets`

```rust
EngineAssets
```

`dump engine-assets` - the assets the store holds that no file backs,
which a picker offers beside the listing's rows.

<a id="rustdoc-item-6940"></a>

### `Browser`

```rust
Browser
```

`dump browser` - the project browser's open folder and open rows.

<a id="rustdoc-item-6941"></a>

### `StandaloneTypes`

```rust
StandaloneTypes
```

`dump standalone-types` - the types the create dialog offers.

<a id="rustdoc-item-6942"></a>

### `Systems`

```rust
Systems
```

`dump systems` - the registered systems and their state.

<a id="rustdoc-item-6943"></a>

### `Preferences`

```rust
Preferences
```

`dump preferences` - the preferences document and the live halves.

<a id="rustdoc-item-6944"></a>

### `Theme`

```rust
Theme
```

`dump theme` - the theme the editor paints with, the layers it was
merged from, and the generation number that moves when they resolve
again.

<a id="rustdoc-item-6945"></a>

### `Console`

```rust
Console
```

`dump console` - the Console tab's filters and the rows they leave.

<a id="rustdoc-item-6946"></a>

### `Problems`

```rust
Problems
```

`dump problems` - the Problems rows and their locations.

<a id="rustdoc-item-6947"></a>

### `Stats`

```rust
Stats
```

`dump stats` - the Statistics tab's frame and per-tab timings.

<a id="rustdoc-item-6948"></a>

### `Cadence`

```rust
Cadence
```

`dump cadence` - the redraw counters.

<a id="rustdoc-item-6949"></a>

### `Panels`

```rust
Panels
```

`dump panels` - the module panels and their timings.

<a id="rustdoc-item-6950"></a>

### `Windows`

```rust
Windows
```

`dump windows` - the panel windows on screen.

<a id="rustdoc-item-6951"></a>

### `Entities`

```rust
Entities
```

`dump entities` - the entity list with each row's component names,
which is what a collection test needs to find its subject.

<a id="rustdoc-item-6952"></a>

### `Selection`

```rust
Selection
```

`dump selection` - the selected entities, primary last.

<a id="rustdoc-item-6953"></a>

### `Resources`

```rust
Resources
```

`dump resources` - the editable world resources and their values.

<a id="rustdoc-item-6957"></a>

### `Field`

```rust
Field
```

`dump field <entity> <component> <field>` - one component field's value.

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
