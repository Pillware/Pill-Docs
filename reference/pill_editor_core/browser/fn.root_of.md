<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-558"></a>

# Function `pill_editor_core::browser::root_of`

```rust
pub fn root_of(folder: &str) -> AssetRoot;
```

Source: `editor\pill_editor_core\src\browser.rs:222`

Returns the root `folder` belongs to: the extensions root for everything
under [`EXTENSIONS_ROOT`](../editor_state/constant.EXTENSIONS_ROOT.md#rustdoc-item-557), the project's tree for anything else.
