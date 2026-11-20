<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-11320"></a>

# Function `pill_editor_core::tools::marquee_selection`

```rust
pub fn marquee_selection(reported: &[ProjectedElement], rect: MarqueeRect, kinds: &[ElementKind]) -> crate::editor_state::ElementSelection;
```

Source: `editor\pill_editor_core\src\tools.rs:712`

The selection a marquee produces from one frame's projected elements.

A marquee selects one kind, like every element selection: it takes the
first kind, in the tool's own report order, that has an element inside the
rectangle, and every element of that kind the rectangle covers. A kind whose
[`ElementKind::box_select`](struct.ElementKind.md#rustdoc-item-10805) is off is never taken, and no element at all
gives an empty selection, which the caller records as a clear.
