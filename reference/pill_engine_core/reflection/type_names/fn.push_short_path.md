<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7578"></a>

# Function `pill_engine_core::reflection::type_names::push_short_path`

```rust
pub(in reflection::type_names) fn push_short_path(path: &str, output: &mut String) -> bool;
```

Visibility: `{'restricted': {'parent': 7575, 'path': '::reflection::type_names'}}` · Source: `engine\pill_engine_core\src\reflection\type_names.rs:128`

Appends the short form of one path to `output`. Returns whether the short
form differs from `path`.
