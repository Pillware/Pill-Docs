<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2034"></a>

# Enum `pill_core::utils::AssetPathError`

```rust
pub enum AssetPathError { ... }
```

Source: `engine\pill_core\src\utils.rs:35`

The reason an asset loader refused a path: it names nothing usable, or its
format is not one the loader accepts.

Loaders that check a path before reading it report this type;
`pill_audio`'s `Sound::load` is one.

## Variants

<a id="rustdoc-item-2030"></a>

### `InvalidPath`

```rust
InvalidPath
```

The path names nothing usable: it does not exist, or it carries no file
extension.

<a id="rustdoc-item-2033"></a>

### `InvalidFormat`

```rust
InvalidFormat
```

The file extension is not among the allowed formats.

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
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `Debug`
- `Clone`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
- `Error`
- `Display`
