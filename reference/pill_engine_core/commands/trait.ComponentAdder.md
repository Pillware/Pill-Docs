<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2466"></a>

# Trait `pill_engine_core::commands::ComponentAdder`

```rust
pub trait ComponentAdder: Send { ... }
```

Source: `engine\pill_engine_core\src\commands.rs:79`

Trait for adding a component with its concrete type preserved.

Must be `Send` to support parallel execution of systems.

## Required and provided items

<a id="rustdoc-item-2464"></a>

### `component_id`

```rust
fn component_id(self: &Self) -> ComponentId;
```

Returns the [`ComponentId`](../component/enum.ComponentId.md#rustdoc-item-83) of the component this adder will insert.

Used to compute the target archetype before the component value itself
is written into storage.

<a id="rustdoc-item-2465"></a>

### `add_component_to_storage`

```rust
fn add_component_to_storage(self: Box<Self>, new_storage: &mut ComponentColumns) -> Result<(), WorldError>;
```

Writes the held component into the given type-erased storage.

The caller is responsible for having created the storage row for this
adder's component type before invoking this method.

#### Errors

Returns the column's refusal when the column will not take the write. A
caller must report that error and never drop it. By the time this method
runs, the entity's row is already in the archetype's other columns, so a
dropped failure leaves this column one row short. Every later lookup of
this component would then read another entity's value.
