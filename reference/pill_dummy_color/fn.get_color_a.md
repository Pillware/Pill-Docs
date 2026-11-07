<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-159"></a>

# Function `pill_dummy_color::get_color_a`

```rust
pub fn get_color_a() -> f32;
```

Source: `extensions\pill_dummy_color\pill_dummy_color\src\pill_dummy_color.rs:120`

A dummy alpha channel. `Tint` carries no alpha, so this always reports
fully opaque. Other crates call it as a stand-in.

It is mirrored to C# as `pill_dummy_color.PillDummyColor.GetColorA()` and
is hot-patchable like any `#[pill_hot_fn]`. The mirror attribute comes
first so it records the original signature, which is the contract managed
code was compiled against. The body can still be replaced: after a patch, a
managed call runs the new code with no reload.
