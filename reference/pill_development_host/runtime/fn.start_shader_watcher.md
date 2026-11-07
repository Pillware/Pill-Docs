<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4122"></a>

# Function `pill_development_host::runtime::start_shader_watcher`

```rust
pub(in runtime) fn start_shader_watcher(host: &DevHost) -> Option<shader::ShaderWatcher>;
```

Visibility: `{'restricted': {'parent': 3859, 'path': '::runtime'}}` · Source: `hosting\pill_development_host\src\runtime.rs:1945`

Start watching the renderer data crate's shader sources, when the host has
a renderer and its data crate has a `shader_sources/` directory.

A watch that cannot start is reported and leaves the host without shader
reload; nothing else depends on it.
