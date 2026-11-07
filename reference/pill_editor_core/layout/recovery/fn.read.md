<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5366"></a>

# Function `pill_editor_core::layout::recovery::read`

```rust
pub fn read() -> Option<RecoveryDocument>;
```

Source: `editor\pill_editor_core\src\layout\recovery.rs:116`

Reads the document a previous run left behind.

`None` when there is no document (a clean exit leaves none), or when this
build cannot use the one it finds. A document that does not parse, or that
carries another version, is deleted so the next run does not read it again.
