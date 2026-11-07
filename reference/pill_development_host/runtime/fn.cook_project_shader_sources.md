<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4109"></a>

# Function `pill_development_host::runtime::cook_project_shader_sources`

```rust
pub(in runtime) fn cook_project_shader_sources(asset_directory: &std::path::Path);
```

Visibility: `{'restricted': {'parent': 3859, 'path': '::runtime'}}` · Source: `hosting\pill_development_host\src\runtime.rs:1305`

Cook every stale shader source under the project's asset directory, beside
itself, and log what it did.

The project's shaders follow the cooker's conventions: a source is a stage
by its file name, and a directory named `include` holds the headers it can
`#include`. The output goes next to the source, which is where the shader
import reads it from.

A failed cook is logged and otherwise ignored. The outputs cooked before
the failure stay on disk, and so do the ones from an earlier run, which is
what the shaders already built draw.
