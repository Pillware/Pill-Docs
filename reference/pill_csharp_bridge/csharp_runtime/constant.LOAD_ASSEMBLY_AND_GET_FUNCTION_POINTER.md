<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1117"></a>

# Constant `pill_csharp_bridge::csharp_runtime::LOAD_ASSEMBLY_AND_GET_FUNCTION_POINTER`

```rust
pub(in csharp_runtime) const LOAD_ASSEMBLY_AND_GET_FUNCTION_POINTER: i32 = 5;
```

Visibility: `{'restricted': {'parent': 1118, 'path': '::csharp_runtime'}}` · Source: `csharp\pill_csharp_bridge\src\csharp_runtime.rs:36`

The `hostfxr_delegate_type::hdt_load_assembly_and_get_function_pointer`
delegate kind, whose value in the `hostfxr` header is 5.

Asking for this kind gives a delegate that both loads a managed assembly
and returns one method from it as a native function pointer.
