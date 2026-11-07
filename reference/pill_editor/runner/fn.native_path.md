<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1558"></a>

# Function `pill_editor::runner::native_path`

```rust
pub(in runner) fn native_path(target: &std::path::Path) -> std::path::PathBuf;
```

Visibility: `{'restricted': {'parent': 483, 'path': '::runner'}}` · Source: `editor\pill_editor\src\runner\mod.rs:4148`

Rebuild `target` from its components, so its text carries the platform's
own separators.

A reveal target is joined from a `/`-separated relative path, and
`Path::display` prints the string the path was built from. That is why the
same path can read `res/materials/unlit.material` on Windows, where
Explorer's `/select,` rejects it and opens the user's Documents folder
instead.
