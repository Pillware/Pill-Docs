<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-232"></a>

# Enum `pill_development_host::analytics::EventKind`

```rust
pub(crate) enum EventKind { ... }
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\analytics.rs:725`

How a generation of code reached the running process.

Both kinds print the same `Hot reload finished ...` line, so one parser
reads both; the `kind=` field tells them apart. A patch is not a second
format. It is a reload whose phases happen to be much cheaper.

## Variants

<a id="rustdoc-item-230"></a>

### `Reload`

```rust
Reload
```

A module or project DLL was rebuilt, reloaded and re-registered.

<a id="rustdoc-item-231"></a>

### `Patch`

```rust
Patch
```

One function's implementation was replaced in place.

## Associated functions and methods

<a id="rustdoc-item-233"></a>

### `label`

```rust
pub(in analytics) fn label(self: Self) -> &'static str;
```

The value printed after `kind=`.

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
- `Copy`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
