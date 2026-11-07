<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4005"></a>

# Module `pill_engine_core::diagnostics`

Source: `engine\pill_engine_core\src\diagnostics.rs:1`

A periodic report of ECS state, switched on with
`Engine::set_ecs_diagnostics_interval` and printed at that interval.
Periodic ECS state report, opt-in through
[`Engine::set_ecs_diagnostics_interval`](../engine/struct.Engine.md#rustdoc-item-4000).

## Responsibilities

- Gather a snapshot of world state: entities, archetypes, columns, the
  component registry and resources.
- Render it as a fixed-width block for the periodic system to log.
- Supply the system name and the default interval a project registers the
  report with.

## Design

Nothing is registered while the engine is built: the setter is the only
call that registers the report. It runs as a normal scheduler system, so it
appears in the system list, has an owner like every other system, and can
be switched off. The setter registers it through
[`register_system_with_access`](../engine/struct.Engine.md#rustdoc-item-4105)
with an access that declares it uses commands. That declaration makes the
system conflict with every other one, so the scheduler never puts it in a
parallel batch. This matters because the report reads the whole world, and
no [`SystemParam`](../system/trait.SystemParam.md#rustdoc-item-2656) can describe that read.

Its owner, [`SystemOwner::ENGINE`](../engine/struct.SystemOwner.md#rustdoc-item-4106), is one no
reload path clears, so the report survives project and module reloads. It
cannot see `pill_development_host`'s reload graveyard, where retired images
stay mapped while their rows migrate, so the recycled entity ID count and
the empty archetype count are the signs of a reload it can show.

## Module contents

### Structs
- [`ArchetypeReport`](struct.ArchetypeReport.md#rustdoc-item-4037) — One archetype's contribution to the report.
- [`ColumnReport`](struct.ColumnReport.md#rustdoc-item-4009) — One component column stored in one archetype.
- [`EcsSnapshot`](struct.EcsSnapshot.md#rustdoc-item-4077) — Everything the report shows, gathered in one pass over the world.

### Functions
- [`format_bytes`](fn.format_bytes.md#rustdoc-item-4104) — Formats a byte count with a unit, so a column total reads at a glance.

### Constants
- [`DEFAULT_REPORT_INTERVAL`](constant.DEFAULT_REPORT_INTERVAL.md#rustdoc-item-4001) — How often the report prints when a project turns it on.
- [`SYSTEM_NAME`](constant.SYSTEM_NAME.md#rustdoc-item-4003) — The name the report system is registered under.
