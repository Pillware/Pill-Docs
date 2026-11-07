<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2059"></a>

# Struct `pill_editor_core::console::ConsoleState`

```rust
pub struct ConsoleState;
```

Source: `editor\pill_editor_core\src\console.rs:121`

The console's history: the captured lines, the filters that narrow them,
and the feed's read position.

## Fields

<a id="rustdoc-item-2053"></a>

### `lines`

```rust
lines: std::collections::VecDeque<ConsoleLine>
```

The kept lines, oldest first, capped at [`CONSOLE_LINES_MAX`](constant.CONSOLE_LINES_MAX.md#rustdoc-item-1958).

<a id="rustdoc-item-2055"></a>

### `last_seq`

```rust
last_seq: u64
```

The newest capture sequence already folded in.

<a id="rustdoc-item-2056"></a>

### `minimum_level`

```rust
minimum_level: u8
```

The lowest level shown: 3 hides trace and debug.

<a id="rustdoc-item-2057"></a>

### `search`

```rust
search: String
```

A case-insensitive substring the message or target must contain.

<a id="rustdoc-item-2058"></a>

### `channel`

```rust
channel: Option<ConsoleChannel>
```

Which channel to show; `None` shows both.

## Associated functions and methods

<a id="rustdoc-item-2060"></a>

### `push`

```rust
pub fn push(self: &mut Self, line: ConsoleLine);
```

Adds one captured line, dropping the oldest once the history is full.

<a id="rustdoc-item-2061"></a>

### `visible`

```rust
pub fn visible(self: &Self) -> impl Iterator<Item = _>;
```

The lines the filters leave, oldest first.

<a id="rustdoc-item-2062"></a>

### `visible_count`

```rust
pub fn visible_count(self: &Self) -> usize;
```

How many lines the filters leave.

<a id="rustdoc-item-2063"></a>

### `apply`

```rust
pub fn apply(self: &mut Self, filter_settings: &ConsoleFilterSettings);
```

Applies the filters the shell edited, so the next read of the history
uses them.

<a id="rustdoc-item-2065"></a>

### `settings`

```rust
pub fn settings(self: &Self) -> ConsoleFilterSettings;
```

The filters in force, so the executable can compare them with the
session's copy.

<a id="rustdoc-item-2066"></a>

### `view`

```rust
pub fn view(self: &Self) -> ConsoleView;
```

Builds the tab's view: the filters in force and the newest rows they
leave.

<a id="rustdoc-item-2067"></a>

### `notice_level`

```rust
pub fn notice_level(level: u8) -> NoticeLevel;
```

The notice level a capture level maps to: warning for 4, error for 5,
and a note for anything else.

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
