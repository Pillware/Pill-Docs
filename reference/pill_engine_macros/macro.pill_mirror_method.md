<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-404"></a>

# Procedural macro `pill_engine_macros::pill_mirror_method`

```rust
proc_macro pill_mirror_method
```

Source: `engine\pill_engine_macros\src\lib.rs:1825`

Marker attribute for functions inside a `#[pill_mirror_impl]` block.

The impl-level macro reads it from the token stream; it is otherwise a
no-op that leaves the function untouched, so a function compiles the same
with or without the mirror machinery.
