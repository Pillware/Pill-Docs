<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-891"></a>

# Function `pill_csharp_bridge::mirror_naming::generated_field_signature`

```rust
pub(crate) fn generated_field_signature(fields: &[pill_engine::component_registry::ComponentFieldDescriptor]) -> Option<String>;
```

Visibility: `crate` · Source: `csharp\pill_csharp_bridge\src\mirror_naming.rs:40`

Describes the public fields a generated mirror declares for `fields` as the
text `Name@offset:size|...`, ordered by offset. Returns `None` when the
fields cannot be written in that form.

This text lets a managed mirror be checked field by field against the
native component it binds to. The names and offsets are exactly the ones
the generator in `pill_development_host` (`emit_typed_struct`) writes:
PascalCase, with one numbered field per array element. A component with no
fields, or with a heap-owned field, has no such list: the generator skips a
`vec:`/`string` field and gives a `dynbuf:` field three private header
words instead of a public field. Such a component is checked by size and
alignment only.
