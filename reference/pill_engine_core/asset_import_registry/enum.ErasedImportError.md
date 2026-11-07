<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-826"></a>

# Enum `pill_engine_core::asset_import_registry::ErasedImportError`

```rust
pub enum ErasedImportError { ... }
```

Source: `engine\pill_engine_core\src\asset_import_registry.rs:453`

Why an erased import, reimport or settings call did not run.

## Variants

<a id="rustdoc-item-1502"></a>

### `UnknownExtension`

```rust
UnknownExtension
```

No live registration claims the path's extension.

<a id="rustdoc-item-1504"></a>

### `NoExtension`

```rust
NoExtension
```

The path has no extension to look up.

<a id="rustdoc-item-1506"></a>

### `MetadataFile`

```rust
MetadataFile
```

The path is a metadata file, which is never an asset itself.

<a id="rustdoc-item-1508"></a>

### `UnknownType`

```rust
UnknownType
```

No live registration has this type name.

<a id="rustdoc-item-1510"></a>

### `UnknownGuid`

```rust
UnknownGuid
```

No asset of the project has this guid.

<a id="rustdoc-item-1514"></a>

### `WrongType`

```rust
WrongType
```

The asset is of another type than the one asked for.

<a id="rustdoc-item-1516"></a>

### `Import`

```rust
Import
```

The import itself failed.

<a id="rustdoc-item-1518"></a>

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
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Debug`
- `Error`
- `Display`
- `From<AssetImportError>`
- `From<AssetLoadError>`
