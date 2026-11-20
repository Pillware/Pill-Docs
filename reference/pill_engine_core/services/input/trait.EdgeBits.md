<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-9781"></a>

# Trait `pill_engine_core::services::input::EdgeBits`

```rust
pub(in services::input) trait EdgeBits: Copy + Default { ... }
```

Visibility: `{'restricted': {'parent': 6020, 'path': '::services::input'}}` · Source: `engine\pill_engine_core\src\services\input.rs:567`

A fixed set of button bits, one bit per button.

Each device kind stores its bits differently: [`KeySet`](struct.KeySet.md#rustdoc-item-9736) uses 64-bit words,
the mouse uses a `u8`, and each gamepad uses a `u32`. This trait hides those
differences, so the edge rule below can be written once for all of them.

## Required and provided items

<a id="rustdoc-item-9823"></a>

### `has`

```rust
fn has(self: &Self, bit_index: u32) -> bool;
```

Whether `bit_index` is set.

<a id="rustdoc-item-9824"></a>

### `set`

```rust
fn set(self: &mut Self, bit_index: u32, present: bool);
```

Sets or clears `bit_index`.

<a id="rustdoc-item-9825"></a>

### `merge`

```rust
fn merge(self: &mut Self, other: Self);
```

Adds every bit of `other`.
