<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5"></a>

# Function `pill_editor::clipboard::payload_format_id`

```rust
pub(in clipboard) fn payload_format_id() -> Option<u32>;
```

Visibility: `{'restricted': {'parent': 1, 'path': '::clipboard'}}` · Source: `editor\pill_editor\src\clipboard.rs:70`

Returns the clipboard format id the editor registers its copied text under.

Registering the name is idempotent, so every call returns the same id for
the life of the process and nothing needs caching. `None` means Windows
refused the name.
