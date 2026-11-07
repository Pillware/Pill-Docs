<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-8542"></a>

# Macro `pill_engine_core::system::impl_system_param_tuple`

```rust
macro_rules! impl_system_param_tuple {
    ($($T:ident),*) => { ... };
}
```

Visibility: `crate` · Source: `engine\pill_engine_core\src\system.rs:303`

Implements [`SystemParam`](trait.SystemParam.md#rustdoc-item-2656) for tuples, so a system can take more than one
parameter.

Each element is fetched on its own and put into the tuple.
