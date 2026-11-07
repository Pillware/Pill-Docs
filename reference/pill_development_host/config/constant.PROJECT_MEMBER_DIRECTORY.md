<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-839"></a>

# Constant `pill_development_host::config::PROJECT_MEMBER_DIRECTORY`

```rust
pub(in config) const PROJECT_MEMBER_DIRECTORY: &str = "projects_generated";
```

Visibility: `{'restricted': {'parent': 821, 'path': '::config'}}` · Source: `hosting\pill_development_host\src\config.rs:142`

Workspace-relative directory holding the generated project member.

Projects live outside the workspace, so the member that builds one as part
of it is generated here. The `projects_generated/*` workspace glob finds
it without any entry in the workspace manifest.
