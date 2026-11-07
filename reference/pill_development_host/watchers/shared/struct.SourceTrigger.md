<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1676"></a>

# Struct `pill_development_host::watchers::shared::SourceTrigger`

```rust
pub(crate) struct SourceTrigger;
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\watchers\shared.rs:85`

What one debounce window produced: when its signal fired, and how long the
save had waited before that.

## Fields

<a id="rustdoc-item-4384"></a>

### `generation`

```rust
generation: u64
```

The generation this trigger published, which is the value the frame
loop compares its own counter against.

<a id="rustdoc-item-4385"></a>

### `fired_at`

```rust
fired_at: pill_core::platform::Instant
```

Monotonic instant the signal was published.

<a id="rustdoc-item-4386"></a>

### `detection_delay_ms`

```rust
detection_delay_ms: f64
```

Milliseconds from the newest edited file's modification time to the
signal, debounce included; `NaN` when no timestamp could be read.

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
- `Copy`
- `Debug`
