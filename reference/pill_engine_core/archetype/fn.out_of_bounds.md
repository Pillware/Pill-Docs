<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-707"></a>

# Function `pill_engine_core::archetype::out_of_bounds`

```rust
pub(in archetype) fn out_of_bounds(offset: usize, bytes: usize, size: usize) -> bool;
```

Visibility: `{'restricted': {'parent': 110, 'path': '::archetype'}}` · Source: `engine\pill_engine_core\src\archetype.rs:2091`

Whether `bytes` written at `offset` runs past the end of a row of `size`
bytes.

A helper rather than two `checked_add` expressions inline: the same question
is asked of the source and the destination of every instruction.
