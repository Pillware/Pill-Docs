<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4268"></a>

# Struct `pill_engine_core::error::SystemFailure`

```rust
pub struct SystemFailure;
```

Source: `engine\pill_engine_core\src\error.rs:976`

One failed system execution recorded during a frame.

Pairs the failing system's name with its [`SystemError`](enum.SystemError.md#rustdoc-item-4320) and renders both
through the shared semantic protocol, so a reporter can log
`system <name> failed: <error>` in plain or styled form.

## Fields

<a id="rustdoc-item-4909"></a>

### `system`

```rust
system: String
```

Registered name of the system that failed.

<a id="rustdoc-item-4910"></a>

### `error`

```rust
error: SystemError
```

The error the system returned.

## Associated functions and methods

<a id="rustdoc-item-4911"></a>

### `new`

```rust
pub fn new(system: String, error: SystemError) -> Self;
```

Pairs one failing system's name with the error it returned.

#### Examples

```
use pill_engine::{SystemError, SystemFailure};

let failure = SystemFailure::new(
    String::from("ball_physics"),
    SystemError::MissingResource {
        name: String::from("SimulationTime"),
    },
);
assert_eq!(
    failure.to_string(),
    "system ball_physics failed: resource SimulationTime is missing from the world"
);
```

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
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Debug`
- `EngineMessage`
- `Display`
