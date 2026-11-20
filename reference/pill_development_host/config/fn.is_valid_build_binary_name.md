<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1294"></a>

# Function `pill_development_host::config::is_valid_build_binary_name`

```rust
pub(in config) fn is_valid_build_binary_name(build_binary_name: &str) -> bool;
```

Visibility: `{'restricted': {'parent': 823, 'path': '::config'}}` · Source: `hosting\pill_development_host\src\config.rs:1994`

Whether `build_binary_name` is a safe artifact file base: letters, digits
and underscores only.
