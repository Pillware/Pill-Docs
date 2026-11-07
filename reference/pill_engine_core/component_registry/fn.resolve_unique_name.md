<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3501"></a>

# Function `pill_engine_core::component_registry::resolve_unique_name`

```rust
pub fn resolve_unique_name<'a, impl Iterator<Item = &'a str>: Iterator<Item = _>>(path: &str, candidates: impl Iterator<Item = _>) -> Option<&'a str>;
```

Source: `engine\pill_engine_core\src\component_registry.rs:184`

Returns the candidate name a `struct:<path>` field tag refers to.

The tag is the path as written at the field site, usually an imported short
name (`Color`). An exact match is tried first, then a unique `::<path>`
suffix. `None` means no single candidate matches and the field shows as
opaque. That is better than picking a wrong type, which would show the field
as another type's value.

Both candidate sources - the world's registered component names and the
facade's value-type names - answer through this one rule, so the two can
never disagree about what a tag names.
