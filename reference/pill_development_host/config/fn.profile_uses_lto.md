<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1251"></a>

# Function `pill_development_host::config::profile_uses_lto`

```rust
pub(in config) fn profile_uses_lto(profile: &str) -> bool;
```

Visibility: `{'restricted': {'parent': 821, 'path': '::config'}}` · Source: `hosting\pill_development_host\src\config.rs:1361`

Whether a cargo profile enables link-time optimization, the one case where
a host-spawned build must drop the workspace's `-C prefer-dynamic` rustflag.

rustc refuses `prefer-dynamic` combined with `lto = "fat"` outright
("cannot prefer dynamic linking when performing LTO"), so a host running
with an LTO profile has to clear the flag for every build it spawns. Every
other profile - `dev`, and launcher-injected dev-like profiles such as the
dioxus CLI's `desktop-dev` - keeps `prefer-dynamic`. That flag is what
makes modules dynamic: they import the one shared `pill_core.dll` instead
of embedding a private engine copy.
