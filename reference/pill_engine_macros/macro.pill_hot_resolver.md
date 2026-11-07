<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-436"></a>

# Procedural macro `pill_engine_macros::pill_hot_resolver`

```rust
proc_macro pill_hot_resolver
```

Source: `engine\pill_engine_macros\src\lib.rs:2854`

Emits the hot-patch resolver export on its own.

`#[pill_project]` and `#[pill_module]` already include it. This macro exists
for an artifact that carries hot functions but has neither entry point, in
particular the patch libraries the host generates.

Takes an optional export name, which defaults to `pill_hot_resolve`:

```ignore
pill_engine::pill_hot_resolver!();                    // pill_hot_resolve
pill_engine::pill_hot_resolver!(pill_patch_resolve);  // custom
```

A generated patch **must** pass a different name. It links the project's
rlib to reach that crate's types and helpers, and that rlib already exports
`pill_hot_resolve`. Two `#[no_mangle]` definitions of one symbol in a single
artifact are a linker error.
