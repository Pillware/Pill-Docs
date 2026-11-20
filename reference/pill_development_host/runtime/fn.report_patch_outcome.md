<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4482"></a>

# Function `pill_development_host::runtime::report_patch_outcome`

```rust
pub(in runtime) fn report_patch_outcome(outcome: crate::hot_patch::PatchOutcome) -> bool;
```

Visibility: `{'restricted': {'parent': 4115, 'path': '::runtime'}}` · Source: `hosting\pill_development_host\src\runtime.rs:4119`

Report one patch attempt, and say whether it fully handled the change.

`true` means the edit is live and the pending reload has nothing left to do.
Every other outcome falls through to the normal rebuild.
