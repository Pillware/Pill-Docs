<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6743"></a>

# Struct `pill_editor_core::scripted::KeyChord`

```rust
pub struct KeyChord;
```

Source: `editor\pill_editor_core\src\scripted.rs:460`

One keyboard chord a `key` line injects.

## Fields

<a id="rustdoc-item-7081"></a>

### `key`

```rust
key: pill_engine::KeyCode
```

The key itself.

<a id="rustdoc-item-7082"></a>

### `control`

```rust
control: bool
```

Whether Control is held.

<a id="rustdoc-item-7083"></a>

### `shift`

```rust
shift: bool
```

Whether Shift is held.

<a id="rustdoc-item-7084"></a>

### `alt`

```rust
alt: bool
```

Whether Alt is held.

<a id="rustdoc-item-7085"></a>

### `super_key`

```rust
super_key: bool
```

Whether the platform's Super key (Windows, Command) is held.

## Associated functions and methods

<a id="rustdoc-item-7086"></a>

### `label`

```rust
pub fn label(self: &Self) -> String;
```

The chord written out, as the log line and a suite read it:
`ctrl+shift+z`, `w`.

<a id="rustdoc-item-7087"></a>

### `typed_character`

```rust
pub fn typed_character(self: &Self) -> Option<char>;
```

The character the chord types into a text field, when it types one.

A letter, a digit or the space bar types its character. Shift types
the capital of a letter, as the real key would. A chord that holds
Control, Alt or Super is a command and types nothing, and the named
keys (Enter, Tab, Delete, the arrows) act instead of typing. A shifted
digit also types nothing: the number row's symbols are not in the
key-name table, and the unshifted digit would be the wrong character.

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
