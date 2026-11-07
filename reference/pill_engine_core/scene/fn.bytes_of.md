<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7853"></a>

# Function `pill_engine_core::scene::bytes_of`

```rust
pub(in scene) fn bytes_of(text: &str) -> Option<Vec<u8>>;
```

Visibility: `{'restricted': {'parent': 7769, 'path': '::scene'}}` · Source: `engine\pill_engine_core\src\scene.rs:309`

Returns the bytes `text` spells as hex, or `None` when it is not hex.
