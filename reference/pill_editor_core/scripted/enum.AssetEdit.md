<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-8843"></a>

# Enum `pill_editor_core::scripted::AssetEdit`

```rust
pub enum AssetEdit { ... }
```

Source: `editor\pill_editor_core\src\scripted.rs:484`

One recorded asset-file edit an `edit asset` line queues.

## Variants

<a id="rustdoc-item-9096"></a>

### `Create`

```rust
Create
```

`edit asset create <type> <folder|-> <name>` - create a standalone asset.

<a id="rustdoc-item-9098"></a>

### `Delete`

```rust
Delete
```

`edit asset delete <path>` - delete one file.

<a id="rustdoc-item-9101"></a>

### `Move`

```rust
Move
```

`edit asset move <from> <to>` - move one file.

<a id="rustdoc-item-9103"></a>

### `Meta`

```rust
Meta
```

`edit asset meta <path>` - write one file's `.meta` sidecar.

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
