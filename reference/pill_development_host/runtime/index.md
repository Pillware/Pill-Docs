<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3859"></a>

# Module `pill_development_host::runtime`

Visibility: `crate` · Source: `hosting\pill_development_host\src\runtime.rs:1`

The development host: `DevHost` and `RenderingHost`, with the functions
that set them up, run their frames and reload their modules.
The development host: it runs a project and its extensions as DLLs, and
reloads them while the game keeps running.

## Responsibilities

- Build and load the extensions and the project, and watch their sources.
- Reload, patch and roll back at each frame boundary, just before the
  wrapped [`pill_player::Runtime`] runs its frame ([`run_frame`](fn.run_frame.md#rustdoc-item-3921)).
- With `rendering`: load the renderer as a reloadable module, rebuild it
  when its data crate reloads, stop it while it would read a component
  layout it was not built against, and pass on every shader the watcher
  re-cooks ([`RenderingHost`](struct.RenderingHost.md#rustdoc-item-3930)).

## Design

Compiled only with `hot_reload`. The engine, its frame and the renderer's
window live in `pill_player`, which a shipping build runs directly. This
module adds what developing needs around them: [`DevHost`](struct.DevHost.md#rustdoc-item-3922) wraps the
runtime for the headless path, and [`RenderingHost`](struct.RenderingHost.md#rustdoc-item-3930) adds the renderer
module and the surfaces it draws on. Loading that differs per backend
stays behind [`LoadedProject`].

## Module contents

### Structs
- [`DevHost`](struct.DevHost.md#rustdoc-item-3922) — The headless development host.
- [`InFlightPatch`](struct.InFlightPatch.md#rustdoc-item-3910) — One patch build running on its own thread.
- [`PendingModule`](struct.PendingModule.md#rustdoc-item-3867) — An editor-only module whose tolerated first load failed.
- [`RenderingHost`](struct.RenderingHost.md#rustdoc-item-3930) — The development host with the engine renderer drawing on native surfaces.

### Enums
- [`PatchSubject`](enum.PatchSubject.md#rustdoc-item-4133) — Which session an in-flight patch build belongs to.
- [`PauseReason`](enum.PauseReason.md#rustdoc-item-3976) — Why a windowed host stopped rendering; see [`RenderingHost`]'s `paused`.
- [`RendererStep`](enum.RendererStep.md#rustdoc-item-4015) — What a renderer step did, for the pause decision.

### Functions
- [`advance_managed_build`](fn.advance_managed_build.md#rustdoc-item-4202) — Collect a finished C# assembly build and complete its reload at this frame
- [`advance_patch_attempt`](fn.advance_patch_attempt.md#rustdoc-item-4166) — Collect a finished patch build and install it at this frame boundary.
- [`apply_asset_changes`](fn.apply_asset_changes.md#rustdoc-item-4218) — Import or reimport every asset the watcher reported, through the world's
- [`apply_manager_settings_at_startup`](fn.apply_manager_settings_at_startup.md#rustdoc-item-4213) — Applies every manager's settings asset once the project has loaded, writing
- [`apply_manager_settings_changes`](fn.apply_manager_settings_changes.md#rustdoc-item-4214) — Re-applies the manager settings assets whose bytes changed, and every one of
- [`arm_patching_thread`](fn.arm_patching_thread.md#rustdoc-item-4129) — Arm the thread that owns the frame boundary as the only one allowed to
- [`assert_unique_owners`](fn.assert_unique_owners.md#rustdoc-item-4108) — Debug assertion: every entry of `subjects` names a distinct owner.
- [`attach_backend`](fn.attach_backend.md#rustdoc-item-4126) — Build a backend on `window_data` from the loaded renderer module.
- [`attach_renderer`](fn.attach_renderer.md#rustdoc-item-4127) — Complete rendering setup from an already-built [`DevHost`], attaching the
- [`attach_renderer_module`](fn.attach_renderer_module.md#rustdoc-item-4125) — Load the renderer module and attach it to `window`.
- [`component_schemas_of`](fn.component_schemas_of.md#rustdoc-item-4120) — The structural hash of every component the named extension registered,
- [`cook_project_shader_sources`](fn.cook_project_shader_sources.md#rustdoc-item-4109) — Cook every stale shader source under the project's asset directory, beside
- [`fail_setup`](fn.fail_setup.md#rustdoc-item-4114) — Report a setup failure, then tear the half-built host down world-first.
- [`fast_patching_allowed`](fn.fast_patching_allowed.md#rustdoc-item-4194) — Whether the patch fast path may run for this edit.
- [`finish_managed_build`](fn.finish_managed_build.md#rustdoc-item-4203) — Finish a managed reload whose assembly build reported.
- [`forget_prologue_records`](fn.forget_prologue_records.md#rustdoc-item-4128) — Forget the patch records a replaced image invalidated: the saved prologue
- [`guid_text`](fn.guid_text.md#rustdoc-item-4211) — A guid as its 32 hexadecimal digits, or `none` when the asset carries none
- [`index_project_assets`](fn.index_project_assets.md#rustdoc-item-4112) — Build the world's [`pill_engine::AssetDatabase`] from the project's asset
- [`log_manager_settings_applied`](fn.log_manager_settings_applied.md#rustdoc-item-4215) — Logs what one manager did with its settings document.
- [`log_manager_settings_failure`](fn.log_manager_settings_failure.md#rustdoc-item-4217) — Logs a settings asset that could not be read, is not the manager's type, or
- [`module_mirror_ownership`](fn.module_mirror_ownership.md#rustdoc-item-4201) — The components each loaded module's mirror file carries, by first-claim
- [`note_managed_swap`](fn.note_managed_swap.md#rustdoc-item-4204) — Everything a replaced managed assembly invalidates, whichever site saw the
- [`optional_failure_output`](fn.optional_failure_output.md#rustdoc-item-4115) — The text a tolerated first-load failure reports to the notice queue. It is
- [`patch_attempt_in_flight`](fn.patch_attempt_in_flight.md#rustdoc-item-4193) — Whether a patch build is running on its own thread right now.
- [`patch_targets`](fn.patch_targets.md#rustdoc-item-4223) — Every loaded artifact a plain-function patch must be offered to.
- [`pause_after_boundary`](fn.pause_after_boundary.md#rustdoc-item-4119) — Whether rendering should be paused after one frame boundary.
- [`peer_component_names`](fn.peer_component_names.md#rustdoc-item-4205) — Every component type name the live subjects other than
- [`previous_patch_generation`](fn.previous_patch_generation.md#rustdoc-item-4220) — The generation a rollback naming `previous` resolves to for `function`.
- [`print_patch_generations`](fn.print_patch_generations.md#rustdoc-item-4222) — Print every generation this session has installed.
- [`print_startup_configuration`](fn.print_startup_configuration.md#rustdoc-item-4225) — Print the selected backend before any build output starts streaming.
- [`process_patch_faults`](fn.process_patch_faults.md#rustdoc-item-4221) — Roll back a function whose patched body kept panicking.
- [`process_rollback_request`](fn.process_rollback_request.md#rustdoc-item-4219) — Honour a pending request, if one was dropped.
- [`regenerate_module_csharp_mirror`](fn.regenerate_module_csharp_mirror.md#rustdoc-item-4200) — Rewrite one extension's `generated/<module>_Components.g.cs` mirror file
- [`report_patch_outcome`](fn.report_patch_outcome.md#rustdoc-item-4224) — Report one patch attempt, and say whether it fully handled the change.
- [`report_setup_failure`](fn.report_setup_failure.md#rustdoc-item-4113) — Report a setup failure and hand the error back to the caller.
- [`resync_patch_baselines`](fn.resync_patch_baselines.md#rustdoc-item-4197) — Take a new baseline snapshot for every subject a reload has just rebuilt.
- [`run_frame`](fn.run_frame.md#rustdoc-item-3921) — Process hot reloads, execute one scheduler frame, and log the frame
- [`run_frame_phase`](fn.run_frame_phase.md#rustdoc-item-4208) — One scheduler frame and its reporting, run by the wrapped runtime.
- [`run_reload_phase`](fn.run_reload_phase.md#rustdoc-item-4209) — Everything reloading does at a frame boundary, before any system runs:
- [`run_reload_steps`](fn.run_reload_steps.md#rustdoc-item-4206) — Run every reload step of one frame. That covers the extensions' own
- [`scan_project_assets`](fn.scan_project_assets.md#rustdoc-item-4110) — Import every known source under `asset_directory` through the world's
- [`setup`](fn.setup.md#rustdoc-item-4116) — Builds and loads every module, creates the engine, and starts the source
- [`setup_rendering`](fn.setup_rendering.md#rustdoc-item-4118) — Sets up the engine, project module, hot reload, and renderer together.
- [`start_asset_watcher`](fn.start_asset_watcher.md#rustdoc-item-4210) — Start watching the project's asset directory, or `None` when there is none
- [`start_patch_build`](fn.start_patch_build.md#rustdoc-item-4192) — Start a patch build on its own thread.
- [`start_project_shader_watcher`](fn.start_project_shader_watcher.md#rustdoc-item-4124) — Start watching the project's own shader sources.
- [`start_shader_watcher`](fn.start_shader_watcher.md#rustdoc-item-4122) — Start watching the renderer data crate's shader sources, when the host has
- [`suspend_stale_subjects`](fn.suspend_stale_subjects.md#rustdoc-item-4207) — Suspend the systems of every subject built against a shared component
- [`try_module_fast_path`](fn.try_module_fast_path.md#rustdoc-item-4195) — Try to deliver every pending extension edit by patching, not rebuilding.
- [`try_project_fast_path`](fn.try_project_fast_path.md#rustdoc-item-4196) — Try to deliver a pending project edit by patching, not rebuilding.
- [`unsupported_render_components`](fn.unsupported_render_components.md#rustdoc-item-4121) — The components of `world` that at least one entity carries, that

### Type aliases
- [`RegeneratedMirror`](type.RegeneratedMirror.md#rustdoc-item-4198) — What `regenerate_module_csharp_mirror` hands back. It carries the exposed
- [`RendererModule`](type.RendererModule.md#rustdoc-item-4123) — The renderer module a windowed host loads: the extension slot it lives in.
- [`ShaderChangedFunction`](type.ShaderChangedFunction.md#rustdoc-item-3862) — Signature of [`SHADER_CHANGED_EXPORT`]: the world, the re-cooked file's

### Constants
- [`ROLLBACK_REQUEST_FILE`](constant.ROLLBACK_REQUEST_FILE.md#rustdoc-item-3861) — File a developer or a script drops to drive live patching, relative to the
- [`SHADER_CHANGE_REFUSED`](constant.SHADER_CHANGE_REFUSED.md#rustdoc-item-3860) — What [`SHADER_CHANGED_EXPORT`] returns when it could not look at the assets
- [`SHADER_CHANGED_EXPORT`](constant.SHADER_CHANGED_EXPORT.md#rustdoc-item-3858) — The renderer data crate's development shader reload export; see
