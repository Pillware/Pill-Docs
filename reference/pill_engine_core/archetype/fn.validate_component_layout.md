<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-705"></a>

# Function `pill_engine_core::archetype::validate_component_layout`

```rust
pub(crate) fn validate_component_layout(size: usize, align: usize) -> Result<(), crate::error::WorldError>;
```

Visibility: `crate` · Source: `engine\pill_engine_core\src\archetype.rs:2047`

Checks that a size and alignment can describe a descriptor component layout.

Registration and relayout both call this, so the two can never disagree
about what a usable layout is.

A zero width is refused here, and [`validate_native_component_layout`](fn.validate_native_component_layout.md#rustdoc-item-284)
allows it. That difference is deliberate. A descriptor's width comes from a
manifest written by another language, where zero means the declaration is
wrong. A Rust type's width was computed by the compiler, and zero is the
normal way to write a marker component (`struct Enemy;`). The native path
turns this refusal into an `.expect`, so refusing a zero width there would
abort the process on every marker component.
