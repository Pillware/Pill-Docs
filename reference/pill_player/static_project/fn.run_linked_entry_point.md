<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-735"></a>

# Function `pill_player::static_project::run_linked_entry_point`

```rust
pub(crate) fn run_linked_entry_point(engine: &mut pill_engine::Engine, init: fn (_: &mut pill_engine::Engine) -> u32, scope: Option<pill_engine::SystemOwner>, startup_scene: Option<&'static str>) -> Result<(), u32>;
```

Visibility: `crate` · Source: `hosting\pill_player\src\static_project.rs:405`

Run one linked entry point the way its generated ABI wrapper would.

`scope` sets the owner the registrations are recorded under when present.
An extension needs that; the project must not have it. `startup_scene` is
the project's own startup scene, applied after the component types exist and
before the project seeds its entities over them. An extension passes `None`,
because a module has no scene of its own.

## Errors

Returns the non-zero status the entry point reported, from the artifact's
registration or from `init`. The caller names the subject, because only it
knows whether the failure is a module's or the project's.
