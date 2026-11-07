<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-611"></a>

# Module `pill_core::error::host`

Visibility: `{'restricted': {'parent': 612, 'path': '::error'}}` · Source: `engine\pill_core\src\error\host.rs:1`

The error type of every host subsystem, and the root that combines them.

## Responsibilities

- Declare the error each subsystem returns: configuration, build, library
  loading, extension loading, the file watcher, and the C# backend.
- Combine them into [`HostError`](enum.HostError.md#rustdoc-item-248) with transparent `#[from]` wrappers, so
  `?` works across a subsystem boundary and the original error plus its
  source chain survive.

## Design

Every subsystem variant carries one `#[message(...)]` definition. The
`#[engine_error]` macro turns that definition into the plain `Display`
text, a stable `namespace::variant` code, and the [`EngineMessage`](../render/trait.EngineMessage.md#rustdoc-item-245)
implementation that renders the same definition with semantic roles. No
variant names a colour, a glyph or any other way of showing a message.

## Module contents

### Enums
- [`BuildError`](enum.BuildError.md#rustdoc-item-273) — Project-module build execution failures.
- [`ConfigError`](enum.ConfigError.md#rustdoc-item-205) — Setup and configuration failures for a project and its modules.
- [`CSharpError`](enum.CSharpError.md#rustdoc-item-518) — Managed (C#) backend startup and registration failures.
- [`HostError`](enum.HostError.md#rustdoc-item-248) — Transparent composition of every host subsystem error.
- [`LibraryError`](enum.LibraryError.md#rustdoc-item-333) — Native project-library loading and initialization failures.
- [`ModuleError`](enum.ModuleError.md#rustdoc-item-380) — Extension loading and compatibility failures.
- [`WatcherError`](enum.WatcherError.md#rustdoc-item-421) — Source-watching startup failures.
