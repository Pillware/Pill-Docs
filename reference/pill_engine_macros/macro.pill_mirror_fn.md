<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-430"></a>

# Procedural macro `pill_engine_macros::pill_mirror_fn`

```rust
proc_macro pill_mirror_fn
```

Source: `engine\pill_engine_macros\src\lib.rs:2249`

Mirrors a free function to C#, as a static method on a static class.

The free-function counterpart of [`pill_mirror_impl`](macro.pill_mirror_impl.md#rustdoc-item-427):
`pill_test::mirror::tint_alpha` becomes `pill_test.Mirror.TintAlpha()`. The
class is the last segment of the function's module path, in PascalCase. Its
namespace is the preceding segments joined with dots, or the whole module
path when there is no preceding segment. The
arguments and results follow [`pill_mirror_impl`](macro.pill_mirror_impl.md#rustdoc-item-427)'s vocabulary: a free
function may take a resource (`assets: &mut AssetManager` becomes a
`ResMut<AssetManager>` parameter) as well as plain values.

List it before [`pill_hot_fn`](macro.pill_hot_fn.md#rustdoc-item-429). It then records the original signature, the
contract C# compiled against, while the body stays hot-patchable, so a patch
replaces the code a managed call executes.

```ignore
#[pill_mirror_fn]
#[pill_hot_fn]
pub fn tint_alpha() -> f32 {
    1.0
}
```
