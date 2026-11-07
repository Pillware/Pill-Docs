<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-77"></a>

# Function `pill_hot_scan::find_method`

```rust
pub fn find_method(source: &str, name: &str, self_type: &str, trait_name: Option<&str>) -> Option<FunctionText>;
```

Source: `hosting\pill_hot_scan\src\lib.rs:220`

Finds one method's full text, scoped to the `impl` block that owns it.

[`find_function`](fn.find_function.md#rustdoc-item-76) searches by bare name and returns the first match. That
cannot tell `impl Default for Alpha` from `impl Default for Beta`, nor an
inherent `draw` from a trait `draw`, so generating a patch from it would
install the wrong body with no error - the one outcome this crate must
avoid.

`trait_name` of `None` selects the inherent block, so an inherent and a trait
method of the same name stay distinguishable.
