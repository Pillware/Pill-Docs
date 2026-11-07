<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2330"></a>

# Function `pill_editor_core::drain::prune_history`

```rust
pub fn prune_history(engine: &mut pill_engine::Engine) -> usize;
```

Source: `editor\pill_editor_core\src\drain.rs:372`

Drops the history entries the current component registry cannot resolve.

Every entry remembers the component and field identifiers its commands
touched. A project or module reload rebuilds the registry, and the
reloaded module may no longer register a component or field that an old
step names. Running that step would then target storage that no longer
exists. Each call hashes the registry, but the entries are only walked
when that hash changed.

Returns how many entries were dropped.
