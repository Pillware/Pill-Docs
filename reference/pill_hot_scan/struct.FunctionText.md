<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-11"></a>

# Struct `pill_hot_scan::FunctionText`

```rust
pub struct FunctionText;
```

Source: `hosting\pill_hot_scan\src\lib.rs:199`

One function located in a source file.

## Fields

<a id="rustdoc-item-6"></a>

### `start`

```rust
start: usize
```

Byte offset of `fn`, after any attributes.

<a id="rustdoc-item-7"></a>

### `end`

```rust
end: usize
```

Byte offset just past the closing brace.

<a id="rustdoc-item-8"></a>

### `text`

```rust
text: String
```

The full declaration, from `fn` through the closing brace.

<a id="rustdoc-item-10"></a>

### `body`

```rust
body: String
```

Just the body, braces excluded.

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
- `Debug`
- `Clone`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
