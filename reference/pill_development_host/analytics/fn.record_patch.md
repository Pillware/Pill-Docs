<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-428"></a>

# Function `pill_development_host::analytics::record_patch`

```rust
pub(crate) fn record_patch(function: &str, stage_ms: f64, build_ms: u64, load_ms: f64, activate_ms: f64, artifact_bytes: u64, routes: &[PatchRoute], copies: usize);
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\analytics.rs:1066`

Record one function patch in the same shape as a module reload.

The phase mapping is deliberate, not an approximation. `build` is `rustc`,
which plays the part of a module's cargo build. `stage` is everything that
prepares the build: classification, source generation and the flag capture.
`load` is `LoadLibrary`. `init` is the install that makes the new code live,
the same job `pill_module_init` does for a reload. `migrate` is always zero,
because a patch cannot change a component schema - that is exactly the kind
of edit it refuses.
