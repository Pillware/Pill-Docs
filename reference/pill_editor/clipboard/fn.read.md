<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-12"></a>

# Function `pill_editor::clipboard::read`

```rust
pub fn read() -> Result<Option<String>, String>;
```

Source: `editor\pill_editor\src\clipboard.rs:187`

Returns the text the clipboard carries, preferring the editor's own format.

`Ok(None)` means the clipboard held nothing usable; the runner then shows an
empty-clipboard notice instead of pasting.

The clipboard is a lock shared by every process, so `OpenClipboard` can
fail simply because another application holds it at that moment. The
attempt is retried up to `READ_ATTEMPTS` times, `READ_RETRY_DELAY` apart,
and a clipboard that never frees is an error rather than an empty paste.

## Errors

Returns the message from the last failed attempt when the clipboard cannot
be opened within the retries.
