<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-9912"></a>

# Function `pill_engine_core::services::input::release_edges`

```rust
pub(in services::input) fn release_edges<B: EdgeBits>(held: &mut B, released: &mut B);
```

Visibility: `{'restricted': {'parent': 6020, 'path': '::services::input'}}` · Source: `engine\pill_engine_core\src\services\input.rs:1063`

Releases every held bit, reporting each as released.
