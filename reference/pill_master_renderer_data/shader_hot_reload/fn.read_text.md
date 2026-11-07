<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1678"></a>

# Function `pill_master_renderer_data::shader_hot_reload::read_text`

```rust
pub(in shader_hot_reload) unsafe fn read_text<'a>(pointer: *const u8, length: usize) -> Option<&'a str>;
```

Visibility: `{'restricted': {'parent': 1679, 'path': '::shader_hot_reload'}}` · Source: `extensions\pill_master_renderer\pill_master_renderer_data\src\shader_hot_reload.rs:161`

Borrows `length` bytes at `pointer` as UTF-8 text.

Returns `None` when those bytes are not valid UTF-8, or when `pointer` is
null and `length` is not zero. A zero length always yields empty text.

## Safety

`pointer` must point at `length` readable bytes, unless `length` is zero.
The returned text borrows those bytes, so whoever holds it must keep them
alive and unmodified for as long as it is used.
