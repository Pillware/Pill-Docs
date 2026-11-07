<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-64"></a>

# Enum `pill_assets::CookError`

```rust
pub enum CookError { ... }
```

Source: `assets\pill_assets\src\lib.rs:66`

Failure to discover inputs, cook an output, read a manifest or write an
asset pack.

## Variants

<a id="rustdoc-item-210"></a>

### `BadGlob`

```rust
BadGlob
```

The rule's input glob is not a shape this pipeline supports.

<a id="rustdoc-item-157"></a>

### `Io`

```rust
Io
```

A filesystem operation failed.

<a id="rustdoc-item-78"></a>

### `Rule`

```rust
Rule
```

A rule could not turn its input into its output, or the pack writer
could not name a file.

<a id="rustdoc-item-217"></a>

### `UnknownRule`

```rust
UnknownRule
```

The manifest names a rule the caller did not supply.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
- `ToString`
- `Debug`
- `Display`
- `Error`
