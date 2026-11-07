<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7"></a>

# Function `pill_editor::clipboard::write`

```rust
pub fn write(text: &str) -> Result<(), String>;
```

Source: `editor\pill_editor\src\clipboard.rs:92`

Puts `text` on the clipboard, in the editor's own format and as plain text.

Once the clipboard is open it is emptied before the first allocation, so a
later failure leaves it empty rather than holding what it held before.

## Errors

Returns a message naming the step that failed: registering the editor's
format, opening the clipboard, emptying it, allocating the clipboard block,
or handing that block to the clipboard.
