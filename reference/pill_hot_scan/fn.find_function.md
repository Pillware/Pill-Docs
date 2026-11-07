<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-76"></a>

# Function `pill_hot_scan::find_function`

```rust
pub fn find_function(source: &str, name: &str) -> Option<FunctionText>;
```

Source: `hosting\pill_hot_scan\src\lib.rs:251`

Finds the first `fn <name>` declaration and returns its full text.

Searches the whole file, so a function nested inside another matches too. A
caller that needs a method from its own `impl` block asks [`find_method`](fn.find_method.md#rustdoc-item-77).

Returns `None` when the name does not appear as a function declaration, or
when its braces are unbalanced - both of which make the caller fall back to
a full reload rather than guess.
