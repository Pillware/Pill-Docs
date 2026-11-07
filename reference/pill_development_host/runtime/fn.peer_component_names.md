<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4205"></a>

# Function `pill_development_host::runtime::peer_component_names`

```rust
pub(in runtime) fn peer_component_names(extensions: &[slot::ExtensionSlot], excluded_extension_index: Option<usize>, project: &loaded::LoadedProject) -> Vec<String>;
```

Visibility: `{'restricted': {'parent': 3859, 'path': '::runtime'}}` · Source: `hosting\pill_development_host\src\runtime.rs:2763`

Every component type name the live subjects other than
`excluded_extension_index` declare.

Gathered from each slot's current generation rather than from the world's
registration log, which is append-only. A name a module has stopped
registering is still in that log, so it cannot answer whether any subject
declares the name now. The project counts as a subject too - a shared
identity is registered by every artifact linking the crate, and dropping it
on a module reload would delete the project's rows.
