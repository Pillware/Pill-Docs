<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-552"></a>

# Static `pill_development_host::build_runner::BUILD_OUTPUT`

```rust
pub(in build_runner) static BUILD_OUTPUT: std::sync::Mutex<std::collections::VecDeque<String>> = _;
```

Visibility: `{'restricted': {'parent': 545, 'path': '::build_runner'}}` · Source: `hosting\pill_development_host\src\build_runner.rs:55`

The last lines the most recent build wrote to stderr, for the editor's
Problems panel.

It is process-global because `pill_development_host.dll` exists once per
process. Builds run one at a time - an in-flight patch defers reloads and
managed builds - so this ring buffer still holds that build's output when a
failure reads it.
