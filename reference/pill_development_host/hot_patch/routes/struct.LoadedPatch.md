<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2095"></a>

# Struct `pill_development_host::hot_patch::routes::LoadedPatch`

```rust
pub(crate) struct LoadedPatch;
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\hot_patch\routes.rs:181`

A patch loaded earlier, which a later patch also has to reach.

A patch links its own copy of everything its body calls, and those copies go
stale as soon as a callee is patched. This target is what keeps a chain of
hot functions moving: patch a caller of `pill_dummy_color::get_color_a`, then
patch `get_color_a` itself, and without this the caller's patch keeps running
the `get_color_a` it was compiled with.

## Fields

<a id="rustdoc-item-2133"></a>

### `function`

```rust
function: String
```

The qualified name of the function this patch replaced. It also labels
the patch in error messages.

<a id="rustdoc-item-2134"></a>

### `generation`

```rust
generation: u32
```

The generation number under which this patch was recorded.

<a id="rustdoc-item-2135"></a>

### `library`

```rust
library: libloading::Library
```

The loaded image. It is never unloaded, because a slot or a jump may
point into it for the rest of the process and nothing moves those
addresses.

## Associated functions and methods

<a id="rustdoc-item-2137"></a>

### `install_plain_function`

```rust
pub(in hot_patch) fn install_plain_function(self: &Self, qualified: &str, address: usize, signature: &str) -> Result<bool, String>;
```

Offers a replacement to this patch's own copy of one `#[pill_hot_fn]`.

A patch links its own copy of whatever its body calls, slots included,
and those slots start empty. If this copy were skipped, a patched caller
would keep calling the version of a callee that is patched afterwards.

#### Errors

Fails when the patch exports no installer, and when the patch refuses the
replacement because `qualified` changed shape.

<a id="rustdoc-item-2138"></a>

### `reset_plain_function`

```rust
pub(in hot_patch) fn reset_plain_function(self: &Self, qualified: &str) -> Result<bool, String>;
```

Returns this patch's copy of one `#[pill_hot_fn]` to its own body.

A missing export is an error for the same reason as in
[`Self::install_plain_function`](#rustdoc-item-2137): "cannot ask" must not be read as
"asked, and it declares nothing". Otherwise a rollback would leave this
copy running a patched body while reporting that everything was
restored.

#### Errors

Fails when the patch exports no reset symbol.

<a id="rustdoc-item-2139"></a>

### `function_address`

```rust
pub(in hot_patch::routes) fn function_address(self: &Self, qualified: &str) -> Option<(usize, Option<String>)>;
```

Returns the address and recorded declaration of one function inside this
patch.

The declaration is `None` when the patch recorded none. That absence
stays visible instead of being flattened into an empty string, which the
prologue gate would read as "nothing to check" - the one reading a
missing declaration must never get.

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
