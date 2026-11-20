<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-867"></a>

# Struct `pill_master_renderer::overlay::font::Atlas`

```rust
pub(in overlay) struct Atlas;
```

Visibility: `{'restricted': {'parent': 854, 'path': '::overlay'}}` · Source: `extensions\pill_master_renderer\modules\runtime\gpu\src\overlay\font.rs:125`

The atlas: its size and one coverage byte per texel, row by row.

## Fields

<a id="rustdoc-item-864"></a>

### `width`

```rust
width: u32
```

Width in texels.

<a id="rustdoc-item-865"></a>

### `height`

```rust
height: u32
```

Height in texels.

<a id="rustdoc-item-866"></a>

### `texels`

```rust
texels: Vec<u8>
```

`255` where a glyph pixel is lit, `0` elsewhere.

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
