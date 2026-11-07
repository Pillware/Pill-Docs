<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-428"></a>

# Function `pill_project_ui::register_reload_system`

```rust
pub(crate) fn register_reload_system(engine: &mut pill_engine_core::Engine);
```

Visibility: `crate` · Source: `ui\pill_project_ui\src\lib.rs:609`

Register the re-apply system once per project generation.

A reload removes the project's systems, so the install that follows a
reload registers a fresh one. The check only stops a second
`install_with_theme` inside one `init` from adding a duplicate.
