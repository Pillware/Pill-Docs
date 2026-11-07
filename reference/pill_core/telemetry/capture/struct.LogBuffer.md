<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1631"></a>

# Struct `pill_core::telemetry::capture::LogBuffer`

```rust
pub struct LogBuffer;
```

Source: `engine\pill_core\src\telemetry\capture.rs:69`

A clonable handle to a bounded ring of captured log lines.

## Fields

<a id="rustdoc-item-1630"></a>

### `shared_ring`

```rust
shared_ring: std::sync::Arc<std::sync::Mutex<Ring>>
```

_No documentation provided._

## Associated functions and methods

<a id="rustdoc-item-1632"></a>

### `with_capacity`

```rust
pub fn with_capacity(capacity: usize) -> Self;
```

Creates a buffer that keeps at most `capacity` lines; a capacity of 0
is treated as 1.

<a id="rustdoc-item-1633"></a>

### `lock_ring`

```rust
pub(in telemetry::capture) fn lock_ring(self: &Self) -> std::sync::MutexGuard<'_, Ring>;
```

Locks the ring and returns the guard, even if the lock was poisoned.

A poisoned lock still holds every line written before the panic. The
console exists to show what went wrong, so a panic in another thread
must not leave the panel empty for the rest of the session. Every
accessor here recovers the same way, as the locks in `metrics` and
`native_buffer` do.

<a id="rustdoc-item-1635"></a>

### `push`

```rust
pub fn push(self: &Self, level: u8, target: &str, message: String);
```

Appends one line and drops the oldest line once the ring is full.

<a id="rustdoc-item-1636"></a>

### `since`

```rust
pub fn since(self: &Self, after_sequence_number: u64) -> Vec<LogLine>;
```

Returns every line with a sequence number greater than
`after_sequence_number`, oldest first.

<a id="rustdoc-item-1637"></a>

### `latest_seq`

```rust
pub fn latest_seq(self: &Self) -> u64;
```

The sequence number of the newest line (0 while empty).

<a id="rustdoc-item-1638"></a>

### `len`

```rust
pub fn len(self: &Self) -> usize;
```

The number of lines the ring holds now.

<a id="rustdoc-item-1639"></a>

### `is_empty`

```rust
pub fn is_empty(self: &Self) -> bool;
```

Whether the ring holds no lines.

<a id="rustdoc-item-1640"></a>

### `capacity`

```rust
pub fn capacity(self: &Self) -> usize;
```

The number of lines the ring holds before it starts dropping the
oldest ones.

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
- `Clone`
- `Default`
- `Debug`
