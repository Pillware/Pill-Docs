<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1789"></a>

# Function `pill_csharp_bridge::parallel::with_callback_flag`

```rust
pub(in parallel) fn with_callback_flag<R, impl FnOnce() -> R: FnOnce() -> R>(body: impl FnOnce() -> R) -> R;
```

Visibility: `{'restricted': {'parent': 1752, 'path': '::parallel'}}` · Source: `csharp\pill_csharp_bridge\src\parallel.rs:125`

Runs `body` with `IN_PARALLEL_CALLBACK` set on this thread, then restores
the flag's previous value.
