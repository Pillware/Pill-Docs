<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-470"></a>

# Enum `pill_engine_macros::DeclarationExtras`

```rust
pub(crate) enum DeclarationExtras { ... }
```

Visibility: `crate` · Source: `engine\pill_engine_macros\src\lib.rs:3191`

What one declaration attribute adds beyond the derive it expands to.

## Variants

<a id="rustdoc-item-467"></a>

### `Component`

```rust
Component
```

A component: `persistable` also derives serde, unless the type lists
those derives itself.

<a id="rustdoc-item-468"></a>

### `Resource`

```rust
Resource
```

A resource: nothing beyond the derive and its arguments.

<a id="rustdoc-item-469"></a>

### `Asset`

```rust
Asset
```

An asset: the type-erased store needs its accessor impl beside the type.

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
