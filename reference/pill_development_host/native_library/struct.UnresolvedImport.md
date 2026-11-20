<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3353"></a>

# Struct `pill_development_host::native_library::UnresolvedImport`

```rust
pub(in native_library) struct UnresolvedImport;
```

Visibility: `{'restricted': {'parent': 3326, 'path': '::native_library'}}` · Source: `hosting\pill_development_host\src\native_library.rs:276`

A named import the module needs that a candidate copy of its library does
not export, with the copy the loader would try first.

## Fields

<a id="rustdoc-item-3350"></a>

### `dll`

```rust
dll: String
```

The library as the image names it: a PE import table's `pill_core.dll`,
or an ELF `DT_NEEDED`'s `libpill_core.so`.

<a id="rustdoc-item-3351"></a>

### `symbol`

```rust
symbol: String
```

The symbol the module needs from it.

<a id="rustdoc-item-3352"></a>

### `path`

```rust
path: std::path::PathBuf
```

The copy the loader would resolve for that library, when any exists.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Equivalent<K>`
- `Debug`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
