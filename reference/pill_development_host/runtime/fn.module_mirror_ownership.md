<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4201"></a>

# Function `pill_development_host::runtime::module_mirror_ownership`

```rust
pub(in runtime) fn module_mirror_ownership(engine: &pill_engine::Engine, extensions: &[slot::ExtensionSlot]) -> Vec<Vec<pill_csharp_bridge::ModuleExposedComponent>>;
```

Visibility: `{'restricted': {'parent': 3859, 'path': '::runtime'}}` · Source: `hosting\pill_development_host\src\runtime.rs:2605`

The components each loaded module's mirror file carries, by first-claim
order.

A component is mirrored once per process. A shared component is registered
by every module that links it, so several modules' registration logs name
it. Two generated files declaring the same C# `partial struct` then collide
on every member (`CS0102`, "already contains a definition for `Color0`").

The first module to expose a component in load order keeps it. That is
stable because the module list is the project's own settings order.
