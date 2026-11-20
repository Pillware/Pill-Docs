<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1409"></a>

# Function `pill_development_host::csharp::codegen::declared_value_type`

```rust
pub(in csharp::codegen) fn declared_value_type<'a>(value_types: &'a [pill_engine::component_registry::PillValueTypeDescriptor], path: &str) -> Option<&'a pill_engine::component_registry::PillValueTypeDescriptor>;
```

Visibility: `{'restricted': {'parent': 1362, 'path': '::csharp::codegen'}}` · Source: `hosting\pill_development_host\src\csharp\codegen.rs:947`

The declared value type a `struct:<path>` field tag names, or `None` when
the module declares no such type.

The tag is the path as written at the field site: a full path, or a short
name an imported `#[derive(PillMirror)]` type brought into scope. The lookup
goes through `resolve_unique_name`, the same rule the world uses to expand
the field, so a tag that still carries a module path a type used to have
finds the type too.
