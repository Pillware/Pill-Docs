<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4447"></a>

# Function `pill_development_host::watchers::shared::canonicalize_through_existing_ancestor`

```rust
pub(in watchers::shared) fn canonicalize_through_existing_ancestor(path: &std::path::Path) -> Option<std::path::PathBuf>;
```

Visibility: `{'restricted': {'parent': 4377, 'path': '::watchers::shared'}}` · Source: `hosting\pill_development_host\src\watchers\shared.rs:210`

Resolve a path that may no longer exist.

`Path::canonicalize` needs every part of the path to exist, and a file that
was just deleted cannot meet that. This walks up through the path's
ancestors to the first one that resolves, then puts the missing parts back
as plain names. A path that still exists resolves exactly as `canonicalize`
would, and a removed one still resolves to the place it used to occupy. A
`..` among the missing parts is refused: the walk up already resolved the
directory, and a component that climbed back out of it would hand the
watch-root check a path it would then trust.
