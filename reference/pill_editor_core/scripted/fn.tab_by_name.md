<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7222"></a>

# Function `pill_editor_core::scripted::tab_by_name`

```rust
pub(in scripted) fn tab_by_name(name: &str) -> Option<crate::layout::EditorTab>;
```

Visibility: `{'restricted': {'parent': 7129, 'path': '::scripted'}}` · Source: `editor\pill_editor_core\src\scripted.rs:1700`

The tab a scripted name selects.

It reads the name with [`EditorTab::from_wire`](../layout/dock/enum.EditorTab.md#rustdoc-item-5145), the parser every side of
the editor shares. A name this channel accepts is therefore a name the
dock and the popout map accept.
