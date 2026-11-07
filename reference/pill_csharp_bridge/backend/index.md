<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-400"></a>

# Module `pill_csharp_bridge::backend`

Visibility: `crate` · Source: `csharp\pill_csharp_bridge\src\backend.rs:1`

High-level C# project startup, discovery, and scheduler registration.
Starts a hosted .NET runtime for a C# project, finds the systems it
declares, and registers them with the engine's scheduler.

## Responsibilities

- Start .NET (CoreCLR through hostfxr, or a NativeAOT library) and resolve
  every managed export the host calls.
- Register the component manifest the managed side reports, then run its
  startup methods so a failure leaves no half-built world.
- Reflect each system's accesses and register the system under that exact
  read/write list.
- Poll the managed loader after a rebuild, decide whether the arriving
  component manifest can be applied, and re-register the project's systems
  when their signatures changed.

## Design

Every unmanaged export is resolved once at startup into a plain function
pointer held by the [`CSharpRuntime`](struct.CSharpRuntime.md#rustdoc-item-500) host. A registered system never calls
the runtime directly: each registration captures the resolved pointers, its
reflected access list and a shared [`BindingStore`] handle. [`CSharpRuntime`](struct.CSharpRuntime.md#rustdoc-item-500)
owns the runtime and the API table those pointers come from, so keeping the
host alive keeps every registered system valid.

A reload is a handshake with the managed loader. The loader holds the new
assembly back until the host has applied its component manifest, and only
then swaps it in. [`ManagedSystemSnapshot`] records what the active assembly
declared, so a reload can tell a changed system body (nothing to
re-register) from a changed signature (rebuild the project's systems).

## Module contents

### Structs
- [`CSharpRuntime`](struct.CSharpRuntime.md#rustdoc-item-500) — Owns the hosted .NET context, the stable API table and the reload callback.
- [`ManagedExports`](struct.ManagedExports.md#rustdoc-item-512) — Every managed export the host calls, resolved once per posture.
- [`ManagedSystemSnapshot`](struct.ManagedSystemSnapshot.md#rustdoc-item-429) — Reflected metadata of one managed system, captured at startup.
- [`PreparedManagedSystem`](struct.PreparedManagedSystem.md#rustdoc-item-596) — One managed system that has been resolved and checked, but not yet given to
- [`SystemExports`](struct.SystemExports.md#rustdoc-item-490) — The managed exports one system-registration pass needs.

### Enums
- [`ManagedRuntimeContext`](enum.ManagedRuntimeContext.md#rustdoc-item-458) — Owns one hosted managed runtime: CoreCLR through hostfxr, or a loaded

### Functions
- [`checked_access_count`](fn.checked_access_count.md#rustdoc-item-681) — Validates a managed-reported access count the same way; see
- [`checked_system_count`](fn.checked_system_count.md#rustdoc-item-680) — Validates a managed-reported system count before it sizes a host allocation.
- [`commit_managed_systems`](fn.commit_managed_systems.md#rustdoc-item-627) — Hands every prepared system to the scheduler.
- [`derive_system_access`](fn.derive_system_access.md#rustdoc-item-685) — Turns declared access modes into the scheduler's metadata.
- [`managed_system_error_message`](fn.managed_system_error_message.md#rustdoc-item-684) — Copies the failure message one managed system reported after a failed run.
- [`managed_system_name`](fn.managed_system_name.md#rustdoc-item-682) — Copies one managed system's declared name.
- [`poll_status_is_known`](fn.poll_status_is_known.md#rustdoc-item-677) — Reports whether a managed-reported poll status is one this host understands.
- [`prepare_managed_systems`](fn.prepare_managed_systems.md#rustdoc-item-518) — Resolves every managed system without touching the engine.
- [`read_reported_manifest`](fn.read_reported_manifest.md#rustdoc-item-678) — Reads the pending version's component manifest and logs why it could not be
- [`register_managed_systems`](fn.register_managed_systems.md#rustdoc-item-628) — Resolves and registers every managed system in one step.
- [`resolved_system_name`](fn.resolved_system_name.md#rustdoc-item-683) — Returns the name a system is registered under: the reflected one, or a
- [`shipped_or_baked`](fn.shipped_or_baked.md#rustdoc-item-629) — Resolves one managed artifact (a runtime assembly, its `runtimeconfig.json`,

### Type aliases
- [`AbortReloadFn`](type.AbortReloadFn.md#rustdoc-item-424) — Signature discarding the pending version when its manifest is refused.
- [`CommitReloadFn`](type.CommitReloadFn.md#rustdoc-item-423) — Signature installing the pending version once its manifest is in force.
- [`ComponentManifestLengthFn`](type.ComponentManifestLengthFn.md#rustdoc-item-410) — Signature returning the serialized component manifest byte length.
- [`CopyComponentManifestFn`](type.CopyComponentManifestFn.md#rustdoc-item-411) — Signature copying the serialized component manifest into a caller buffer.
- [`CopyPendingManifestFn`](type.CopyPendingManifestFn.md#rustdoc-item-422) — Signature copying the pending version's manifest into a caller buffer.
- [`CopySystemErrorMessageFn`](type.CopySystemErrorMessageFn.md#rustdoc-item-418) — Signature copying one system's last error message into a caller buffer.
- [`CopySystemNameFn`](type.CopySystemNameFn.md#rustdoc-item-413) — Signature copying one system's reflected name into a caller buffer.
- [`GetSystemAccessFn`](type.GetSystemAccessFn.md#rustdoc-item-415) — Signature copying one system's reflected accesses into a caller buffer.
- [`InitFn`](type.InitFn.md#rustdoc-item-404) — Signature of the managed runtime entry point that receives the API table.
- [`InteropVersionFn`](type.InteropVersionFn.md#rustdoc-item-405) — Signature returning the unmanaged ABI contract version.
- [`NotifyAssemblyReplacedFn`](type.NotifyAssemblyReplacedFn.md#rustdoc-item-420) — Signature telling the loader a new assembly is already complete on disk.
- [`PendingManifestLengthFn`](type.PendingManifestLengthFn.md#rustdoc-item-421) — Signature returning the byte length of the pending version's manifest.
- [`PollReloadFn`](type.PollReloadFn.md#rustdoc-item-419) — Signature polling the collectible loader for a new project assembly. The
- [`RunStartupFn`](type.RunStartupFn.md#rustdoc-item-409) — Signature executing one managed startup method by index.
- [`RunSystemFn`](type.RunSystemFn.md#rustdoc-item-417) — Signature running one scheduler system by index.
- [`StartupCountFn`](type.StartupCountFn.md#rustdoc-item-407) — Signature returning the number of managed startup methods.
- [`SystemAccessCountFn`](type.SystemAccessCountFn.md#rustdoc-item-414) — Signature returning how many accesses one system declared.
- [`SystemCountFn`](type.SystemCountFn.md#rustdoc-item-406) — Signature returning the number of registered scheduler systems.
- [`SystemErrorMessageLengthFn`](type.SystemErrorMessageLengthFn.md#rustdoc-item-416) — Signature returning the UTF-8 byte length of one system's last error message.
- [`SystemNameLengthFn`](type.SystemNameLengthFn.md#rustdoc-item-412) — Signature returning the UTF-8 byte length of one system's reflected name.
- [`SystemUsesCommandsFn`](type.SystemUsesCommandsFn.md#rustdoc-item-408) — Signature reporting whether one system declares a Commands parameter.

### Constants
- [`INTEROP_CONTRACT_VERSION`](constant.INTEROP_CONTRACT_VERSION.md#rustdoc-item-156) — The unmanaged ABI contract version, shared with `csharp_runtime`.
- [`MAX_ACCESSES_PER_SYSTEM`](constant.MAX_ACCESSES_PER_SYSTEM.md#rustdoc-item-403) — Upper bound on the accesses one managed system may declare.
- [`MAX_COMPONENT_MANIFEST_BYTES`](constant.MAX_COMPONENT_MANIFEST_BYTES.md#rustdoc-item-398) — Upper bound for the serialized managed component manifest.
- [`MAX_SYSTEM_ERROR_BYTES`](constant.MAX_SYSTEM_ERROR_BYTES.md#rustdoc-item-401) — Maximum UTF-8 byte length accepted for a managed system error message.
- [`MAX_SYSTEM_NAME_BYTES`](constant.MAX_SYSTEM_NAME_BYTES.md#rustdoc-item-399) — Maximum UTF-8 byte length accepted for a managed system name.
- [`MAX_SYSTEMS_PER_ASSEMBLY`](constant.MAX_SYSTEMS_PER_ASSEMBLY.md#rustdoc-item-402) — Upper bound on the number of systems one managed assembly may report.
- [`POLL_MANIFEST_PENDING`](constant.POLL_MANIFEST_PENDING.md#rustdoc-item-397) — A behaviour-compatible assembly is loaded and waiting for the host to
- [`POLL_NO_CHANGE`](constant.POLL_NO_CHANGE.md#rustdoc-item-394) — Poll found no reload to do. Nothing was due, or the file is unchanged.
- [`POLL_REJECTED`](constant.POLL_REJECTED.md#rustdoc-item-396) — Poll rejected the new assembly, and the current one stays loaded.
- [`POLL_RELOADED`](constant.POLL_RELOADED.md#rustdoc-item-395) — Poll swapped in a behaviour-compatible assembly.
