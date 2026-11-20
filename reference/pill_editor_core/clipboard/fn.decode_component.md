<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1220"></a>

# Function `pill_editor_core::clipboard::decode_component`

```rust
pub(in clipboard) fn decode_component(component: &serde_json::Value) -> Result<SeededComponent, String>;
```

Visibility: `{'restricted': {'parent': 1199, 'path': '::clipboard'}}` · Source: `editor\pill_editor_core\src\clipboard.rs:654`

Decodes one component object into its seed.

A field entry is never dropped: losing one without a word would make the
paste quietly lossy. A component with no `fields` member decodes with no
fields.

## Errors

Returns a message when the object has no `type`, when a field entry is not
a `[name, token]` pair, or when the name or the token is not a string.
