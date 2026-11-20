<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1959"></a>

# Function `pill_engine_core::assets::store::forget_all_module_roots`

```rust
pub fn forget_all_module_roots();
```

Source: `engine\pill_engine_core\src\assets\store.rs:482`

Forget every declared root.

The store's tests call it so one test does not decide the others. A host
that replaces its whole module set can call it before it mounts the new
one, so a root from the previous set cannot answer a path.
