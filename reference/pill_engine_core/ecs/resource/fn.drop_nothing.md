<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4623"></a>

# Function `pill_engine_core::ecs::resource::drop_nothing`

```rust
pub(in ecs::resource) unsafe fn drop_nothing(_ptr: *mut u8);
```

Visibility: `{'restricted': {'parent': 4292, 'path': '::ecs::resource'}}` · Source: `engine\pill_engine_core\src\ecs\resource.rs:702`

Drop nothing.

## Safety

Always sound: a foreign resource owns no allocation and holds no value that
needs releasing, which is the whole point of the blittable-only rule.
