<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-8506"></a>

# Module `pill_engine_core::startup_scene`

Source: `engine\pill_engine_core\src\startup_scene.rs:1`

The startup scene: the `.scene` a project's settings name, loaded before
the project's own `init` fills the world.
The startup scene: the `.scene` file a project's settings name, loaded as
soon as the project's component types exist.

## Responsibilities

- [`StartupScene`](struct.StartupScene.md#rustdoc-item-7257): the request. The front end queues it from the project's
  settings, and the project's entry point takes it out of the world and
  loads it.
- [`apply_startup_scene`](fn.apply_startup_scene.md#rustdoc-item-8504): the load itself.

## Design

A project's `init` fills its world up to the counts it expects, so a scene
loaded after it would double every entity. A scene loaded before the
components are registered would find no component types to attach. The
generated project entry point therefore loads this request right after
registering the project's components and before its `init`. A shipping
build loads it in the same place, inside the project's entry point and
after its modules.

A managed (C#) project registers its components inside `start`, so it gets
the scene once `start` has returned - the earliest point at which its
component types exist.

A load that fails is logged and not passed back: a missing or unreadable
scene must not stop a project from starting with its own scene.

## Module contents

### Structs
- [`StartupScene`](struct.StartupScene.md#rustdoc-item-7257) — A scene the front end asked the engine to load before the project starts.

### Functions
- [`apply_startup_scene`](fn.apply_startup_scene.md#rustdoc-item-8504) — Load the queued startup scene, if one was queued.
- [`load_startup_scene`](fn.load_startup_scene.md#rustdoc-item-8505) — Load the scene at `path` into `engine`, through the one scene loader every
- [`queue_startup_scene`](fn.queue_startup_scene.md#rustdoc-item-8503) — Ask for `path` to be loaded while the project starts, once its component
