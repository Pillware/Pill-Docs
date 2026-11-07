<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-13"></a>

# Struct `pill_assets::rules::hlsl_to_wgsl::HlslToWgsl`

```rust
pub struct HlslToWgsl;
```

Source: `assets\pill_assets\src\rules\hlsl_to_wgsl.rs:65`

Compiles HLSL sources to WGSL beside the source through `slangc`.

The stage and entry point come from the file name. A name ending in
`_vertex.hlsl` is a vertex stage entered at `vs_main`, and a name ending in
`_fragment.hlsl` is a fragment stage entered at `fs_main`. Any other name
fails instead of guessing, so adding a stage is a decision made here rather
than something a typo can introduce.

Sources `#include` headers from an `include/` directory beside them, and
[`HlslToWgsl::with_include_directory`](#rustdoc-item-10) adds directories a header is shared
from. [`HlslToWgsl::new`](#rustdoc-item-11) reads a `shaders/` level below the root.
[`HlslToWgsl::flat_tree`](#rustdoc-item-12) reads the root itself. The compiler comes from
`PILL_SLANGC` or the first `slangc` on `PATH`, and one that resolves inside
the working directory is refused.

## Fields

<a id="rustdoc-item-6"></a>

### `source_glob`

```rust
source_glob: &'static str
```

Glob that selects the sources, relative to the root.

<a id="rustdoc-item-7"></a>

### `include_directories`

```rust
include_directories: Vec<std::path::PathBuf>
```

Directories handed to `slangc -I`, in the order they were added. The
compiler searches them after the directory of the file that does the
`#include`.

## Associated functions and methods

<a id="rustdoc-item-11"></a>

### `new`

```rust
pub fn new() -> Self;
```

The rule for a root with a `shaders/` directory.

No include path is added, so sources resolve against their own tree.

<a id="rustdoc-item-12"></a>

### `flat_tree`

```rust
pub fn flat_tree() -> Self;
```

The rule for a root that is itself the shaders directory.

For a tree whose sources have no `shaders/` level to sit in, such as a
shared one holding a few stages, where the extra directory adds nothing.

<a id="rustdoc-item-10"></a>

### `with_include_directory`

```rust
pub fn with_include_directory<impl Into<PathBuf>: Into<PathBuf>>(self: Self, directory: impl Into<PathBuf>) -> Self;
```

Also search `directory` for the headers the sources `#include`.

The method can be called more than once, and directories are searched in
the order they were added.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
- `Default`
- `Rule`
