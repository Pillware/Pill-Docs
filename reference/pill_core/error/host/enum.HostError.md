<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-248"></a>

# Enum `pill_core::error::host::HostError`

```rust
pub enum HostError { ... }
```

Source: `engine\pill_core\src\error\host.rs:796`

Transparent composition of every host subsystem error.

A subsystem function returns its own narrow error. [`HostError`](#rustdoc-item-248) exists
only at the boundary where `?` moves from one subsystem to another.

## Variants

<a id="rustdoc-item-558"></a>

### `Config`

```rust
Config
```

Configuration validation failed.

<a id="rustdoc-item-560"></a>

### `Build`

```rust
Build
```

The project-module build failed.

<a id="rustdoc-item-562"></a>

### `Library`

```rust
Library
```

Native library loading or initialization failed.

<a id="rustdoc-item-564"></a>

### `Watcher`

```rust
Watcher
```

The source watcher could not start.

<a id="rustdoc-item-566"></a>

### `Module`

```rust
Module
```

An extension failed to load or is incompatible.

<a id="rustdoc-item-568"></a>

### `CSharp`

```rust
CSharp
```

The managed backend failed to start.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
- `ToString`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `Debug`
- `Diagnostic`
- `Error`
- `Display`
- `From<ConfigError>`
- `From<BuildError>`
- `From<LibraryError>`
- `From<WatcherError>`
- `From<ModuleError>`
- `From<CSharpError>`
- `EngineMessage`
