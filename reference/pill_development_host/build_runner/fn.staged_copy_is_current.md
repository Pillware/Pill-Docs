<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-778"></a>

# Function `pill_development_host::build_runner::staged_copy_is_current`

```rust
pub(crate) fn staged_copy_is_current(source_path: &std::path::Path, staged_path: &std::path::Path) -> bool;
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\build_runner.rs:1939`

Checks whether a staged copy already matches its source.

Same size and no older. The shared-rlib staging, the engine dylib staging and
the patch session's rlib refresh all use it, so a copy either path leaves
behind satisfies the other. Anything unknown counts as out of date, so the copy
happens.
