<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-10"></a>

# Function `pill_editor::clipboard::set_one`

```rust
pub(in clipboard) fn set_one(text: &str, format: u32) -> Result<(), String>;
```

Visibility: `{'restricted': {'parent': 1, 'path': '::clipboard'}}` · Source: `editor\pill_editor\src\clipboard.rs:138`

Puts one UTF-16 copy of `text` on the clipboard under `format`.

The memory is allocated with `GMEM_MOVEABLE` and handed to the clipboard,
which takes ownership on success. A failed `SetClipboardData` leaves the
block with this function, which frees it with `GlobalFree`.

## Errors

Returns a message when the block cannot be allocated, when it cannot be
locked, or when the clipboard refuses it.
