<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1297"></a>

# Struct `pill_editor_core::commands::Chord`

```rust
pub struct Chord;
```

Source: `editor\pill_editor_core\src\commands.rs:200`

One shortcut: a key plus the modifiers that must be held with it.

## Fields

<a id="rustdoc-item-1293"></a>

### `ctrl`

```rust
ctrl: bool
```

Whether the control key is part of the chord.

<a id="rustdoc-item-1294"></a>

### `shift`

```rust
shift: bool
```

Whether the shift key is part of the chord.

<a id="rustdoc-item-1295"></a>

### `alt`

```rust
alt: bool
```

Whether the alt key is part of the chord.

<a id="rustdoc-item-1296"></a>

### `key`

```rust
key: KeyName
```

The key itself.

## Associated functions and methods

<a id="rustdoc-item-1298"></a>

### `plain`

```rust
pub fn plain(key: KeyName) -> Self;
```

Builds a chord with no modifiers.

<a id="rustdoc-item-1299"></a>

### `with`

```rust
pub fn with(key: KeyName, ctrl: bool, shift: bool, alt: bool) -> Self;
```

Builds a chord from a key and the modifiers held with it.

<a id="rustdoc-item-1300"></a>

### `matches`

```rust
pub fn matches(self: &Self, key: pill_engine::KeyCode, modifiers: pill_engine::Modifiers) -> bool;
```

Returns whether this chord matches a key press with these modifiers.

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
- `ToString`
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
- `PartialOrd`
- `Ord`
- `Serialize`
- `Deserialize<'de>`
- `Display`
- `FromStr`
