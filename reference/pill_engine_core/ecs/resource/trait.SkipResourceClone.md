<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4408"></a>

# Trait `pill_engine_core::ecs::resource::SkipResourceClone`

```rust
pub trait SkipResourceClone { ... }
```

Source: `engine\pill_engine_core\src\ecs\resource.rs:333`

The fallback for a resource without `Clone`: reports that it cannot copy,
so a copy of that resource is refused by name.

## Required and provided items

<a id="rustdoc-item-4440"></a>

### `copy_value`

```rust
fn copy_value(self: Self, value: &crate::resource::ErasedResource) -> Option<crate::resource::ErasedResource>;
```

Answers `None`.
