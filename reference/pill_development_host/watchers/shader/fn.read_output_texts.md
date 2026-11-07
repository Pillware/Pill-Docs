<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4372"></a>

# Function `pill_development_host::watchers::shader::read_output_texts`

```rust
pub(in watchers::shader) fn read_output_texts(shaders_directory: &std::path::Path) -> std::collections::HashMap<std::path::PathBuf, String>;
```

Visibility: `{'restricted': {'parent': 4305, 'path': '::watchers::shader'}}` · Source: `hosting\pill_development_host\src\watchers\shader.rs:164`

Returns the text of every cooked `.wgsl` file under `shaders_directory`,
keyed by path.///
An output that cannot be read is left out, so the next cook queues it as
changed.
