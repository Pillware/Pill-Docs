<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6488"></a>

# Function `pill_editor_core::problems::parse_span`

```rust
pub(in problems) fn parse_span(line: &str) -> Option<(String, u32, u32)>;
```

Visibility: `{'restricted': {'parent': 6394, 'path': '::problems'}}` · Source: `editor\pill_editor_core\src\problems.rs:163`

Returns the `file`, `line` and `column` of a rustc span line
(`  --> src/x.rs:12:5`), or `None` when the line is not one.
