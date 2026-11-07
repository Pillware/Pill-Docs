<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4214"></a>

# Function `pill_development_host::runtime::apply_manager_settings_changes`

```rust
pub(in runtime) fn apply_manager_settings_changes(host: &mut DevHost, asset_changes: usize);
```

Visibility: `{'restricted': {'parent': 3859, 'path': '::runtime'}}` · Source: `hosting\pill_development_host\src\runtime.rs:3420`

Re-applies the manager settings assets whose bytes changed, and every one of
them after a reload.

A reload replaces managers, so the documents the project already had are
applied again - a manager that was rebuilt has to take them once more. The
editor revision is what says a reload happened; nothing here needs to know
which artifact it replaced.

A settings file is an asset, so the asset watcher is what notices an edit:
the change is read back and applied against the bytes the manager already
took, which is why an edit that changes nothing applies nothing.
