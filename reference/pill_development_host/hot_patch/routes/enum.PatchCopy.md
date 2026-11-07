<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2098"></a>

# Enum `pill_development_host::hot_patch::routes::PatchCopy`

```rust
pub(in hot_patch::routes) enum PatchCopy<'a> { ... }
```

Visibility: `{'restricted': {'parent': 2087, 'path': '::hot_patch::routes'}}` · Source: `hosting\pill_development_host\src\hot_patch\routes.rs:66`

One loaded image that may carry a copy of the function being patched.

A crate linked into several artifacts is compiled into each of them, and a
generated patch links its own copy of whatever its body calls. Both kinds
therefore hold code a replacement has to reach. Treating the two the same
way here is what lets one traversal ([`every_loaded_copy`](fn.every_loaded_copy.md#rustdoc-item-2097)) serve every
route.

## Variants

<a id="rustdoc-item-2093"></a>

### `Artifact`

```rust
Artifact
```

A module or project DLL the host loaded.

<a id="rustdoc-item-2096"></a>

### `Patch`

```rust
Patch
```

A patch image compiled earlier in this session.

## Associated functions and methods

<a id="rustdoc-item-2099"></a>

### `install_plain_function`

```rust
pub(in hot_patch::routes) fn install_plain_function(self: &Self, qualified: &str, address: usize, signature: &str) -> Result<bool, String>;
```

Points this copy's redirect slot at `address`.

A copy's redirect slot is the pointer its compiled stub calls through.
`Ok(false)` means this image has nothing to redirect, which is not a
failure.

#### Errors

Fails for the same reasons as the wrapped image: it cannot be asked for
its installer, or it refuses the replacement.

<a id="rustdoc-item-2100"></a>

### `reset_plain_function`

```rust
pub(in hot_patch::routes) fn reset_plain_function(self: &Self, qualified: &str) -> Result<bool, String>;
```

Empties this copy's redirect slot, so it runs its own body again.

Both arms pass the error text through unchanged. Like an artifact, a
patch reports a missing resolver export as an error, so a copy that
cannot be asked stops the rollback instead of being skipped as a copy
that declares nothing.

#### Errors

Fails when the image cannot be asked for its reset export, or refuses
for a reason of its own.

<a id="rustdoc-item-2101"></a>

### `function_address`

```rust
pub(in hot_patch::routes) fn function_address(self: &Self, qualified: &str) -> Option<(usize, Option<String>)>;
```

Returns where this copy's own compiled `qualified` lives, and the
declaration it was built with.

The declaration is `None` when the image cannot report one. The prologue
gate refuses that case: a missing declaration must never pass as
"nothing to check".

<a id="rustdoc-item-2102"></a>

### `extent_coverage`

```rust
pub(in hot_patch::routes) fn extent_coverage(self: &Self) -> Option<(usize, usize)>;
```

Returns how many of this copy's functions have a known extent (their
length, as the exception directory records it), when it can answer.

Only an artifact has the diagnostic export; a patch answers `None`, so a
prologue refusal quotes coverage for artifacts alone.

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
- `RedirectSlot`
