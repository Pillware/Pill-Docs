<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-869"></a>

# Struct `pill_engine_core::asset::Handle`

```rust
pub struct Handle<T: Asset>;
```

Source: `engine\pill_engine_core\src\asset.rs:264`

A typed, generational reference to one asset in the [`AssetManager`](struct.AssetManager.md#rustdoc-item-714).

A handle is cheap to copy and holds no borrow, so one can live inside a
component, inside another asset or inside project state without keeping the
store alive.

A handle is only meaningful to the [`AssetManager`](struct.AssetManager.md#rustdoc-item-714) that issued it. Passing
one to a different manager is a programming error. It returns `None`, or -
if that manager happens to have a live slot at the same index and
generation - it names an unrelated asset. Worlds hold one manager, so this
does not happen in ordinary use.

## Fields

<a id="rustdoc-item-864"></a>

### `index`

```rust
index: u32
```

Slot index within this type's column.

<a id="rustdoc-item-866"></a>

### `generation`

```rust
generation: u32
```

Generation of the slot at the time this handle was issued.

Compared on every lookup: a mismatch means the slot was freed and
possibly refilled, so this handle no longer refers to a live asset.

<a id="rustdoc-item-867"></a>

### `_marker`

```rust
_marker: std::marker::PhantomData<fn () -> T>
```

Marks `T` without storing one; the handle owns no asset data.

## Associated functions and methods

<a id="rustdoc-item-870"></a>

### `INVALID`

```rust
const INVALID: Self = _;
```

Sentinel for an optional asset reference that has not been assigned.

<a id="rustdoc-item-872"></a>

### `from_raw`

```rust
pub fn from_raw(index: u32, generation: u32) -> Self;
```

Builds a handle from a raw index and generation.

This trusts its arguments the way [`Deserialize`](serde::Deserialize)
does: the caller promises the pair came from a handle this asset manager
issued. It exists for boundaries that carry only the two integers
instead of a live handle value, such as the C# mirror.

<a id="rustdoc-item-873"></a>

### `index`

```rust
pub fn index(self: Self) -> u32;
```

Returns the slot index this handle addresses.

<a id="rustdoc-item-874"></a>

### `generation`

```rust
pub fn generation(self: Self) -> u32;
```

Returns the generation this handle was issued against.

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
- `DeserializeOwned`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Default`
- `Serialize`
- `Deserialize<'de>`
- `Clone`
- `Copy`
- `PartialEq`
- `Eq`
- `Hash`
- `Debug`
- `MirrorValue`
- `MirrorReturn`
