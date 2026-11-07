<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3035"></a>

# Struct `pill_development_host::layout_record::LockfileVersions`

```rust
pub(crate) struct LockfileVersions;
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\layout_record.rs:257`

The versions the workspace lockfile resolves for each package.

A package can appear more than once when two dependents pin different
versions, so each name maps to a list. The lockfile is read once per load
rather than once per resource.

## Fields

<a id="rustdoc-item-3034"></a>

### `versions_by_package`

```rust
versions_by_package: std::collections::BTreeMap<String, Vec<String>>
```

_No documentation provided._

## Associated functions and methods

<a id="rustdoc-item-3036"></a>

### `read`

```rust
pub(crate) fn read(path: &Path) -> Self;
```

Reads the lockfile at `path`.

A missing or unparsable lockfile yields an empty map, so every declared
crate reads as "not in the lockfile" - the same answer a crate that was
never there gets. The load itself does not fail over a record.

<a id="rustdoc-item-3037"></a>

### `of`

```rust
pub(in layout_record) fn of(self: &Self, name: &str) -> Vec<String>;
```

The versions resolved for `name`, empty when the lockfile lists none.

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
- `Debug`
- `Default`
