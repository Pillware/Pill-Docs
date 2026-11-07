<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-276"></a>

# Enum `pill_development_host::analytics::PatchRoute`

```rust
pub(crate) enum PatchRoute { ... }
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\analytics.rs:752`

Which of the three mechanisms delivered a patch.

`kind=patch` on its own hides a real difference in guarantees, which is why
the route is reported separately. A slot route is provable: the replacement
is one atomic pointer store, and any call that reaches the dispatcher runs
the new code. The prologue route is best-effort: it overwrites the first
bytes of a live function, so it cannot reach a caller that inlined the body,
and the twelve-byte write is not atomic. Averaging the two would mix a
guarantee with an approximation.

## Variants

<a id="rustdoc-item-273"></a>

### `EngineSlot`

```rust
EngineSlot
```

A `#[pill_hot]` system, replaced through the engine's own registry. The
registry lives once per process, so one install reaches every caller.

<a id="rustdoc-item-274"></a>

### `ArtifactSlot`

```rust
ArtifactSlot
```

A `#[pill_hot_fn]` function, replaced through the redirect slot compiled
into each artifact that links the crate.

<a id="rustdoc-item-275"></a>

### `Prologue`

```rust
Prologue
```

An un-annotated function, redirected by overwriting its first bytes in
every artifact that carries a copy.

## Associated functions and methods

<a id="rustdoc-item-277"></a>

### `label`

```rust
pub(crate) fn label(self: Self) -> &'static str;
```

The value printed after `route=`, and after `via` on the console line.

<a id="rustdoc-item-278"></a>

### `is_provable`

```rust
pub(crate) fn is_provable(self: Self) -> bool;
```

Whether a call that reaches the function is guaranteed to run the new
code, rather than possibly running an inlined or unreached copy.

Only the hot-patch path asks, so a build without hot patching has no
caller. That is the same reason [`EventKind`](enum.EventKind.md#rustdoc-item-232) carries the allow on its
own declaration.

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
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Equivalent<K>`
- `Debug`
- `Clone`
- `Copy`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
