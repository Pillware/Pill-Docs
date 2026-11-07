<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1023"></a>

# Module `pill_csharp_bridge::config`

Visibility: `crate` · Source: `csharp\pill_csharp_bridge\src\config.rs:1`

Output locations and assembly names of a managed project.
The assembly names and output directories of a managed project.

## Responsibilities

- Names the runtime assembly and the project assembly, and gives the output
  directory of each. Together these four values are the whole configuration
  a managed project needs to start.

## Design

A development host derives these values from the project's `.csproj`. A
shipping bundle states them directly. Neither source is read here: this
crate never parses project settings.

## Module contents

### Structs
- [`CSharpModuleConfig`](struct.CSharpModuleConfig.md#rustdoc-item-509) — Output locations and assembly names used by the managed project backend.
