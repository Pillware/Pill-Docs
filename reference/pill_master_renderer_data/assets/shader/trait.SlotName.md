<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-832"></a>

# Trait `pill_master_renderer_data::assets::shader::SlotName`

```rust
pub trait SlotName { ... }
```

Source: `extensions\pill_master_renderer\pill_master_renderer_data\src\assets\shader.rs:195`

A slot that carries the name its source binds it under.

Both slot kinds are keyed by this name, so [`slots_by_name`](fn.slots_by_name.md#rustdoc-item-948) accepts either
of them.

## Required and provided items

<a id="rustdoc-item-947"></a>

### `slot_name`

```rust
fn slot_name(self: &Self) -> &str;
```

The name the source binds the slot under.
