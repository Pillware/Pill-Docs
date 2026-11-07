<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3"></a>

# Constant `pill_development_host::config::MODULE_BUILD_TARGET_DIRECTORY`

```rust
pub(crate) const MODULE_BUILD_TARGET_DIRECTORY: &str = "target/hot/build";
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\config.rs:215`

Private build tree for every cargo build the host spawns.

The running host binary maps the engine dylibs out of the regular target
directory ([`host_target_directory`](fn.host_target_directory.md#rustdoc-item-848)). A GUI frontend like the editor adds
features to crates those dylibs depend on, so the engine the host runs can
need different artifacts than a module build. A module build that rewrote
the shared directory would make cargo delete a DLL the host has mapped, and
Windows refuses to replace a loaded image. Host-spawned builds write here
instead; their engine artifacts are copied into the hot-load directory when
the two sets differ.

With a `--target` host ([`HOST_TARGET_TRIPLE`](constant.HOST_TARGET_TRIPLE.md#rustdoc-item-843)) the builds pass the same
triple, so the subtree appears under `target/hot/build/<triple>/<profile>`.
