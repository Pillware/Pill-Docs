<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7245"></a>

# Struct `pill_editor_core::session::ToastSession`

```rust
pub struct ToastSession;
```

Source: `editor\pill_editor_core\src\session.rs:465`

The toast stack's session state.

## Fields

<a id="rustdoc-item-7697"></a>

### `toasts`

```rust
toasts: std::collections::VecDeque<Toast>
```

The live toasts, oldest first.

<a id="rustdoc-item-7698"></a>

### `last_seq`

```rust
last_seq: Option<u64>
```

The newest notice id already queued; `None` until the first event.

<a id="rustdoc-item-7699"></a>

### `logged`

```rust
logged: Vec<u64>
```

The ids whose log line already went out, so a redrawn toast does not
flood the log.

<a id="rustdoc-item-7701"></a>

### `local_toast_count`

```rust
local_toast_count: u64
```

How many toasts the shell queued itself, counted up from
[`ToastSession::LOCAL_SEQ_BASE`](#rustdoc-item-7700) so a local toast can never collide
with a host notice's id.

## Associated functions and methods

<a id="rustdoc-item-7700"></a>

### `LOCAL_SEQ_BASE`

```rust
const LOCAL_SEQ_BASE: u64 = _;
```

The first id the shell's own toasts take, far above the host's notice
ids so the two can never collide.

<a id="rustdoc-item-7702"></a>

### `push_local`

```rust
pub fn push_local(self: &mut Self, level: NoticeLevel, text: String, frame_index: u64) -> u64;
```

Queue one toast the shell itself produced - a panel over its budget,
rather than something the host reported.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
- `SimdFrom<T, S>`
- `SimdInto<T, S>`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `IntoEither`
- `Instrument`
- `WithSubscriber`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `Default`
