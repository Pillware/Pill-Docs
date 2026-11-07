<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3667"></a>

# Function `pill_development_host::reload::unclaimed_type_names`

```rust
pub(in reload) fn unclaimed_type_names(forgotten_type_names: &[String], registered_component_names: &[String], peer_component_names: &[String]) -> Vec<String>;
```

Visibility: `{'restricted': {'parent': 3428, 'path': '::reload'}}` · Source: `hosting\pill_development_host\src\reload.rs:1304`

Returns the names in `forgotten_type_names` that nothing declares any more.

`forgotten_type_names` holds persistable names the previous generation
registered and the new one did not register again. A name in
`registered_component_names` was registered again as a plain component, so
its data is live and its columns must survive. A name in
`peer_component_names` belongs to another artifact that still declares it,
usually a shared identity the project registers as well as a module.
Dropping it here would erase that peer's rows.
