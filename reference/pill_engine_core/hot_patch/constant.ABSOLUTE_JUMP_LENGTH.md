<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5207"></a>

# Constant `pill_engine_core::hot_patch::ABSOLUTE_JUMP_LENGTH`

```rust
pub(in hot_patch) const ABSOLUTE_JUMP_LENGTH: usize = 12;
```

Visibility: `{'restricted': {'parent': 5000, 'path': '::hot_patch'}}` · Source: `engine\pill_engine_core\src\hot_patch.rs:586`

Bytes an absolute jump occupies: `mov rax, imm64` followed by `jmp rax`.

The absolute form is used instead of a 5-byte `E9 rel32` because ASLR
usually loads a patch image several gigabytes away from the base image, so
the relative form would need a trampoline for almost every patch. The price
is that twelve bytes of the function must be overwritten instead of five.
