<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4800"></a>

# Function `pill_editor_core::inspector::leaf_parts`

```rust
pub fn leaf_parts(field_name: &str) -> (&str, &str);
```

Source: `editor\pill_editor_core\src\inspector.rs:600`

The dotted prefix and last segment of a leaf field's name: `fill.g` is
(`fill`, `g`), and a bare `g` is (`""`, `g`).
