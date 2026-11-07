<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-498"></a>

# Enum `pill_player::runtime::PackSource`

```rust
pub enum PackSource { ... }
```

Source: `hosting\pill_player\src\runtime.rs:581`

Where a project's asset pack came from, which the mount logs.

## Variants

<a id="rustdoc-item-496"></a>

### `Embedded`

```rust
Embedded
```

Baked into the binary by the shipping bundle.

<a id="rustdoc-item-497"></a>

### `Fetched`

```rust
Fetched
```

Downloaded beside the page by a browser frontend.

## Associated functions and methods

<a id="rustdoc-item-499"></a>

### `mounted_message`

```rust
pub(in runtime) fn mounted_message(self: Self) -> &'static str;
```

The mount line for this source. Each source has its own literal rather
than one format string, so the line is a fixed log token.

<a id="rustdoc-item-500"></a>

### `indexed_message`

```rust
pub(in runtime) fn indexed_message(self: Self) -> &'static str;
```

The database-indexed line for this source, likewise a fixed token.

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
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Debug`
- `Clone`
- `Copy`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
