<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-739"></a>

# Function `pill_player::system_specs::percent`

```rust
pub(in system_specs) fn percent(used: f64, total: f64) -> f64;
```

Visibility: `{'restricted': {'parent': 737, 'path': '::system_specs'}}` · Source: `hosting\pill_player\src\system_specs.rs:115`

`used` as a percentage of `total`, or `0.0` when there is nothing to divide
by: a machine that reports no swap, and a disk that reports no size.
