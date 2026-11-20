<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-441"></a>

# Struct `pill_engine_macros::LifecycleMethodOrders`

```rust
pub(crate) struct LifecycleMethodOrders;
```

Visibility: `crate` · Source: `engine\pill_engine_macros\src\lib.rs:2799`

The lifecycle methods one `#[script]` block declares, each with its order
when the block defines it.

## Fields

<a id="rustdoc-item-436"></a>

### `on_create`

```rust
on_create: Option<i32>
```

The `on_create` order, or `None` when the block does not define it.

<a id="rustdoc-item-437"></a>

### `on_start`

```rust
on_start: Option<i32>
```

The `on_start` order, or `None` when the block does not define it.

<a id="rustdoc-item-438"></a>

### `on_update`

```rust
on_update: Option<i32>
```

The `on_update` order, or `None` when the block does not define it.

<a id="rustdoc-item-439"></a>

### `on_stop`

```rust
on_stop: Option<i32>
```

The `on_stop` order, or `None` when the block does not define it.

<a id="rustdoc-item-440"></a>

### `on_destroy`

```rust
on_destroy: Option<i32>
```

The `on_destroy` order, or `None` when the block does not define it.

## Associated functions and methods

<a id="rustdoc-item-442"></a>

### `order_slot_mut`

```rust
pub(crate) fn order_slot_mut(self: &mut Self, method_name: &str) -> Option<&mut Option<i32>>;
```

The slot for the lifecycle method called `method_name`, or `None` when
the name is not a lifecycle method.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
- `Default`
