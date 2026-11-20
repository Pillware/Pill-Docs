<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7573"></a>

# Function `pill_engine_core::reflection::component_registry::resolve_unique_name`

```rust
pub fn resolve_unique_name<'a, impl Iterator<Item = &'a str>: Iterator<Item = _>>(path: &str, candidates: impl Iterator<Item = _>) -> Option<&'a str>;
```

Source: `engine\pill_engine_core\src\reflection\component_registry.rs:340`

Returns the candidate name a `struct:<path>` field tag refers to.

The tag is the path as written at the field site, usually an imported short
name (`Color`). An exact match is tried first - including a tag that still
carries the module path a type had before names dropped it
([`names_same_type`](../type_names/fn.names_same_type.md#rustdoc-item-7572)) - then a unique
`::<path>` suffix. `None` means no single candidate matches and the field
shows as opaque. That is better than picking a wrong type, which would show
the field as another type's value.

Both candidate sources - the world's registered component names and the
facade's value-type names - answer through this one rule, so the two can
never disagree about what a tag names.
