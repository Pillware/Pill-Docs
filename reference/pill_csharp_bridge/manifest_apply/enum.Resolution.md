<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1642"></a>

# Enum `pill_csharp_bridge::manifest_apply::Resolution`

```rust
pub(in manifest_apply) enum Resolution<'declaration, Declaration> { ... }
```

Visibility: `{'restricted': {'parent': 970, 'path': '::manifest_apply'}}` · Source: `csharp\pill_csharp_bridge\src\manifest_apply.rs:179`

One arriving declaration, resolved against the live table.

## Variants

<a id="rustdoc-item-1633"></a>

### `Settled`

```rust
Settled
```

The table already agrees with the declaration.

<a id="rustdoc-item-1635"></a>

### `Add`

```rust
Add
```

The table has no entry for it.

<a id="rustdoc-item-1639"></a>

### `Rename`

```rust
Rename
```

An alias reached a live predecessor, whose data moves onto this entry.

<a id="rustdoc-item-1641"></a>

### `Reshape`

```rust
Reshape
```

The shape moved, so the stored data has to migrate.

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
