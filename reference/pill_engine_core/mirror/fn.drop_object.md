<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6216"></a>

# Function `pill_engine_core::mirror::drop_object`

```rust
pub unsafe fn drop_object<T: MirrorObject>(packed_arguments: *const u8) -> u8;
```

Source: `engine\pill_engine_core\src\mirror.rs:516`

Drop the boxed object a slot addresses. This is the body of every drop
trampoline.

## Safety

As [`object_from_raw`](fn.object_from_raw.md#rustdoc-item-6215).
