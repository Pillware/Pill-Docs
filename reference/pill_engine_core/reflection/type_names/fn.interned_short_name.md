<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7579"></a>

# Function `pill_engine_core::reflection::type_names::interned_short_name`

```rust
pub(in reflection::type_names) fn interned_short_name(type_name: &'static str) -> &'static str;
```

Visibility: `{'restricted': {'parent': 7575, 'path': '::reflection::type_names'}}` · Source: `engine\pill_engine_core\src\reflection\type_names.rs:154`

The short form of `type_name`, worked out once per distinct name.

A rewritten name is kept for the rest of the program's life, so it can be
returned as `&'static str`; a name that needs no rewrite maps to itself.
