<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3641"></a>

# Enum `pill_development_host::reload::LoadValidation`

```rust
pub(crate) enum LoadValidation { ... }
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\reload.rs:300`

What to check on a freshly loaded replacement before it is committed.

## Variants

<a id="rustdoc-item-3639"></a>

### `None`

```rust
None
```

Nothing. This host builds the subject from its own workspace, so the
contract always holds.

<a id="rustdoc-item-3640"></a>

### `ModuleAbi`

```rust
ModuleAbi
```

The optional module ABI revision export. Any `cargo build` can rebuild
an extension, so the revision is checked instead of assumed.

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
