<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2041"></a>

# Function `pill_csharp_bridge::resources::fill_resource_view`

```rust
pub(in resources) fn fill_resource_view(world: &mut pill_engine::World, resource_id: pill_engine::ResourceId, declared_size: usize, access_mode: u8, view_output: *mut super::abi::ResourceView) -> u8;
```

Visibility: `{'restricted': {'parent': 1993, 'path': '::resources'}}` · Source: `csharp\pill_csharp_bridge\src\resources.rs:857`

Writes one resource's live bytes into the caller's view.

A read takes the immutable byte view. A write takes the mutable one, which
marks the resource as changed as it is handed out. That matches the engine's
rule: managed code holds raw bytes with no wrapper that could notice a
mutation, so handing out the borrow is the last moment a change can be
recorded.
