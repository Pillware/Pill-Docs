<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7572"></a>

# Function `pill_engine_core::reflection::type_names::names_same_type`

```rust
pub fn names_same_type(stored: &str, current: &str) -> bool;
```

Source: `engine\pill_engine_core\src\reflection\type_names.rs:120`

Whether `stored`, a type name read back from a file, names the type whose
current name is `current`.

It does when the two are equal, and when either is a name written before
names dropped their module path (`pill_physics::components::RigidBodyComponent`
against `pill_physics::RigidBodyComponent`). A caller comparing two current
names therefore gets a plain equality, and one comparing a file's name with
a type's name may pass them in either order.
