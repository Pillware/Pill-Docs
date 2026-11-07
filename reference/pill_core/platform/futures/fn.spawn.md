<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1189"></a>

# Function `pill_core::platform::futures::spawn`

```rust
pub fn spawn<F: Future<Output = _> + 'static>(future: F);
```

Source: `engine\pill_core\src\platform\futures.rs:44`

Starts `future` and returns nothing.

On native it runs to completion before this returns; on the web it runs on
the browser's event loop after the current task yields.

## Panics

On native, panics if `future` panics. On the web, the browser reports the
panic as an uncaught error instead.
