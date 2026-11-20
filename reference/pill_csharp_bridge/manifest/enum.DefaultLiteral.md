<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1279"></a>

# Enum `pill_csharp_bridge::manifest::DefaultLiteral`

```rust
pub(in manifest) enum DefaultLiteral { ... }
```

Visibility: `{'restricted': {'parent': 1270, 'path': '::manifest'}}` · Source: `csharp\pill_csharp_bridge\src\manifest.rs:84`

How a leaf type's `default:` literal turns into native bytes.

## Variants

<a id="rustdoc-item-1304"></a>

### `Boolean`

```rust
Boolean
```

`true` or `false`.

<a id="rustdoc-item-1305"></a>

### `Signed8`

```rust
Signed8
```

An integer or float literal of this exact width.

<a id="rustdoc-item-1306"></a>

### `Signed16`

```rust
Signed16
```

_No documentation provided._

<a id="rustdoc-item-1307"></a>

### `Signed32`

```rust
Signed32
```

_No documentation provided._

<a id="rustdoc-item-1308"></a>

### `Signed64`

```rust
Signed64
```

_No documentation provided._

<a id="rustdoc-item-1309"></a>

### `Unsigned8`

```rust
Unsigned8
```

_No documentation provided._

<a id="rustdoc-item-1310"></a>

### `Unsigned16`

```rust
Unsigned16
```

_No documentation provided._

<a id="rustdoc-item-1311"></a>

### `Unsigned32`

```rust
Unsigned32
```

_No documentation provided._

<a id="rustdoc-item-1312"></a>

### `Unsigned64`

```rust
Unsigned64
```

_No documentation provided._

<a id="rustdoc-item-1313"></a>

### `Float32`

```rust
Float32
```

_No documentation provided._

<a id="rustdoc-item-1314"></a>

### `Float64`

```rust
Float64
```

_No documentation provided._

<a id="rustdoc-item-1315"></a>

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
