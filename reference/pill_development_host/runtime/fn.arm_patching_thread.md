<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4129"></a>

# Function `pill_development_host::runtime::arm_patching_thread`

```rust
pub(in runtime) fn arm_patching_thread();
```

Visibility: `{'restricted': {'parent': 3859, 'path': '::runtime'}}` · Source: `hosting\pill_development_host\src\runtime.rs:2173`

Arm the thread that owns the frame boundary as the only one allowed to
rewrite live code.

Declared per frame rather than at setup because setup may run on a different
thread; idempotent, and a single relaxed load once declared.
