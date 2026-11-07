<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1810"></a>

# Function `pill_core::telemetry::timestamp_format_from_discriminant`

```rust
pub(in telemetry) const fn timestamp_format_from_discriminant(discriminant: u8) -> Option<TimestampFormat>;
```

Visibility: `{'restricted': {'parent': 1726, 'path': '::telemetry'}}` · Source: `engine\pill_core\src\telemetry.rs:293`

Decodes a stored discriminant; `None` for a byte no variant wrote.

The match is exhaustive on purpose: adding a format adds a stored value, and
this is the only place that must learn to read it. A `!= DateTime` test
would quietly report the default instead.
