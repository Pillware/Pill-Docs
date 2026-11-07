<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-886"></a>

# Function `pill_csharp_bridge::components::exposed_components_from_names`

```rust
pub fn exposed_components_from_names(world: &pill_engine::World, names: &[String]) -> Vec<ModuleExposedComponent>;
```

Source: `csharp\pill_csharp_bridge\src\components.rs:257`

Turn registered component names into the layouts that C# binds against.

The C#-facing name is the Rust path with `::` replaced by `.`, so a mirror
struct generated under that full name reproduces the same stable identity.
A name that does not resolve is skipped: the managed side binds by name, so
a name with no component simply has no binding. The field layout comes from
the derive's registration; a component without one keeps the opaque byte
blob.
