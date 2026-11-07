<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-908"></a>

# Enum `pill_core::math::Direction`

```rust
pub enum Direction { ... }
```

Source: `engine\pill_core\src\math.rs:57`

A direction along one of the coordinate axes.

Variants without `World` name a direction on the object's own axes. The
`World` variants name a direction on the scene's axes. Nothing in the
workspace uses the enum yet.

## Variants

<a id="rustdoc-item-896"></a>

### `Forward`

```rust
Forward
```

Local forward.

<a id="rustdoc-item-897"></a>

### `Backward`

```rust
Backward
```

Local backward.

<a id="rustdoc-item-898"></a>

### `Right`

```rust
Right
```

Local right.

<a id="rustdoc-item-899"></a>

### `Left`

```rust
Left
```

Local left.

<a id="rustdoc-item-900"></a>

### `Up`

```rust
Up
```

Local up.

<a id="rustdoc-item-901"></a>

### `Down`

```rust
Down
```

Local down.

<a id="rustdoc-item-902"></a>

### `WorldForward`

```rust
WorldForward
```

World forward.

<a id="rustdoc-item-903"></a>

### `WorldBackward`

```rust
WorldBackward
```

World backward.

<a id="rustdoc-item-904"></a>

### `WorldRight`

```rust
WorldRight
```

World right.

<a id="rustdoc-item-905"></a>

### `WorldLeft`

```rust
WorldLeft
```

World left.

<a id="rustdoc-item-906"></a>

### `WorldUp`

```rust
WorldUp
```

World up.

<a id="rustdoc-item-907"></a>

### `WorldDown`

```rust
WorldDown
```

World down.

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
- `Debug`
- `Clone`
- `Copy`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
