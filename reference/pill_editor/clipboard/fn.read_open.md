<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-13"></a>

# Function `pill_editor::clipboard::read_open`

```rust
pub(in clipboard) fn read_open() -> Result<Option<String>, String>;
```

Visibility: `{'restricted': {'parent': 1, 'path': '::clipboard'}}` · Source: `editor\pill_editor\src\clipboard.rs:226`

The read path with the clipboard already open.

The formats are tried in order: the editor's own format first, then plain
text. A format that is unavailable, a block that cannot be locked and a
block with no terminator all move on to the next format. The result is the
first text that could be read, or `None`.

## Errors

No branch returns an error: the signature carries the type [`read`](fn.read.md#rustdoc-item-12) passes
on, but every failure here ends in `Ok`.
