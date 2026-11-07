<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-859"></a>

# pill_physics API reference

> Crate version: `0.1.0` · Rustdoc JSON format: `57` · Private items: included

Pill's rigid-body physics: a rapier world behind engine components.

## Responsibilities

- Declares the component, manager and system modules.
- Re-exports the vocabulary a project names: the two components, the body
  kinds and shapes, and the manager.
- Exposes [`register`](fn.register.md#rustdoc-item-330), the entry point the host calls on every generation
  of this module.

## Design

An entity is simulated while it carries a
[`RigidBodyComponent`](components/struct.RigidBodyComponent.md#rustdoc-item-208) and a [`ColliderComponent`](components/struct.ColliderComponent.md#rustdoc-item-277). The pose stays in the
engine's
[`TransformComponent`](pill_engine::TransformComponent): the manager builds
a body from it and the sync writes a stepped body's pose back into it, so
physics needs nothing from a component the renderer and the editor do not
already hold.

Every value on the boundary is a plain number. rapier is named only inside
the manager and the system, which keeps it out of a project's dependency
graph, a saved scene file and the managed mirror.

## Module contents

### Modules
- [`components`](components/index.md#rustdoc-item-268) — The two components, the body kinds and the collider shapes.
- [`debug_draw`](debug_draw/index.md#rustdoc-item-333) — The collider outlines drawn while the settings document asks for them.
- [`events`](events/index.md#rustdoc-item-533) — The three collision events a project reacts to.
- [`manager`](manager/index.md#rustdoc-item-538) — The manager that owns the rapier world.
- [`queries`](queries/index.md#rustdoc-item-734) — Ray queries against the simulated world.
- [`settings`](settings/index.md#rustdoc-item-836) — The tuning document and its `.physics_settings` asset.
- [`sync`](sync/index.md#rustdoc-item-839) — The system that steps the simulation each frame.

### Functions
- [`init`](fn.init.md#rustdoc-item-857) — Runs once per module image, after [`register`], and builds nothing of its
- [`register`](fn.register.md#rustdoc-item-330) — Declares the extension's components, settings surface and resources.

## Re-exports

- [`pub use components::BodyKind;`](components/enum.BodyKind.md#rustdoc-item-4)
- [`pub use components::ColliderComponent;`](components/struct.ColliderComponent.md#rustdoc-item-277)
- [`pub use components::ColliderShape;`](components/enum.ColliderShape.md#rustdoc-item-149)
- [`pub use components::RigidBodyComponent;`](components/struct.RigidBodyComponent.md#rustdoc-item-208)
- [`pub use debug_draw::physics_debug_draw;`](debug_draw/fn.physics_debug_draw.md#rustdoc-item-335)
- [`pub use events::CollisionStarted;`](events/struct.CollisionStarted.md#rustdoc-item-349)
- [`pub use events::CollisionStopped;`](events/struct.CollisionStopped.md#rustdoc-item-394)
- [`pub use events::ContactForce;`](events/struct.ContactForce.md#rustdoc-item-441)
- [`pub use events::PhysicsEvents;`](events/struct.PhysicsEvents.md#rustdoc-item-486)
- [`pub use manager::PhysicsManager;`](manager/struct.PhysicsManager.md#rustdoc-item-337)
- [`pub use manager::PhysicsStatistics;`](manager/struct.PhysicsStatistics.md#rustdoc-item-542)
- [`pub use manager::DEFAULT_FIXED_TIMESTEP_SECONDS;`](manager/constant.DEFAULT_FIXED_TIMESTEP_SECONDS.md#rustdoc-item-535)
- [`pub use manager::DEFAULT_GRAVITY;`](manager/constant.DEFAULT_GRAVITY.md#rustdoc-item-534)
- [`pub use manager::MAXIMUM_SUBSTEPS_PER_FRAME;`](manager/constant.MAXIMUM_SUBSTEPS_PER_FRAME.md#rustdoc-item-536)
- [`pub use queries::RayHit;`](queries/struct.RayHit.md#rustdoc-item-638)
- [`pub use settings::PhysicsSettings;`](settings/struct.PhysicsSettings.md#rustdoc-item-598)
- [`pub use settings::PhysicsSettingsAsset;`](settings/struct.PhysicsSettingsAsset.md#rustdoc-item-676)
