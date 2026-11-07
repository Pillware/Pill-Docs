<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6082"></a>

# Function `pill_engine_core::input::release_edges`

```rust
pub(in input) fn release_edges<B: EdgeBits>(held: &mut B, released: &mut B);
```

Visibility: `{'restricted': {'parent': 4306, 'path': '::input'}}` · Source: `engine\pill_engine_core\src\input.rs:1057`

Releases every held bit, reporting each as released.
