<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1991"></a>

# Static `pill_csharp_bridge::resources::RESOURCE_BINDINGS`

```rust
pub(in resources) static RESOURCE_BINDINGS: std::sync::OnceLock<std::sync::RwLock<std::collections::HashMap<super::components::StableComponentId, ResourceBinding>>> = _;
```

Visibility: `{'restricted': {'parent': 1993, 'path': '::resources'}}` · Source: `csharp\pill_csharp_bridge\src\resources.rs:143`

The live table of resource bindings, shared by registration and the
callback.

A host keeps one table for the whole process. A world holds one value per
resource, so registration, reload and the `Res<T>` callback must all see
the same bindings.

Under `cargo test` the table is thread-local. Every manifest apply replaces
the whole table, and cargo runs tests on parallel threads in one process, so
a component-only manifest in one test would otherwise erase a resource
test's bindings while it runs. A test registers, acts and asserts on one
thread, so a table per thread gives each test what a host gives the process.
