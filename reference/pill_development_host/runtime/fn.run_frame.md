<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3921"></a>

# Function `pill_development_host::runtime::run_frame`

```rust
pub fn run_frame(host: &mut DevHost);
```

Source: `hosting\pill_development_host\src\runtime.rs:3240`

Process hot reloads, execute one scheduler frame, and log the frame
statistics when the reporting window elapses.

The two phases run back to back. A windowed host runs them itself, with its
renderer step between them (see [`RenderingHost::run_frame`](struct.RenderingHost.md#rustdoc-item-4074)).
