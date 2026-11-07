<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2688"></a>

# Function `pill_engine_core::commands::boxed_component_adder`

```rust
pub fn boxed_component_adder<T>(component: T) -> Box<dyn ComponentAdder> where T: Component + Send;
```

Source: `engine\pill_engine_core\src\commands.rs:895`

Boxes a component into a type-erased [`ComponentAdder`](trait.ComponentAdder.md#rustdoc-item-2466) that keeps `T`.

The typed adder behind it (`TypedComponentAdder`) is private, so this is
how a caller builds the list [`CommandQueue::create_mixed_entity`](struct.CommandQueue.md#rustdoc-item-2575) takes, or
the single adder [`CommandQueue::add_component_adder_to_entity`](struct.CommandQueue.md#rustdoc-item-2577) takes. The
adder reports `ComponentId::of::<T>()` and moves the value into its column.
