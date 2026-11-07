<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4124"></a>

# Function `pill_development_host::runtime::start_project_shader_watcher`

```rust
pub(in runtime) fn start_project_shader_watcher(host: &DevHost) -> Option<shader::ShaderWatcher>;
```

Visibility: `{'restricted': {'parent': 3859, 'path': '::runtime'}}` · Source: `hosting\pill_development_host\src\runtime.rs:1995`

Start watching the project's own shader sources.

A project has no build script to cook its shaders, so the watcher that
keeps the renderer data crate's tree current keeps the project's too. The
tree is the project's asset directory, the same root the asset watcher
watches and the same conventions the cooker applies to a crate's
`shader_sources/`.

A watch that cannot start is reported and leaves the host running the
shaders it already loaded.
