<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-823"></a>

# Module `pill_development_host::config`

Visibility: `crate` · Source: `hosting\pill_development_host\src\config.rs:1`

Project and extension configuration shared by every host frontend.
Project and extension configuration shared by every host frontend.

## Responsibilities

- Describes how the project module and each extension are built, watched
  and loaded.
- Reads the configuration from `PROJECT_PATH` and the project's own
  `project_settings.yaml`: backend, extensions, renderer, assets, logging
  and startup scene.
- Finds the renderer's two crates and an editor host's editor crates, and
  writes the generated workspace members that build the project and each
  extension crate.
- Reads the editor-only `editor_settings.yaml`.
- Copies the host's cargo profile, target triple and dioxus-CLI wrapper
  onto every build the host starts.

## Design

[`ProjectModuleConfig`](struct.ProjectModuleConfig.md#rustdoc-item-766) holds the project module's values, and [`HostConfig`](struct.HostConfig.md#rustdoc-item-954)
adds the extension list and the switches that select the editor posture.
The backend (native Rust or managed C#) comes from the manifest in the
project directory (`Cargo.toml` or `*.csproj`). Every path, command and
assembly name is derived from that manifest, so no project identity is
compiled into the host binary. A missing or unreadable project fails at
once with a [`ConfigError`] that names the offending path.

## Module contents

### Structs
- [`EditorSettings`](struct.EditorSettings.md#rustdoc-item-1155) — What `editor_settings.yaml` selected for the editor.
- [`EditorSettingsFile`](struct.EditorSettingsFile.md#rustdoc-item-1194) — Values declared by the project's own `editor_settings.yaml`.
- [`ExtensionConfig`](struct.ExtensionConfig.md#rustdoc-item-817) — Build, watch and load description for one extension.
- [`ExtensionCrateLocation`](struct.ExtensionCrateLocation.md#rustdoc-item-967) — Where one extension crate lives under `extensions/`, as its manifest
- [`HostConfig`](struct.HostConfig.md#rustdoc-item-954) — Complete host configuration: the project module plus every extension
- [`ProjectAssetSettings`](struct.ProjectAssetSettings.md#rustdoc-item-1011) — The `assets:` section of `project_settings.yaml`.
- [`ProjectLoggingSettings`](struct.ProjectLoggingSettings.md#rustdoc-item-1111) — The `logging:` section of `project_settings.yaml`, as written.
- [`ProjectModuleConfig`](struct.ProjectModuleConfig.md#rustdoc-item-766) — Configuration for a hot-reloadable project module.
- [`ProjectSettingsFile`](struct.ProjectSettingsFile.md#rustdoc-item-1236) — Values declared by the project's own `project_settings.yaml`.

### Enums
- [`ProjectModuleBackend`](enum.ProjectModuleBackend.md#rustdoc-item-871) — Backend-specific output information for a hot-reloadable project module.

### Functions
- [`absolute_manifest_path`](fn.absolute_manifest_path.md#rustdoc-item-1349) — Resolves one manifest `path` value against the project root and leaves an
- [`canonicalize_plain`](fn.canonicalize_plain.md#rustdoc-item-1272) — Canonicalize a path without the Windows `\\?\` verbatim prefix.
- [`cargo_timings_enabled`](fn.cargo_timings_enabled.md#rustdoc-item-1280) — Whether host-driven cargo builds should emit a timing report.
- [`csharp_build_configuration`](fn.csharp_build_configuration.md#rustdoc-item-1281) — MSBuild configuration the managed project is built in, from
- [`declared_editor_frontend`](fn.declared_editor_frontend.md#rustdoc-item-1354) — The editor frontend a crate's manifest tags itself for, if any.
- [`declared_package_name`](fn.declared_package_name.md#rustdoc-item-1345) — The package name `directory/Cargo.toml` declares, or `None` when the
- [`declares_dependency`](fn.declares_dependency.md#rustdoc-item-1291) — Whether one dependency table declares `crate_name`, directly or as the
- [`dioxus_executable_path`](fn.dioxus_executable_path.md#rustdoc-item-851) — Canonical path of the `dx` executable that launched this host, if any.
- [`dioxus_wrapper_args_directory`](fn.dioxus_wrapper_args_directory.md#rustdoc-item-1274) — Directory dx's wrapper writes captured member rustc invocations into.
- [`engine_workspace_root`](fn.engine_workspace_root.md#rustdoc-item-1282) — Directory holding the engine workspace: the base every stored relative path
- [`extension_crate_directory`](fn.extension_crate_directory.md#rustdoc-item-589) — Returns the absolute directory of the extension crate named
- [`extension_crate_locations`](fn.extension_crate_locations.md#rustdoc-item-1339) — Returns every extension crate under `extensions_root`, in folder order.
- [`find_csproj_manifest`](fn.find_csproj_manifest.md#rustdoc-item-1284) — Finds a `.csproj` manifest inside a project directory.
- [`find_extension_crate`](fn.find_extension_crate.md#rustdoc-item-1344) — Returns the extension crate whose manifest declares `package_name`, or
- [`for_each_dependency_table_mut`](fn.for_each_dependency_table_mut.md#rustdoc-item-1351) — Visits every dependency table a generated member must carry: the three
- [`host_cargo_command`](fn.host_cargo_command.md#rustdoc-item-1279) — Builds the host's cargo command for one or more selected packages.
- [`host_profile_name`](fn.host_profile_name.md#rustdoc-item-1267) — Cargo profile *name* matching [`HOST_PROFILE_DIRECTORY`].
- [`host_target_directory`](fn.host_target_directory.md#rustdoc-item-855) — Workspace-relative directory cargo wrote this host's profile into.
- [`host_target_triple`](fn.host_target_triple.md#rustdoc-item-1268) — The `--target` triple host-spawned builds must pass, when the host itself
- [`is_valid_build_binary_name`](fn.is_valid_build_binary_name.md#rustdoc-item-1294) — Whether `build_binary_name` is a safe artifact file base: letters, digits
- [`is_valid_module_directory_name`](fn.is_valid_module_directory_name.md#rustdoc-item-1295) — Whether `module_directory_name` is a usable extension folder name.
- [`linking_dependency_tables`](fn.linking_dependency_tables.md#rustdoc-item-1288) — Every dependency table in `document`: the three linking tables at the top
- [`manifest_depends_on_crate`](fn.manifest_depends_on_crate.md#rustdoc-item-1287) — Whether a `Cargo.toml` declares a dependency on `crate_name`.
- [`manifest_string_value`](fn.manifest_string_value.md#rustdoc-item-1285) — Reads a string value out of one section of a TOML manifest.
- [`materialize_host_module_wrapper`](fn.materialize_host_module_wrapper.md#rustdoc-item-965) — Writes the wrapper workspace member that builds one extension crate's
- [`materialize_host_project_member`](fn.materialize_host_project_member.md#rustdoc-item-916) — Writes the temporary workspace member that builds the native project.
- [`materialize_project_editor_wrapper`](fn.materialize_project_editor_wrapper.md#rustdoc-item-1357) — Writes the wrapper member that builds a project's editor crate.
- [`module_build_artifact_directory`](fn.module_build_artifact_directory.md#rustdoc-item-1276) — Profile subdirectory inside [`MODULE_BUILD_TARGET_DIRECTORY`] where cargo
- [`profile_name_for_directory`](fn.profile_name_for_directory.md#rustdoc-item-1269) — Map a cargo profile *directory* to the profile *name* that produces it.
- [`profile_uses_lto`](fn.profile_uses_lto.md#rustdoc-item-1270) — Whether a cargo profile enables link-time optimization, the one case where
- [`project_depends_on_crate`](fn.project_depends_on_crate.md#rustdoc-item-1286) — Whether the project manifest declares a direct dependency on `crate_name`.
- [`prune_stale_host_module_wrappers`](fn.prune_stale_host_module_wrappers.md#rustdoc-item-1360) — Removes generated module wrappers left behind by earlier runs.
- [`prune_stale_host_project_members`](fn.prune_stale_host_project_members.md#rustdoc-item-1353) — Removes host-generated workspace members left behind by earlier runs.
- [`prune_stale_project_editor_wrappers`](fn.prune_stale_project_editor_wrappers.md#rustdoc-item-1359) — Removes project editor wrappers left behind by earlier runs.
- [`read_editor_settings`](fn.read_editor_settings.md#rustdoc-item-1292) — Reads the editor's settings file from the project root.
- [`read_project_settings_file`](fn.read_project_settings_file.md#rustdoc-item-1346) — Reads the project's own settings file from the project root.
- [`render_manifest_path`](fn.render_manifest_path.md#rustdoc-item-1350) — Turns a path into the text stored in a TOML string: lossy, with forward
- [`required_environment`](fn.required_environment.md#rustdoc-item-1278) — Read a required configuration variable or report it as missing.
- [`resolve_dependency_path`](fn.resolve_dependency_path.md#rustdoc-item-1347) — Rewrites one dependency entry's `path` to an absolute location and returns
- [`resolve_editor_theme`](fn.resolve_editor_theme.md#rustdoc-item-1293) — Returns the theme path the project layer adds: the `editor_theme:` value
- [`resolve_project_editor_crate`](fn.resolve_project_editor_crate.md#rustdoc-item-1356) — Resolves the project's own editor crate, when it has one.
- [`resolved_project_directory`](fn.resolved_project_directory.md#rustdoc-item-1273) — The project directory a start reports: the path joined onto the workspace
- [`running_under_dioxus_cli`](fn.running_under_dioxus_cli.md#rustdoc-item-1271) — Whether this host binary is running as an app launched by the dioxus CLI.
- [`spawned_build_environment`](fn.spawned_build_environment.md#rustdoc-item-1275) — Environment every host-spawned cargo build needs, on top of the host's own.
- [`validate_extension_crate_names`](fn.validate_extension_crate_names.md#rustdoc-item-1343) — Refuses an extension crate whose package name disagrees with the folder it
- [`write_module_member`](fn.write_module_member.md#rustdoc-item-1358) — Writes one generated wrapper member's `Cargo.toml` and `src/lib.rs`,

### Constants
- [`CARGO_TIMINGS_ENVIRONMENT_VARIABLE`](constant.CARGO_TIMINGS_ENVIRONMENT_VARIABLE.md#rustdoc-item-824) — Opt-in variable that adds cargo's `--timings` report to every host-driven
- [`CSHARP_COMPILER_ARGUMENTS_FILE`](constant.CSHARP_COMPILER_ARGUMENTS_FILE.md#rustdoc-item-834) — File the capture target writes inside a managed project's `obj` directory.
- [`CSHARP_COMPILER_ARGUMENTS_TARGETS`](constant.CSHARP_COMPILER_ARGUMENTS_TARGETS.md#rustdoc-item-833) — Workspace-relative MSBuild file that captures a project's compiler command
- [`CSHARP_COMPILER_ASSEMBLY_NAME`](constant.CSHARP_COMPILER_ASSEMBLY_NAME.md#rustdoc-item-831) — Assembly name of the in-process C# compiler.
- [`CSHARP_COMPILER_MANIFEST`](constant.CSHARP_COMPILER_MANIFEST.md#rustdoc-item-830) — Workspace-relative manifest of the in-process C# compiler.
- [`CSHARP_COMPILER_OUTPUT_SUBDIRECTORY`](constant.CSHARP_COMPILER_OUTPUT_SUBDIRECTORY.md#rustdoc-item-832) — Workspace-relative output directory of the in-process C# compiler.
- [`CSHARP_CONFIGURATION_ENVIRONMENT_VARIABLE`](constant.CSHARP_CONFIGURATION_ENVIRONMENT_VARIABLE.md#rustdoc-item-828) — Opt-in variable selecting the MSBuild configuration of the managed project
- [`CSHARP_CONFIGURATIONS`](constant.CSHARP_CONFIGURATIONS.md#rustdoc-item-829) — Managed build configurations [`CSHARP_CONFIGURATION_ENVIRONMENT_VARIABLE`]
- [`CSHARP_RUNTIME_ASSEMBLY_NAME`](constant.CSHARP_RUNTIME_ASSEMBLY_NAME.md#rustdoc-item-825) — Assembly name of the bundled `csharp_runtime` collectible loader.
- [`CSHARP_RUNTIME_PROJECT_SUBDIRECTORY`](constant.CSHARP_RUNTIME_PROJECT_SUBDIRECTORY.md#rustdoc-item-826) — Workspace-root-relative directory of the C# runtime project. Its build
- [`CSHARP_TARGET_FRAMEWORK`](constant.CSHARP_TARGET_FRAMEWORK.md#rustdoc-item-827) — Target framework the managed project and the runtime are built for.
- [`DEFAULT_EDITOR_FRONTEND`](constant.DEFAULT_EDITOR_FRONTEND.md#rustdoc-item-844) — The editor frontend name a configuration uses when its caller names none.
- [`DEFAULT_EDITOR_THEME`](constant.DEFAULT_EDITOR_THEME.md#rustdoc-item-859) — The editor theme a project's editor layer uses when `editor_settings.yaml`
- [`DEFAULT_RENDERER`](constant.DEFAULT_RENDERER.md#rustdoc-item-860) — The renderer a project draws with when its settings name none.
- [`DIOXUS_CLI_ENABLED_ENVIRONMENT`](constant.DIOXUS_CLI_ENABLED_ENVIRONMENT.md#rustdoc-item-852) — Environment variable the dioxus CLI sets on every app it launches.
- [`DX_RUSTC_WRAPPER_ENVIRONMENT`](constant.DX_RUSTC_WRAPPER_ENVIRONMENT.md#rustdoc-item-854) — Environment variable that makes dx's own binary act as a rustc wrapper.
- [`EDITOR_CRATE_DIRECTORY`](constant.EDITOR_CRATE_DIRECTORY.md#rustdoc-item-840) — Folder, inside an extension's `modules/` folder, holding its editor crate.
- [`EDITOR_CRATE_SUFFIX`](constant.EDITOR_CRATE_SUFFIX.md#rustdoc-item-842) — Suffix every editor crate's package name carries. The host pairs an
- [`EDITOR_DIRECTORY`](constant.EDITOR_DIRECTORY.md#rustdoc-item-837) — Workspace-relative directory holding the editor's own crates: the editor
- [`EDITOR_SETTINGS_FILE`](constant.EDITOR_SETTINGS_FILE.md#rustdoc-item-857) — The editor-only settings file, resolved in the project root beside
- [`EXTENSION_DIRECTORY`](constant.EXTENSION_DIRECTORY.md#rustdoc-item-835) — Workspace-relative directory holding one folder per extension.
- [`EXTENSION_MODULES_DIRECTORY`](constant.EXTENSION_MODULES_DIRECTORY.md#rustdoc-item-838) — Folder, inside an extension's folder, holding its crates: `runtime` holds
- [`GENERATED_DIRECTORY`](constant.GENERATED_DIRECTORY.md#rustdoc-item-836) — Folder, inside an extension's folder or the editor's folder, holding the
- [`HOST_MODULE_MEMBER_PREFIX`](constant.HOST_MODULE_MEMBER_PREFIX.md#rustdoc-item-848) — Name prefix of the generated workspace member that builds one extension's
- [`HOST_PROFILE_DIRECTORY`](constant.HOST_PROFILE_DIRECTORY.md#rustdoc-item-849) — Cargo profile directory this host was compiled into, recorded by `build.rs`.
- [`HOST_PROJECT_MEMBER_PREFIX`](constant.HOST_PROJECT_MEMBER_PREFIX.md#rustdoc-item-847) — Name prefix of the generated workspace member that builds a native project.
- [`HOST_TARGET_TRIPLE`](constant.HOST_TARGET_TRIPLE.md#rustdoc-item-850) — Target triple the host was compiled for, recorded by `build.rs`.
- [`LINKING_DEPENDENCY_TABLES`](constant.LINKING_DEPENDENCY_TABLES.md#rustdoc-item-864) — Dependency tables whose entries link code into the build.
- [`MODULE_BUILD_TARGET_DIRECTORY`](constant.MODULE_BUILD_TARGET_DIRECTORY.md#rustdoc-item-3) — Private build tree for every cargo build the host spawns.
- [`NO_RENDERER`](constant.NO_RENDERER.md#rustdoc-item-861) — The `renderer:` value that selects no renderer at all: neither its data
- [`OLD_RENDERERS_DIRECTORY`](constant.OLD_RENDERERS_DIRECTORY.md#rustdoc-item-841) — Folder under `extensions/` holding the older renderer crates. No build
- [`PROJECT_ASSET_DIRECTORY`](constant.PROJECT_ASSET_DIRECTORY.md#rustdoc-item-858) — A project's source asset directory, relative to the project root.
- [`PROJECT_MEMBER_DIRECTORY`](constant.PROJECT_MEMBER_DIRECTORY.md#rustdoc-item-846) — Workspace-relative directory holding the generated project member.
- [`PROJECT_PATH_ENVIRONMENT_VARIABLE`](constant.PROJECT_PATH_ENVIRONMENT_VARIABLE.md#rustdoc-item-822) — The variable that selects the project to run: the project directory,
- [`PROJECT_SETTINGS_FILE`](constant.PROJECT_SETTINGS_FILE.md#rustdoc-item-856) — Project configuration file name, resolved in the project root. A project
- [`RENDERER_DATA_SUFFIX`](constant.RENDERER_DATA_SUFFIX.md#rustdoc-item-862) — Suffix of a renderer's data crate: renderer `X`'s data is `X_data`.
- [`RENDERER_SHADER_SOURCES_DIRECTORY`](constant.RENDERER_SHADER_SOURCES_DIRECTORY.md#rustdoc-item-863) — Directory at a renderer data crate's root holding the shader sources it
- [`RETIRED_EDITOR_FRONTEND`](constant.RETIRED_EDITOR_FRONTEND.md#rustdoc-item-845) — The editor frontend tag no host accepts. A crate that declares it is
- [`RUNTIME_CRATE_DIRECTORY`](constant.RUNTIME_CRATE_DIRECTORY.md#rustdoc-item-839) — Folder, inside an extension's `modules/` folder, holding the extension
- [`RUSTC_WORKSPACE_WRAPPER_ENVIRONMENT`](constant.RUSTC_WORKSPACE_WRAPPER_ENVIRONMENT.md#rustdoc-item-853) — Cargo's workspace-wrapper environment variable.
