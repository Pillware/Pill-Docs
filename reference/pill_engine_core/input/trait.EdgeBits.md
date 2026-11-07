<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5950"></a>

# Trait `pill_engine_core::input::EdgeBits`

```rust
pub(in input) trait EdgeBits: Copy + Default { ... }
```

Visibility: `{'restricted': {'parent': 4306, 'path': '::input'}}` · Source: `engine\pill_engine_core\src\input.rs:567`

A fixed set of button bits, one bit per button.

Each device kind stores its bits differently: [`KeySet`](struct.KeySet.md#rustdoc-item-5906) uses 64-bit words,
the mouse uses a `u8`, and each gamepad uses a `u32`. This trait hides those
differences, so the edge rule below can be written once for all of them.

## Required and provided items

<a id="rustdoc-item-5992"></a>

### `has`

```rust
fn has(self: &Self, bit_index: u32) -> bool;
```

Whether `bit_index` is set.

<a id="rustdoc-item-5993"></a>

### `set`

```rust
fn set(self: &mut Self, bit_index: u32, present: bool);
```

Sets or clears `bit_index`.

<a id="rustdoc-item-5994"></a>

### `merge`

```rust
fn merge(self: &mut Self, other: Self);
```

Adds every bit of `other`.
