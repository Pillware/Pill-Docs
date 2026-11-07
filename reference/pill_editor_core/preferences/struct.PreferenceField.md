<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6296"></a>

# Struct `pill_editor_core::preferences::PreferenceField`

```rust
pub struct PreferenceField;
```

Source: `editor\pill_editor_core\src\preferences.rs:159`

One editable preference: the document key, the row's label and the text a
file without the key shows.

## Fields

<a id="rustdoc-item-6298"></a>

### `key`

```rust
key: &'static str
```

The file's key; a dot nests into an object.

<a id="rustdoc-item-6299"></a>

### `label`

```rust
label: &'static str
```

The label the row shows.

<a id="rustdoc-item-6300"></a>

### `fallback`

```rust
fallback: &'static str
```

The text the row shows when the file has no value for the key, which is
the value the key's reader falls back to.

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
