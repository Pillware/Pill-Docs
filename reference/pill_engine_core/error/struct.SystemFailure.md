<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5972"></a>

# Struct `pill_engine_core::error::SystemFailure`

```rust
pub struct SystemFailure;
```

Source: `engine\pill_engine_core\src\error.rs:976`

One failed system execution recorded during a frame.

Pairs the failing system's name with its [`SystemError`](enum.SystemError.md#rustdoc-item-6033) and renders both
through the shared semantic protocol, so a reporter can log
`system <name> failed: <error>` in plain or styled form.

## Fields

<a id="rustdoc-item-6462"></a>

### `system`

```rust
system: String
```

Registered name of the system that failed.

<a id="rustdoc-item-6463"></a>

### `error`

```rust
error: SystemError
```

The error the system returned.

## Associated functions and methods

<a id="rustdoc-item-6464"></a>

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
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `Debug`
- `EngineMessage`
- `Display`
