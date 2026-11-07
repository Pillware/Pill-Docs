<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-628"></a>

# Function `pill_csharp_bridge::backend::register_managed_systems`

```rust
pub(in backend) fn register_managed_systems(engine: &mut pill_engine::Engine, bindings: &std::sync::Arc<super::components::BindingStore>, exports: SystemExports, subject: &str) -> Result<Vec<ManagedSystemSnapshot>, pill_core::error::CSharpError>;
```

Visibility: `{'restricted': {'parent': 400, 'path': '::backend'}}` · Source: `csharp\pill_csharp_bridge\src\backend.rs:522`

Resolves and registers every managed system in one step.

The startup path's entry point: there is nothing installed yet, so the
prepare/commit split buys nothing and the two halves run back to back. A
reload calls them separately - see `CSharpRuntime::reregister_systems`.

## Errors

Whatever [`prepare_managed_systems`](fn.prepare_managed_systems.md#rustdoc-item-518) refuses.
