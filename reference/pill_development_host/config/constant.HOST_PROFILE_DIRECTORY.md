<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-842"></a>

# Constant `pill_development_host::config::HOST_PROFILE_DIRECTORY`

```rust
pub(in config) const HOST_PROFILE_DIRECTORY: &str = "debug";
```

Visibility: `{'restricted': {'parent': 821, 'path': '::config'}}` · Source: `hosting\pill_development_host\src\config.rs:165`

Cargo profile directory this host was compiled into, recorded by `build.rs`.

`debug` for an ordinary `cargo build`, `release` for `--release`, and the
profile's own name for any custom profile (`release-fast`,
`release-with-debug`).
