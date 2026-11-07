<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-417"></a>

# Struct `pill_engine_macros::PatchArguments`

```rust
pub(crate) struct PatchArguments;
```

Visibility: `crate` · Source: `engine\pill_engine_macros\src\lib.rs:2485`

Arguments `#[pill_hot_fn]` accepts when it generates a patch body.

A patch for an inherent method cannot copy the method into a free function,
because the body names `self`. The body is placed in a local trait
implemented for the receiver type instead. A trait method has the same call
shape as the inherent method it replaces, so its address can go straight
into the slot.

The host supplies both values. A developer never writes them.

## Fields

<a id="rustdoc-item-415"></a>

### `registry_name`

```rust
registry_name: Option<String>
```

Registry name the generated descriptor is filed under.

<a id="rustdoc-item-416"></a>

### `self_type`

```rust
self_type: Option<syn::Type>
```

Concrete receiver type the local trait is implemented for.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
- `Default`
