<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1285"></a>

# Function `pill_development_host::config::prune_stale_host_project_members`

```rust
pub(in config) fn prune_stale_host_project_members(workspace_root: &std::path::Path, kept_member_directory: &std::path::Path);
```

Visibility: `{'restricted': {'parent': 821, 'path': '::config'}}` · Source: `hosting\pill_development_host\src\config.rs:2141`

Removes host-generated workspace members left behind by earlier runs.

Every directory under `projects_generated/` whose name carries
[`HOST_PROJECT_MEMBER_PREFIX`](constant.HOST_PROJECT_MEMBER_PREFIX.md#rustdoc-item-840) was written by the host, so any one that is
not the member built now belongs to a project the host no longer runs.
Leaving it is not harmless: the workspace glob still picks it up as a
member, and its dependency paths point into the previous project's folder.
Once that folder moves or is deleted, Cargo cannot load the workspace, and
every build, test and lint in the repository stops.

Members written straight into `extensions/` are removed too; nothing globs
that location. Failures are ignored rather than returned: a member the
host cannot remove is a housekeeping problem, not a reason to refuse to
start.
