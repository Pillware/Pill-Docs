<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-742"></a>

# Function `pill_player::system_specs::format_uptime`

```rust
pub(in system_specs) fn format_uptime(seconds: u64) -> String;
```

Visibility: `{'restricted': {'parent': 737, 'path': '::system_specs'}}` · Source: `hosting\pill_player\src\system_specs.rs:165`

Formats a duration in whole seconds as a compact `Nd Nh Nm` string.

The days part is dropped when it is zero, and the hours part when both
days and hours are zero. Zero seconds reads `"unknown"`, which is what a
platform that cannot report uptime returns.
