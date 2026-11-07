<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-826"></a>

# Constant `pill_development_host::config::CSHARP_CONFIGURATION_ENVIRONMENT_VARIABLE`

```rust
pub(in config) const CSHARP_CONFIGURATION_ENVIRONMENT_VARIABLE: &str = "PILL_CSHARP_CONFIGURATION";
```

Visibility: `{'restricted': {'parent': 821, 'path': '::config'}}` · Source: `hosting\pill_development_host\src\config.rs:74`

Opt-in variable selecting the MSBuild configuration of the managed project
build: `Release` (the default) or `Debug`.

`Debug` exists for the managed debugger. A `Release` build is optimized by
Roslyn, so local variables are gone from the IL and no JIT setting brings
them back. The runtime is a `ProjectReference` of every gameplay project,
so it is built in the same configuration and its output path follows.
