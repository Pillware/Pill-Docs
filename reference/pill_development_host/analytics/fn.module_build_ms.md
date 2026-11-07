<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-425"></a>

# Function `pill_development_host::analytics::module_build_ms`

```rust
pub(crate) fn module_build_ms(name: &str) -> Option<u64>;
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\analytics.rs:988`

The last cargo build wall time recorded for `name`, if there is one.

The reload toasts show it ("reloaded in 820 ms"). A module that never ran a
recorded build, such as a load-only extension or the first reload after a
restart, returns `None` instead of a misleading zero.
