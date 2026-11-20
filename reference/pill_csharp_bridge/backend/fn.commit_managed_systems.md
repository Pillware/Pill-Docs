<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-643"></a>

# Function `pill_csharp_bridge::backend::commit_managed_systems`

```rust
pub(in backend) fn commit_managed_systems(engine: &mut pill_engine::Engine, bindings: &std::sync::Arc<super::components::BindingStore>, exports: SystemExports, prepared_systems: Vec<PreparedManagedSystem>) -> Vec<ManagedSystemSnapshot>;
```

Visibility: `{'restricted': {'parent': 403, 'path': '::backend'}}` · Source: `csharp\pill_csharp_bridge\src\backend.rs:498`

Hands every prepared system to the scheduler.

The half that cannot fail. Every access was resolved by
[`prepare_managed_systems`](fn.prepare_managed_systems.md#rustdoc-item-528), so nothing here can refuse, which is what makes
the caller's clear-then-register sequence safe.
