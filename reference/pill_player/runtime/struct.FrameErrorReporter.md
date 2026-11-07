<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-309"></a>

# Struct `pill_player::runtime::FrameErrorReporter`

```rust
pub(in runtime) struct FrameErrorReporter;
```

Visibility: `{'restricted': {'parent': 284, 'path': '::runtime'}}` · Source: `hosting\pill_player\src\runtime.rs:377`

Collapses repeated frame errors per message.

A frame can report several failures - the scheduler pass and any number of
failing systems - so the state is kept per message rather than per frame.
Each distinct message reaches the log at most once per
[`FRAME_ERROR_REPORT_INTERVAL`](constant.FRAME_ERROR_REPORT_INTERVAL.md#rustdoc-item-282), and its line carries the repeats it did not
print, so one broken system can neither flood the terminal nor silence
another. Only the messages reported within the last interval are remembered:
an entry whose repeats stopped arriving is dropped by the next report that
arrives, and printed first when it counted any repeats, because nothing else
would ever report its count.

## Fields

<a id="rustdoc-item-381"></a>

### `entries`

```rust
entries: std::collections::HashMap<String, FrameErrorEntry>
```

One entry per message reported within the last interval.

## Associated functions and methods

<a id="rustdoc-item-384"></a>

### `new`

```rust
pub(in runtime) fn new() -> Self;
```

A reporter that has not seen a message yet.

<a id="rustdoc-item-322"></a>

### `report`

```rust
pub(in runtime) fn report(self: &mut Self, message: &str, now: Instant) -> Vec<FrameErrorLine>;
```

Reports one message and returns the lines to log.

A message that printed less than [`FRAME_ERROR_REPORT_INTERVAL`](constant.FRAME_ERROR_REPORT_INTERVAL.md#rustdoc-item-282) ago
only has its repeat counted, which allocates nothing. A message that
comes back after the interval prints once with every repeat counted
since its last line, instead of printing once for the old interval and
once for the new one.

<a id="rustdoc-item-386"></a>

### `flush_quiet_messages`

```rust
pub(in runtime) fn flush_quiet_messages(self: &mut Self, except: &str, now: Instant) -> Vec<FrameErrorLine>;
```

Drops every entry except `except` whose repeats stopped arriving at
least [`FRAME_ERROR_REPORT_INTERVAL`](constant.FRAME_ERROR_REPORT_INTERVAL.md#rustdoc-item-282) ago, and returns the lines their
counted repeats still owe the log.

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
