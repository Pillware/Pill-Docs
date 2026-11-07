<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2896"></a>

# Function `pill_engine_core::component::component_name_hash`

```rust
pub const fn component_name_hash(name: &str, offset_basis: u64) -> u64;
```

Source: `engine\pill_engine_core\src\component.rs:315`

Hashes a name to one 64-bit half of a stable component identity.

This is FNV-1a, so the result depends only on the bytes of the name: there
is no seed, no runtime state and no dependence on the compiler version or on
the process. Two separately compiled binaries - and the managed runtime,
which derives the same value from the same name - can therefore agree on an
identity without exchanging anything.
