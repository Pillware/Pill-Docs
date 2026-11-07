<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4197"></a>

# Function `pill_development_host::runtime::resync_patch_baselines`

```rust
pub(in runtime) fn resync_patch_baselines(host: &mut DevHost, project_rebuilt: bool, reloaded_module_indices: &[usize]);
```

Visibility: `{'restricted': {'parent': 3859, 'path': '::runtime'}}` · Source: `hosting\pill_development_host\src\runtime.rs:2536`

Take a new baseline snapshot for every subject a reload has just rebuilt.

The fast path decides whether an edit is "body-only" by comparing the file
with a snapshot of the code that is running. That snapshot normally moves
only when a patch is installed. A reload replaces the running code without
touching the snapshot, so an edit the fast path refused would stay in the
diff.

Each later edit would then be compared against a baseline two edits old,
and a change outside a hot function body would be refused again. That reads
as "live patching stopped working".

Call this after the reload, so a save that arrives during the build is not
folded into the baseline. That save has already increased the generation
counter, and the next frame gives it its own reload.
