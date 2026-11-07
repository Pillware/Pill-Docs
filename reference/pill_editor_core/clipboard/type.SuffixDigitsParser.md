<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1152"></a>

# Type alias `pill_editor_core::clipboard::SuffixDigitsParser`

```rust
pub(in clipboard) type SuffixDigitsParser = fn (_: &str) -> Option<pill_engine::FieldValue>;
```

Visibility: `{'restricted': {'parent': 1154, 'path': '::clipboard'}}` · Source: `editor\pill_editor_core\src\clipboard.rs:167`

A function that reads the digits in front of a type suffix and turns them
into the field value of that suffix's type.
