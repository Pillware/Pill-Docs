<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6398"></a>

# Enum `pill_editor_core::problems::Severity`

```rust
pub enum Severity { ... }
```

Source: `editor\pill_editor_core\src\problems.rs:36`

How serious one problem is.

## Variants

<a id="rustdoc-item-6395"></a>

### `Error`

```rust
Error
```

A compiler error: the build stopped.

<a id="rustdoc-item-6396"></a>

### `Warning`

```rust
Warning
```

A compiler warning: the build finished anyway.

<a id="rustdoc-item-6397"></a>

### `Note`

```rust
Note
```

A note the compiler printed as its own `note:` line.

## Associated functions and methods

<a id="rustdoc-item-6399"></a>

### `name`

```rust
pub fn name(self: Self) -> &'static str;
```

The name the problems rows show, and the `severity=` value of the
`[test] problem row` lines.

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
- `SerializableAny`
- `Equivalent<K>`
- `Comparable<K>`
- `SimdFrom<T, S>`
- `SimdInto<T, S>`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `IntoEither`
- `Instrument`
- `WithSubscriber`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `Copy`
- `Clone`
- `Debug`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
- `PartialOrd`
- `Ord`
