<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1275"></a>

# Function `pill_development_host::config::is_valid_module_directory_name`

```rust
pub(in config) fn is_valid_module_directory_name(module_directory_name: &str) -> bool;
```

Visibility: `{'restricted': {'parent': 821, 'path': '::config'}}` · Source: `hosting\pill_development_host\src\config.rs:1801`

Whether `module_directory_name` is a usable extension folder name.

The name becomes a path segment under `extensions/` and a cargo package
selector, so it is checked more strictly than `build_binary_name`:
a leading digit is refused (crate folders start with a letter), `-` is
allowed because real crate folders use it, and every other character -
path separators, spaces and dots - is rejected instead of being placed
into a watch path.
