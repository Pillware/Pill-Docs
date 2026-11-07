<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-169"></a>

# Function `pill_hot_scan::simple_path`

```rust
pub(crate) fn simple_path(candidate: &str) -> Option<String>;
```

Visibility: `crate` · Source: `hosting\pill_hot_scan\src\lib.rs:768`

One path with no type arguments, or `None`.

Angle brackets anywhere mean a generic, which has no single address. A header
that is not a plain path at all - a reference, a tuple - is refused by the
same character test.
