<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1110"></a>

# Enum `pill_renderer_api::surface::PresentPreference`

```rust
pub enum PresentPreference { ... }
```

Source: `rendering\pill_renderer_api\src\surface.rs:53`

How a surface would like to present.

The renderer uses the requested mode when the surface supports it, and
vsync otherwise. Vsync is the default because every surface supports it.

## Variants

<a id="rustdoc-item-1107"></a>

### `Vsync`

```rust
Vsync
```

Wait for the display (`Fifo`).

<a id="rustdoc-item-1108"></a>

### `LowLatency`

```rust
LowLatency
```

Replace a queued frame instead of waiting (`Mailbox`), for a surface
the frontend paces itself.

<a id="rustdoc-item-1109"></a>

### `Immediate`

```rust
Immediate
```

Present at once, tearing allowed (`Immediate`).

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
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `Equivalent<K>`
- `Debug`
- `Clone`
- `Copy`
- `Default`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
