<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-585"></a>

# Struct `pill_editor::runner::PressPick`

```rust
pub(in runner) struct PressPick;
```

Visibility: `{'restricted': {'parent': 539, 'path': '::runner'}}` · Source: `editor\pill_editor\src\runner\mod.rs:4603`

The pick a scene press asked: the view and press pixel it happened at,
and the request id its answer will carry.

## Fields

<a id="rustdoc-item-2021"></a>

### `view`

```rust
view: usize
```

The view the press landed in.

<a id="rustdoc-item-2022"></a>

### `x`

```rust
x: f32
```

The press pixel's horizontal coordinate, in the view's physical surface
pixels.

<a id="rustdoc-item-2023"></a>

### `y`

```rust
y: f32
```

The press pixel's vertical coordinate, in the view's physical surface
pixels.

<a id="rustdoc-item-2024"></a>

### `request_id`

```rust
request_id: u64
```

The pick request the answer is matched by.

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
