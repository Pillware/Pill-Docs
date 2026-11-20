<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4407"></a>

# Trait `pill_engine_core::ecs::resource::RecordResourceClone`

```rust
pub trait RecordResourceClone { ... }
```

Source: `engine\pill_engine_core\src\ecs\resource.rs:310`

Answers with a copy of the value when the probed type implements `Clone`.

The first impl takes `self` by value on a double reference and the fallback
takes one more reference, which is the arrangement method lookup resolves in
that order. It only works at a site where the type is concrete: a generic
caller cannot prove `T: Clone`, so it always reaches the fallback, which is
why [`Resource::clone_erased`](trait.Resource.md#rustdoc-item-4297) exists and the derive answers from the type's
own site.

## Required and provided items

<a id="rustdoc-item-4437"></a>

### `copy_value`

```rust
fn copy_value(self: Self, value: &crate::resource::ErasedResource) -> Option<crate::resource::ErasedResource>;
```

A copy of `value`, or `None` when the type cannot be copied.
