<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-235"></a>

# Function `pill_engine_core::abi::mirror::object_into_raw`

```rust
pub fn object_into_raw<T: MirrorObject>(value: T) -> *mut T;
```

Source: `engine\pill_engine_core\src\abi\mirror.rs:506`

Box an object for the managed side and return its address.
