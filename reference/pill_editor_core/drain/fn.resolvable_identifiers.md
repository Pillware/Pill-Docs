<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2332"></a>

# Function `pill_editor_core::drain::resolvable_identifiers`

```rust
pub(in drain) fn resolvable_identifiers(world: &pill_engine::World) -> std::collections::HashSet<String>;
```

Visibility: `{'restricted': {'parent': 2242, 'path': '::drain'}}` · Source: `editor\pill_editor_core\src\drain.rs:412`

Returns every identifier a history entry may name, as `component` and
`component.field`.
