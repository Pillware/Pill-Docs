<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-150"></a>

# Enum `pill_core_macros::StyleArgument`

```rust
pub(crate) enum StyleArgument { ... }
```

Visibility: `crate` · Source: `engine\pill_core_macros\src\lib.rs:154`

Argument of one role call in the message language: a fixed string or a
field name.

A fixed string becomes a constant token. A field name becomes a dynamic
value that the renderer draws with the role around it.

## Variants

<a id="rustdoc-item-147"></a>

### `Static`

```rust
Static
```

A string literal, e.g. `general_style("Renderer")`.

<a id="rustdoc-item-149"></a>

### `Field`

```rust
Field
```

A field name, e.g. `name_style(path)`.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
