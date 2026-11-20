<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-546"></a>

# Module `pill_development_host::build_runner`

Visibility: `crate` · Source: `hosting\pill_development_host\src\build_runner.rs:1`

Build commands for the project and its extensions, artifact staging and
output-path resolution.
Build execution, artifact staging and output-path resolution.

Build output reaches the host's standard streams, so compiler progress and
diagnostics stay visible in the terminal that launched the host.

## Responsibilities

- Run each backend's build command from the workspace root.
- Find the artifact each backend is expected to produce.
- Copy built artifacts into a private hot-load directory and stamp them, so
  a later process can tell them from the output of another build.
- Check that an artifact exists before the host tries to load it.

## Design

[`run_build_command`] treats a build as an opaque process: it does not read
the compiler's output and decides success from the child's exit status
alone. Cancellation works by agreement: a newer source save increases a
generation counter, and the watchdog loop stops the child - and the
[`BuildProcessTree`] it started - when it sees the counter change. The
startup batch ([`build_extension_batch`]) builds every module with one cargo
command, and each module then takes its share through
[`take_batch_validation`].

## Module contents

### Structs
- [`BatchValidation`](struct.BatchValidation.md#rustdoc-item-785) — What one startup batch invocation validated, and when it finished.
- [`BuildProcessTree`](struct.BuildProcessTree.md#rustdoc-item-632) — A build's whole process tree, on platforms that provide one.
- [`JobObjectBasicAccountingInformation`](struct.JobObjectBasicAccountingInformation.md#rustdoc-item-736) — `JOBOBJECT_BASIC_ACCOUNTING_INFORMATION`; the drain wait polls its
- [`JobObjectBasicLimitInformation`](struct.JobObjectBasicLimitInformation.md#rustdoc-item-674) — `JOBOBJECT_BASIC_LIMIT_INFORMATION`, the limits part of the job's extended
- [`JobObjectExtendedLimitInformation`](struct.JobObjectExtendedLimitInformation.md#rustdoc-item-704) — `JOBOBJECT_EXTENDED_LIMIT_INFORMATION`, the memory layout that the
- [`VerboseCapture`](struct.VerboseCapture.md#rustdoc-item-596) — Harvests the module crate's `rustc` invocation out of a build the host was

### Functions
- [`apply_cargo_host_overrides`](fn.apply_cargo_host_overrides.md#rustdoc-item-583) — Applies the environment and argument overrides that every host-spawned
- [`artifact_stamp`](fn.artifact_stamp.md#rustdoc-item-576) — Describes the artifacts a build produced, together with the host identity,
- [`artifact_stamp_path`](fn.artifact_stamp_path.md#rustdoc-item-574) — Path of the stamp recording what the host built for one module.
- [`artifacts_are_host_built`](fn.artifacts_are_host_built.md#rustdoc-item-578) — Checks whether the artifacts on disk are the ones this host built with this
- [`AssignProcessToJobObject`](fn.AssignProcessToJobObject.md#rustdoc-item-548)
- [`begin_build_output`](fn.begin_build_output.md#rustdoc-item-556) — Resets the ring buffer for one build and writes its name as the first line.
- [`build_csharp_compiler`](fn.build_csharp_compiler.md#rustdoc-item-768) — Builds the managed assembly that compiles C# projects in-process.
- [`build_extension`](fn.build_extension.md#rustdoc-item-820) — Builds one extension and returns the artifact the host loads.
- [`build_extension_batch`](fn.build_extension_batch.md#rustdoc-item-816) — Builds every module of the startup plan in one cargo invocation.
- [`build_project_module`](fn.build_project_module.md#rustdoc-item-770) — Builds the selected project module and returns the artifact the host loads.
- [`cargo_module_output_subdirectory`](fn.cargo_module_output_subdirectory.md#rustdoc-item-572) — The directory, relative to the workspace root, where a host-spawned build
- [`CloseHandle`](fn.CloseHandle.md#rustdoc-item-552)
- [`collect_member_manifests`](fn.collect_member_manifests.md#rustdoc-item-591) — Adds the candidate `Cargo.toml` path of every directory below `directory`,
- [`confirm_staged_artifacts`](fn.confirm_staged_artifacts.md#rustdoc-item-580) — Confirms that a staged artifact set still matches the stamp just written for
- [`create_process_tree`](fn.create_process_tree.md#rustdoc-item-760) — Creates the process tree for a build that is about to be spawned.
- [`CreateJobObjectW`](fn.CreateJobObjectW.md#rustdoc-item-544)
- [`current_build_info`](fn.current_build_info.md#rustdoc-item-573) — The running host's toolchain version line followed by
- [`declared_features`](fn.declared_features.md#rustdoc-item-588) — Returns the feature names the package declares, read from its manifest among
- [`forget_batch_validation`](fn.forget_batch_validation.md#rustdoc-item-818) — Drops `module_name`'s batch token, so its next load builds instead of
- [`host_anchor_package`](fn.host_anchor_package.md#rustdoc-item-585) — Returns the running host's workspace package name, which an anchored build
- [`host_build_identity`](fn.host_build_identity.md#rustdoc-item-569) — The host's build identity: feature set, cargo profile, target, and the
- [`host_engine_features`](fn.host_engine_features.md#rustdoc-item-570) — The engine features every host-spawned build must copy from the running
- [`host_posture_features`](fn.host_posture_features.md#rustdoc-item-587) — Returns the frontend features the running host was built with.
- [`is_editor_anchor`](fn.is_editor_anchor.md#rustdoc-item-586) — Checks whether an executable's package is an editor anchor: the Dioxus
- [`is_generated_member_rlib`](fn.is_generated_member_rlib.md#rustdoc-item-779) — Checks whether a `deps` filename is the rlib of a host-generated member
- [`is_shared_slot_rlib`](fn.is_shared_slot_rlib.md#rustdoc-item-778) — Checks whether a `deps` filename is a shared per-crate slot rather than a
- [`is_verbose_only_line`](fn.is_verbose_only_line.md#rustdoc-item-625) — Checks whether a line exists only because the build was asked for `-v`.
- [`join_process_tree`](fn.join_process_tree.md#rustdoc-item-761) — Adds a freshly spawned child to its build's process tree.
- [`native_library_filename`](fn.native_library_filename.md#rustdoc-item-821) — Returns the platform-specific file name of a native library.
- [`newest_extension_rlib`](fn.newest_extension_rlib.md#rustdoc-item-775) — Returns the newest rlib cargo wrote for `package_name` into
- [`OpenProcess`](fn.OpenProcess.md#rustdoc-item-551)
- [`push_build_output`](fn.push_build_output.md#rustdoc-item-557) — Adds one stderr line to the ring buffer, dropping the oldest line once the
- [`QueryInformationJobObject`](fn.QueryInformationJobObject.md#rustdoc-item-550)
- [`read_declared_features`](fn.read_declared_features.md#rustdoc-item-590) — Reads a package's declared features without caching them, for
- [`recent_build_output`](fn.recent_build_output.md#rustdoc-item-558) — Returns everything in the ring buffer, oldest line first: what the last
- [`record_artifact_stamp`](fn.record_artifact_stamp.md#rustdoc-item-577) — Records that the host itself produced these artifacts with this command.
- [`run_build_command`](fn.run_build_command.md#rustdoc-item-763) — Runs one module's build command to completion.
- [`SetInformationJobObject`](fn.SetInformationJobObject.md#rustdoc-item-547)
- [`source_newer_than`](fn.source_newer_than.md#rustdoc-item-819) — Checks whether any entry under `directory` was modified after
- [`stage_artifact`](fn.stage_artifact.md#rustdoc-item-772) — Copies one freshly built artifact into its private hot-load location.
- [`stage_build_outputs`](fn.stage_build_outputs.md#rustdoc-item-769) — Copies everything one build produced into the host's private hot-load paths.
- [`stage_engine_dylib`](fn.stage_engine_dylib.md#rustdoc-item-774) — Copies the module-world engine dylibs beside the hot-load copies.
- [`stage_shared_dependency_rlibs`](fn.stage_shared_dependency_rlibs.md#rustdoc-item-777) — Copies every shared per-crate rlib out of cargo's `deps` directory.
- [`staged_copy_is_current`](fn.staged_copy_is_current.md#rustdoc-item-780) — Checks whether a staged copy already matches its source.
- [`stop_process_tree`](fn.stop_process_tree.md#rustdoc-item-762) — Stops a build and its whole process tree.
- [`take_batch_validation`](fn.take_batch_validation.md#rustdoc-item-815) — Checks whether the startup batch already validated `module_name`'s artifact.
- [`tee_stderr`](fn.tee_stderr.md#rustdoc-item-559) — Reads `child`'s piped stderr on its own thread and copies every line to the
- [`TerminateJobObject`](fn.TerminateJobObject.md#rustdoc-item-549)
- [`with_batch_validation`](fn.with_batch_validation.md#rustdoc-item-813) — Runs `callback` with exclusive access to the batch validation state.
- [`with_compiler_argument_capture`](fn.with_compiler_argument_capture.md#rustdoc-item-765) — Adds the compiler-command-line capture to a managed project's build.
- [`without_ansi`](fn.without_ansi.md#rustdoc-item-626) — Returns the line with every ANSI escape sequence removed.

### Constants
- [`ARTIFACT_STAMP_DIRECTORY`](constant.ARTIFACT_STAMP_DIRECTORY.md#rustdoc-item-567) — Directory holding one stamp per module, recording what the host built.
- [`BUILD_OUTPUT_LINES`](constant.BUILD_OUTPUT_LINES.md#rustdoc-item-555) — How many stderr lines the ring buffer keeps.
- [`BUILD_TIMEOUT`](constant.BUILD_TIMEOUT.md#rustdoc-item-562) — Longest time one module's build command may run.
- [`HOST_MODULE_FEATURE_SET`](constant.HOST_MODULE_FEATURE_SET.md#rustdoc-item-568) — The host's feature set, which module builds must reproduce.
- [`HOST_PROFILING_FEATURE_SET`](constant.HOST_PROFILING_FEATURE_SET.md#rustdoc-item-571) — The host's profiling level.
- [`JOB_OBJECT_BASIC_ACCOUNTING_INFORMATION`](constant.JOB_OBJECT_BASIC_ACCOUNTING_INFORMATION.md#rustdoc-item-630) — `JobObjectBasicAccountingInformation`, the information class that reports
- [`JOB_OBJECT_EXTENDED_LIMIT_INFORMATION`](constant.JOB_OBJECT_EXTENDED_LIMIT_INFORMATION.md#rustdoc-item-629) — `JobObjectExtendedLimitInformation`, the information class used to set the
- [`JOB_OBJECT_LIMIT_KILL_ON_JOB_CLOSE`](constant.JOB_OBJECT_LIMIT_KILL_ON_JOB_CLOSE.md#rustdoc-item-628) — `JOB_OBJECT_LIMIT_KILL_ON_JOB_CLOSE`: closing the job's last handle kills
- [`MEMBER_SEARCH_DEPTH`](constant.MEMBER_SEARCH_DEPTH.md#rustdoc-item-582) — How many directory levels below the workspace root a member manifest can
- [`PROJECT_HOT_OUTPUT_SUBDIRECTORY`](constant.PROJECT_HOT_OUTPUT_SUBDIRECTORY.md#rustdoc-item-566) — Private directory the host copies the project's loadable artifacts into.
- [`STAGED_DEPENDENCY_SUBDIRECTORY`](constant.STAGED_DEPENDENCY_SUBDIRECTORY.md#rustdoc-item-776) — The directory where the shared per-crate dependency rlibs are staged for
- [`STARTUP_BATCH_TIMEOUT`](constant.STARTUP_BATCH_TIMEOUT.md#rustdoc-item-564) — Longest time the startup batch may run.
- [`TREE_DRAIN_TIMEOUT`](constant.TREE_DRAIN_TIMEOUT.md#rustdoc-item-627) — How long a stopped build's process tree gets to disappear.
- [`WATCHDOG_POLL_INTERVAL`](constant.WATCHDOG_POLL_INTERVAL.md#rustdoc-item-565) — How often the watchdog looks for build completion or cancellation.

### Statics
- [`BATCH_VALIDATION`](static.BATCH_VALIDATION.md#rustdoc-item-811) — One startup batch invocation's validation, consumed per module.
- [`BUILD_OUTPUT`](static.BUILD_OUTPUT.md#rustdoc-item-553) — The last lines the most recent build wrote to stderr, for the editor's
