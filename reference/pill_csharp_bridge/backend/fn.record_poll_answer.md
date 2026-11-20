<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-698"></a>

# Function `pill_csharp_bridge::backend::record_poll_answer`

```rust
pub(crate) fn record_poll_answer(last_poll_status: &mut u8, status: u8) -> bool;
```

Visibility: `crate` · Source: `csharp\pill_csharp_bridge\src\backend.rs:1535`

Records a loader poll answer and answers whether it is a new rejection.

The poll runs every frame, so a loader that keeps refusing the same
assembly is named once; any other answer ends that attempt, and the next
rejection is named again. Recording the answer on every path keeps the
comparison current instead of comparing against a stale one. The helper is
a free function so a test can pin the rule without a live .NET runtime.
