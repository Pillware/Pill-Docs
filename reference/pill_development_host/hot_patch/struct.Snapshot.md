<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2539"></a>

# Struct `pill_development_host::hot_patch::Snapshot`

```rust
pub(in hot_patch) struct Snapshot;
```

Visibility: `{'restricted': {'parent': 1968, 'path': '::hot_patch'}}` · Source: `hosting\pill_development_host\src\hot_patch\mod.rs:346`

One watched source file as this session last read it.

Contents and modification time are one value because they are one fact: the
time is when *these* contents were read. Kept in the type so no caller can
update one half without the other.

## Fields

<a id="rustdoc-item-2537"></a>

### `contents`

```rust
contents: String
```

The file's contents at the moment it was read.

<a id="rustdoc-item-2538"></a>

### `modified`

```rust
modified: Option<std::time::SystemTime>
```

The file's modification time at that read, or `None` when the
filesystem does not report one.

`None` means "read the file again every time". That is the safe choice:
a repeated read is cheap, while a missed edit costs a full reload.

The check compares this value with the file's current modification time,
not with the clock time. Both are file timestamps, and that matters:
Windows file times come from the coarse system clock and can lag `now()`
by a scheduler tick. A file written just after a snapshot could then
report an earlier time, and the edit would be missed.

## Associated functions and methods

<a id="rustdoc-item-2540"></a>

### `read`

```rust
pub(in hot_patch) fn read(path: &Path) -> Option<Self>;
```

Read one file into a snapshot, or `None` when it cannot be read.

The time is taken from the same file in the same moment as the contents,
so the two cannot describe different reads.

<a id="rustdoc-item-2541"></a>

### `is_current`

```rust
pub(in hot_patch) fn is_current(self: &Self, modified: Option<SystemTime>) -> bool;
```

Whether the file on disk still matches what this snapshot recorded.

An unknown time on either side answers `false`, so the caller re-reads.

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
