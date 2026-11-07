<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5696"></a>

# Struct `pill_editor_core::notices::EditorNotices`

```rust
pub struct EditorNotices;
```

Source: `editor\pill_editor_core\src\notices.rs:79`

The notices the executable publishes for the shell when the host or the
editor has something to say.

## Fields

<a id="rustdoc-item-5692"></a>

### `revision`

```rust
revision: u64
```

How many times the executable has republished this resource; it only
moves when `problems` or `events` changed.

<a id="rustdoc-item-5693"></a>

### `problems`

```rust
problems: Vec<ProblemRow>
```

The current problems, one row per diagnostic, unsorted: `module` names
what reported the row. A module that reloads cleanly drops its rows.

<a id="rustdoc-item-5694"></a>

### `events`

```rust
events: Vec<Notice>
```

The toast events; the shell reads them in order and skips the ones it
has already shown, keyed by [`Notice::seq`](struct.Notice.md#rustdoc-item-5611).

<a id="rustdoc-item-5695"></a>

### `next_event_seq`

```rust
next_event_seq: u64
```

The id the next entry added to `events` takes.

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
- `SerializableAny`
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
- `Clone`
- `Debug`
- `Default`
- `Resource`
