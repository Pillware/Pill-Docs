<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2035"></a>

# Function `pill_csharp_bridge::resources::publish_field_layout`

```rust
pub(in resources) fn publish_field_layout(engine: &mut pill_engine::Engine, resource_id: pill_engine::ResourceId, resource: &ManagedResourceDeclaration);
```

Visibility: `{'restricted': {'parent': 1993, 'path': '::resources'}}` · Source: `csharp\pill_csharp_bridge\src\resources.rs:726`

Gives the engine the field layout this declaration carries.

Without it, a foreign resource's bytes are opaque, so this is what makes the
resource inspectable. It is the resource counterpart of the field layout a
managed component's registration publishes. When the engine refuses the
layout, the failure is logged instead of returned: being inspectable is not
worth failing a reload over, and the resource is already registered and
usable at that point.

It is called again after a relayout, because the engine drops the stored
layout when the shape moves instead of serving the old offsets over the new
bytes.
