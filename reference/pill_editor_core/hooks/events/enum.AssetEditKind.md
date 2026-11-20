<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5136"></a>

# Enum `pill_editor_core::hooks::events::AssetEditKind`

```rust
pub enum AssetEditKind { ... }
```

Source: `editor\pill_editor_core\src\hooks\events.rs:258`

What an asset edit did.

## Variants

<a id="rustdoc-item-5451"></a>

### `Created`

```rust
Created
```

A standalone asset file was created.

<a id="rustdoc-item-5452"></a>

### `Deleted`

```rust
Deleted
```

An asset file was deleted.

<a id="rustdoc-item-5453"></a>

### `Moved`

```rust
Moved
```

An asset file was moved or renamed.

<a id="rustdoc-item-5454"></a>

### `MetaWritten`

```rust
MetaWritten
```

A `.meta` sidecar was written.

<a id="rustdoc-item-5455"></a>

### `SettingsWritten`

```rust
SettingsWritten
```

An asset's settings or standalone document were written.

<a id="rustdoc-item-5456"></a>

### `Imported`

```rust
Imported
```

Files were imported into the asset directory.

## Associated functions and methods

<a id="rustdoc-item-5457"></a>

### `name`

```rust
pub fn name(self: Self) -> &'static str;
```

The kind's wire name, as the log lines spell it.

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
