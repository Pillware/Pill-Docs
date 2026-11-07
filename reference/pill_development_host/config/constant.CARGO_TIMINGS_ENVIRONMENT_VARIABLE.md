<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-822"></a>

# Constant `pill_development_host::config::CARGO_TIMINGS_ENVIRONMENT_VARIABLE`

```rust
pub(in config) const CARGO_TIMINGS_ENVIRONMENT_VARIABLE: &str = "PILL_CARGO_TIMINGS";
```

Visibility: `{'restricted': {'parent': 821, 'path': '::config'}}` · Source: `hosting\pill_development_host\src\config.rs:55`

Opt-in variable that adds cargo's `--timings` report to every host-driven
build.

Off by default. The report makes cargo write an HTML timing file and adds
work to every build, and only automated build measurements read it, so a
developer does not usually want it. Set the variable to any value when
per-crate build times are needed; the measurements then read the report
this process's builds produce.
