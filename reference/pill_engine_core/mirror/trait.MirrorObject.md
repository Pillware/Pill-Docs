<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6090"></a>

# Trait `pill_engine_core::mirror::MirrorObject`

```rust
pub trait MirrorObject: Sized + Send + 'static { ... }
```

Source: `engine\pill_engine_core\src\mirror.rs:479`

A Rust value C# holds by pointer: a boxed `T` it creates, passes and drops.

`#[pill_mirror_object]` implements this trait and also generates the type's
drop trampoline and its [`MirrorValue`](trait.MirrorValue.md#rustdoc-item-772) and [`MirrorReturn`](trait.MirrorReturn.md#rustdoc-item-928) implementations.
The helpers here are the one place the box crosses the boundary.
