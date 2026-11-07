<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-540"></a>

# Struct `pill_engine::hot_patch::PillFunctionAddress`

```rust
pub struct PillFunctionAddress;
```

Source: `engine\pill_engine\src\hot_patch.rs:204`

One function this artifact can report the address of, contributed by a
crate's build script rather than by an attribute.

This is the route that needs no annotation: a build script scans the
crate's sources, finds every function it can address, and emits one entry
per function. Because `inventory` collects per artifact, a DLL ends up with
an entry for every addressable function of every crate linked into it,
which is the fan-out a patch needs across artifacts.

## Fields

<a id="rustdoc-item-537"></a>

### `qualified_name`

```rust
qualified_name: &'static str
```

The function's fully-qualified path: the crate, the module path, then
the function's name - or `Type::method`, or `<Type as Trait>::method`
for a method.

<a id="rustdoc-item-538"></a>

### `address`

```rust
address: fn () -> usize
```

The function's address in THIS artifact.

A function pointer rather than a `usize` because casting a function to
an integer is not permitted in the constant context that builds this.

<a id="rustdoc-item-539"></a>

### `signature`

```rust
signature: &'static str
```

The declaration as written, from `fn` up to the body, with whitespace
collapsed.

This is the compatibility gate for the prologue route, the only one that
route has: overwriting a function's first bytes cannot check anything
about the replacement, so the check has to happen before the write. The
host compares this text with the one it read from the edited source and
refuses the patch when they differ.

## Associated functions and methods

<a id="rustdoc-item-541"></a>

### `find`

```rust
pub fn find(qualified_name: &str) -> Option<&'static Self>;
```

The build-script entry this artifact holds for `qualified_name`.

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
- `Collect`
