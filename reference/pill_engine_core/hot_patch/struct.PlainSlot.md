<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5172"></a>

# Struct `pill_engine_core::hot_patch::PlainSlot`

```rust
pub struct PlainSlot;
```

Source: `engine\pill_engine_core\src\hot_patch.rs:512`

A dispatch slot for an ordinary function marked `#[pill_hot_fn]`.

A system does not need one: the engine holds its boxed closure and can swap
what the closure calls. An ordinary `pub fn` has no such holder, since
callers call it directly, so the indirection has to live inside the
function itself. `#[pill_hot_fn]` renames the real body and turns the public
name into a dispatcher that reads this slot.

Unlike [`HotSlot`](struct.HotSlot.md#rustdoc-item-5096), this is a `static` inside whichever artifact compiled the
function, not a registry entry on the engine. That is deliberate: a crate
linked into several artifacts has an independent copy of its code in each,
and each copy's callers must be redirected separately.

## Fields

<a id="rustdoc-item-5171"></a>

### `current`

```rust
current: std::sync::atomic::AtomicUsize
```

Installed replacement, or zero while the original is still current.

## Associated functions and methods

<a id="rustdoc-item-5173"></a>

### `new`

```rust
pub const fn new() -> Self;
```

A slot holding no replacement.

<a id="rustdoc-item-5174"></a>

### `current_or`

```rust
pub fn current_or(self: &Self, original: usize) -> usize;
```

The address to call: the installed replacement, or `original`.

`Relaxed` would be enough on x86-64, but the acquire pairs with
`install`'s release so a freshly loaded patch's code is visible to
whichever thread calls next on weaker orderings too.

<a id="rustdoc-item-5175"></a>

### `install`

```rust
pub fn install(self: &Self, address: usize);
```

Installs a replacement implementation.

<a id="rustdoc-item-5176"></a>

### `installed`

```rust
pub fn installed(self: &Self) -> usize;
```

The installed replacement, or zero when the slot has never been filled.

Callers that own their fallback inline - a dispatcher generated around a
method body, which has no separate implementation to name - branch on
this rather than passing an address to [`Self::current_or`](#rustdoc-item-5174).

<a id="rustdoc-item-5177"></a>

### `reset`

```rust
pub fn reset(self: &Self);
```

Empties the slot, so calls fall back to the body compiled into this
artifact.

A plain function has no single baseline address the host could reinstall:
every artifact linking the crate holds its own copy. Emptying the slot is
how each of them returns to its own original code.

<a id="rustdoc-item-5178"></a>

### `is_patched`

```rust
pub fn is_patched(self: &Self) -> bool;
```

Whether a replacement is currently installed.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Debug`
- `Default`
