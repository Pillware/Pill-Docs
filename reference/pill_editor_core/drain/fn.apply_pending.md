<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1875"></a>

# Function `pill_editor_core::drain::apply_pending`

```rust
pub fn apply_pending(engine: &mut pill_engine::Engine, now_millis: u64) -> DrainOutcome;
```

Source: `editor\pill_editor_core\src\drain.rs:65`

Applies every queued batch, then prunes a history a reload invalidated.

A failed command does not stop the rest of its batch. A recorded batch
whose commands all succeeded and all have an inverse becomes one history
step. The shared selection follows a move and clears with a delete. A
batch that touched files reports `files_changed`, and the caller refreshes
the asset listing at once.
