<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-405"></a>

# Procedural macro `pill_engine_macros::pill_hot_fn`

```rust
proc_macro pill_hot_fn
```

Source: `engine\pill_engine_macros\src\lib.rs:2548`

Makes an ordinary function hot-patchable.

Use this for a plain `pub fn`, and `#[pill_hot]` for an ECS system. A system
already has an indirection: the engine holds its boxed closure and can swap
what it calls. An ordinary function is called directly, so the indirection
has to live inside the function itself.

```ignore
#[pill_hot_fn]
pub fn get_color_a() -> f32 {
    133.0
}
```

The real body is renamed, and the public name becomes a dispatcher that
reads a slot. Every caller then goes through the redirect, including callers
in other crates that linked this one statically.

An inherent method takes a different shape. Its body cannot be renamed
because it uses `self`, so it is emitted in place and the dispatcher sits in
front of it. A method parameter must therefore be a plain binding, because
that is the name the dispatcher forwards by.

## A crate linked into several artifacts

The slot is a `static` in whichever artifact compiled the function. A crate
linked into both a module DLL and the project has an independent copy of its
code in each, so each copy has its own slot and must be patched separately.
The host installs into every loaded artifact that declares the name.
