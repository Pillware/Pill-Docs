<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1875"></a>

# Function `pill_csharp_bridge::queries::module_binding_matches_live_column`

```rust
pub(in queries) fn module_binding_matches_live_column(component_id: pill_engine::ComponentId, binding_element_size: usize, column_element_size: usize) -> bool;
```

Visibility: `{'restricted': {'parent': 1872, 'path': '::queries'}}` · Source: `csharp\pill_csharp_bridge\src\queries.rs:133`

Whether a module's native binding still matches the live column's layout.

A binding can describe an older layout than the column it points at: the
module reloaded with a new schema, or a mirror arrived against a stale one.
A chunk of the wrong size would be read as the managed mirror's fields, so
the caller refuses the request and this check logs the mismatch.
