<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-14"></a>

# Function `pill_editor::clipboard::process_id`

```rust
pub fn process_id() -> u32;
```

Source: `editor\pill_editor\src\clipboard.rs:296`

Returns the id of this process, which the clipboard log lines carry.

The write and paste lines name it as `writer =` and `reader =`, so a test
that runs more than one editor can tell which process did each step.
