<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2030"></a>

# Function `pill_csharp_bridge::resources::retire_resources`

```rust
pub(in resources) fn retire_resources(engine: &mut pill_engine::Engine, bindings: &[ResourceBinding]) -> usize;
```

Visibility: `{'restricted': {'parent': 1993, 'path': '::resources'}}` · Source: `csharp\pill_csharp_bridge\src\resources.rs:481`

Drops the resources the manifest stopped naming.

`drop_resources` skips an id another artifact still claims, so a shared
resource that another module also declares keeps its value, and only this
table's binding disappears. The drop runs before the assembly that declared
the value is unmapped, which is the timing `drop_resources` requires.
