<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-405"></a>

# Struct `pill_engine::declarations::DeclarationBaseline`

```rust
pub struct DeclarationBaseline;
```

Source: `engine\pill_engine\src\declarations.rs:101`

How many declarations of each kind the process held when an artifact's
image was mapped.

The registry lists the newest submission first, so an entry point keeps the
first `total - baseline` entries: exactly the declarations its image added.
The declarations the process already holds - an earlier module's, or a
generation the host keeps mapped after a reload - are left alone. A
statically linked build and a test binary have no baseline and keep
everything.

## Fields

<a id="rustdoc-item-399"></a>

### `components`

```rust
components: usize
```

Components declared before the image was mapped.

<a id="rustdoc-item-400"></a>

### `systems`

```rust
systems: usize
```

Systems declared before the image was mapped.

<a id="rustdoc-item-401"></a>

### `scripts`

```rust
scripts: usize
```

Script components declared before the image was mapped.

<a id="rustdoc-item-402"></a>

### `resources`

```rust
resources: usize
```

Resources declared before the image was mapped.

<a id="rustdoc-item-403"></a>

### `assets`

```rust
assets: usize
```

Asset types declared before the image was mapped.

<a id="rustdoc-item-404"></a>

### `value_types`

```rust
value_types: usize
```

Value types declared before the image was mapped.

## Associated functions and methods

<a id="rustdoc-item-406"></a>

### `current`

```rust
pub fn current() -> Self;
```

Counts every declaration the process holds now.

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
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `Equivalent<K>`
- `Clone`
- `Copy`
- `Debug`
- `Default`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
