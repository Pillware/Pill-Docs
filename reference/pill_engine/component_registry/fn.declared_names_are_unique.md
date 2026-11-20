<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-389"></a>

# Function `pill_engine::component_registry::declared_names_are_unique`

```rust
pub(in component_registry) fn declared_names_are_unique() -> bool;
```

Visibility: `{'restricted': {'parent': 322, 'path': '::component_registry'}}` · Source: `engine\pill_engine\src\component_registry.rs:602`

Whether this artifact declares every type name once per kind, logging the
repeat when it does not.

A type name is `<crate>::<Type>`, so the repeat is two types of one name in
different modules of one crate; the artifact must not register either.
