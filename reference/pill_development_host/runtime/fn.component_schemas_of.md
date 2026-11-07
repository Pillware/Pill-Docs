<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4120"></a>

# Function `pill_development_host::runtime::component_schemas_of`

```rust
pub(in runtime) fn component_schemas_of(host: &DevHost, extension: &str) -> Vec<(String, Option<u64>)>;
```

Visibility: `{'restricted': {'parent': 3859, 'path': '::runtime'}}` · Source: `hosting\pill_development_host\src\runtime.rs:1882`

The structural hash of every component the named extension registered,
by component name, or empty when no such extension is loaded.

Taken before and after a reload of the renderer's data crate. It tells a
layout change, where the renderer must not read the rows until it is
rebuilt, from a body-only one, where it may.
