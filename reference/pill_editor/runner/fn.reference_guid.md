<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1553"></a>

# Function `pill_editor::runner::reference_guid`

```rust
pub(in runner) fn reference_guid(value: Option<&serde_json::Value>) -> Option<String>;
```

Visibility: `{'restricted': {'parent': 483, 'path': '::runner'}}` · Source: `editor\pill_editor\src\runner\mod.rs:4037`

The guid a settings reference holds, in either spelling: the value itself
when the document writes a bare guid, or the object form's `guid`.
