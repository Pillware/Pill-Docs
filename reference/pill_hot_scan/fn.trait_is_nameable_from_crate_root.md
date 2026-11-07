<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-213"></a>

# Function `pill_hot_scan::trait_is_nameable_from_crate_root`

```rust
pub(crate) fn trait_is_nameable_from_crate_root(trait_name: &str, module_segments: &[String], source: &str) -> bool;
```

Visibility: `crate` · Source: `hosting\pill_hot_scan\src\lib.rs:1362`

Whether a trait method's `impl` can be named from the crate root, where the
generated inventory is included.

`impl Display for Spline` in a submodule relies on that file's
`use std::fmt::Display;`, and a `use` only applies inside its own module.
Writing `<sub::Spline as Display>::fmt` in `lib.rs` would therefore not
compile. Three cases can be named:

- the `impl` sits in the crate root file, where the same `use` lines are in
  scope;
- the trait path is already qualified, as in `crate::Drawable` or
  `pill_engine::Resource`;
- the trait is declared in the same file, so its own module path reaches it.

Anything else is skipped rather than guessed.
