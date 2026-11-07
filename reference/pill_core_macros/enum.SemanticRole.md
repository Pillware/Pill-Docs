<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-54"></a>

# Enum `pill_core_macros::SemanticRole`

```rust
pub(crate) enum SemanticRole { ... }
```

Visibility: `crate` · Source: `engine\pill_core_macros\src\lib.rs:99`

Semantic role of one message token.

The variants match the diagnostics runtime's `SemanticRole` by name, so the
generated code can name the variants the runtime draws.

## Variants

<a id="rustdoc-item-50"></a>

### `General`

```rust
General
```

A token written with `general_style`.

<a id="rustdoc-item-51"></a>

### `Specific`

```rust
Specific
```

A token written with `specific_style`.

<a id="rustdoc-item-52"></a>

### `Module`

```rust
Module
```

A token written with `module_style`.

<a id="rustdoc-item-53"></a>

### `Name`

```rust
Name
```

A token written with `name_style`.

## Associated functions and methods

<a id="rustdoc-item-55"></a>

### `runtime_variant_name`

```rust
pub(crate) fn runtime_variant_name(self: Self) -> &'static str;
```

Name of this role's variant in the diagnostic runtime enum.

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
- `Clone`
- `Copy`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
