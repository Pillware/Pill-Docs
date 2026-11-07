<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-452"></a>

# Enum `pill_renderer_api::frame::PassTarget`

```rust
pub enum PassTarget { ... }
```

Source: `rendering\pill_renderer_api\src\frame.rs:65`

Where a pass reads from and writes to.

## Variants

<a id="rustdoc-item-449"></a>

### `Surface`

```rust
Surface
```

The swapchain image. No pass can sample it, so a pass that writes here
belongs at the end of the chain: the renderer warns when a chain has
several surface passes, or has its one anywhere but last.

<a id="rustdoc-item-451"></a>

### `Offscreen`

```rust
Offscreen
```

An offscreen colour target, named so that later passes can sample it.

The renderer owns these targets. A name that no earlier pass declares
makes the build of the pass fail, and the log names the pass and the
target, so the mistake never reaches the window as a flat picture.

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
- `DeserializeOwned`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Clone`
- `Debug`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
- `Default`
- `Serialize`
- `Deserialize<'de>`
