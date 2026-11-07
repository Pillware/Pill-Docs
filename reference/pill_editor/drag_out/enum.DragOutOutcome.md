<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-188"></a>

# Enum `pill_editor::drag_out::DragOutOutcome`

```rust
pub enum DragOutOutcome { ... }
```

Source: `editor\pill_editor\src\drag_out.rs:88`

How a drag out ended, for the caller's log line.

## Variants

<a id="rustdoc-item-184"></a>

### `Dropped`

```rust
Dropped
```

The drop target took the file under this effect.

<a id="rustdoc-item-185"></a>

### `Cancelled`

```rust
Cancelled
```

The drag ended with no target taking the file.

<a id="rustdoc-item-186"></a>

### `NoButtonHeld`

```rust
NoButtonHeld
```

The pointer button was not held, so no drag was started.

<a id="rustdoc-item-187"></a>

### `Failed`

```rust
Failed
```

The drag could not be prepared, or OLE refused to run it.

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
