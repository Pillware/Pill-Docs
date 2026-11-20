<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-965"></a>

# Function `pill_physics::restore::physics_restore`

```rust
pub fn physics_restore(restore_epoch: pill_engine::Res<'_, pill_engine::RestoreEpoch>, manager: pill_engine::ResMut<'_, crate::manager::PhysicsManager>) -> Result<(), pill_engine::SystemError>;
```

Source: `extensions\pill_physics\modules\runtime\src\restore.rs:40`

Clears the simulation after a play session put the edit world back.

It opts in to edit mode, so it runs while the editor is not playing, and its
order puts it ahead of the simulation so a Play in the frame right after a
Stop already starts from the restored components. Bodies return on that
Play, from those components.

## Errors

Returns [`SystemError::MissingResource`] when the physics manager is absent,
which only happens in a world this module was not registered in.
