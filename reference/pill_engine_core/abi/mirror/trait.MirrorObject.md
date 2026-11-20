<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-86"></a>

# Trait `pill_engine_core::abi::mirror::MirrorObject`

```rust
pub trait MirrorObject: Sized + Send + 'static { ... }
```

Source: `engine\pill_engine_core\src\abi\mirror.rs:479`

A Rust value C# holds by pointer: a boxed `T` it creates, passes and drops.

`#[pill_mirror_object]` implements this trait and also generates the type's
drop trampoline and its [`MirrorValue`](trait.MirrorValue.md#rustdoc-item-82) and [`MirrorReturn`](trait.MirrorReturn.md#rustdoc-item-206) implementations.
The helpers here are the one place the box crosses the boundary.
