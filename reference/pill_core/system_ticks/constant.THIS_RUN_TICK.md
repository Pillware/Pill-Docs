<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1564"></a>

# Constant `pill_core::system_ticks::THIS_RUN_TICK`

```rust
pub(in system_ticks) const THIS_RUN_TICK: $crate::thread::LocalKey<std::cell::Cell<Option<u32>>> = _;
```

Visibility: `{'restricted': {'parent': 1563, 'path': '::system_ticks'}}` · Source: `engine\pill_core\src\system_ticks.rs:31`

The tick reserved for the system on this thread. `None` means the
world adds one to its shared tick counter instead.
