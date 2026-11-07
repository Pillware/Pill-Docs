<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6355"></a>

# Type alias `pill_engine_core::persistence::registry::DeserializeComponentFn`

```rust
pub(crate) type DeserializeComponentFn = fn (bytes: &[u8]) -> Option<Box<dyn Component>>;
```

Visibility: `crate` · Source: `engine\pill_engine_core\src\persistence\registry.rs:456`

Rebuilds a heap-allocated component from JSON bytes.

Returns `None` when the schema changed incompatibly, for example when a
field's type changed from `f32` to `String`. A field that was added takes
its default value, and a field that was removed is ignored: serde matches
fields by name.
