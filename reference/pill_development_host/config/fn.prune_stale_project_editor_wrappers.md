<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1359"></a>

# Function `pill_development_host::config::prune_stale_project_editor_wrappers`

```rust
pub(in config) fn prune_stale_project_editor_wrappers(workspace_root: &std::path::Path, kept: Option<&std::path::Path>);
```

Visibility: `{'restricted': {'parent': 823, 'path': '::config'}}` · Source: `hosting\pill_development_host\src\config.rs:2851`

Removes project editor wrappers left behind by earlier runs.

Every `host_module_*` member under `projects_generated/` was written by
[`materialize_project_editor_wrapper`](fn.materialize_project_editor_wrapper.md#rustdoc-item-1357) for some project. Any one that is
not `kept` belongs to a project the host no longer runs, and the workspace
glob would still pick it up as a member whose dependency paths may no
longer resolve. With `None` - a game posture, which loads no project editor
crate - every one of them is stale.

Failures are ignored rather than returned: a member the host cannot remove
is a housekeeping problem, not a reason to refuse to start.
