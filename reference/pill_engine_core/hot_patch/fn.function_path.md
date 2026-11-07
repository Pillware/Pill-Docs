<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5169"></a>

# Function `pill_engine_core::hot_patch::function_path`

```rust
pub fn function_path<F>() -> Option<String>;
```

Source: `engine\pill_engine_core\src\hot_patch.rs:471`

The fully qualified path of a system function, as `#[pill_hot]` names it.

A function-item type's name is its path, such as `project::physics_system`.
That is the same text the attribute builds from `module_path!() + "::" + fn
name`, which lets the host patch a system by its real path even though
[`Engine::register_system`](../engine/struct.Engine.md#rustdoc-item-4286) also records a
separate, arbitrary display name (`"ball_physics"`).

Returns `None` for anything that is not a plain function item - a closure,
for instance, whose `type_name` is a compiler-generated placeholder with no
stable path a patch could name.
