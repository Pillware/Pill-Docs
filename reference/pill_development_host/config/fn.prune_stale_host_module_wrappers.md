<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1286"></a>

# Function `pill_development_host::config::prune_stale_host_module_wrappers`

```rust
pub(in config) fn prune_stale_host_module_wrappers(workspace_root: &std::path::Path, kept_wrappers: &[(String, String)]);
```

Visibility: `{'restricted': {'parent': 821, 'path': '::config'}}` · Source: `hosting\pill_development_host\src\config.rs:2307`

Removes generated extension wrappers left behind by earlier runs.

Every directory in an extension folder's `generated/` whose name carries
[`HOST_MODULE_MEMBER_PREFIX`](constant.HOST_MODULE_MEMBER_PREFIX.md#rustdoc-item-841) was written by
[`materialize_host_module_wrapper`](fn.materialize_host_module_wrapper.md#rustdoc-item-954). Any one whose `(folder, crate)` pair
is not in `kept_wrappers` belongs to a project the host no longer runs, or
to a crate that moved to another folder. The workspace glob would still
pick it up as a member whose dependency paths may not resolve, and Cargo
then fails to load the workspace at all. A wrapper written straight into
`extensions/` (an older layout) is removed too.

Failures are ignored rather than returned: a stale member the host cannot
remove is a housekeeping problem, not a reason to refuse to start.
