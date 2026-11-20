<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-429"></a>

# Function `pill_development_host::analytics::record_managed_reload`

```rust
pub(crate) fn record_managed_reload(name: &str, stage_ms: f64, build_ms: f64, load_ms: f64);
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\analytics.rs:1113`

Record one managed assembly swap in the same shape as a module reload.

The phase mapping follows `record_patch`'s rule of naming what each phase
really is here. `stage` is everything that precedes the build - the
watcher's debounce plus the wait for the frame loop to start building - and
`build` is the assembly rebuild. `load` is the loader's swap. `init` and
`migrate` are zero because the loader has no separate activation or schema
step, and the artifact size is zero because the host is never told the
assembly's size; the report prints that as `size=-`.

A swap whose timing was never armed records zeros, which is what the report
says for a phase that did not run: an assembly this host did not build has
no measured build to report.
