<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1256"></a>

# Enum `pill_csharp_bridge::manifest::DefaultLiteral`

```rust
pub(in manifest) enum DefaultLiteral { ... }
```

Visibility: `{'restricted': {'parent': 1247, 'path': '::manifest'}}` · Source: `csharp\pill_csharp_bridge\src\manifest.rs:84`

How a leaf type's `default:` literal turns into native bytes.

## Variants

<a id="rustdoc-item-1281"></a>

### `Boolean`

```rust
Boolean
```

`true` or `false`.

<a id="rustdoc-item-1282"></a>

### `Signed8`

```rust
Signed8
```

An integer or float literal of this exact width.

<a id="rustdoc-item-1283"></a>

### `Signed16`

```rust
Signed16
```

_No documentation provided._

<a id="rustdoc-item-1284"></a>

### `Signed32`

```rust
Signed32
```

_No documentation provided._

<a id="rustdoc-item-1285"></a>

### `Signed64`

```rust
Signed64
```

_No documentation provided._

<a id="rustdoc-item-1286"></a>

### `Unsigned8`

```rust
Unsigned8
```

_No documentation provided._

<a id="rustdoc-item-1287"></a>

### `Unsigned16`

```rust
Unsigned16
```

_No documentation provided._

<a id="rustdoc-item-1288"></a>

### `Unsigned32`

```rust
Unsigned32
```

_No documentation provided._

<a id="rustdoc-item-1289"></a>

### `Unsigned64`

```rust
Unsigned64
```

_No documentation provided._

<a id="rustdoc-item-1290"></a>

### `Float32`

```rust
Float32
```

_No documentation provided._

<a id="rustdoc-item-1291"></a>

### `Float64`

```rust
Float64
```

_No documentation provided._

<a id="rustdoc-item-1292"></a>

### `Unsupported`

```rust
Unsupported
```

No supported literal form. The pointer-width types and `Entity` use
this, so a manifest that declares a default for one of them is refused
by name.

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
- `Clone`
- `Copy`
