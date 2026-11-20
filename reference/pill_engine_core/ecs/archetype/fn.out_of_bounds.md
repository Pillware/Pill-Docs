<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2725"></a>

# Function `pill_engine_core::ecs::archetype::out_of_bounds`

```rust
pub(in ecs::archetype) fn out_of_bounds(offset: usize, bytes: usize, size: usize) -> bool;
```

Visibility: `{'restricted': {'parent': 2144, 'path': '::ecs::archetype'}}` · Source: `engine\pill_engine_core\src\ecs\archetype.rs:2106`

Whether `bytes` written at `offset` runs past the end of a row of `size`
bytes.

A helper rather than two `checked_add` expressions inline: the same question
is asked of the source and the destination of every instruction.
