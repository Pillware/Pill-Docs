<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-584"></a>

# Function `pill_development_host::build_runner::host_anchor_package`

```rust
pub(in build_runner) fn host_anchor_package() -> Option<String>;
```

Visibility: `{'restricted': {'parent': 545, 'path': '::build_runner'}}` · Source: `hosting\pill_development_host\src\build_runner.rs:550`

Returns the running host's workspace package name, which an anchored build
selects with `-p`.

Cargo unifies features across every selected package, so an anchored module
build selects the host's own package (`-p editor` or `-p pill_editor` for an
editor) and forces the shared engine crates onto that host's exact feature
set. The package name is normally the executable's file stem, but the Dioxus
CLI (`dx`) stores the built binary under a name with a cargo metadata hash,
such as `editor-d6d95e94.exe`. The trailing `-<hex>` part is trimmed so the
anchor still names the real package.
