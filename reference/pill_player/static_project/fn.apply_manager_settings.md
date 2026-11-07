<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-732"></a>

# Function `pill_player::static_project::apply_manager_settings`

```rust
pub(in static_project) fn apply_manager_settings(engine: &mut pill_engine::Engine);
```

Visibility: `{'restricted': {'parent': 733, 'path': '::static_project'}}` · Source: `hosting\pill_player\src\static_project.rs:342`

Applies every manager's settings asset, reading each one from the mounted
asset roots - in a bundle, the pack.

A settings asset is an ordinary file under `res/settings`, so a shipped
build needs nothing baked: the pack answers the conventional path the same
way a project directory does. A manager with no file keeps its document
defaults, which is what a bundle that ships no settings for it means.

A refusal is the manager's own call, and a file that does not fit is the
project's - both are logged and neither stops the build.
