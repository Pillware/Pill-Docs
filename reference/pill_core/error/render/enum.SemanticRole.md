<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-617"></a>

# Enum `pill_core::error::render::SemanticRole`

```rust
pub enum SemanticRole { ... }
```

Source: `engine\pill_core\src\error\render.rs:30`

The meaning a styled part of a message carries.

A role says what the text is about, not how it looks. The renderer decides
the appearance for its own medium.

## Variants

<a id="rustdoc-item-613"></a>

### `General`

```rust
General
```

General engine objects: `Scene`, `Component`, `System`, `Resource`.

<a id="rustdoc-item-614"></a>

### `Specific`

```rust
Specific
```

Specific engine objects or types: `Texture`, `Surface`, `Handle`.

<a id="rustdoc-item-615"></a>

### `Module`

```rust
Module
```

Module-level concepts: `Engine`, `Renderer`, `Window`.

<a id="rustdoc-item-616"></a>

### `Name`

```rust
Name
```

User or domain names: file paths, scene names, symbol names.

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
