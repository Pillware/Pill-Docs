<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2570"></a>

# Struct `pill_development_host::hot_patch::ClassifiedEdit`

```rust
pub(in hot_patch) struct ClassifiedEdit;
```

Visibility: `{'restricted': {'parent': 1968, 'path': '::hot_patch'}}` · Source: `hosting\pill_development_host\src\hot_patch\mod.rs:392`

One file's in-scope edit, with every field the later steps need.

The four fields belong together for the same reason [`Snapshot`](struct.Snapshot.md#rustdoc-item-2539) is one
value: the modification time says when these contents were read. If a later
step looked the file's time up again, it would pair these bytes with a newer
timestamp, and a save made during the patch would be recorded as already
delivered.

## Fields

<a id="rustdoc-item-2566"></a>

### `path`

```rust
path: std::path::PathBuf
```

The changed file.

<a id="rustdoc-item-2567"></a>

### `declarations`

```rust
declarations: Vec<source::HotFunction>
```

Its changed bodies, sorted by name.

<a id="rustdoc-item-2568"></a>

### `new_contents`

```rust
new_contents: String
```

The file's contents as read during classification.

<a id="rustdoc-item-2569"></a>

### `modified`

```rust
modified: Option<std::time::SystemTime>
```

The file's modification time when those contents were read, or `None`
when the filesystem would not report one.

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
- `Debug`
