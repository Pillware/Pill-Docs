<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-383"></a>

# Struct `pill_player::runtime::FrameErrorEntry`

```rust
pub(in runtime) struct FrameErrorEntry;
```

Visibility: `{'restricted': {'parent': 284, 'path': '::runtime'}}` · Source: `hosting\pill_player\src\runtime.rs:383`

What the reporter remembers about one message.

## Fields

<a id="rustdoc-item-411"></a>

### `last_seen`

```rust
last_seen: pill_core::platform::Instant
```

When this message last reached the reporter.

<a id="rustdoc-item-412"></a>

### `printed_at`

```rust
printed_at: pill_core::platform::Instant
```

When it last reached the log.

<a id="rustdoc-item-413"></a>

### `suppressed_repeat_count`

```rust
suppressed_repeat_count: u64
```

Repeats counted but not printed since then.

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
