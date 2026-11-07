<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-91"></a>

# Struct `pill_assets::shader_tree::ShaderTreeLayout`

```rust
pub struct ShaderTreeLayout;
```

Source: `assets\pill_assets\src\shader_tree.rs:50`

Where a shader tree keeps its sources and its headers.

## Fields

<a id="rustdoc-item-89"></a>

### `source_directories`

```rust
source_directories: Vec<std::path::PathBuf>
```

Directories that directly hold stage sources, sorted.

<a id="rustdoc-item-90"></a>

### `include_directories`

```rust
include_directories: Vec<std::path::PathBuf>
```

Directories named `include`, sorted.

## Associated functions and methods

<a id="rustdoc-item-92"></a>

### `watched_directories`

```rust
pub fn watched_directories(self: &Self) -> Vec<PathBuf>;
```

Returns every directory that holds a source or a header, which is where
an edit can change what the cook produces. A build script reports them
to cargo, and the development host watches the tree that contains them.

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
- `Debug`
- `Default`
- `Clone`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
