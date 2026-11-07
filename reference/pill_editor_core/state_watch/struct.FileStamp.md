<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-8052"></a>

# Struct `pill_editor_core::state_watch::FileStamp`

```rust
pub struct FileStamp;
```

Source: `editor\pill_editor_core\src\state_watch.rs:51`

The metadata of a state file, which the editor compares from frame to frame
to decide whether the file needs reading at all.

A missing file stamps as the default. No file that exists has that stamp,
so creating the file is noticed.

## Fields

<a id="rustdoc-item-8048"></a>

### `modification_time`

```rust
modification_time: Option<std::time::SystemTime>
```

The file's modification time, when the filesystem reports one.

<a id="rustdoc-item-8051"></a>

### `length_bytes`

```rust
length_bytes: u64
```

The file's length in bytes.

## Associated functions and methods

<a id="rustdoc-item-8053"></a>

### `of`

```rust
pub fn of(path: &Path) -> Self;
```

Returns the stamp of `path`, or the default stamp when the file cannot
be read.

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
- `Equivalent<K>`
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
- `Copy`
- `Debug`
- `Default`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
