<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4109"></a>

# Module `pill_engine_core::dynamic_buffer`

Source: `engine\pill_engine_core\src\lib.rs:131`

Engine-owned native dynamic buffer, re-exported from `pill_core`.

The type lives beside the allocation service that owns its blocks, so a
module can name it without depending on the whole ECS. It is re-exported
here so `pill_engine::DynamicBuffer` is found where users look for it: a
component field is its usual place.

## Re-exports

- `pub use pill_core::dynamic_buffer;`
