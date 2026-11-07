<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-809"></a>

# Static `pill_development_host::build_runner::BATCH_VALIDATION`

```rust
pub(in build_runner) static BATCH_VALIDATION: std::sync::OnceLock<std::sync::Mutex<Option<BatchValidation>>> = _;
```

Visibility: `{'restricted': {'parent': 545, 'path': '::build_runner'}}` · Source: `hosting\pill_development_host\src\build_runner.rs:1972`

One startup batch invocation's validation, consumed per module.

One batch runs per process, before anything loads; each name is consumed
by its startup load, so a later reload always builds on its own.
