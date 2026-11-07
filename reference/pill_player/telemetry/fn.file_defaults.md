<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-799"></a>

# Function `pill_player::telemetry::file_defaults`

```rust
pub(in telemetry) fn file_defaults() -> pill_core::telemetry::LoggingConfig;
```

Visibility: `{'restricted': {'parent': 748, 'path': '::telemetry'}}` · Source: `hosting\pill_player\src\telemetry.rs:213`

Returns the file lane's filter before any project settings: the engine's,
with the developer scratch logs (`engine::dev`) off and the rendering
target at `debug`.
