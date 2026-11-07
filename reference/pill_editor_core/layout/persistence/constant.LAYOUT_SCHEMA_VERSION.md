<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5267"></a>

# Constant `pill_editor_core::layout::persistence::LAYOUT_SCHEMA_VERSION`

```rust
pub const LAYOUT_SCHEMA_VERSION: u32 = 13;
```

Source: `editor\pill_editor_core\src\layout\persistence.rs:47`

The schema of the dock-layout document this build writes and accepts.

Raise it whenever the tab set changes, or whenever the document carries
something new beside the dock tree: `EditorTab` is written into the
document, so a reader has to understand the tab values, the `panel_ids`
list and the `popouts` list.

A document that `migrate` has a rule for is upgraded in place and written
back with this version. Any other one - older than the oldest rule, or
newer than this build - is replaced by the default layout, with one log
line.
