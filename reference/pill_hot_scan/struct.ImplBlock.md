<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-147"></a>

# Struct `pill_hot_scan::ImplBlock`

```rust
pub struct ImplBlock;
```

Source: `hosting\pill_hot_scan\src\lib.rs:441`

One `impl` block whose methods can be attributed to a named type.

## Fields

<a id="rustdoc-item-144"></a>

### `body_byte_range`

```rust
body_byte_range: (usize, usize)
```

Byte range of the block's body, braces included.

<a id="rustdoc-item-145"></a>

### `type_name`

```rust
type_name: String
```

The type the block implements methods on.

<a id="rustdoc-item-146"></a>

### `trait_name`

```rust
trait_name: Option<String>
```

The trait being implemented, for `impl Trait for Type`.

`None` for an inherent block. Two traits may define the same method name
for one type, so a trait method is only unambiguous when named through
the trait - which is why this is carried rather than discarded.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
