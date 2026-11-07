<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-212"></a>

# Struct `pill_engine_macros::mirror::ObjectFlags`

```rust
pub(in mirror) struct ObjectFlags;
```

Visibility: `{'restricted': {'parent': 1, 'path': '::mirror'}}` · Source: `engine\pill_engine_macros\src\mirror.rs:1150`

The flags `#[pill_mirror_object(...)]` accepts.

## Fields

<a id="rustdoc-item-207"></a>

### `is_asset`

```rust
is_asset: bool
```

The type is an `Asset`: emit the asset store operations.

<a id="rustdoc-item-208"></a>

### `is_imported_asset`

```rust
is_imported_asset: bool
```

The type is an `ImportedAsset`: emit the import operation.

<a id="rustdoc-item-209"></a>

### `is_standalone_asset`

```rust
is_standalone_asset: bool
```

The type is a `StandaloneAsset`: emit the standalone import.

<a id="rustdoc-item-210"></a>

### `shared_name`

```rust
shared_name: Option<syn::LitStr>
```

The type's pinned shared name, when it declares one: an `Asset` whose
copies in several binaries are one column.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
- `Default`
