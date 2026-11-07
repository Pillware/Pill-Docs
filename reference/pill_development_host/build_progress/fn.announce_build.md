<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-518"></a>

# Function `pill_development_host::build_progress::announce_build`

```rust
pub(crate) fn announce_build(module: &str) -> bool;
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\build_progress.rs:83`

Logs that the build of `module` is starting, if that build belongs to the
startup plan and has not started yet.

Returns `true` when it logged the build. It returns `false` for any other
build (any reload), so the caller logs it in its usual way instead.
