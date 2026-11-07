<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-774"></a>

# Constant `pill_development_host::build_runner::STAGED_DEPENDENCY_SUBDIRECTORY`

```rust
pub(crate) const STAGED_DEPENDENCY_SUBDIRECTORY: &str = "target/hot/deps";
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\build_runner.rs:1833`

The directory where the shared per-crate dependency rlibs are staged for
patch linking.

It is a subdirectory of the hot-load directory, private to the host for the
same reason the staged artifacts are.
