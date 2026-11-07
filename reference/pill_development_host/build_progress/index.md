<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-477"></a>

# Module `pill_development_host::build_progress`

Visibility: `crate` · Source: `hosting\pill_development_host\src\build_progress.rs:1`

The startup build plan: logs the modules a start will build, then counts
each build as it begins.
The startup build plan: which modules a start builds, announced up front
and counted as each build starts.

## Responsibilities

- Log that hot reloading of a project is starting, with the numbered list
  of modules the host is about to build, as one multi-line entry
  ([`announce_plan`]).
- Log `module build started` with the module and its `step` of `steps`
  when one of those builds begins ([`announce_build`]), once per module.

## Design

The plan lives in one global because the start records it in `setup` and
the builds that report against it run elsewhere: the extensions and the
project build during `setup`, while the renderer's GPU module builds only
once a window opens. A build of a module that is not in the plan, or no
longer in it (any reload), is not announced here; its caller logs it.

## Module contents

### Structs
- [`BuildPlan`](struct.BuildPlan.md#rustdoc-item-476) — The builds a start announced and that have not started yet, plus the
- [`PlannedBuild`](struct.PlannedBuild.md#rustdoc-item-480) — One module the startup will build, and what kind of module it is.

### Functions
- [`announce_build`](fn.announce_build.md#rustdoc-item-518) — Logs that the build of `module` is starting, if that build belongs to the
- [`announce_plan`](fn.announce_plan.md#rustdoc-item-474) — Records the startup build plan and logs it as one multi-line entry.
- [`render_plan`](fn.render_plan.md#rustdoc-item-542) — Builds the message [`announce_plan`] logs: a heading and the numbered

### Statics
- [`STARTUP_BUILD_PLAN`](static.STARTUP_BUILD_PLAN.md#rustdoc-item-475) — The plan for the current start. It is `None` until [`announce_plan`]
