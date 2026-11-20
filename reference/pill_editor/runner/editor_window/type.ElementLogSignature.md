<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1193"></a>

# Type alias `pill_editor::runner::editor_window::ElementLogSignature`

```rust
pub(in runner) type ElementLogSignature = (usize, Vec<(u64, i32, i32, bool)>);
```

Visibility: `{'restricted': {'parent': 539, 'path': '::runner'}}` · Source: `editor\pill_editor\src\runner\editor_window.rs:434`

What the element handle log last reported: the scene view the handles were
projected in, then each element's id, its pixels in that view and whether
the selection holds it. The rows are logged again only when this changes.
