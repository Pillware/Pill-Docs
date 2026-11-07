<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3075"></a>

# Module `pill_development_host::native_library`

Visibility: `crate` · Source: `hosting\pill_development_host\src\native_library.rs:1`

Loads native module libraries from temporary copies that must outlive a
reload.
Loading native project and extension libraries, resolving their exports
and keeping the temporary copies that outlive a reload.

Each module gets a file at a path of its own before it is opened: a hard
link to the build output when the filesystem allows one, a copy otherwise.
A rebuilt DLL can then replace the build output while an older generation
stays mapped, because the raw pointers and vtables the engine holds still
point into it.

## Responsibilities

- Load native libraries from unique temporary paths.
- Check the required exports, read the ABI revision and call the
  registration entry point.
- Explain a failed load from the artifact's own import tables.
- Remove temporary copies left behind by earlier host processes.

## Design

The native ABI is one fixed export contract. A project and an extension are
the same kind of loadable artifact: same exports, same loader, same reload
transaction, same way of being retired. The loader therefore has nothing to
parameterise.

- `pill_module_init(*const EngineApi) -> u32` - required: registers
  components and systems before the first frame and returns zero on
  success. Any other status fails the load transaction, and the previous
  generation is initialized again.
- `pill_module_abi_version() -> u32` - optional: read before any other
  function is called, so an incompatible artifact is rejected instead of
  invoked.

Exports are cached at load time as raw function pointers, which stay valid
while the library handle keeps the image mapped. `pill_module_init` must be
safe to call more than once.

## Module contents

### Structs
- [`NativeLibrary`](struct.NativeLibrary.md#rustdoc-item-2092) — Owns one loaded native library, either the project or an extension.
- [`TemporaryCopy`](struct.TemporaryCopy.md#rustdoc-item-3256) — A copied artifact path that deletes itself if the load never takes it over.
- [`UnresolvedImport`](struct.UnresolvedImport.md#rustdoc-item-3098) — A named import the module needs that a candidate copy of its DLL does

### Enums
- [`LoadFailureExplanation`](enum.LoadFailureExplanation.md#rustdoc-item-3135) — What the gathered evidence says about a failed load.

### Functions
- [`choose_explanation`](fn.choose_explanation.md#rustdoc-item-3166) — The explanation the gathered evidence supports.
- [`cleanup_temporary_files`](fn.cleanup_temporary_files.md#rustdoc-item-3289) — Removes the staging directories that earlier host processes left behind.
- [`diagnose_load_failure`](fn.diagnose_load_failure.md#rustdoc-item-3172) — Explains a load failure with the best evidence available.
- [`engine_dylib_needs_isolation`](fn.engine_dylib_needs_isolation.md#rustdoc-item-3073) — Whether a module build produced engine dylibs that differ from the host's
- [`explanation_error`](fn.explanation_error.md#rustdoc-item-3167) — The error one explanation becomes, or `None` to keep the loader's own.
- [`files_equal`](fn.files_equal.md#rustdoc-item-3176) — Byte equality for two DLL files.
- [`files_equal_streaming`](fn.files_equal_streaming.md#rustdoc-item-3175) — Exact byte compare of two files through two reused buffers.
- [`first_engine_dylib_mismatch`](fn.first_engine_dylib_mismatch.md#rustdoc-item-3094) — The first engine dylib whose module-world copy differs from the host's, as
- [`first_unresolved_import`](fn.first_unresolved_import.md#rustdoc-item-3169) — The first named import of `artifact` that a candidate copy of its DLL does
- [`import_candidate_copies`](fn.import_candidate_copies.md#rustdoc-item-3170) — The copies of an imported DLL the loader would consider, in its own
- [`module_world_engine_dylib`](fn.module_world_engine_dylib.md#rustdoc-item-3174) — Locates the engine dylib `stem` that the module build produced: the staged
- [`process_is_alive`](fn.process_is_alive.md#rustdoc-item-3076) — Whether a process with the given id is still running.
- [`process_temporary_directory`](fn.process_temporary_directory.md#rustdoc-item-3288) — Directory used by this host process for temporary native-library copies.
- [`remove_generation_directory`](fn.remove_generation_directory.md#rustdoc-item-3287) — Removes one generation's directory and keeps whatever the process still
- [`remove_staging_directory`](fn.remove_staging_directory.md#rustdoc-item-3292) — Removes one staging directory and logs which one went and why.
- [`remove_temporary_file`](fn.remove_temporary_file.md#rustdoc-item-3286) — Deletes one temporary copy and the generation directory it was staged in.
- [`stage_module_engine_dylib`](fn.stage_module_engine_dylib.md#rustdoc-item-3173) — Copies the module-world engine dylibs into `generation_directory`, so a
- [`staging_directories_to_evict`](fn.staging_directories_to_evict.md#rustdoc-item-3290) — Chooses which of the other processes' staging directories to remove.
- [`staging_last_write`](fn.staging_last_write.md#rustdoc-item-3291) — Returns when a staging directory was last written to.
- [`unresolved_engine_mismatch`](fn.unresolved_engine_mismatch.md#rustdoc-item-3171) — The mismatch pair for `unresolved`'s engine dylib, when the import names

### Type aliases
- [`CopyFieldAccessorsFn`](type.CopyFieldAccessorsFn.md#rustdoc-item-3190)
- [`CopyMirrorMethodsFn`](type.CopyMirrorMethodsFn.md#rustdoc-item-3187)
- [`CopyValueTypesFn`](type.CopyValueTypesFn.md#rustdoc-item-3185)
- [`ExtentCoverageFn`](type.ExtentCoverageFn.md#rustdoc-item-3182) — Signature of the extent-coverage diagnostic export.
- [`FieldAccessorCountFn`](type.FieldAccessorCountFn.md#rustdoc-item-3189) — Signature of the optional heap-field accessor manifest exports.
- [`FunctionAddressFn`](type.FunctionAddressFn.md#rustdoc-item-3181) — Signature of the build-script-backed address resolver.
- [`MirrorMethodCountFn`](type.MirrorMethodCountFn.md#rustdoc-item-3186) — Signature of the optional mirrored-method manifest exports.
- [`ModuleAbiVersionFn`](type.ModuleAbiVersionFn.md#rustdoc-item-3183) — Signature of the optional ABI revision export.
- [`ModuleInitFn`](type.ModuleInitFn.md#rustdoc-item-3177) — Signature of the required registration entry point.
- [`PlainFunctionInstallFn`](type.PlainFunctionInstallFn.md#rustdoc-item-3178) — Signature of the `pill_hot_resolve_install` export generated by the
- [`PlainFunctionResetFn`](type.PlainFunctionResetFn.md#rustdoc-item-3180) — Signature of the `pill_hot_resolve_reset` export generated by the same
- [`ValueTypeCountFn`](type.ValueTypeCountFn.md#rustdoc-item-3184) — Signature of the optional value-type manifest exports.

### Constants
- [`ENGINE_DYLIB_STEMS`](constant.ENGINE_DYLIB_STEMS.md#rustdoc-item-771) — The engine's shared libraries, by file stem: every module, project and
- [`EXTENT_COVERAGE_SYMBOL`](constant.EXTENT_COVERAGE_SYMBOL.md#rustdoc-item-3087) — Export reporting how many of an artifact's functions have a known length.
- [`FIELD_ACCESSOR_COPY_SYMBOL`](constant.FIELD_ACCESSOR_COPY_SYMBOL.md#rustdoc-item-3093) — Export copying an artifact's heap-field accessor descriptors into a host
- [`FIELD_ACCESSOR_COUNT_SYMBOL`](constant.FIELD_ACCESSOR_COUNT_SYMBOL.md#rustdoc-item-3092) — Export reporting how many heap-field accessor descriptors an artifact
- [`FUNCTION_ADDRESS_SYMBOL`](constant.FUNCTION_ADDRESS_SYMBOL.md#rustdoc-item-3086) — Export that reports any function address in this artifact.
- [`LOAD_WITH_ALTERED_SEARCH_PATH`](constant.LOAD_WITH_ALTERED_SEARCH_PATH.md#rustdoc-item-3080) — `LOAD_WITH_ALTERED_SEARCH_PATH`: make a module's dependency resolution start
- [`MAX_RETAINED_STAGING_DIRECTORIES`](constant.MAX_RETAINED_STAGING_DIRECTORIES.md#rustdoc-item-3078) — Maximum number of other processes' staging directories kept.
- [`MIRROR_METHOD_COPY_SYMBOL`](constant.MIRROR_METHOD_COPY_SYMBOL.md#rustdoc-item-3091) — Export copying an artifact's mirrored-method descriptors into a host buffer.
- [`MIRROR_METHOD_COUNT_SYMBOL`](constant.MIRROR_METHOD_COUNT_SYMBOL.md#rustdoc-item-3090) — Export reporting how many mirrored-method descriptors an artifact declares.
- [`MODULE_ABI_VERSION_SYMBOL`](constant.MODULE_ABI_VERSION_SYMBOL.md#rustdoc-item-3083) — Optional ABI revision export, read at load time when present.
- [`MODULE_INIT_SYMBOL`](constant.MODULE_INIT_SYMBOL.md#rustdoc-item-3081) — Required registration entry point of a loadable artifact.
- [`MODULE_REGISTER_SYMBOL`](constant.MODULE_REGISTER_SYMBOL.md#rustdoc-item-3082) — Optional: an artifact's registration-only entry point, called instead of
- [`PLAIN_FUNCTION_INSTALL_SYMBOL`](constant.PLAIN_FUNCTION_INSTALL_SYMBOL.md#rustdoc-item-3084) — Export that lets a patch reach an artifact's redirect slots.
- [`PLAIN_FUNCTION_RESET_SYMBOL`](constant.PLAIN_FUNCTION_RESET_SYMBOL.md#rustdoc-item-3085) — Export that returns one redirect slot to the artifact's own body.
- [`STAGING_GRACE_PERIOD`](constant.STAGING_GRACE_PERIOD.md#rustdoc-item-3077) — How long another process's staging directory is left alone after its last
- [`TEMPORARY_DIRECTORY`](constant.TEMPORARY_DIRECTORY.md#rustdoc-item-3074) — Directory, under the workspace root, where temporary native-library copies
- [`VALUE_TYPE_COPY_SYMBOL`](constant.VALUE_TYPE_COPY_SYMBOL.md#rustdoc-item-3089) — Export copying an artifact's value-type descriptors into a host buffer.
- [`VALUE_TYPE_COUNT_SYMBOL`](constant.VALUE_TYPE_COUNT_SYMBOL.md#rustdoc-item-3088) — Export reporting how many value-type descriptors an artifact declares.

### Statics
- [`TEMPORARY_COPY_COUNTER`](static.TEMPORARY_COPY_COUNTER.md#rustdoc-item-3079) — Monotonic suffix ensuring temporary copies never collide, even when the
