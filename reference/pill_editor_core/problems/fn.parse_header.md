<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6487"></a>

# Function `pill_editor_core::problems::parse_header`

```rust
pub(in problems) fn parse_header(line: &str) -> Option<(Severity, String)>;
```

Visibility: `{'restricted': {'parent': 6394, 'path': '::problems'}}` · Source: `editor\pill_editor_core\src\problems.rs:127`

Returns the severity and the message of a rustc header line, or `None`
when the line is not one.

Cargo's status lines (`Compiling ...`, `Finished ...`) do not begin with a
severity word, so they never match.
