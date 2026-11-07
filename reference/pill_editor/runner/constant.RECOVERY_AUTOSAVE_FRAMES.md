<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-823"></a>

# Constant `pill_editor::runner::RECOVERY_AUTOSAVE_FRAMES`

```rust
pub(in runner) const RECOVERY_AUTOSAVE_FRAMES: u64 = 120;
```

Visibility: `{'restricted': {'parent': 483, 'path': '::runner'}}` · Source: `editor\pill_editor\src\runner\mod.rs:200`

Frames between checks of whether the recovery document's key changed, so
the document is written at most once in that many frames instead of every
frame.
