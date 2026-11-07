<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-11"></a>

# Function `pill_editor::clipboard::write_open`

```rust
pub(in clipboard) fn write_open(text: &str, format: u32) -> Result<(), String>;
```

Visibility: `{'restricted': {'parent': 1, 'path': '::clipboard'}}` · Source: `editor\pill_editor\src\clipboard.rs:116`

The write path with the clipboard already open.

## Errors

Returns a message naming the failed step: emptying the clipboard, or one of
the two copies [`set_one`](fn.set_one.md#rustdoc-item-10) makes.
