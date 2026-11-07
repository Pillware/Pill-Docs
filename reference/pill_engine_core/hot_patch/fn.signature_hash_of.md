<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5168"></a>

# Function `pill_engine_core::hot_patch::signature_hash_of`

```rust
pub fn signature_hash_of<F, Input>(_function: &F) -> u64 where F: SystemParamFunction<Input>, Input: SystemParam;
```

Source: `engine\pill_engine_core\src\hot_patch.rs:452`

Signature identity of a system, inferred from the function itself.

[`signature_hash`](fn.signature_hash.md#rustdoc-item-4314) called with a turbofish cannot infer the function-item
type, so this version takes the function by reference instead. It is the
convenient form wherever the function is in scope as a value.
