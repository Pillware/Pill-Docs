<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1812"></a>

# Static `pill_core::telemetry::SHOW_SOURCE_LOCATION`

```rust
pub(in telemetry) static SHOW_SOURCE_LOCATION: std::sync::atomic::AtomicBool = _;
```

Visibility: `{'restricted': {'parent': 1726, 'path': '::telemetry'}}` · Source: `engine\pill_core\src\telemetry.rs:313`

Whether log lines end with the `file:line` that emitted them. Off by
default; the project's `logging: source_location:` setting turns it on.
