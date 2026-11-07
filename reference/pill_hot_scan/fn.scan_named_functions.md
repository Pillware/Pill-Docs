<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-205"></a>

# Function `pill_hot_scan::scan_named_functions`

```rust
pub(crate) fn scan_named_functions(source: &str, mask: &[bool], names: &std::collections::HashSet<String>, skip: SkipStrategy) -> Vec<(String, FunctionText)>;
```

Visibility: `crate` · Source: `hosting\pill_hot_scan\src\lib.rs:967`

Every declaration of a named function, in source order, in one pass.

Shared by [`strip_function_bodies`](fn.strip_function_bodies.md#rustdoc-item-201) and [`function_bodies`](fn.function_bodies.md#rustdoc-item-203) so both answer
with exactly the bounds [`find_function`](fn.find_function.md#rustdoc-item-76) would report for the same name:
the same `fn <name>` spelling, the same boundary characters either side, and
the same brace matching over `mask`.

`mask` MUST be `code_mask(source)`, so a `fn` inside a string or a comment
is never matched.
