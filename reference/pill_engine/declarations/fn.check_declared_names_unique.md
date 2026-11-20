<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-643"></a>

# Function `pill_engine::declarations::check_declared_names_unique`

```rust
pub fn check_declared_names_unique() -> Result<(), DuplicateDeclaredName>;
```

Source: `engine\pill_engine\src\declarations.rs:398`

Checks that this artifact declares every type name once per kind.

A declared type is named `<crate>::<Type>`, without its module path, so two
types of one name in different modules of a crate would claim one identity:
one column, one scene key, one C# struct. A macro sees only its own item and
cannot catch that, so the artifact entry points check here, before anything
registers. Kinds are checked separately, because one type may legitimately
be, for example, both a mirrored value type and an asset.

The same type can legitimately arrive twice: one crate linked into two
images of one build submits its descriptors in each, and a walk without a
[`declaration_baseline`](fn.declaration_baseline.md#rustdoc-item-451) sees both. Components and value types carry their
layout, so a repeat whose shape agrees is read as that second copy. A
resource or an asset descriptor carries no layout, so a repeat of one of
those can only be checked when the walk is scoped to one image.

## Errors

Returns the first [`DuplicateDeclaredName`](struct.DuplicateDeclaredName.md#rustdoc-item-565) found.
