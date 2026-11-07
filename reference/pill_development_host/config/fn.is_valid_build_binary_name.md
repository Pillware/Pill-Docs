<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1274"></a>

# Function `pill_development_host::config::is_valid_build_binary_name`

```rust
pub(in config) fn is_valid_build_binary_name(build_binary_name: &str) -> bool;
```

Visibility: `{'restricted': {'parent': 821, 'path': '::config'}}` · Source: `hosting\pill_development_host\src\config.rs:1786`

Whether `build_binary_name` is a safe artifact file base: letters, digits
and underscores only.
