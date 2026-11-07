<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-138"></a>

# Struct `pill_assets::shader_tree::ShaderTreeReport`

```rust
pub struct ShaderTreeReport;
```

Source: `assets\pill_assets\src\shader_tree.rs:71`

What one [`cook_shader_tree`](fn.cook_shader_tree.md#rustdoc-item-137) found and did.

## Fields

<a id="rustdoc-item-133"></a>

### `layout`

```rust
layout: ShaderTreeLayout
```

The layout the cook ran against.

<a id="rustdoc-item-134"></a>

### `discovered_sources`

```rust
discovered_sources: Vec<std::path::PathBuf>
```

Every stage source the cook matched, whether or not it was stale.

<a id="rustdoc-item-135"></a>

### `header_files`

```rust
header_files: Vec<std::path::PathBuf>
```

Every file inside an `include` directory, of any extension.

<a id="rustdoc-item-136"></a>

### `rebuilt_outputs`

```rust
rebuilt_outputs: Vec<std::path::PathBuf>
```

Outputs this run rebuilt, whether or not their text changed.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
- `Debug`
- `Default`
