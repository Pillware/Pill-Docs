<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4371"></a>

# Function `pill_development_host::watchers::shader::is_shader_source`

```rust
pub(in watchers::shader) fn is_shader_source(path: &std::path::Path) -> bool;
```

Visibility: `{'restricted': {'parent': 4305, 'path': '::watchers::shader'}}` · Source: `hosting\pill_development_host\src\watchers\shader.rs:155`

Whether an edited file is one a cook reads.

Headers count as sources here: a header under an `include/` directory
changes what every source that includes it cooks to, so an edit to one has
to start a cook just as a stage source's edit does. The cooked `.wgsl`
files are excluded, or the cook's own output would feed back in as an edit.
