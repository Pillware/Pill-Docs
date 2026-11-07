<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-848"></a>

# Function `pill_development_host::config::host_target_directory`

```rust
pub(crate) fn host_target_directory() -> String;
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\config.rs:1486`

Workspace-relative directory cargo wrote this host's profile into.

Used as the host's own artifact location, so the host looks for the engine
dylibs it maps where its own profile put them rather than always in
`target/debug`. A host built with `--target` (the dioxus CLI) lives under
`target/<triple>/<profile>`; a native one under `target/<profile>`.
