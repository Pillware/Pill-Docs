<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-856"></a>

# Constant `pill_development_host::config::RENDERER_SHADER_SOURCES_DIRECTORY`

```rust
pub(crate) const RENDERER_SHADER_SOURCES_DIRECTORY: &str = "shader_sources";
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\config.rs:249`

Directory at a renderer data crate's root holding the shader sources it
cooks, relative to the crate.

The crate's build script and the shader reload code must name the same
directory, or an edited shader changes a file that nothing rebuilds.
