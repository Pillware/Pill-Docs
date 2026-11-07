<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-8099"></a>

# Struct `pill_editor_core::state_watch::StateFileWatch`

```rust
pub struct StateFileWatch;
```

Source: `editor\pill_editor_core\src\state_watch.rs:77`

One state file the editor polls.

It holds the file's path, the stamp seen when its text was last read, the
text that read produced, and whether the file has been read at all.

## Fields

<a id="rustdoc-item-8095"></a>

### `path`

```rust
path: std::path::PathBuf
```

_No documentation provided._

<a id="rustdoc-item-8096"></a>

### `last_read_stamp`

```rust
last_read_stamp: FileStamp
```

_No documentation provided._

<a id="rustdoc-item-8097"></a>

### `text`

```rust
text: Option<String>
```

_No documentation provided._

<a id="rustdoc-item-8098"></a>

### `has_read_once`

```rust
has_read_once: bool
```

_No documentation provided._

## Associated functions and methods

<a id="rustdoc-item-8100"></a>

### `new`

```rust
pub fn new(path: PathBuf) -> Self;
```

Starts a watch on `path` that has not read the file yet.

<a id="rustdoc-item-8101"></a>

### `path`

```rust
pub fn path(self: &Self) -> &Path;
```

Returns the path this watch polls.

<a id="rustdoc-item-8102"></a>

### `text`

```rust
pub fn text(self: &Self) -> Option<&str>;
```

Returns the text of the most recent read. It is `None` before the first
read and when that read did not succeed.

<a id="rustdoc-item-8103"></a>

### `poll`

```rust
pub fn poll(self: &mut Self, frame_index: u64) -> Option<Option<String>>;
```

Re-reads the file when its stamp moved or when the regular re-read is
due.

`frame_index` is the editor's frame counter. It decides when the
regular re-read falls, once every [`STATE_FILE_POLL_FRAMES`](constant.STATE_FILE_POLL_FRAMES.md#rustdoc-item-8047) frames.

Returns `None` when the file is unchanged, `Some(None)` when it is gone
or could not be read, and `Some(Some(text))` when the text is new. The
first poll always reads, whatever the stamp says.

<a id="rustdoc-item-8104"></a>

### `poll_now`

```rust
pub fn poll_now(self: &mut Self) -> Option<Option<String>>;
```

Re-reads the file whatever its stamp says, and returns it only when the
text changed.

The answer has the same three shapes as [`poll`](#rustdoc-item-8103). A caller
whose apply can fail calls this until it has applied once, so a file
that could not be applied is retried instead of being skipped as
unchanged.

<a id="rustdoc-item-8105"></a>

### `read`

```rust
pub(in state_watch) fn read(self: &mut Self) -> Option<Option<String>>;
```

Reads the file and returns its text when that text differs from the
cached one, or when this is the first read.

A file that cannot be read counts as an absent one.

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
- `Debug`
- `Default`
