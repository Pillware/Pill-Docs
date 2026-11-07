<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-421"></a>

# Enum `pill_core::error::host::WatcherError`

```rust
pub enum WatcherError { ... }
```

Source: `engine\pill_core\src\error\host.rs:548`

Source-watching startup failures.

Distinct from build failures: the watcher has to run before a source change
can trigger a build.

The watcher's own error arrives as a boxed source. `pill_core` is the shared
dylib that every posture links, so it may not name `notify`. The real cause
still reaches the reader through `Error::source()` and the error chain.

## Variants

<a id="rustdoc-item-415"></a>

### `WatchDirectoryMissing`

```rust
WatchDirectoryMissing
```

The configured watch directory does not exist.

<a id="rustdoc-item-417"></a>

### `CreationFailed`

```rust
CreationFailed
```

The platform file watcher could not be created.

<a id="rustdoc-item-420"></a>

### `RegistrationFailed`

```rust
RegistrationFailed
```

The watch path could not be registered.

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
- `From<WatcherError>`
