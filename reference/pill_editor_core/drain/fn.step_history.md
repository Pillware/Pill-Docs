<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2329"></a>

# Function `pill_editor_core::drain::step_history`

```rust
pub fn step_history(engine: &mut pill_engine::Engine, direction: HistoryDirection) -> HistoryOutcome;
```

Source: `editor\pill_editor_core\src\drain.rs:293`

Pops one history entry and queues its batch, which is applied but never
recorded.

The command queue is checked before the pop. A step popped without a queue
would be lost even though the log said the undo ran.
