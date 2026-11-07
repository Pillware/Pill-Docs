<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6174"></a>

# Struct `pill_editor_core::panels::PanelRegistrations`

```rust
pub struct PanelRegistrations;
```

Source: `editor\pill_editor_core\src\panels.rs:261`

The panel requests queued since the executable last looked.

A request is taken once and never read twice, so a request from a module
that has since unloaded cannot reach a live entry.

## Fields

<a id="rustdoc-item-6173"></a>

### `pending`

```rust
pending: Vec<PanelRequest>
```

The requests, oldest first.

## Associated functions and methods

<a id="rustdoc-item-6175"></a>

### `push`

```rust
pub fn push(self: &mut Self, request: PanelRequest);
```

Queues one request.

<a id="rustdoc-item-6176"></a>

### `drain`

```rust
pub fn drain(self: &mut Self) -> Vec<PanelRequest>;
```

Takes every queued request and leaves the queue empty.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
- `SimdFrom<T, S>`
- `SimdInto<T, S>`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `IntoEither`
- `Instrument`
- `WithSubscriber`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `Debug`
- `Default`
- `Resource`
