<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6486"></a>

# Function `pill_editor_core::problems::parse_build_output`

```rust
pub fn parse_build_output(output: &str) -> Vec<Problem>;
```

Source: `editor\pill_editor_core\src\problems.rs:81`

Parses `output` into problems, in the order the compiler reported them.

A header whose first span line cannot be found, or is malformed, still
gives a problem, with no location. The row can still show the message;
clicking it just cannot open a file.
