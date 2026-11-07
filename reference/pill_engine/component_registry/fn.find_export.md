<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-233"></a>

# Function `pill_engine::component_registry::find_export`

```rust
pub fn find_export(export_name: &str) -> Option<ExportAddress>;
```

Source: `engine\pill_engine\src\component_registry.rs:280`

The address of the export named `export_name` among those linked into the
calling artifact, if one was submitted.

Sees only this artifact's own inventory: a function in a separately loaded
module is not found here, and is resolved from that module's DLL instead.
