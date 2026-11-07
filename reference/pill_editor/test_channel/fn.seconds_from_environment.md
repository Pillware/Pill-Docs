<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1593"></a>

# Function `pill_editor::test_channel::seconds_from_environment`

```rust
pub fn seconds_from_environment() -> Option<f64>;
```

Source: `editor\pill_editor\src\test_channel.rs:96`

Returns how many seconds the editor runs before quitting gracefully, when
`PILL_EDITOR_TEST_SECONDS` holds a number.
