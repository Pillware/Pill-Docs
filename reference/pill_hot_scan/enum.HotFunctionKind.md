<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-82"></a>

# Enum `pill_hot_scan::HotFunctionKind`

```rust
pub enum HotFunctionKind { ... }
```

Source: `hosting\pill_hot_scan\src\lib.rs:367`

Which hot-patching route a function's attribute selects.

The two are redirected through different machinery, so a patch has to know
which one it is replacing before it can be generated or installed.

## Variants

<a id="rustdoc-item-80"></a>

### `System`

```rust
System
```

`#[pill_hot]` - an ECS system, redirected through the hot-function
registry of the artifact that declares it.

<a id="rustdoc-item-81"></a>

### `PlainFunction`

```rust
PlainFunction
```

`#[pill_hot_fn]` - a plain function or inherent method, redirected
through its dispatch slot, one per artifact that links the crate. An
un-annotated function carries this kind too, without a slot.

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
- `Copy`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
