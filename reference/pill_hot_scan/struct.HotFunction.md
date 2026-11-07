<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-119"></a>

# Struct `pill_hot_scan::HotFunction`

```rust
pub struct HotFunction;
```

Source: `hosting\pill_hot_scan\src\lib.rs:379`

One function a source file marks as hot-patchable.

## Fields

<a id="rustdoc-item-109"></a>

### `name`

```rust
name: String
```

The function's own name, which is also the last segment of the name the
running artifact registered it under.

<a id="rustdoc-item-110"></a>

### `kind`

```rust
kind: HotFunctionKind
```

Which route the annotation selected; `PlainFunction` when nothing is
annotated.

<a id="rustdoc-item-111"></a>

### `self_type`

```rust
self_type: Option<String>
```

The type whose `impl` block encloses it, for a method.

`None` for a free function, and for a method in a block the scanner could
not attribute to one concrete type - a generic `impl`, or a header that
is not a plain path. A patch for a method must name the receiver type, so
such a method is refused rather than generated against a guessed type.

<a id="rustdoc-item-112"></a>

### `trait_name`

```rust
trait_name: Option<String>
```

The trait whose `impl` block encloses it, for a trait method.

`None` for a free function and for an inherent method. Two traits may
define the same method name for one type, and a type may have both an
inherent and a trait method of the same name, so a trait method is only
unambiguous when named as `<Type as Trait>::method`.

<a id="rustdoc-item-113"></a>

### `takes_receiver`

```rust
takes_receiver: bool
```

Whether the declaration takes a receiver.

<a id="rustdoc-item-114"></a>

### `signature`

```rust
signature: String
```

The declaration as written, from `fn` to the body, whitespace collapsed.

Compared against what the running artifact was built with before a
prologue patch overwrites anything. Both sides normalize the same way, so
reformatting is not mistaken for a change of shape.

<a id="rustdoc-item-115"></a>

### `inline_always`

```rust
inline_always: bool
```

Whether the declaration asks to be inlined at every call site.

`#[inline(always)]` is honoured even at `opt-level = 0`, so such a
function may have no body left to redirect: every caller holds its own
copy, and a prologue patch would reach none of them. The scanner can
detect this case, so the inventory leaves those functions out instead of
promising a patch it cannot deliver.

<a id="rustdoc-item-116"></a>

### `is_abi_entry_point`

```rust
is_abi_entry_point: bool
```

Whether this function is the module ABI's entry point.

The host calls it through the loaded library's export table at load time,
never through a redirect, so it is left out of the inventory. Decided by
the attribute that generates the export, not by the function's name,
which is only a convention that a module may break.

<a id="rustdoc-item-117"></a>

### `cfg_gated`

```rust
cfg_gated: bool
```

Whether a `#[cfg(…)]` decides if this declaration exists at all.

A byte scanner cannot evaluate `cfg`, so a conditionally compiled
function may be absent from the very build being scanned. Registering
one would emit an address for an item that does not exist, which fails
to compile - so they are recorded and then skipped.

<a id="rustdoc-item-118"></a>

### `is_annotated`

```rust
is_annotated: bool
```

Whether the developer marked it with a `#[pill_hot…]` attribute.

The attribute decides how the function is patched; the build script's
address inventory decides whether it can be patched at all. An annotated
function has a dispatch slot, which is preferred because it is a plain
atomic store. An un-annotated function is redirected by overwriting its
prologue, which needs writable code pages.

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
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
