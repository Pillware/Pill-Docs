<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5170"></a>

# Function `pill_engine_core::hot_patch::local_implementation_address`

```rust
pub fn local_implementation_address<F, Input>(_function: &F) -> usize where F: SystemParamFunction<Input>, Input: SystemParam;
```

Source: `engine\pill_engine_core\src\hot_patch.rs:487`

Address of the entry point for a locally compiled system function.

This is the address [`HotSlot::install`](struct.HotSlot.md#rustdoc-item-5100) expects. A real patch resolves the
same kind of address from a freshly compiled library's exports instead; this
helper covers the in-process case, which is what tests and any statically
linked replacement need.
