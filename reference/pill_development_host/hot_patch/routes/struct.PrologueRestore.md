<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1977"></a>

# Struct `pill_development_host::hot_patch::routes::PrologueRestore`

```rust
pub(crate) struct PrologueRestore;
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\hot_patch\routes.rs:329`

One artifact's copy of a prologue-patched function, with the bytes it held
before the patch.

The bytes are saved so a rollback can put the function back exactly as the
artifact was built; overwriting code in place has no other way back. A later
rollback writes to the address, not to the artifact name: a reloaded
artifact is a new image, so its old addresses are dropped instead of being
used again.

## Fields

<a id="rustdoc-item-2164"></a>

### `artifact`

```rust
artifact: String
```

The label of the artifact the patched copy lives in, used in error
messages.

<a id="rustdoc-item-2165"></a>

### `address`

```rust
address: usize
```

Address of the function whose first bytes were overwritten.

<a id="rustdoc-item-2166"></a>

### `original`

```rust
original: Vec<u8>
```

The bytes that were at that address before the patch.

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
