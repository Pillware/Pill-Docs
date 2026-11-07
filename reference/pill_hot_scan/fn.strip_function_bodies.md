<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-201"></a>

# Function `pill_hot_scan::strip_function_bodies`

```rust
pub fn strip_function_bodies(source: &str, function_names: &std::collections::HashSet<String>) -> String;
```

Source: `hosting\pill_hot_scan\src\lib.rs:913`

Replace the bodies of the named functions with a placeholder.

Comparing two stripped revisions answers the only question classification
needs: did anything OUTSIDE these bodies change? Signatures, types,
constants, imports, attributes and every other function all survive the
strip, so any edit to them shows up as a difference.
