<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-821"></a>

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

[`ProjectModuleConfig`](struct.ProjectModuleConfig.md#rustdoc-item-764) holds the project module's values, and [`HostConfig`](struct.HostConfig.md#rustdoc-item-945)
adds the extension list and the switches that select the editor posture.
The backend (native Rust or managed C#) comes from the manifest in the
project directory (`Cargo.toml` or `*.csproj`). Every path, command and
assembly name is derived from that manifest, so no project identity is
compiled into the host binary. A missing or unreadable project fails at
once with a [`ConfigError`] that names the offending path.

## Module contents

### Structs
- [`EditorSettings`](struct.EditorSettings.md#rustdoc-item-1137) — What `editor_settings.yaml` selected for the editor.
- [`EditorSettingsFile`](struct.EditorSettingsFile.md#rustdoc-item-1175) — Values declared by the project's own `editor_settings.yaml`.
- [`ExtensionConfig`](struct.ExtensionConfig.md#rustdoc-item-815) — Build, watch and load description for one extension.
- [`HostConfig`](struct.HostConfig.md#rustdoc-item-945) — Complete host configuration: the project module plus every extension
- [`ProjectAssetSettings`](struct.ProjectAssetSettings.md#rustdoc-item-996) — The `assets:` section of `project_settings.yaml`.
- [`ProjectLoggingSettings`](struct.ProjectLoggingSettings.md#rustdoc-item-1094) — The `logging:` section of `project_settings.yaml`, as written.
- [`ProjectModuleConfig`](struct.ProjectModuleConfig.md#rustdoc-item-764) — Configuration for a hot-reloadable project module.
- [`ProjectSettingsFile`](struct.ProjectSettingsFile.md#rustdoc-item-1217) — Values declared by the project's own `project_settings.yaml`.

### Enums
- [`ProjectModuleBackend`](enum.ProjectModuleBackend.md#rustdoc-item-864) — Backend-specific output information for a hot-reloadable project module.

### Functions
- [`absolute_manifest_path`](fn.absolute_manifest_path.md#rustdoc-item-1281) — Resolves one manifest `path` value against the project root and leaves an
- [`canonicalize_plain`](fn.canonicalize_plain.md#rustdoc-item-1253) — Canonicalize a path without the Windows `\\?\` verbatim prefix.
- [`cargo_timings_enabled`](fn.cargo_timings_enabled.md#rustdoc-item-1260) — Whether host-driven cargo builds should emit a timing report.
- [`csharp_build_configuration`](fn.csharp_build_configuration.md#rustdoc-item-1261) — MSBuild configuration the managed project is built in, from
- [`declares_dependency`](fn.declares_dependency.md#rustdoc-item-1271) — Whether one dependency table declares `crate_name`, directly or as the
- [`dioxus_executable_path`](fn.dioxus_executable_path.md#rustdoc-item-844) — Canonical path of the `dx` executable that launched this host, if any.
- [`dioxus_wrapper_args_directory`](fn.dioxus_wrapper_args_directory.md#rustdoc-item-1254) — Directory dx's wrapper writes captured member rustc invocations into.
- [`engine_workspace_root`](fn.engine_workspace_root.md#rustdoc-item-1262) — Directory holding the engine workspace: the base every stored relative path
- [`extension_crate_directory`](fn.extension_crate_directory.md#rustdoc-item-1277) — Returns the directory of the extension crate `crate_name`: either
- [`find_csproj_manifest`](fn.find_csproj_manifest.md#rustdoc-item-1264) — Finds a `.csproj` manifest inside a project directory.
- [`for_each_dependency_table_mut`](fn.for_each_dependency_table_mut.md#rustdoc-item-1283) — Visits every dependency table a generated member must carry: the three
- [`host_cargo_command`](fn.host_cargo_command.md#rustdoc-item-1259) — Builds the host's cargo command for one or more selected packages.
- [`host_profile_name`](fn.host_profile_name.md#rustdoc-item-1248) — Cargo profile *name* matching [`HOST_PROFILE_DIRECTORY`].
- [`host_target_directory`](fn.host_target_directory.md#rustdoc-item-848) — Workspace-relative directory cargo wrote this host's profile into.
- [`host_target_triple`](fn.host_target_triple.md#rustdoc-item-1249) — The `--target` triple host-spawned builds must pass, when the host itself
- [`is_valid_build_binary_name`](fn.is_valid_build_binary_name.md#rustdoc-item-1274) — Whether `build_binary_name` is a safe artifact file base: letters, digits
- [`is_valid_module_directory_name`](fn.is_valid_module_directory_name.md#rustdoc-item-1275) — Whether `module_directory_name` is a usable extension folder name.
- [`linking_dependency_tables`](fn.linking_dependency_tables.md#rustdoc-item-1268) — Every dependency table in `document`: the three linking tables at the top
- [`locate_extension_folder`](fn.locate_extension_folder.md#rustdoc-item-1276) — Returns the extension folder under `extensions_root` that holds
- [`manifest_depends_on_crate`](fn.manifest_depends_on_crate.md#rustdoc-item-1267) — Whether a `Cargo.toml` declares a dependency on `crate_name`.
- [`manifest_string_value`](fn.manifest_string_value.md#rustdoc-item-1265) — Reads a string value out of one section of a TOML manifest.
- [`materialize_host_module_wrapper`](fn.materialize_host_module_wrapper.md#rustdoc-item-954) — Writes the wrapper workspace member that builds one extension crate's
- [`materialize_host_project_member`](fn.materialize_host_project_member.md#rustdoc-item-907) — Writes the temporary workspace member that builds the native project.
- [`module_build_artifact_directory`](fn.module_build_artifact_directory.md#rustdoc-item-1256) — Profile subdirectory inside [`MODULE_BUILD_TARGET_DIRECTORY`] where cargo
- [`profile_name_for_directory`](fn.profile_name_for_directory.md#rustdoc-item-1250) — Map a cargo profile *directory* to the profile *name* that produces it.
- [`profile_uses_lto`](fn.profile_uses_lto.md#rustdoc-item-1251) — Whether a cargo profile enables link-time optimization, the one case where
- [`project_depends_on_crate`](fn.project_depends_on_crate.md#rustdoc-item-1266) — Whether the project manifest declares a direct dependency on `crate_name`.
- [`prune_stale_host_module_wrappers`](fn.prune_stale_host_module_wrappers.md#rustdoc-item-1286) — Removes generated extension wrappers left behind by earlier runs.
- [`prune_stale_host_project_members`](fn.prune_stale_host_project_members.md#rustdoc-item-1285) — Removes host-generated workspace members left behind by earlier runs.
- [`read_editor_settings`](fn.read_editor_settings.md#rustdoc-item-1272) — Reads the editor's settings file from the project root.
- [`read_project_settings_file`](fn.read_project_settings_file.md#rustdoc-item-1278) — Reads the project's own settings file from the project root.
- [`render_manifest_path`](fn.render_manifest_path.md#rustdoc-item-1282) — Turns a path into the text stored in a TOML string: lossy, with forward
- [`required_environment`](fn.required_environment.md#rustdoc-item-1258) — Read a required configuration variable or report it as missing.
- [`resolve_dependency_path`](fn.resolve_dependency_path.md#rustdoc-item-1279) — Rewrites one dependency entry's `path` to an absolute location and returns
- [`resolve_editor_theme`](fn.resolve_editor_theme.md#rustdoc-item-1273) — Returns the theme path the project layer adds: the `editor_theme:` value
- [`running_under_dioxus_cli`](fn.running_under_dioxus_cli.md#rustdoc-item-1252) — Whether this host binary is running as an app launched by the dioxus CLI.
- [`spawned_build_environment`](fn.spawned_build_environment.md#rustdoc-item-1255) — Environment every host-spawned cargo build needs, on top of the host's own.

### Constants
- [`CARGO_TIMINGS_ENVIRONMENT_VARIABLE`](constant.CARGO_TIMINGS_ENVIRONMENT_VARIABLE.md#rustdoc-item-822) — Opt-in variable that adds cargo's `--timings` report to every host-driven
- [`CSHARP_COMPILER_ARGUMENTS_FILE`](constant.CSHARP_COMPILER_ARGUMENTS_FILE.md#rustdoc-item-832) — File the capture target writes inside a managed project's `obj` directory.
- [`CSHARP_COMPILER_ARGUMENTS_TARGETS`](constant.CSHARP_COMPILER_ARGUMENTS_TARGETS.md#rustdoc-item-831) — Workspace-relative MSBuild file that captures a project's compiler command
- [`CSHARP_COMPILER_ASSEMBLY_NAME`](constant.CSHARP_COMPILER_ASSEMBLY_NAME.md#rustdoc-item-829) — Assembly name of the in-process C# compiler.
- [`CSHARP_COMPILER_MANIFEST`](constant.CSHARP_COMPILER_MANIFEST.md#rustdoc-item-828) — Workspace-relative manifest of the in-process C# compiler.
- [`CSHARP_COMPILER_OUTPUT_SUBDIRECTORY`](constant.CSHARP_COMPILER_OUTPUT_SUBDIRECTORY.md#rustdoc-item-830) — Workspace-relative output directory of the in-process C# compiler.
- [`CSHARP_CONFIGURATION_ENVIRONMENT_VARIABLE`](constant.CSHARP_CONFIGURATION_ENVIRONMENT_VARIABLE.md#rustdoc-item-826) — Opt-in variable selecting the MSBuild configuration of the managed project
- [`CSHARP_CONFIGURATIONS`](constant.CSHARP_CONFIGURATIONS.md#rustdoc-item-827) — Managed build configurations [`CSHARP_CONFIGURATION_ENVIRONMENT_VARIABLE`]
- [`CSHARP_RUNTIME_ASSEMBLY_NAME`](constant.CSHARP_RUNTIME_ASSEMBLY_NAME.md#rustdoc-item-823) — Assembly name of the bundled `csharp_runtime` collectible loader.
- [`CSHARP_RUNTIME_PROJECT_SUBDIRECTORY`](constant.CSHARP_RUNTIME_PROJECT_SUBDIRECTORY.md#rustdoc-item-824) — Workspace-root-relative directory of the C# runtime project. Its build
- [`CSHARP_TARGET_FRAMEWORK`](constant.CSHARP_TARGET_FRAMEWORK.md#rustdoc-item-825) — Target framework the managed project and the runtime are built for.
- [`DEFAULT_EDITOR_FRONTEND`](constant.DEFAULT_EDITOR_FRONTEND.md#rustdoc-item-837) — The editor frontend name a configuration uses when its caller names none.
- [`DEFAULT_EDITOR_THEME`](constant.DEFAULT_EDITOR_THEME.md#rustdoc-item-852) — The editor theme a project's editor layer uses when `editor_settings.yaml`
- [`DEFAULT_RENDERER`](constant.DEFAULT_RENDERER.md#rustdoc-item-853) — The renderer a project draws with when its settings name none.
- [`DIOXUS_CLI_ENABLED_ENVIRONMENT`](constant.DIOXUS_CLI_ENABLED_ENVIRONMENT.md#rustdoc-item-845) — Environment variable the dioxus CLI sets on every app it launches.
- [`DX_RUSTC_WRAPPER_ENVIRONMENT`](constant.DX_RUSTC_WRAPPER_ENVIRONMENT.md#rustdoc-item-847) — Environment variable that makes dx's own binary act as a rustc wrapper.
- [`EDITOR_CRATE_SUFFIX`](constant.EDITOR_CRATE_SUFFIX.md#rustdoc-item-835) — Suffix of an extension folder's editor crate. Folder `<extension>` holds
- [`EDITOR_SETTINGS_FILE`](constant.EDITOR_SETTINGS_FILE.md#rustdoc-item-850) — The editor-only settings file, resolved in the project root beside
- [`EXTENSION_DIRECTORY`](constant.EXTENSION_DIRECTORY.md#rustdoc-item-833) — Workspace-relative directory holding one folder per extension.
- [`GENERATED_DIRECTORY`](constant.GENERATED_DIRECTORY.md#rustdoc-item-834) — Folder, inside an extension's folder, holding the host-generated wrapper
- [`HOST_MODULE_MEMBER_PREFIX`](constant.HOST_MODULE_MEMBER_PREFIX.md#rustdoc-item-841) — Name prefix of the generated workspace member that builds one extension's
- [`HOST_PROFILE_DIRECTORY`](constant.HOST_PROFILE_DIRECTORY.md#rustdoc-item-842) — Cargo profile directory this host was compiled into, recorded by `build.rs`.
- [`HOST_PROJECT_MEMBER_PREFIX`](constant.HOST_PROJECT_MEMBER_PREFIX.md#rustdoc-item-840) — Name prefix of the generated workspace member that builds a native project.
- [`HOST_TARGET_TRIPLE`](constant.HOST_TARGET_TRIPLE.md#rustdoc-item-843) — Target triple the host was compiled for, recorded by `build.rs`.
- [`LINKING_DEPENDENCY_TABLES`](constant.LINKING_DEPENDENCY_TABLES.md#rustdoc-item-857) — Dependency tables whose entries link code into the build.
- [`MODULE_BUILD_TARGET_DIRECTORY`](constant.MODULE_BUILD_TARGET_DIRECTORY.md#rustdoc-item-3) — Private build tree for every cargo build the host spawns.
- [`NO_RENDERER`](constant.NO_RENDERER.md#rustdoc-item-854) — The `renderer:` value that selects no renderer at all: neither its data
- [`PROJECT_ASSET_DIRECTORY`](constant.PROJECT_ASSET_DIRECTORY.md#rustdoc-item-851) — A project's source asset directory, relative to the project root.
- [`PROJECT_MEMBER_DIRECTORY`](constant.PROJECT_MEMBER_DIRECTORY.md#rustdoc-item-839) — Workspace-relative directory holding the generated project member.
- [`PROJECT_PATH_ENVIRONMENT_VARIABLE`](constant.PROJECT_PATH_ENVIRONMENT_VARIABLE.md#rustdoc-item-820) — The variable that selects the project to run: the project directory,
- [`PROJECT_SETTINGS_FILE`](constant.PROJECT_SETTINGS_FILE.md#rustdoc-item-849) — Project configuration file name, resolved in the project root. A project
- [`RENDERER_DATA_SUFFIX`](constant.RENDERER_DATA_SUFFIX.md#rustdoc-item-855) — Suffix of a renderer's data crate: renderer `X`'s data is `X_data`.
- [`RENDERER_SHADER_SOURCES_DIRECTORY`](constant.RENDERER_SHADER_SOURCES_DIRECTORY.md#rustdoc-item-856) — Directory at a renderer data crate's root holding the shader sources it
- [`RETIRED_EDITOR_FRONTEND`](constant.RETIRED_EDITOR_FRONTEND.md#rustdoc-item-838) — The editor frontend tag no host accepts. A crate that declares it is
- [`RUSTC_WORKSPACE_WRAPPER_ENVIRONMENT`](constant.RUSTC_WORKSPACE_WRAPPER_ENVIRONMENT.md#rustdoc-item-846) — Cargo's workspace-wrapper environment variable.
