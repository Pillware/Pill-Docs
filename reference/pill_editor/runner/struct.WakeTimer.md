<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1149"></a>

# Struct `pill_editor::runner::WakeTimer`

```rust
pub(in runner) struct WakeTimer;
```

Visibility: `{'restricted': {'parent': 483, 'path': '::runner'}}` · Source: `editor\pill_editor\src\runner\mod.rs:601`

The loop's timed wake: the moment the next frame is owed.

`std::time::Instant` is the type `ControlFlow::WaitUntil` takes. This
frontend is native-only, so the platform clock's rule for the web does not
apply here: the deadline is never compared across targets.

## Fields

<a id="rustdoc-item-1182"></a>

### `deadline`

```rust
deadline: Option<std::time::Instant>
```

When the loop must wake, when it is waiting for a deadline.

## Associated functions and methods

<a id="rustdoc-item-1184"></a>

### `new`

```rust
pub(in runner) fn new() -> Self;
```

A timer with nothing scheduled.

<a id="rustdoc-item-1185"></a>

### `schedule`

```rust
pub(in runner) fn schedule(self: &mut Self, delay: Duration);
```

Schedule the next wake `delay` from now.

<a id="rustdoc-item-1186"></a>

### `clear`

```rust
pub(in runner) fn clear(self: &mut Self);
```

Forget any scheduled wake: something asked for a frame now.

<a id="rustdoc-item-1187"></a>

### `take_due`

```rust
pub(in runner) fn take_due(self: &mut Self) -> bool;
```

Whether the deadline has passed, clearing it when it has.

<a id="rustdoc-item-1188"></a>

### `control_flow`

```rust
pub(in runner) fn control_flow(self: &Self) -> ControlFlow;
```

What the loop should do until the next event.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `SimdFrom<T, S>`
- `SimdInto<T, S>`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `WasmNotSendSync`
- `WasmNotSend`
- `WasmNotSync`
