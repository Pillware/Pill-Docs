<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-565"></a>

# Function `pill_editor_core::browser::breadcrumb`

```rust
pub fn breadcrumb(folder: &str) -> Vec<(String, String)>;
```

Source: `editor\pill_editor_core\src\browser.rs:293`

Builds the breadcrumb of `folder`: the root it belongs to, then one
`(path, label)` pair per segment. Each path holds the segments up to it, so
a click on a label can open that ancestor.
