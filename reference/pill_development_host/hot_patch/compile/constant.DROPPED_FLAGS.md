<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1915"></a>

# Constant `pill_development_host::hot_patch::compile::DROPPED_FLAGS`

```rust
pub(in hot_patch::compile) const DROPPED_FLAGS: &[&str] = _;
```

Visibility: `{'restricted': {'parent': 1910, 'path': '::hot_patch::compile'}}` · Source: `hosting\pill_development_host\src\hot_patch\compile.rs:90`

Whole flags that are dropped when a patch is built, together with their
value token when they have one.

The diagnostics flags go so `rustc` prints normal, readable errors into the
host console. `--emit` and `--out-dir` are replaced by a plain `-o`. The
crate identity flags are replaced by the patch's own.
