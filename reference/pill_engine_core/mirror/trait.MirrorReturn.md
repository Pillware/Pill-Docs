<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-928"></a>

# Trait `pill_engine_core::mirror::MirrorReturn`

```rust
pub unsafe trait MirrorReturn: Sized { ... }
```

Source: `engine\pill_engine_core\src\mirror.rs:464`

A type a mirrored call returns by value.

## Safety

An implementation must write exactly the encoding the C# runtime reads for
the type. It must not write past the bytes the managed side reserved for it.

## Required and provided items

<a id="rustdoc-item-6187"></a>

### `write_return`

```rust
unsafe fn write_return(self: Self, return_buffer: *mut u8);
```

Write the value to a return buffer.

#### Safety

`return_buffer` must reference the bytes the managed side reserved for
this type.
