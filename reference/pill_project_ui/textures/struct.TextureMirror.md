<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-220"></a>

# Struct `pill_project_ui::textures::TextureMirror`

```rust
pub struct TextureMirror;
```

Source: `ui\pill_project_ui\src\textures.rs:63`

Every texture egui handed this UI, kept whole.

## Fields

<a id="rustdoc-item-213"></a>

### `textures`

```rust
textures: std::collections::HashMap<egui::TextureId, MirroredTexture>
```

_No documentation provided._

<a id="rustdoc-item-217"></a>

### `dirty_texture_ids`

```rust
dirty_texture_ids: Vec<egui::TextureId>
```

The textures to send on the next [`Self::carry`](#rustdoc-item-215): the ones whose
content changed, or every held one after [`Self::resend_all`](#rustdoc-item-216).

<a id="rustdoc-item-218"></a>

### `freed_texture_ids`

```rust
freed_texture_ids: Vec<egui::TextureId>
```

The textures egui freed since the last [`Self::carry`](#rustdoc-item-215).

<a id="rustdoc-item-219"></a>

### `revision_counter`

```rust
revision_counter: u64
```

The revision number the next change will get. Every change adds one to
it, so revisions grow over time and two changes never share a number.

## Associated functions and methods

<a id="rustdoc-item-221"></a>

### `new`

```rust
pub fn new() -> TextureMirror;
```

An empty mirror.

<a id="rustdoc-item-222"></a>

### `len`

```rust
pub fn len(self: &Self) -> usize;
```

How many textures it holds.

<a id="rustdoc-item-223"></a>

### `is_empty`

```rust
pub fn is_empty(self: &Self) -> bool;
```

Whether it holds no textures.

<a id="rustdoc-item-224"></a>

### `revision`

```rust
pub fn revision(self: &Self, texture_id: EguiTextureId) -> Option<u64>;
```

Returns the revision `texture_id` is at, or `None` when the mirror
does not hold it.

<a id="rustdoc-item-225"></a>

### `apply`

```rust
pub fn apply(self: &mut Self, textures_delta: &TexturesDelta);
```

Folds one pass's texture deltas into the mirror.

A delta with no position replaces the whole image: the texture is new
or its size changed. A delta with a position changes part of the image
in place. A patch for a texture the mirror has never seen cannot be
placed, so it is logged and dropped. egui always sends the whole image
before any patch.

<a id="rustdoc-item-216"></a>

### `resend_all`

```rust
pub fn resend_all(self: &mut Self);
```

Marks every held image for sending again.

A painter that is rebuilt holds no textures, and nothing marks the
existing images as changed, so the next [`carry`](#rustdoc-item-215) would
send nothing. This marks every image instead.

<a id="rustdoc-item-215"></a>

### `carry`

```rust
pub fn carry(self: &mut Self, texture_set: &mut UiTextureSet);
```

Appends the changed images to `texture_set`, each as a whole image, and
the textures egui freed as frees. Both lists are then emptied.

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
