<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4373"></a>

# Function `pill_development_host::watchers::shader::cook_edited_shaders`

```rust
pub(in watchers::shader) fn cook_edited_shaders(shaders_directory: &std::path::Path, edited_paths: &[std::path::PathBuf], known_outputs: &mut std::collections::HashMap<std::path::PathBuf, String>) -> Vec<CookedShader>;
```

Visibility: `{'restricted': {'parent': 4305, 'path': '::watchers::shader'}}` · Source: `hosting\pill_development_host\src\watchers\shader.rs:201`

Cooks the tree after the edits in `edited_paths` settled, and returns every
output whose text differs from `known_outputs`.

The texts that are returned are also recorded in `known_outputs`, so the
same text is not queued twice. `edited_paths` is the batch of files whose
events started the cook; it is only used for the count in the log line.

Every discovered source is compared, not only the outputs this cook
rebuilt. The data crate's build script cooks the same tree, so it can reach
an edited source first; the edit still has to reach the running world.

A cook that fails is logged and returns nothing, so the running shaders
keep the text they have.
