<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7235"></a>

# Struct `pill_editor_core::session::ToolboxSession`

```rust
pub struct ToolboxSession;
```

Source: `editor\pill_editor_core\src\session.rs:352`

The floating viewport toolbox's session state. A drag moves one scene
view's toolbox, and the log reports each new placement once.

Session-scoped, like the dock's floating tabs' positions: a restart starts
every toolbox at its default corner.

## Fields

<a id="rustdoc-item-7544"></a>

### `origins`

```rust
origins: Vec<Option<egui::Pos2>>
```

One panel origin per scene view, in logical points. A view's entry
stays `None` until the user drags its toolbox, so the default anchor
keeps following the viewport until then; the list has a slot for every
view index, opened or not.

<a id="rustdoc-item-7545"></a>

### `logged`

```rust
logged: LoggedRects<usize>
```

Per-scene-view panel rectangles whose rows the log already reported,
so the rect lines appear once per placement and once per drag.

<a id="rustdoc-item-7548"></a>

### `faces`

```rust
faces: Vec<Vec<egui::Rect>>
```

Per-scene-view row rectangles, in [`crate::toolbox::TOOLBOX_ITEMS`](../toolbox/constant.TOOLBOX_ITEMS.md#rustdoc-item-7547)
order: the face a row's button drew this pass, which is what a click
aims at. A row's face is narrower than the row it sits in, so the
logged row rectangle alone would not say where the button is.

## Associated functions and methods

<a id="rustdoc-item-7549"></a>

### `origin`

```rust
pub fn origin(self: &Self, view: usize) -> Option<Pos2>;
```

The placed origin of `view`'s toolbox.

<a id="rustdoc-item-7550"></a>

### `set_origin`

```rust
pub fn set_origin(self: &mut Self, view: usize, origin: Pos2);
```

Move `view`'s toolbox to `origin`.

<a id="rustdoc-item-7551"></a>

### `remember_logged`

```rust
pub fn remember_logged(self: &mut Self, view: usize, rect: Rect) -> bool;
```

Record `view`'s toolbox rectangle as logged, answering whether this is
a placement the log has not reported yet.

Pixel-exact: the panel is dragged as a whole, so a fraction of a point
is a move the user made.

<a id="rustdoc-item-7552"></a>

### `face`

```rust
pub fn face(self: &Self, view: usize, index: usize) -> Option<Rect>;
```

The face `view`'s row `index` drew this pass, when it drew one.

<a id="rustdoc-item-7553"></a>

### `set_faces`

```rust
pub fn set_faces(self: &mut Self, view: usize, faces: Vec<Rect>);
```

Record the faces `view`'s rows drew this pass, in row order.

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
- `Default`
