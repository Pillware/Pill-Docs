<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-480"></a>

# Struct `pill_development_host::build_progress::PlannedBuild`

```rust
pub(crate) struct PlannedBuild;
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\build_progress.rs:41`

One module the startup will build, and what kind of module it is.

## Fields

<a id="rustdoc-item-478"></a>

### `module`

```rust
module: String
```

The module's name, as its build reports it.

<a id="rustdoc-item-479"></a>

### `kind`

```rust
kind: &'static str
```

Which kind of module it is: `extension`, `project` or `renderer`.

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
- `Equivalent<K>`
- `Debug`
- `Clone`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
