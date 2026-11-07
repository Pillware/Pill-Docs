<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1560"></a>

# Constant `pill_core::system_ticks::LAST_RUN_TICK`

```rust
pub(in system_ticks) const LAST_RUN_TICK: $crate::thread::LocalKey<std::cell::Cell<Option<u32>>> = _;
```

Visibility: `{'restricted': {'parent': 1563, 'path': '::system_ticks'}}` · Source: `engine\pill_core\src\system_ticks.rs:31`

The tick at which the system on this thread last ran. `None` outside a
parallel batch, where the world uses its own `system_last_run` field.
