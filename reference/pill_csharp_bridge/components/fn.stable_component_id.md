<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-734"></a>

# Function `pill_csharp_bridge::components::stable_component_id`

```rust
pub(crate) const fn stable_component_id(name: &str) -> StableComponentId;
```

Visibility: `crate` · Source: `csharp\pill_csharp_bridge\src\components.rs:208`

Hash a canonical managed full name into its stable 128-bit identity.

Managed code names a component with dots (`pill_spline.Spline`), while Rust
names it with colons, so this identity is not interchangeable with the one
the engine derives for a shared component. [`ModuleExposedComponent`](struct.ModuleExposedComponent.md#rustdoc-item-510) keeps
the C# name beside the engine component ID the Rust name produced, so both
identities are kept as they are. Only the mixing function is shared.
