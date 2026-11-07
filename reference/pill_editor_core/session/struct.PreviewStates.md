<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7240"></a>

# Struct `pill_editor_core::session::PreviewStates`

```rust
pub struct PreviewStates;
```

Source: `editor\pill_editor_core\src\session.rs:889`

The preview state of every asset tile, keyed by the tile's row key.

One value holds the three things the shell and the executable have to agree
on: which tiles have a texture, which were answered with no pixels, and
which this pass drew. The rules that keep them consistent live here: a key
is never both ready and refused ([`PreviewStates::mark_ready`](#rustdoc-item-7966) clears the
refusal, [`PreviewStates::mark_refused`](#rustdoc-item-7967) drops the texture), and only a tile
this pass drew is asked for ([`PreviewStates::wants`](#rustdoc-item-7968)).

## Fields

<a id="rustdoc-item-7963"></a>

### `ready_textures`

```rust
ready_textures: std::collections::BTreeMap<String, egui::TextureHandle>
```

The textures ready to draw, by key.

<a id="rustdoc-item-7964"></a>

### `refused_keys`

```rust
refused_keys: std::collections::BTreeSet<String>
```

The keys the executable answered without pixels.

<a id="rustdoc-item-7965"></a>

### `visible_keys`

```rust
visible_keys: Vec<String>
```

The keys the grid drew this pass, in draw order.

## Associated functions and methods

<a id="rustdoc-item-7969"></a>

### `begin_pass`

```rust
pub fn begin_pass(self: &mut Self);
```

Start a pass: the visible list is whatever this pass draws.

<a id="rustdoc-item-7970"></a>

### `push_visible`

```rust
pub fn push_visible(self: &mut Self, key: &str);
```

Record one tile the grid drew, in draw order.

<a id="rustdoc-item-7971"></a>

### `visible`

```rust
pub fn visible(self: &Self) -> &[String];
```

The keys this pass drew, in draw order.

<a id="rustdoc-item-7972"></a>

### `ready`

```rust
pub fn ready(self: &Self, key: &str) -> Option<&TextureHandle>;
```

The rendered texture for `key`, when there is one.

<a id="rustdoc-item-7968"></a>

### `wants`

```rust
pub fn wants(self: &Self, key: &str) -> bool;
```

Whether `key` may be requested now: drawn this pass, not ready, not
refused.

<a id="rustdoc-item-7966"></a>

### `mark_ready`

```rust
pub fn mark_ready(self: &mut Self, key: &str, texture: TextureHandle);
```

Record a rendered texture for `key`.

<a id="rustdoc-item-7967"></a>

### `mark_refused`

```rust
pub fn mark_refused(self: &mut Self, key: &str);
```

Record that `key` was answered without pixels: an undecodable file or a
frame that drew nothing. The tile keeps its type icon, and the grid asks
for the next one instead of waiting on this one forever.

<a id="rustdoc-item-7973"></a>

### `retain_keys`

```rust
pub fn retain_keys(self: &mut Self, kept: &BTreeSet<String>);
```

Keep only the previews whose key is in `kept`; the listing passes the
rows that did not change, so only their textures survive a refresh.

<a id="rustdoc-item-7974"></a>

### `clear_refused`

```rust
pub fn clear_refused(self: &mut Self);
```

Forget the refusals, so the next pass asks for those tiles again.

<a id="rustdoc-item-7975"></a>

### `clear`

```rust
pub fn clear(self: &mut Self);
```

Forget every preview.

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
