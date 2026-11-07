<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-251"></a>

# Enum `pill_engine_macros::LayoutSubject`

```rust
pub(crate) enum LayoutSubject { ... }
```

Visibility: `crate` · Source: `engine\pill_engine_macros\src\lib.rs:391`

Which derive is asking for field descriptors, and so what the emission may
contain.

The four variants are exactly the four callers, so every call site says what
it wants. Two `bool` flags could not express whether the caller keeps the
accessor stream.

## Variants

<a id="rustdoc-item-247"></a>

### `Component`

```rust
Component
```

`#[derive(PillComponent)]`: container fields allowed, heap-field
accessors emitted, layout consts emitted.

<a id="rustdoc-item-248"></a>

### `LayoutOnly`

```rust
LayoutOnly
```

`#[derive(PillLayout)]`: container fields allowed, no accessors - a
layout-only type has no registration that could carry trampolines - and
layout consts emitted.

<a id="rustdoc-item-249"></a>

### `MirroredValue`

```rust
MirroredValue
```

A `#[derive(PillMirror)]` value type: no container fields (it crosses
the boundary as plain data), no accessors, layout consts emitted.

<a id="rustdoc-item-250"></a>

### `ForeignValue`

```rust
ForeignValue
```

`pill_value_type!` on a foreign type: no container fields, no accessors,
and no consts (an inherent const or trait impl would violate the orphan
rule).

## Associated functions and methods

<a id="rustdoc-item-252"></a>

### `allows_containers`

```rust
pub(crate) fn allows_containers(self: Self) -> bool;
```

Whether a `Vec`/`String`-shaped field may appear at all.

<a id="rustdoc-item-253"></a>

### `emits_accessors`

```rust
pub(crate) fn emits_accessors(self: Self) -> bool;
```

Whether the heap-field accessor trampolines are emitted.

<a id="rustdoc-item-254"></a>

### `emits_layout_consts`

```rust
pub(crate) fn emits_layout_consts(self: Self) -> bool;
```

Whether the inherent `FIELD_LAYOUT` const and the `ComponentLayout`
impl are emitted.

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
