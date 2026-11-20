<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6919"></a>

# Function `pill_engine_core::hot_reload::persistence::components::serialize_component`

```rust
pub(in hot_reload::persistence) fn serialize_component<T>(storage: &crate::archetype::ComponentColumns, index: usize) -> Option<Vec<u8>> where T: Component + Serialize;
```

Visibility: `{'restricted': {'parent': 5453, 'path': '::hot_reload::persistence'}}` · Source: `engine\pill_engine_core\src\hot_reload\persistence\components.rs:381`

Serialize the component at `index` from storage into JSON bytes.

Returns `None` when the type's own `Serialize` implementation refuses the
value. The caller then reports the type as skipped and migrates the others:
a reload must not stop because one type cannot be written, and the signature
should not hide that choice.
