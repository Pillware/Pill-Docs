<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2408"></a>

# Enum `pill_editor_core::editor_files::FileError`

```rust
pub enum FileError { ... }
```

Source: `editor\pill_editor_core\src\editor_files.rs:56`

What can go wrong with one of the editor's state files.

## Variants

<a id="rustdoc-item-2398"></a>

### `Read`

```rust
Read
```

The file could not be read. A missing file is reported as `Ok(None)`,
not as this.

<a id="rustdoc-item-2401"></a>

### `Parse`

```rust
Parse
```

The file holds text that is not the YAML the caller expects.

<a id="rustdoc-item-2404"></a>

### `Serialize`

```rust
Serialize
```

The document could not be serialized.

<a id="rustdoc-item-2407"></a>

### `Write`

```rust
Write
```

The file could not be written or replaced.

## Associated functions and methods

<a id="rustdoc-item-2409"></a>

### `message`

```rust
pub fn message(self: &Self) -> String;
```

The one-line text for this error. `Display` prints it, and the Console
tab and the callers that report a `String` show it.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
- `ToString`
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
- `Display`
- `Error`
