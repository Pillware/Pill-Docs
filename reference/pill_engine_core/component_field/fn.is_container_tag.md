<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3404"></a>

# Function `pill_engine_core::component_field::is_container_tag`

```rust
pub(crate) fn is_container_tag(type_tag: &str) -> bool;
```

Visibility: `crate` · Source: `engine\pill_engine_core\src\component_field\mod.rs:388`

Whether a field's type tag names a heap-backed container.

`vec:<tag>` and `dynbuf:<tag>` fields hold a `(pointer, length, capacity)`
header, and `string` holds the same three words with UTF-8 text behind
them. All three are read by following a pointer that the value in the row
owns. A descriptor row is raw bytes with no Rust value in it, so a layout
that claims one of these tags on such a row promises a header the bytes
never held.
