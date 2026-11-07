<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4383"></a>

# Constant `pill_development_host::watchers::shared::TRIGGER_LOG_CAPACITY`

```rust
pub(in watchers::shared) const TRIGGER_LOG_CAPACITY: usize = 16;
```

Visibility: `{'restricted': {'parent': 4377, 'path': '::watchers::shared'}}` · Source: `hosting\pill_development_host\src\watchers\shared.rs:76`

How many recent triggers [`TriggerLog`](struct.TriggerLog.md#rustdoc-item-3905) keeps for the frame loop.

The loop consumes the generation it acts on, so the bound only has to
cover signals that were superseded before they were ever read.
