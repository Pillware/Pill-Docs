<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3289"></a>

# Function `pill_development_host::native_library::cleanup_temporary_files`

```rust
pub(crate) fn cleanup_temporary_files(workspace_root: &std::path::Path);
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\native_library.rs:1658`

Removes the staging directories that earlier host processes left behind.

Three rules apply, in this order:

1. This process's own directory always goes. A previous run under the same
   process id left it.
2. Another process's directory goes once it has been quiet for
   [`STAGING_GRACE_PERIOD`](constant.STAGING_GRACE_PERIOD.md#rustdoc-item-3077). That wait is how a dead host is told from a live
   one.
3. Whatever survives is capped at [`MAX_RETAINED_STAGING_DIRECTORIES`](constant.MAX_RETAINED_STAGING_DIRECTORIES.md#rustdoc-item-3078), and
   the oldest go first.

Removal failures are reported rather than ignored: on Windows a live host
keeps its mapped modules locked, so a refusal means the directory is in use.
