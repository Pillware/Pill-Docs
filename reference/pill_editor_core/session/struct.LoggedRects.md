<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7546"></a>

# Struct `pill_editor_core::session::LoggedRects`

```rust
pub struct LoggedRects<K: Ord + Clone>;
```

Source: `editor\pill_editor_core\src\session.rs:600`

The rectangles a pass last reported, so a placement reaches the log once
rather than once a frame.

One type serves every "log this rectangle once" cache: [`Self::remember`](#rustdoc-item-7819)
decides whether a rectangle differs from the last one, [`Self::forget_missing`](#rustdoc-item-7820)
drops keys that stopped drawing, and [`Self::clear`](#rustdoc-item-7821) drops everything, so
the caches cannot drift into separate rules.

A placement is compared **rounded to whole points** by default, because
egui lays a panel out in fractional points: a fraction of a point of jitter
is the same place, and a line per frame of it is noise. A caller that needs
a pixel-exact comparison says so with [`Self::remember_exact`](#rustdoc-item-7822).

## Fields

<a id="rustdoc-item-7818"></a>

### `rects_by_key`

```rust
rects_by_key: std::collections::BTreeMap<K, egui::Rect>
```

The rectangle last remembered per key.

## Associated functions and methods

<a id="rustdoc-item-7819"></a>

### `remember`

```rust
pub fn remember(self: &mut Self, key: K, rect: Rect) -> bool;
```

Record `rect` for `key`, answering whether it is a placement to log.

<a id="rustdoc-item-7822"></a>

### `remember_exact`

```rust
pub fn remember_exact(self: &mut Self, key: K, rect: Rect) -> bool;
```

[`Self::remember`](#rustdoc-item-7819) without the quantization: any pixel difference is a
new placement.

<a id="rustdoc-item-7823"></a>

### `get`

```rust
pub fn get(self: &Self, key: &K) -> Option<Rect>;
```

The rectangle last remembered for `key`.

<a id="rustdoc-item-7824"></a>

### `iter`

```rust
pub fn iter(self: &Self) -> impl Iterator<Item = _>;
```

Every remembered key with its rectangle, in key order.

<a id="rustdoc-item-7825"></a>

### `contains`

```rust
pub fn contains(self: &Self, key: &K) -> bool;
```

Whether `key` has a logged rectangle.

<a id="rustdoc-item-7820"></a>

### `forget_missing`

```rust
pub fn forget_missing(self: &mut Self, seen: &BTreeSet<K>);
```

Drop every key that `seen` does not name.

A row that stopped drawing is dropped instead of keeping its last
placement forever: the geometry of everything a session has ever drawn
is not worth remembering, and a cache that never shrinks is a slow leak.

<a id="rustdoc-item-7821"></a>

### `clear`

```rust
pub fn clear(self: &mut Self);
```

Drop every entry.

<a id="rustdoc-item-7826"></a>

### `len`

```rust
pub fn len(self: &Self) -> usize;
```

How many rectangles are remembered.

<a id="rustdoc-item-7827"></a>

### `is_empty`

```rust
pub fn is_empty(self: &Self) -> bool;
```

Whether nothing is remembered.

<a id="rustdoc-item-7828"></a>

### `same_placement`

```rust
pub fn same_placement(left: Rect, right: Rect) -> bool;
```

Whether two rectangles are the same placement under [`Self::remember`](#rustdoc-item-7819)'s
rule, for the callers that keep a single rectangle rather than a cache.

<a id="rustdoc-item-7829"></a>

### `quantize`

```rust
pub(in session) fn quantize(rect: Rect) -> Rect;
```

`rect` with both corners rounded to whole points.

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
- `Default`
