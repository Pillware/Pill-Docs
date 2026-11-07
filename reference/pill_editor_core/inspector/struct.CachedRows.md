<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4893"></a>

# Struct `pill_editor_core::inspector::CachedRows`

```rust
pub struct CachedRows;
```

Source: `editor\pill_editor_core\src\inspector.rs:703`

One component's cached row model and the selection's write targets.

The rows are rebuilt only when [`row_layout`](fn.row_layout.md#rustdoc-item-4892) changes, and the targets only
when the selection's answer for this component changes. Both live in the
shared session, so a shell reload keeps them.

## Fields

<a id="rustdoc-item-4887"></a>

### `layout`

```rust
layout: Option<RowLayout>
```

The layout the cached rows were built from.

<a id="rustdoc-item-4889"></a>

### `rows`

```rust
rows: Vec<CachedRow>
```

The rows, in field order, each with the lines it has already logged.

<a id="rustdoc-item-4890"></a>

### `targets_stamp`

```rust
targets_stamp: Option<u64>
```

The selection the cached targets were derived from.

<a id="rustdoc-item-4891"></a>

### `targets`

```rust
targets: Vec<pill_engine::Entity>
```

The entities the section's edits reach (the primary first).

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
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
- `Default`
