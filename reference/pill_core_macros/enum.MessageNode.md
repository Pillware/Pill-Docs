<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-129"></a>

# Enum `pill_core_macros::MessageNode`

```rust
pub(crate) enum MessageNode { ... }
```

Visibility: `crate` · Source: `engine\pill_core_macros\src\lib.rs:135`

One parsed node of a `#[message(...)]` definition.

## Variants

<a id="rustdoc-item-119"></a>

### `Text`

```rust
Text
```

`"plain text"`

<a id="rustdoc-item-122"></a>

### `StaticStyled`

```rust
StaticStyled
```

`general_style("Renderer")` or any other role call holding a fixed
string.

<a id="rustdoc-item-128"></a>

### `FieldStyled`

```rust
FieldStyled
```

`name_style(field)`, `value(field)`, or `debug_value(field)`.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
- `Parse`
