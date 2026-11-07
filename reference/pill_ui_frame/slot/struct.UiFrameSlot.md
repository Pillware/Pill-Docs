<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-389"></a>

# Struct `pill_ui_frame::slot::UiFrameSlot`

```rust
pub struct UiFrameSlot;
```

Source: `rendering\pill_ui_frame\src\slot.rs:41`

Holds the frame the last UI pass published until the renderer takes it.

## Fields

<a id="rustdoc-item-386"></a>

### `frame`

```rust
frame: Option<crate::frame::UiFrame>
```

The frame waiting for the renderer; `None` until the first publish.

<a id="rustdoc-item-388"></a>

### `texture_resend_generation`

```rust
texture_resend_generation: u64
```

The generation of the newest resend request a painter made.

A rebuilt renderer module starts with an empty texture map. The
producer, a shared library that outlives it, already carried every
image once, so nothing new is waiting to be sent. A painter that starts
empty asks for everything again; the producer compares this number with
the one it last served and re-carries every texture it holds when the
two differ.

## Associated functions and methods

<a id="rustdoc-item-390"></a>

### `new`

```rust
pub fn new() -> UiFrameSlot;
```

An empty slot.

<a id="rustdoc-item-391"></a>

### `is_empty`

```rust
pub fn is_empty(self: &Self) -> bool;
```

Whether nothing is waiting to be drained.

<a id="rustdoc-item-392"></a>

### `publish`

```rust
pub fn publish(self: &mut Self, frame: UiFrame);
```

Hand `frame` to the renderer, replacing anything not yet drained.

The newest frame is the one worth drawing. When a producer runs twice
between two renderer passes, the second frame replaces the first, so a
renderer never works through a queue of older frames.

<a id="rustdoc-item-393"></a>

### `take`

```rust
pub fn take(self: &mut Self) -> UiFrame;
```

Drain the slot, leaving it empty.

<a id="rustdoc-item-394"></a>

### `clear`

```rust
pub fn clear(self: &mut Self);
```

Forget what is waiting, keeping its allocations.

<a id="rustdoc-item-395"></a>

### `request_texture_resend`

```rust
pub fn request_texture_resend(self: &mut Self);
```

Ask the producer to carry every texture again.

A painter calls this when its texture map starts empty, which happens
after a renderer module is rebuilt. The producer carries a texture only
when its revision changed, so without this request a rebuilt painter
would wait for each image to change again. The full rule, covering the
revision set and this request, is in [`crate::texture`](../texture/index.md#rustdoc-item-347).

<a id="rustdoc-item-396"></a>

### `texture_resend_generation`

```rust
pub fn texture_resend_generation(self: &Self) -> u64;
```

The generation of the newest resend request a painter made.

A producer re-carries its textures when this differs from the value it
last served.

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
- `Debug`
- `Default`
- `Resource`
