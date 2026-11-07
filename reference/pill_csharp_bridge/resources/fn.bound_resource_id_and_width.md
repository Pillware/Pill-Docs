<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1997"></a>

# Function `pill_csharp_bridge::resources::bound_resource_id_and_width`

```rust
pub(crate) fn bound_resource_id_and_width(key: super::components::StableComponentId) -> Option<(pill_engine::ResourceId, usize)>;
```

Visibility: `crate` · Source: `csharp\pill_csharp_bridge\src\resources.rs:244`

Returns the engine id and byte width of one bound resource.

The hot path needs only these two values. Cloning the binding to read them
would copy the field layout on every `Res<T>` access.
