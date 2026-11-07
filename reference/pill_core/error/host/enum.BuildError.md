<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-273"></a>

# Enum `pill_core::error::host::BuildError`

```rust
pub enum BuildError { ... }
```

Source: `engine\pill_core\src\error\host.rs:266`

Project-module build execution failures.

One variant for each step of running the external command that builds a
project module: starting it, waiting for it, its exit status, its deadline
and its cancellation. Two more cover the artifact it should have written:
one that never appeared, and one that was staged and then changed on disk.

## Variants

<a id="rustdoc-item-249"></a>

### `EmptyCommand`

```rust
EmptyCommand
```

The build command list is empty.

<a id="rustdoc-item-252"></a>

### `SpawnFailed`

```rust
SpawnFailed
```

The build executable could not be spawned.

<a id="rustdoc-item-255"></a>

### `WaitFailed`

```rust
WaitFailed
```

The build child could not be waited on.

<a id="rustdoc-item-259"></a>

### `CommandFailed`

```rust
CommandFailed
```

The build command exited with a non-zero status.

<a id="rustdoc-item-262"></a>

### `TimedOut`

```rust
TimedOut
```

The build command exceeded its wall-clock deadline.

<a id="rustdoc-item-263"></a>

### `Cancelled`

```rust
Cancelled
```

Sources changed again while the build was running.

<a id="rustdoc-item-265"></a>

### `OutputMissing`

```rust
OutputMissing
```

The build succeeded but no artifact appeared at the configured path.

<a id="rustdoc-item-269"></a>

### `HotArtifactCopyFailed`

```rust
HotArtifactCopyFailed
```

The built library could not be staged into its hot-load directory.

<a id="rustdoc-item-272"></a>

### `StagedArtifactChanged`

```rust
StagedArtifactChanged
```

A staged artifact changed after the build that produced it finished.

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
- `EngineMessage`
- `From<BuildError>`
