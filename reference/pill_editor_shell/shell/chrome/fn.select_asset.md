<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-451"></a>

# Function `pill_editor_shell::shell::chrome::select_asset`

```rust
pub fn select_asset(selection: &mut EditorSelection, path: &str) -> bool;
```

Source: `editor\pill_editor_shell\src\shell\chrome.rs:171`

Moves the shared selection onto the asset at `path` and logs the
`[editor] asset selected` token. Returns whether the selection moved.
