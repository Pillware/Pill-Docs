<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4314"></a>

# Function `pill_engine_core::hot_patch::signature_hash`

```rust
pub fn signature_hash<F, Input>() -> u64 where F: SystemParamFunction<Input>, Input: SystemParam;
```

Source: `engine\pill_engine_core\src\hot_patch.rs:435`

Stable identity of a system's call signature.

The value is hashed from the parameter tuple's type name and the return
type's type name, the two things that change when a signature changes. It
is computed once per registration, so its cost never reaches the frame
loop.

Type names are used rather than [`TypeId`](std::any::TypeId) because a patch
is a separately compiled artifact: it must be able to compute the same
value from the same source text, and `type_name` is what both sides can
agree on.
