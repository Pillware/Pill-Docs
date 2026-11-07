<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3675"></a>

# Struct `pill_development_host::switches::HostSwitches`

```rust
pub(crate) struct HostSwitches;
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\switches.rs:60`

Which watchers this run starts, read once when the host starts.

## Fields

<a id="rustdoc-item-3672"></a>

### `hot_reloading`

```rust
hot_reloading: bool
```

Whether the project's and the extensions' source trees are watched.

<a id="rustdoc-item-3673"></a>

### `function_hot_patching`

```rust
function_hot_patching: bool
```

Whether an edit that arrives may be compiled into the running module.

<a id="rustdoc-item-3674"></a>

### `assets_hot_reloading`

```rust
assets_hot_reloading: bool
```

Whether the project's assets and both shader trees are watched.

## Associated functions and methods

<a id="rustdoc-item-3676"></a>

### `from_environment`

```rust
pub(crate) fn from_environment() -> Self;
```

Reads the three variables, treating an absent one as on.

<a id="rustdoc-item-3677"></a>

### `log`

```rust
pub(crate) fn log(self: &Self);
```

Writes the one line that says which posture this run is in.

The three values are log fields, so a test can read the boolean it
switched off without matching the whole sentence.

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
- `Clone`
- `Copy`
- `Debug`
- `Eq`
- `StructuralPartialEq`
- `PartialEq`
