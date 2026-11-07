<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-471"></a>

# Function `pill_development_host::analytics::wrap_list`

```rust
pub(in analytics) fn wrap_list(items: &[&str], width: usize) -> Vec<String>;
```

Visibility: `{'restricted': {'parent': 1, 'path': '::analytics'}}` · Source: `hosting\pill_development_host\src\analytics.rs:1568`

Join the names with `, ` into lines of at most `width` characters, never
splitting one name. A name longer than `width` still gets its own line.
