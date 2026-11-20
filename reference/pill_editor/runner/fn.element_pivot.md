<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1875"></a>

# Function `pill_editor::runner::element_pivot`

```rust
pub(in runner) fn element_pivot(elements: &[(u64, tools::ElementTransform)], fallback: [f32; 3]) -> [f32; 3];
```

Visibility: `{'restricted': {'parent': 539, 'path': '::runner'}}` · Source: `editor\pill_editor\src\runner\mod.rs:4423`

The point a set of dragged elements is pivoted on: the average of their
translations, or `fallback` when the set is empty.
