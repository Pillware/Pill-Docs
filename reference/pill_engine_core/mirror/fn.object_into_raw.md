<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6214"></a>

# Function `pill_engine_core::mirror::object_into_raw`

```rust
pub fn object_into_raw<T: MirrorObject>(value: T) -> *mut T;
```

Source: `engine\pill_engine_core\src\mirror.rs:506`

Box an object for the managed side and return its address.
