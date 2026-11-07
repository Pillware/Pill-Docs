<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4"></a>

# Function `pill_development_host::analytics::cargo_timings_directory`

```rust
pub(in analytics) fn cargo_timings_directory() -> String;
```

Visibility: `{'restricted': {'parent': 1, 'path': '::analytics'}}` · Source: `hosting\pill_development_host\src\analytics.rs:74`

The folder, relative to the workspace root, where cargo writes its
`--timings` HTML report.

The path comes from the private module build tree because that is where
the reports land. Every build the host starts sets `CARGO_TARGET_DIR` to
[`crate::config::MODULE_BUILD_TARGET_DIRECTORY`](../config/constant.MODULE_BUILD_TARGET_DIRECTORY.md#rustdoc-item-3), and cargo writes the
report under whatever target directory it is given. A fixed
`target/cargo-timings` would only ever hold the reports from the
developer's own `cargo build` runs.

Cargo does not add the target triple here, so the path stays the same for
`--target` builds such as the dioxus CLI's; only the artifact folders
move.
