<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-406"></a>

# Procedural macro `pill_engine_macros::pill_mirror_fn`

```rust
proc_macro pill_mirror_fn
```

Source: `engine\pill_engine_macros\src\lib.rs:1856`

Mirrors a free function to C#, as a static method on a static class.

The free-function counterpart of [`pill_mirror_impl`](macro.pill_mirror_impl.md#rustdoc-item-403):
`pill_dummy_color::get_color_a` becomes
`pill_dummy_color.PillDummyColor.GetColorA()`. The class is the last path
segment in PascalCase. Its namespace is the preceding segments joined with
dots, or the whole module path when there is no preceding segment. The
arguments and results follow [`pill_mirror_impl`](macro.pill_mirror_impl.md#rustdoc-item-403)'s vocabulary: a free
function may take a resource (`assets: &mut AssetManager` becomes a
`ResMut<AssetManager>` parameter) as well as plain values.

List it before [`pill_hot_fn`](macro.pill_hot_fn.md#rustdoc-item-405). It then records the original signature, the
contract C# compiled against, while the body stays hot-patchable, so a patch
replaces the code a managed call executes.

```ignore
#[pill_mirror_fn]
#[pill_hot_fn]
pub fn get_color_a() -> f32 {
    1.0
}
```
