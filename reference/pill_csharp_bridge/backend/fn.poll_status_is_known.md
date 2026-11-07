<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-677"></a>

# Function `pill_csharp_bridge::backend::poll_status_is_known`

```rust
pub(crate) fn poll_status_is_known(status: u8) -> bool;
```

Visibility: `crate` · Source: `csharp\pill_csharp_bridge\src\backend.rs:1392`

Reports whether a managed-reported poll status is one this host understands.

The four codes are the whole vocabulary the loader reports. The check is a
function of its own so a test can pin that set without a live runtime.
