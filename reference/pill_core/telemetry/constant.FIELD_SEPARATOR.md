<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1723"></a>

# Constant `pill_core::telemetry::FIELD_SEPARATOR`

```rust
pub const FIELD_SEPARATOR: &str = " | ";
```

Source: `engine\pill_core\src\telemetry.rs:111`

The text between a line's message and its fields.

A line with no fields has no separator. A block carries it on the prefix
line between its heading and its fields. The source location is not a
field and keeps its own gap.
