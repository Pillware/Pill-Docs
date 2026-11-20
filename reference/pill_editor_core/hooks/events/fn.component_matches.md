<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5375"></a>

# Function `pill_editor_core::hooks::events::component_matches`

```rust
pub(crate) fn component_matches<T: ComponentFields>(component: &str) -> bool;
```

Visibility: `crate` · Source: `editor\pill_editor_core\src\hooks\events.rs:154`

Whether `component` names `T`, by its registered name or its Rust path.

A command carries the name the world registered the component under; an
editor test may queue the Rust path instead, so both are accepted.
