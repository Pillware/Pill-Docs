<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-719"></a>

# Struct `pill_core::error::report::StyledDiagnosticProxy`

```rust
pub struct StyledDiagnosticProxy<E>;
```

Source: `engine\pill_core\src\error\report.rs:28`

Prints an engine error's message with terminal styling for a report.

Only the message is styled. The error's code, help, labels, severity and
source pass through unchanged. This adapter is allowed to add style because
it is the reporting boundary, not the error type itself.

## Fields

<a id="rustdoc-item-717"></a>

### `wrapped_error`

```rust
wrapped_error: E
```

_No documentation provided._

## Associated functions and methods

<a id="rustdoc-item-720"></a>

### `new`

```rust
pub fn new(wrapped_error: E) -> Self;
```

Wraps an engine error so a report prints its message with terminal
styling.

#### Examples

```
use pill_core::error::{BuildError, StyledDiagnosticProxy};

let proxy = StyledDiagnosticProxy::new(BuildError::Cancelled);
assert!(matches!(proxy.into_inner(), BuildError::Cancelled));
```

<a id="rustdoc-item-721"></a>

### `into_inner`

```rust
pub fn into_inner(self: Self) -> E;
```

Returns the engine error this proxy wraps.

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
- `Display`
- `Debug`
- `Error`
- `Diagnostic`
