<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3153"></a>

# Function `pill_engine_core::component_field::codec::std_container_offsets`

```rust
pub(in component_field::codec) fn std_container_offsets() -> (usize, usize);
```

Visibility: `{'restricted': {'parent': 3089, 'path': '::component_field::codec'}}` · Source: `engine\pill_engine_core\src\component_field\codec.rs:269`

The byte offsets of the pointer and the length inside a `Vec`/`String`
header.

The standard library gives `Vec`, and `String` with it, no `repr(C)`, so the
compiler chooses the field order and it is not pointer-first on this build.
The offsets are measured once from a live value rather than assumed: a
guessed offset would read the length as an address and dereference it, or
read the capacity as the number of elements.
