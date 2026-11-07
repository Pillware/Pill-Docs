<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-641"></a>

# Struct `pill_master_renderer::preview::PreviewParameters`

```rust
pub(in preview) struct PreviewParameters;
```

Visibility: `{'restricted': {'parent': 592, 'path': '::preview'}}` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\preview.rs:100`

The uniform a texture or material preview writes.

## Fields

<a id="rustdoc-item-639"></a>

### `color`

```rust
color: [f32; 4]
```

The material's colour. A texture preview leaves it unused.

<a id="rustdoc-item-640"></a>

### `mode`

```rust
mode: [u32; 4]
```

The [`PreviewMode`](enum.PreviewMode.md#rustdoc-item-599) value the shader compares against, stored in the
first word of a vec4. The other three words keep the uniform a multiple
of 16 bytes.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `CloneToUninit`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
- `ToOwned`
- `AnyBitPattern`
- `CheckedBitPattern`
- `NoUninit`
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
- `Clone`
- `Copy`
- `Debug`
- `Pod`
- `Zeroable`
