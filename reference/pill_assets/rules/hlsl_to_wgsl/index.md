<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1"></a>

# Module `pill_assets::rules::hlsl_to_wgsl`

Visibility: `{'restricted': {'parent': 80, 'path': '::rules'}}` · Source: `assets\pill_assets\src\rules\hlsl_to_wgsl.rs:1`

HLSL/Slang source in, WGSL out, through the `slangc` CLI.

## Responsibilities

- Compile every HLSL stage source the root holds, under `shaders/` or flat.
- Infer the stage and entry point from the file name, refusing any name that
  does not declare one.
- Resolve the compiler to an explicit path, from `PILL_SLANGC` or `PATH`,
  and refuse one that resolves inside the working directory.
- Kill a compiler that outlives the cook's bound, so one hung `slangc`
  cannot block every crate built after it.
- Report `slangc`'s own diagnostics when a compile fails.

## Module contents

### Structs
- [`HlslToWgsl`](struct.HlslToWgsl.md#rustdoc-item-13) — Compiles HLSL sources to WGSL beside the source through `slangc`.

### Functions
- [`check_compiler_candidate`](fn.check_compiler_candidate.md#rustdoc-item-77) — Returns `Ok` when a cook may run `candidate`, and `Err` with the reason it
- [`entry_and_stage_for`](fn.entry_and_stage_for.md#rustdoc-item-79) — The entry point and stage `file` declares through its name.
- [`resolve_slangc`](fn.resolve_slangc.md#rustdoc-item-74) — The same resolution as [`slangc_path`], over values the caller supplies.
- [`run_bounded_command`](fn.run_bounded_command.md#rustdoc-item-69) — Runs `command` to completion, killing it once `timeout` has passed.
- [`slangc_path`](fn.slangc_path.md#rustdoc-item-73) — The `slangc` a cook may run.

### Constants
- [`SLANGC_ENV`](constant.SLANGC_ENV.md#rustdoc-item-0) — The environment variable that names the compiler a cook runs, instead of
- [`SLANGC_EXECUTABLE`](constant.SLANGC_EXECUTABLE.md#rustdoc-item-2) — The compiler's file name on this platform.
- [`SLANGC_POLL_INTERVAL`](constant.SLANGC_POLL_INTERVAL.md#rustdoc-item-5) — How often a running `slangc` is checked for having finished.
- [`SLANGC_TIMEOUT`](constant.SLANGC_TIMEOUT.md#rustdoc-item-3) — How long one `slangc` run may take before the cook kills it.
