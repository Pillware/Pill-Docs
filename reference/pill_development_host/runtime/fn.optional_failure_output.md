<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4115"></a>

# Function `pill_development_host::runtime::optional_failure_output`

```rust
pub(in runtime) fn optional_failure_output(error: &pill_core::error::HostError) -> String;
```

Visibility: `{'restricted': {'parent': 3859, 'path': '::runtime'}}` · Source: `hosting\pill_development_host\src\runtime.rs:1438`

The text a tolerated first-load failure reports to the notice queue. It is
the captured compiler output when the build itself failed, and the editor's
Problems rows read `file:line` locations from it. Otherwise it is the
error's own words.
