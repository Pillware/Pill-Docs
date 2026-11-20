<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4378"></a>

# Function `pill_development_host::runtime::unsupported_render_components`

```rust
pub(in runtime) fn unsupported_render_components(world: &pill_engine::World, registered_component_names: &[String], consumed_component_names: &[String]) -> Vec<(String, usize)>;
```

Visibility: `{'restricted': {'parent': 4115, 'path': '::runtime'}}` · Source: `hosting\pill_development_host\src\runtime.rs:2013`

The components of `world` that at least one entity carries, that
`registered_component_names` lists, and that `consumed_component_names` does
not name. Each comes with its entity count, sorted by name and listed
once.

See [`RenderingHost::report_unsupported_render_data`](struct.RenderingHost.md#rustdoc-item-4327) for why only shared
components are candidates.
