<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-184"></a>

# Enum `pill_editor::drag_out::DropEffect`

```rust
pub enum DropEffect { ... }
```

Source: `editor\pill_editor\src\drag_out.rs:136`

The effect a drop target reported, without naming the platform's own type.

`Ole`'s `DROPEFFECT` exists only where the `windows` crate does, and the
outcome has to be nameable everywhere the runner matches on it.

## Variants

<a id="rustdoc-item-250"></a>

### `Copy`

```rust
Copy
```

The target copied the file.

<a id="rustdoc-item-251"></a>

### `Move`

```rust
Move
```

The target moved the file.

<a id="rustdoc-item-252"></a>

### `Link`

```rust
Link
```

The target linked to the file.

<a id="rustdoc-item-254"></a>

### `Other`

```rust
Other
```

Any other effect, kept as the platform's raw code.

## Associated functions and methods

<a id="rustdoc-item-255"></a>

### `code`

```rust
pub fn code(self: Self) -> u32;
```

The platform's raw effect code, which the runner logs.

<a id="rustdoc-item-256"></a>

### `from_code`

```rust
pub(in drag_out) fn from_code(code: u32) -> Self;
```

The effect one raw platform code means.

The codes are the documented `DROPEFFECT` values, which are the same
numbers the log line has always carried.

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
