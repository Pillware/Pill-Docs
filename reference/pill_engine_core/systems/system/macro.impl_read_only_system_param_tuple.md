<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-10912"></a>

# Macro `pill_engine_core::systems::system::impl_read_only_system_param_tuple`

```rust
macro_rules! impl_read_only_system_param_tuple {
    ($($T:ident),*) => { ... };
}
```

Visibility: `crate` · Source: `engine\pill_engine_core\src\systems\system.rs:371`

Implements [`ReadOnlySystemParam`](trait.ReadOnlySystemParam.md#rustdoc-item-4087) for tuples whose members all read, so a
condition can take several read-only parameters.
