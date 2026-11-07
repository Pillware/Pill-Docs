<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1737"></a>

# Enum `pill_core::telemetry::TelemetryError`

```rust
pub enum TelemetryError { ... }
```

Source: `engine\pill_core\src\telemetry.rs:903`

Configuration or installation failures of the telemetry stack.

Each variant carries the input that failed, or a rendered description of
the failure, so a caller can show a precise message.

## Variants

<a id="rustdoc-item-1735"></a>

### `InvalidFilter`

```rust
InvalidFilter
```

A complete `RUST_LOG`-style filter string could not be parsed.

<a id="rustdoc-item-1736"></a>

### `InvalidDirective`

```rust
InvalidDirective
```

One `target=level` directive could not be parsed.

<a id="rustdoc-item-1955"></a>

### `Reload`

```rust
Reload
```

A live filter reload failed.

<a id="rustdoc-item-1919"></a>

### `FileOutput`

```rust
FileOutput
```

The file layer could not be opened.

<a id="rustdoc-item-1920"></a>

### `InstallFailed`

```rust
InstallFailed
```

The one-time subscriber install failed.

The install is attempted at most once per process; the failure is
rendered into a message and cached so every concurrent or later caller
sees the same error instead of silently re-attempting the install.

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
- `Error`
- `Display`
