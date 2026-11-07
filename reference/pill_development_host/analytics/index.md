<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1"></a>

# Module `pill_development_host::analytics`

Visibility: `crate` · Source: `hosting\pill_development_host\src\analytics.rs:1`

Collects build, load and reload measurements and prints them as console
reports.

Its measurements come from the build, load and reload pipeline, so a
statically linked build has nothing to report.
Build, link and hot-reload analytics. An in-process collector times each
phase of the pipeline (compile, stage, load, init, migrate) and prints a
report to the host console.

## Responsibilities

- Time each module's build command, staging copy, DLL load, registration
  and schema migration.
- Measure the memory used by the host process and by the cargo child
  process, both current and peak.
- Inspect each loaded DLL: its file size, its image size and the DLLs it
  imports.
- Read each module's direct cargo dependencies from the `.fingerprint`
  JSON.
- Read cargo's `--timings` HTML for the compile and link time of each
  crate.
- Print one full report at startup and one short line per hot reload.

## Design

The collector is process-wide because the build pipeline is spread over
several modules (`build_runner`, `native_library`, `reload`, `runtime`)
and no single one sees the whole transaction. Entries are keyed by module
name, which is unique across the project and its extensions. Everything
here is best-effort: a missing DLL, an image that cannot be parsed or an
absent cargo-timings report shows as `-` in the report and never fails
the build.

## Module contents

### Structs
- [`Analytics`](struct.Analytics.md#rustdoc-item-395) — Process-wide analytics state, guarded because builds record from worker
- [`CargoTiming`](struct.CargoTiming.md#rustdoc-item-165) — Per-crate compile+link wall time from the newest cargo `--timings` report.
- [`ModuleAnalytics`](struct.ModuleAnalytics.md#rustdoc-item-204) — One module's cumulative analytics across startup and every reload.
- [`PatchFallback`](struct.PatchFallback.md#rustdoc-item-355) — Why one change fell back to a full reload instead of patching.
- [`PeImport`](struct.PeImport.md#rustdoc-item-106) — One imported DLL and the function names the image needs from it.
- [`PeInspection`](struct.PeInspection.md#rustdoc-item-134) — The parts of a Windows PE header that this report uses.
- [`ReloadEvent`](struct.ReloadEvent.md#rustdoc-item-326) — A snapshot of one completed hot reload, printed once the frame's reloads
- [`ReportColumn`](struct.ReportColumn.md#rustdoc-item-442) — One column of the startup table. It holds the header, the alignment, one

### Enums
- [`EventKind`](enum.EventKind.md#rustdoc-item-232) — How a generation of code reached the running process.
- [`ModuleKind`](enum.ModuleKind.md#rustdoc-item-9) — Which pipeline a module belongs to. It is shown in the report's `kind`
- [`PatchRoute`](enum.PatchRoute.md#rustdoc-item-276) — Which of the three mechanisms delivered a patch.

### Functions
- [`analytics`](fn.analytics.md#rustdoc-item-419) — The process-wide collector, initialized on first use.
- [`cargo_fingerprint_directory`](fn.cargo_fingerprint_directory.md#rustdoc-item-6) — The folder, relative to the workspace root, where cargo writes each
- [`cargo_timings_directory`](fn.cargo_timings_directory.md#rustdoc-item-4) — The folder, relative to the workspace root, where cargo writes its
- [`drain_reload_events`](fn.drain_reload_events.md#rustdoc-item-473) — Take and clear the pending reload events for the current frame.
- [`find_or_create`](fn.find_or_create.md#rustdoc-item-422) — Find a module's entry by name, creating it on first use.
- [`format_bytes`](fn.format_bytes.md#rustdoc-item-434) — Format a byte count as a compact human-readable string.
- [`format_ms`](fn.format_ms.md#rustdoc-item-435) — Format a millisecond count as a compact human-readable string.
- [`inspect_pe`](fn.inspect_pe.md#rustdoc-item-158) — Read a Windows PE file's import and export tables and its image size.
- [`linked_libraries`](fn.linked_libraries.md#rustdoc-item-470) — Split a module's imports into the names worth showing and a count of the
- [`module_build_ms`](fn.module_build_ms.md#rustdoc-item-425) — The last cargo build wall time recorded for `name`, if there is one.
- [`parse_latest_cargo_timings`](fn.parse_latest_cargo_timings.md#rustdoc-item-189) — Read the newest `.html` report under the build tree's `cargo-timings`
- [`patch_tally_lines`](fn.patch_tally_lines.md#rustdoc-item-432) — Formats the running patch, refusal and failure tally as report lines.
- [`print_reload_events`](fn.print_reload_events.md#rustdoc-item-472) — Log one line per completed hot reload and a summary of the whole
- [`print_startup_report`](fn.print_startup_report.md#rustdoc-item-437) — Print the full startup analytics report.
- [`process_memory`](fn.process_memory.md#rustdoc-item-161) — Current and peak working set (resident set) of a process, in bytes.
- [`read_cargo_deps`](fn.read_cargo_deps.md#rustdoc-item-190) — Read a crate's direct dependencies from its fingerprint JSON.
- [`record_build_command`](fn.record_build_command.md#rustdoc-item-423) — Record the wall time and peak memory of one cargo invocation.
- [`record_host_memory`](fn.record_host_memory.md#rustdoc-item-433) — Record the host process's current and peak memory (called at setup end).
- [`record_init`](fn.record_init.md#rustdoc-item-426) — Record the registration (`init`) time of one module.
- [`record_load`](fn.record_load.md#rustdoc-item-424) — Record the DLL mapping time of one module.
- [`record_migrate`](fn.record_migrate.md#rustdoc-item-427) — Record the schema-migration time of one module reload.
- [`record_module_artifact`](fn.record_module_artifact.md#rustdoc-item-421) — Record the outcome of one module's build and stage step.
- [`record_patch`](fn.record_patch.md#rustdoc-item-428) — Record one function patch in the same shape as a module reload.
- [`record_patch_failure`](fn.record_patch_failure.md#rustdoc-item-430) — Record that a patch was attempted and failed, keeping the previous code.
- [`record_patch_refusal`](fn.record_patch_refusal.md#rustdoc-item-429) — Record that the fast path declined a change and fell through to a reload.
- [`record_reload`](fn.record_reload.md#rustdoc-item-383) — Record a completed hot reload and queue its report entry.
- [`remember_fallback`](fn.remember_fallback.md#rustdoc-item-431) — Add one fallback reason to the tally, counting a repeat instead of adding a
- [`render_startup_report`](fn.render_startup_report.md#rustdoc-item-436) — Render the startup report as one multi-line log message ([`log_block_colored`]):
- [`wrap_list`](fn.wrap_list.md#rustdoc-item-471) — Join the names with `, ` into lines of at most `width` characters, never

### Constants
- [`MAX_FALLBACK_DETAIL_CHARS`](constant.MAX_FALLBACK_DETAIL_CHARS.md#rustdoc-item-2) — How much of one explanation is kept. Compiler errors can run long, and this
- [`MAX_TRACKED_FALLBACK_REASONS`](constant.MAX_TRACKED_FALLBACK_REASONS.md#rustdoc-item-0) — How many distinct fallback reasons the tally remembers.
