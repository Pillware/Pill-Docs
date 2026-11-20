<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-191"></a>

# Enum `pill_editor::drag_out::DragOutOutcome`

```rust
pub enum DragOutOutcome { ... }
```

Source: `editor\pill_editor\src\drag_out.rs:113`

How a drag out ended, for the caller's log line.

Every outcome but `Unsupported` is produced by the Windows drag source, so
they are unconstructed where that source does not exist. The runner still
matches on all of them.

## Variants

<a id="rustdoc-item-185"></a>

### `Dropped`

```rust
Dropped
```

The drop target took the file under this effect.

<a id="rustdoc-item-186"></a>

### `Cancelled`

```rust
Cancelled
```

The drag ended with no target taking the file.

<a id="rustdoc-item-187"></a>

### `NoButtonHeld`

```rust
NoButtonHeld
```

The pointer button was not held, so no drag was started.

<a id="rustdoc-item-189"></a>

### `Unsupported`

```rust
Unsupported
```

The platform has no source for a file drag, so nothing was started.

Only the non-Windows [`start`](fn.start.md#rustdoc-item-188) answers this, so it is unconstructed on
Windows while the runner still matches on it.

<a id="rustdoc-item-190"></a>

### `Failed`

```rust
Failed
```

The drag could not be prepared, or the platform refused to run it.

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
- `SerializableAny`
- `Equivalent<K>`
- `SimdFrom<T, S>`
- `SimdInto<T, S>`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `WasmNotSendSync`
- `WasmNotSend`
- `WasmNotSync`
- `Debug`
- `Clone`
- `Copy`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
