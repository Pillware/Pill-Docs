<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-173"></a>

# Enum `pill_assets::asset_move::MoveAssetError`

```rust
pub enum MoveAssetError { ... }
```

Source: `assets\pill_assets\src\asset_move.rs:40`

Why [`move_asset`](fn.move_asset.md#rustdoc-item-172) did not move anything.

## Variants

<a id="rustdoc-item-163"></a>

### `SourceMissing`

```rust
SourceMissing
```

There is no source file at the origin.

<a id="rustdoc-item-165"></a>

### `IsMetadataFile`

```rust
IsMetadataFile
```

The origin is itself a metadata file; move its source instead.

<a id="rustdoc-item-167"></a>

### `TargetExists`

```rust
TargetExists
```

Something already exists where the source or its metadata would go.

<a id="rustdoc-item-171"></a>

### `Io`

```rust
Io
```

A filesystem operation failed; the move is undone when that is
possible.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
- `ToString`
- `Debug`
- `Display`
- `Error`
