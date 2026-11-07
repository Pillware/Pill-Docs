<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1256"></a>

# Function `pill_development_host::config::module_build_artifact_directory`

```rust
pub(crate) fn module_build_artifact_directory() -> String;
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\config.rs:1497`

Profile subdirectory inside [`MODULE_BUILD_TARGET_DIRECTORY`](constant.MODULE_BUILD_TARGET_DIRECTORY.md#rustdoc-item-3) where cargo
writes a host-spawned build's artifacts (`target/hot/build/debug` for a
native dev host, `target/hot/build/x86_64-pc-windows-msvc/desktop-dev`
under the dioxus CLI, which builds with an explicit `--target`).
