<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1914"></a>

# Constant `pill_development_host::hot_patch::compile::DROPPED_CODEGEN_VALUES`

```rust
pub(in hot_patch::compile) const DROPPED_CODEGEN_VALUES: &[&str] = _;
```

Visibility: `{'restricted': {'parent': 1910, 'path': '::hot_patch::compile'}}` · Source: `hosting\pill_development_host\src\hot_patch\compile.rs:82`

`-C` values that are dropped when a patch is built.

- `metadata` and `extra-filename` describe the original crate, so keeping
  them would make the patch collide with it.
- `incremental` makes a single-file patch slower. The patch is one codegen
  unit that changes on every save, so the incremental cache never matches
  and only adds bookkeeping.
