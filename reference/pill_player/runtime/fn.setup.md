<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-314"></a>

# Function `pill_player::runtime::setup`

```rust
pub fn setup(project: crate::StaticProject) -> Result<Runtime, pill_core::error::HostError>;
```

Source: `hosting\pill_player\src\runtime.rs:707`

Create the engine and initialize a statically linked project, mounting the
pack the project embeds.

Nothing is built, watched or loaded: the project and its extensions were
linked into this binary, and the frontend passes their entry points in. A
browser frontend cannot embed a pack, so it fetches one and calls
[`setup_with_asset_database`](fn.setup_with_asset_database.md#rustdoc-item-315) instead.

## Errors

Returns a typed [`HostError`] when the embedded pack is not a pack, when an
extension's or the project's entry point reports a non-zero initialization
status, or an external backend fails to start. There is no previous
generation to fall back to on this path, so the first failure is fatal.
