<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-177"></a>

# Enum `pill_hot_scan::SkipStrategy`

```rust
pub(crate) enum SkipStrategy { ... }
```

Visibility: `crate` · Source: `hosting\pill_hot_scan\src\lib.rs:896`

Whether a scan continues inside a function it just matched.

## Variants

<a id="rustdoc-item-175"></a>

### `PastBody`

```rust
PastBody
```

Resume after the function's closing brace, so nested declarations are
part of the body rather than matches of their own. Body stripping needs
this: a nested function's body is already inside the body it blanked.

<a id="rustdoc-item-176"></a>

### `IntoBody`

```rust
IntoBody
```

Resume just after the matched declaration, so nested functions are
matched too - which is what [`find_function`](fn.find_function.md#rustdoc-item-76) does, since it searches
the whole file for a name.

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
