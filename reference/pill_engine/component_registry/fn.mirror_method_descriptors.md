<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-304"></a>

# Function `pill_engine::component_registry::mirror_method_descriptors`

```rust
pub fn mirror_method_descriptors() -> Vec<&'static PillMethodDescriptor>;
```

Source: `engine\pill_engine\src\component_registry.rs:301`

Every mirror row this artifact declares: methods
(`#[pill_mirror_impl]`/`#[pill_mirror_method]`), free functions
(`#[pill_mirror_fn]`) and type rows, sorted by type name then row name so
the host consumes them deterministically.
