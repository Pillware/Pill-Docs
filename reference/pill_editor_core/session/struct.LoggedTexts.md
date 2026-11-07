<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7866"></a>

# Struct `pill_editor_core::session::LoggedTexts`

```rust
pub struct LoggedTexts<K: Ord + Clone>;
```

Source: `editor\pill_editor_core\src\session.rs:700`

The texts a pass last reported per key, so a row logs a changed value once
rather than once a frame.

## Fields

<a id="rustdoc-item-7865"></a>

### `texts_by_key`

```rust
texts_by_key: std::collections::BTreeMap<K, String>
```

The text last remembered per key.

## Associated functions and methods

<a id="rustdoc-item-7867"></a>

### `remember`

```rust
pub fn remember(self: &mut Self, key: K, text: &str) -> bool;
```

Record `text` for `key`, answering whether it changed since the last
draw that reported it.

<a id="rustdoc-item-7868"></a>

### `get`

```rust
pub fn get(self: &Self, key: &K) -> Option<&str>;
```

The text last logged for `key`.

<a id="rustdoc-item-7869"></a>

### `iter`

```rust
pub fn iter(self: &Self) -> impl Iterator<Item = _>;
```

Every remembered key with its text, in key order.

<a id="rustdoc-item-7870"></a>

### `forget_missing`

```rust
pub fn forget_missing(self: &mut Self, seen: &BTreeSet<K>);
```

Drop every key `seen` does not name; see [`LoggedRects::forget_missing`](struct.LoggedRects.md#rustdoc-item-7820).

<a id="rustdoc-item-7871"></a>

### `clear`

```rust
pub fn clear(self: &mut Self);
```

Drop every entry.

<a id="rustdoc-item-7872"></a>

### `len`

```rust
pub fn len(self: &Self) -> usize;
```

How many texts are remembered.

<a id="rustdoc-item-7873"></a>

### `is_empty`

```rust
pub fn is_empty(self: &Self) -> bool;
```

Whether nothing is remembered.

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
