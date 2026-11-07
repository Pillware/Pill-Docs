<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1980"></a>

# Struct `pill_development_host::hot_patch::generations::Generation`

```rust
pub(crate) struct Generation;
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\hot_patch\generations.rs:48`

One recorded generation of one patched function, and the route back to it.

The patch library that delivered the generation is never unloaded, unlike a
module image, which the reload can retire and release. A slot holds an
address inside that library and nothing moves those addresses, which is why
a slot rollback is a single pointer write rather than a rebuild.

## Fields

<a id="rustdoc-item-1967"></a>

### `function`

```rust
function: String
```

Qualified name of the function this generation replaced.

<a id="rustdoc-item-1969"></a>

### `number`

```rust
number: u32
```

One-based position in this function's history. Generation zero is the
code the running artifact was built with; it has no entry here because it
needs no patch library.

<a id="rustdoc-item-1970"></a>

### `address`

```rust
address: usize
```

Address to install to make this generation active again.

<a id="rustdoc-item-1971"></a>

### `kind`

```rust
kind: source::HotFunctionKind
```

The hot-patching route that delivered this generation. When the
generation lives in a slot, rollback uses it to choose between the
engine's registry and a dispatch slot.

<a id="rustdoc-item-1973"></a>

### `signature_hash`

```rust
signature_hash: u64
```

The signature identity a system's slot checks before it accepts the
address.

<a id="rustdoc-item-1974"></a>

### `lookup_name`

```rust
lookup_name: String
```

The name the delivering route looks this function up by. It differs from
[`Self::function`](#rustdoc-item-1967) for a method's dispatch slot, whose name omits the
type; see `slot_lookup_name`.

<a id="rustdoc-item-1975"></a>

### `signature`

```rust
signature: String
```

Signature text a plain function's slot checks before accepting it.

<a id="rustdoc-item-1976"></a>

### `prologue_restores`

```rust
prologue_restores: Vec<routes::PrologueRestore>
```

The bytes this generation overwrote in each artifact, when it was
delivered by prologue patching. Empty when the generation was installed
into a slot.

<a id="rustdoc-item-1978"></a>

### `prologue_history_dropped`

```rust
prologue_history_dropped: bool
```

Whether a reload emptied [`Self::prologue_restores`](#rustdoc-item-1976) rather than the
generation never having filled it.

Once the list is empty the two cases look the same, but they need
opposite answers: a slot-delivered generation rolls back through its
slot, while one whose prologue addresses a reload invalidated cannot be
rolled back at all.

<a id="rustdoc-item-1979"></a>

### `installed_at`

```rust
installed_at: pill_core::platform::Instant
```

When this generation was installed, so a listing can report its age.

## Associated functions and methods

<a id="rustdoc-item-1981"></a>

### `overwrote_prologues`

```rust
pub(in hot_patch::generations) fn overwrote_prologues(self: &Self) -> bool;
```

Returns whether this generation was delivered by overwriting code rather
than by installing into a slot.

It reads the saved bytes because the function's kind does not answer the
question: an annotated and an un-annotated plain function share one kind
and are undone in completely different ways.

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
