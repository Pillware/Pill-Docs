<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7434"></a>

# Function `pill_engine_core::resource::drop_nothing`

```rust
pub(in resource) unsafe fn drop_nothing(_ptr: *mut u8);
```

Visibility: `{'restricted': {'parent': 1162, 'path': '::resource'}}` · Source: `engine\pill_engine_core\src\resource.rs:540`

Drop nothing.

## Safety

Always sound: a foreign resource owns no allocation and holds no value that
needs releasing, which is the whole point of the blittable-only rule.
