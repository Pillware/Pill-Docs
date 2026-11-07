<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-184"></a>

# Struct `pill_master_renderer::error::CapturedErrors`

```rust
pub(crate) struct CapturedErrors;
```

Visibility: `crate` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\error.rs:57`

The errors that one block of GPU work provoked.

wgpu sorts errors into three classes. Each field holds the error for its
class, and stays `None` when no error of that class was reported.

## Fields

<a id="rustdoc-item-180"></a>

### `validation`

```rust
validation: Option<wgpu::Error>
```

An error wgpu raised while validating a call.

<a id="rustdoc-item-182"></a>

### `out_of_memory`

```rust
out_of_memory: Option<wgpu::Error>
```

The device ran out of memory.

<a id="rustdoc-item-183"></a>

### `internal`

```rust
internal: Option<wgpu::Error>
```

An internal error in the driver or wgpu.

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
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `WasmNotSendSync`
- `WasmNotSend`
- `WasmNotSync`
- `Debug`
- `Default`
