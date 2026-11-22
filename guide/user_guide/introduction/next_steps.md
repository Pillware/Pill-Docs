# Next steps

## Summary

The quick start leaves you with a spinning cube. This page points at what to read next: how that cube is put together, how a hot reload works, how to run the editor, and how to build a project you can ship.

## How does the cube project work?

[Overview](overview.md) takes the cube apart: the project folder and its files, the assets it loads, the entities and components in the scene, the resource it registers, and the ECS system that spins the cube every update. Read it before the concept pages - everything they describe appears in that one small project.

Each building block then has its own page:

- [Entities](../concepts/entities.md) - one object in the world.
- [Components](../concepts/components.md) - the data attached to an entity.
- [ECS systems](../concepts/systems.md) - the functions that run every update.
- [Resources](../concepts/resources.md) - single values that belong to the whole world.
- [Assets](../concepts/assets.md) - meshes, materials and every other file the project loads.
- [Commands](../concepts/commands.md) - creating and destroying entities from inside an ECS system.

## How do I watch a hot reload happen?

When you save a change to a module's source, the engine rebuilds that module and swaps it in while the project keeps running. In the cube example, `SPIN_RATES_RADIANS_PER_SECOND` in `examples/cube/cube_rust/src/lib.rs` sets how fast each axis turns: change the numbers, save, and the cube changes speed without the window closing. Your entities and their components stay where they were - [Entities](../concepts/entities.md) explains why.

[Hot reloading](../../engine_guide/levels/hosting/hot_reloading.md) describes what the host does with the running project during the swap.

## How do I see my project while it runs?

The editor runs in development mode and shows the scene while your code reloads. [Editor](../editor/editor.md) explains how to start it, how it finds your project, and where it keeps its settings. The editor is a development tool, so it is never part of a shipped project.

## How do I build something I can ship?

[Build configurations](../advanced/build_configurations.md) covers the four axes every build picks one value on - development or shipping mode, the Rust compiler profile, headless or windowed, and the .NET configuration - and the commands for shipping and browser builds.

## What else can I run?

The repository's `examples/` folder holds the tracked examples: the cube with its mesh and material as files, the same cube from one OBJ file with its material built in code, the headless simulation, and the `pills` field. Each one comes in Rust and in C#.

## Where do I go when something goes wrong?

[Help](../help/help.md) lists the problems people hit first, and [Discord](https://discord.gg/VUKNQrctms) is the place to ask about anything else.
