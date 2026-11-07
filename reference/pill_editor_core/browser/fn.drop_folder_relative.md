<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-567"></a>

# Function `pill_editor_core::browser::drop_folder_relative`

```rust
pub fn drop_folder_relative(folder: &str) -> Result<std::path::PathBuf, String>;
```

Source: `editor\pill_editor_core\src\browser.rs:344`

Returns the folder a drop lands in, relative to the asset root, from the
browser's folder label.

`res` itself is the asset root, so it becomes an empty relative path. Every
other folder goes through the same validator every asset command uses. A
folder that climbed out of the root (`res/../..`) is therefore refused
instead of joined onto it, so the copy cannot land outside the project.

## Errors

The validator's message when the folder is not a path inside the asset
directory.
