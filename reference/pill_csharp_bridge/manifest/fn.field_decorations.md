<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1495"></a>

# Function `pill_csharp_bridge::manifest::field_decorations`

```rust
pub(crate) fn field_decorations(decorations: &[ManagedFieldDecorator]) -> std::borrow::Cow<'static, [pill_engine::component_registry::FieldDecorator]>;
```

Visibility: `crate` · Source: `csharp\pill_csharp_bridge\src\manifest.rs:584`

The editor decorators a managed field declares, in the form the layout
carries them.

Text payloads are owned here: a managed declaration's text comes from the
parsed JSON, not from a static, so the descriptor must own it. An empty list
returns the borrowed empty slice that every undecorated field shares.
