<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-728"></a>

# Constant `pill_editor::runner::element_tools::MARQUEE_DRAG_PIXELS`

```rust
pub(in runner) const MARQUEE_DRAG_PIXELS: f32 = 3.0;
```

Visibility: `{'restricted': {'parent': 539, 'path': '::runner'}}` · Source: `editor\pill_editor\src\runner\element_tools.rs:78`

How far a press must travel, in pixels, before its drag counts as a
marquee instead of a click. A press and a release inside one pixel are the
click that still asks the scene what is under the pointer.
