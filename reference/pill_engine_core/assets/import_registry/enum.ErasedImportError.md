<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-636"></a>

# Enum `pill_engine_core::assets::import_registry::ErasedImportError`

```rust
pub enum ErasedImportError { ... }
```

Source: `engine\pill_engine_core\src\assets\import_registry.rs:453`

Why an erased import, reimport or settings call did not run.

## Variants

<a id="rustdoc-item-618"></a>

### `UnknownExtension`

```rust
UnknownExtension
```

No live registration claims the path's extension.

<a id="rustdoc-item-620"></a>

### `NoExtension`

```rust
NoExtension
```

The path has no extension to look up.

<a id="rustdoc-item-622"></a>

### `MetadataFile`

```rust
MetadataFile
```

The path is a metadata file, which is never an asset itself.

<a id="rustdoc-item-624"></a>

### `UnknownType`

```rust
UnknownType
```

No live registration has this type name.

<a id="rustdoc-item-626"></a>

### `UnknownGuid`

```rust
UnknownGuid
```

No asset of the project has this guid.

<a id="rustdoc-item-630"></a>

### `WrongType`

```rust
WrongType
```

The asset is of another type than the one asked for.

<a id="rustdoc-item-632"></a>

### `Import`

```rust
Import
```

The import itself failed.

<a id="rustdoc-item-635"></a>

### `Load`

```rust
Load
```

Reading or checking settings failed.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
- `ToString`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `Debug`
- `Error`
- `Display`
- `From<AssetImportError>`
- `From<AssetLoadError>`
