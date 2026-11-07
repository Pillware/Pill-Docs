<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1965"></a>

# Function `pill_development_host::hot_patch::compile::extract_backticked`

```rust
pub(in hot_patch::compile) fn extract_backticked(cargo_output_line: &str) -> Option<String>;
```

Visibility: `{'restricted': {'parent': 1910, 'path': '::hot_patch::compile'}}` · Source: `hosting\pill_development_host\src\hot_patch\compile.rs:672`

Returns the command from cargo's ``Running `...` `` line.
