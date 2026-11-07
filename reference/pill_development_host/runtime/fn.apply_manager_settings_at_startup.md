<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4213"></a>

# Function `pill_development_host::runtime::apply_manager_settings_at_startup`

```rust
pub(in runtime) fn apply_manager_settings_at_startup(world: &mut pill_engine::World, asset_directory: Option<&std::path::Path>);
```

Visibility: `{'restricted': {'parent': 3859, 'path': '::runtime'}}` · Source: `hosting\pill_development_host\src\runtime.rs:3346`

Applies every manager's settings asset once the project has loaded, writing
a missing file first.

Runs after the project's `init`, which is the first moment every manager
exists. A project whose `res/settings` holds no file for a manager gets one
written from the manager's own document defaults, so the file a person edits
already spells out every field.

A host with no project directory - a shipped bundle - creates nothing and
applies nothing: the manager keeps the values its document defaults give it.
