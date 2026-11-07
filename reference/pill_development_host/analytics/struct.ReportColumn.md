<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-442"></a>

# Struct `pill_development_host::analytics::ReportColumn`

```rust
pub(in analytics) struct ReportColumn;
```

Visibility: `{'restricted': {'parent': 1, 'path': '::analytics'}}` · Source: `hosting\pill_development_host\src\analytics.rs:1258`

One column of the startup table. It holds the header, the alignment, one
cell per module row and the total row.

## Fields

<a id="rustdoc-item-438"></a>

### `header`

```rust
header: &'static str
```

_No documentation provided._

<a id="rustdoc-item-439"></a>

### `left_aligned`

```rust
left_aligned: bool
```

_No documentation provided._

<a id="rustdoc-item-440"></a>

### `cells`

```rust
cells: Vec<String>
```

_No documentation provided._

<a id="rustdoc-item-441"></a>

### `total`

```rust
total: String
```

_No documentation provided._

## Associated functions and methods

<a id="rustdoc-item-443"></a>

### `width`

```rust
pub(in analytics) fn width(self: &Self) -> usize;
```

The widest of the header, the cells and the total.

<a id="rustdoc-item-444"></a>

### `pad`

```rust
pub(in analytics) fn pad(self: &Self, text: &str, width: usize) -> String;
```

`text` padded to `width` on the side this column aligns to.

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
