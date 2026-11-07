<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5046"></a>

# Function `pill_engine_core::hot_patch::take_fault_reports`

```rust
pub fn take_fault_reports() -> Vec<FaultReport>;
```

Source: `engine\pill_engine_core\src\hot_patch.rs:177`

Takes the fault reports queued since the last call, oldest first.

The host calls this at a frame boundary and rolls each function back to its
previous generation.
