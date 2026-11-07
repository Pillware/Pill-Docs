<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1342"></a>

# Module `pill_development_host::csharp::fast_compile`

Visibility: `{'restricted': {'parent': 1331, 'path': '::csharp'}}` · Source: `hosting\pill_development_host\src\csharp\fast_compile.rs:1`

In-process Roslyn compilation of the C# project, which replaces MSBuild on
a reload.
In-process Roslyn compilation of the C# project, for hot reload.

## Responsibilities

- Build the managed compiler assembly and load it into the running runtime.
- Replay the compiler command line the startup build captured.
- Decide when the capture no longer matches the project and a full build is
  needed.

## Design

A `dotnet build` of a one-file gameplay edit takes seconds, while the C#
compilation inside it takes tens of milliseconds. The rest of the time goes
to starting a process, evaluating MSBuild, running a restore pass and walking
the project reference graph, all to recompute an answer that has not changed
since the host started. This module skips all of it. The project's startup
build reports the exact `csc` invocation it used, and a reload replays that
invocation through Roslyn inside the host process. Replaying the capture is
what keeps the fast path faithful: the references, defines, language version,
analyzers and source list are the ones MSBuild chose.

Before a capture is replayed, it is checked against the project's source
files. A file added or removed under the watched source directory changes
the list MSBuild computed, so that case goes through a full build instead.
The full build also refreshes the capture, so the reload after it is fast
again.

## Module contents

### Structs
- [`FastCompiler`](struct.FastCompiler.md#rustdoc-item-1387) — The loaded managed compiler, bound to one project's captured command line.

### Enums
- [`FastCompileOutcome`](enum.FastCompileOutcome.md#rustdoc-item-1358) — What one in-process compile attempt produced.

### Functions
- [`collect_csharp_sources`](fn.collect_csharp_sources.md#rustdoc-item-1424) — Collect every `.cs` file under one directory, recursively.
- [`compiler_arguments_file`](fn.compiler_arguments_file.md#rustdoc-item-1420) — Workspace-relative path of the captured compiler command line for `config`.
- [`encode_path`](fn.encode_path.md#rustdoc-item-1421) — Encode a path as NUL-terminated UTF-8 for the managed entry points.
- [`sources_changed_since_capture`](fn.sources_changed_since_capture.md#rustdoc-item-1423) — Report whether the captured source list still matches the project.

### Type aliases
- [`CompileFn`](type.CompileFn.md#rustdoc-item-1349) — `int Compile(byte* responseFilePath, byte* outputAssemblyPath)`.
- [`CompilerAbiVersionFn`](type.CompilerAbiVersionFn.md#rustdoc-item-1347) — `uint CompilerAbiVersion()`.
- [`CopyDiagnosticsFn`](type.CopyDiagnosticsFn.md#rustdoc-item-1351) — `byte CopyDiagnostics(byte* output, uint capacity)`.
- [`DiagnosticsLengthFn`](type.DiagnosticsLengthFn.md#rustdoc-item-1350) — `uint DiagnosticsLength()`.
- [`WarmupFn`](type.WarmupFn.md#rustdoc-item-1348) — `byte Warmup(byte* responseFilePath)`.

### Constants
- [`COMPILE_STATUS_COMPILED`](constant.COMPILE_STATUS_COMPILED.md#rustdoc-item-1344) — `CompilerInterop.Compile` returned: the assembly was written.
- [`COMPILE_STATUS_FAILED`](constant.COMPILE_STATUS_FAILED.md#rustdoc-item-1345) — `CompilerInterop.Compile` returned: the project has errors.
- [`COMPILER_ABI_VERSION`](constant.COMPILER_ABI_VERSION.md#rustdoc-item-1341) — Export-contract version this host requires of the compiler assembly.
- [`COMPILER_INTEROP_TYPE`](constant.COMPILER_INTEROP_TYPE.md#rustdoc-item-1343) — Managed type holding the compiler's unmanaged exports.
- [`MAX_DIAGNOSTICS_BYTES`](constant.MAX_DIAGNOSTICS_BYTES.md#rustdoc-item-1346) — Upper bound for one compile's diagnostics text.
