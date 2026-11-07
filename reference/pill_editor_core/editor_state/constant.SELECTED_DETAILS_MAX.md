<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2661"></a>

# Constant `pill_editor_core::editor_state::SELECTED_DETAILS_MAX`

```rust
pub const SELECTED_DETAILS_MAX: usize = 64;
```

Source: `editor\pill_editor_core\src\editor_state\mod.rs:52`

How many selected entities the snapshot captures a detail for.

A larger selection still edits the primary entity and the entities it has
details for. The cap keeps a Ctrl+A over a large scene from rebuilding
hundreds of component views every frame.
