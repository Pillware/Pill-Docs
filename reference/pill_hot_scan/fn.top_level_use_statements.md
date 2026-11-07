<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-79"></a>

# Function `pill_hot_scan::top_level_use_statements`

```rust
pub fn top_level_use_statements(source: &str) -> Vec<String>;
```

Source: `hosting\pill_hot_scan\src\lib.rs:324`

Collects the file's top-level `use` statements - the ones outside every
block - each copied from `use` through its semicolon.

A generated patch replays these so the copied function body resolves the
same names the original did. A `use` inside a function travels with the body
it belongs to.
