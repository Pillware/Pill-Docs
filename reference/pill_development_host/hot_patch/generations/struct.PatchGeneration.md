<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2011"></a>

# Struct `pill_development_host::hot_patch::generations::PatchGeneration`

```rust
pub struct PatchGeneration;
```

Source: `hosting\pill_development_host\src\hot_patch\generations.rs:100`

One entry in a function's patch history, for hosts and tooling.

## Fields

<a id="rustdoc-item-2007"></a>

### `function`

```rust
function: String
```

Qualified name of the patched function.

<a id="rustdoc-item-2008"></a>

### `number`

```rust
number: u32
```

One-based position in the history; the code the artifact was built with
is generation zero and has no entry.

<a id="rustdoc-item-2009"></a>

### `address`

```rust
address: usize
```

The address that makes this generation active.

<a id="rustdoc-item-2010"></a>

### `age_seconds`

```rust
age_seconds: f64
```

Seconds since this generation was installed.

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
