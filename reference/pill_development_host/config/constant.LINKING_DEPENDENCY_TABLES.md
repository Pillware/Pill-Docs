<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-857"></a>

# Constant `pill_development_host::config::LINKING_DEPENDENCY_TABLES`

```rust
pub(in config) const LINKING_DEPENDENCY_TABLES: [&str; 3] = _;
```

Visibility: `{'restricted': {'parent': 821, 'path': '::config'}}` · Source: `hosting\pill_development_host\src\config.rs:255`

Dependency tables whose entries link code into the build.

The workspace-wide `[workspace.dependencies]` table is deliberately absent:
it is shared infrastructure rather than a dependency of this project.
