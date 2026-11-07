<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1190"></a>

# Function `pill_core::platform::futures::block_on`

```rust
pub fn block_on<F: Future>(future: F) -> <F as >::Output;
```

Source: `engine\pill_core\src\platform\futures.rs:31`

Runs `future` to completion on the calling thread and returns its output.

This function exists only on native. On the web, a future has to be awaited
or passed to [`spawn`](fn.spawn.md#rustdoc-item-1189).

## Panics

Panics if `future` panics.
