<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-840"></a>

# Constant `pill_development_host::config::HOST_PROJECT_MEMBER_PREFIX`

```rust
pub(crate) const HOST_PROJECT_MEMBER_PREFIX: &str = "host_project_";
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\config.rs:148`

Name prefix of the generated workspace member that builds a native project.

The member lives under [`PROJECT_MEMBER_DIRECTORY`](constant.PROJECT_MEMBER_DIRECTORY.md#rustdoc-item-839), and its package is
`<prefix><project package name>`.
