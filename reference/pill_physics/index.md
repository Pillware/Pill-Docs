<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1098"></a>

# pill_physics API reference

> Crate version: `0.1.0` · Rustdoc JSON format: `57` · Private items: included

Pill's rigid-body physics: a rapier world behind engine components.

## Responsibilities

- Declares the component, manager and system modules.
- Re-exports the vocabulary a project names: the two components, the body
  kinds and shapes, and the manager.
- Exposes [`register`](fn.register.md#rustdoc-item-492), the entry point the host calls on every generation
  of this module.

## Design

An entity is simulated while it carries a
[`RigidBodyComponent`](components/struct.RigidBodyComponent.md#rustdoc-item-223) and a [`ColliderComponent`](components/struct.ColliderComponent.md#rustdoc-item-366). The pose stays in the
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
- [`components`](components/index.md#rustdoc-item-356) — The two components, the body kinds and the collider shapes.
- [`debug_draw`](debug_draw/index.md#rustdoc-item-495) — The collider outlines drawn while the settings document asks for them.
- [`events`](events/index.md#rustdoc-item-692) — The three collision events a project reacts to.
- [`manager`](manager/index.md#rustdoc-item-697) — The manager that owns the rapier world.
- [`queries`](queries/index.md#rustdoc-item-963) — Ray queries against the simulated world.
- [`restore`](restore/index.md#rustdoc-item-971) — The system that drops the simulation when the world it mirrors was
- [`settings`](settings/index.md#rustdoc-item-1073) — The tuning document and its `.physics_settings` asset.
- [`sync`](sync/index.md#rustdoc-item-970) — The system that steps the simulation each frame.

### Functions
- [`init`](fn.init.md#rustdoc-item-1096) — Runs once per module image, after [`register`], and builds nothing of its
- [`register`](fn.register.md#rustdoc-item-492) — Declares the extension's components, settings surface and resources.

## Re-exports

- [`pub use components::BodyKind;`](components/enum.BodyKind.md#rustdoc-item-4)
- [`pub use components::ColliderComponent;`](components/struct.ColliderComponent.md#rustdoc-item-366)
- [`pub use components::ColliderShape;`](components/enum.ColliderShape.md#rustdoc-item-158)
- [`pub use components::RigidBodyComponent;`](components/struct.RigidBodyComponent.md#rustdoc-item-223)
- [`pub use debug_draw::draw_collider_outline;`](debug_draw/fn.draw_collider_outline.md#rustdoc-item-496)
- [`pub use events::CollisionStarted;`](events/struct.CollisionStarted.md#rustdoc-item-506)
- [`pub use events::CollisionStopped;`](events/struct.CollisionStopped.md#rustdoc-item-551)
- [`pub use events::ContactForce;`](events/struct.ContactForce.md#rustdoc-item-598)
- [`pub use events::PhysicsEvents;`](events/struct.PhysicsEvents.md#rustdoc-item-643)
- [`pub use manager::PhysicsManager;`](manager/struct.PhysicsManager.md#rustdoc-item-812)
- [`pub use manager::PhysicsStatistics;`](manager/struct.PhysicsStatistics.md#rustdoc-item-701)
- [`pub use manager::DEFAULT_FIXED_TIMESTEP_SECONDS;`](manager/constant.DEFAULT_FIXED_TIMESTEP_SECONDS.md#rustdoc-item-694)
- [`pub use manager::DEFAULT_GRAVITY;`](manager/constant.DEFAULT_GRAVITY.md#rustdoc-item-693)
- [`pub use manager::MAXIMUM_SUBSTEPS_PER_FRAME;`](manager/constant.MAXIMUM_SUBSTEPS_PER_FRAME.md#rustdoc-item-695)
- [`pub use queries::RayHit;`](queries/struct.RayHit.md#rustdoc-item-854)
- [`pub use restore::physics_restore;`](restore/fn.physics_restore.md#rustdoc-item-965)
- [`pub use settings::PhysicsSettings;`](settings/struct.PhysicsSettings.md#rustdoc-item-799)
- [`pub use settings::PhysicsSettingsAsset;`](settings/struct.PhysicsSettingsAsset.md#rustdoc-item-895)
