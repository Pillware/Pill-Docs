<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-509"></a>

# Struct `pill_csharp_bridge::config::CSharpModuleConfig`

```rust
pub struct CSharpModuleConfig;
```

Source: `csharp\pill_csharp_bridge\src\config.rs:28`

Output locations and assembly names used by the managed project backend.

The runtime assembly hosts the collectible loader: the managed code that
loads the project assembly and can unload it again, so a reload can put a
new version in its place. The project assembly is loaded by the runtime, so
starting the managed module needs both assemblies and both output
directories.

## Fields

<a id="rustdoc-item-988"></a>

### `runtime_assembly_name`

```rust
runtime_assembly_name: String
```

Name of the runtime assembly that hosts the collectible loader.

<a id="rustdoc-item-989"></a>

### `runtime_output_subdirectory`

```rust
runtime_output_subdirectory: String
```

Output subdirectory for the runtime assembly, relative to the workspace root.

<a id="rustdoc-item-990"></a>

### `project_assembly_name`

```rust
project_assembly_name: String
```

Name of the project assembly loaded by the runtime.

<a id="rustdoc-item-991"></a>

### `project_output_subdirectory`

```rust
project_output_subdirectory: String
```

Output subdirectory for the project assembly, relative to the workspace root.

## Associated functions and methods

<a id="rustdoc-item-992"></a>

### `new`

```rust
pub fn new<impl Into<String>: Into<String>, impl Into<String>: Into<String>, impl Into<String>: Into<String>, impl Into<String>: Into<String>>(runtime_assembly_name: impl Into<String>, runtime_output_subdirectory: impl Into<String>, project_assembly_name: impl Into<String>, project_output_subdirectory: impl Into<String>) -> Self;
```

Creates a managed project configuration from its assembly names and
output directories.

A development host gets these values from
`pill_development_host`'s `ProjectModuleConfig::from_environment`, which
reads the project's `.csproj`. A shipping build has no project path to
read, so its generated bundle states the same four values directly. The
constructor exists because the type is `#[non_exhaustive]`, so another
crate cannot build it with a struct expression.

The two subdirectories are relative to the workspace root the caller
passes when it starts the project, not to any fixed location.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `CloneToUninit`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
- `ToOwned`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Debug`
- `Clone`
