<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-497"></a>

# Struct `pill_engine::hot_patch::PillHotSlotDescriptor`

```rust
pub struct PillHotSlotDescriptor;
```

Source: `engine\pill_engine\src\hot_patch.rs:41`

Describes one `#[pill_hot_fn]` this artifact declares.

The attribute macro submits one per annotated function, in a build with
debug assertions on, which is the only build that has the dispatcher the
slot feeds.

## Fields

<a id="rustdoc-item-492"></a>

### `qualified_name`

```rust
qualified_name: &'static str
```

Fully-qualified path, as `module_path!() + "::" + fn name`.

<a id="rustdoc-item-493"></a>

### `slot`

```rust
slot: &'static PlainSlot
```

The slot the generated dispatcher reads, so a host can redirect calls.

<a id="rustdoc-item-495"></a>

### `signature`

```rust
signature: &'static str
```

The function's signature as written; the install gate compares it.

Text rather than a `TypeId`, because a patch is compiled separately:
both builds derive the value from the same source text, and text is the
form the two can agree on.

<a id="rustdoc-item-496"></a>

### `implementation_address`

```rust
implementation_address: Option<fn () -> usize>
```

Address of the function's real body, when this artifact can name one.

A function pointer rather than a `usize`, because casting a function to
an integer is not permitted in the constant context that builds this
struct.

This is the body, not the dispatcher. A patch hands this address to
every artifact that holds a copy of the function, and the dispatcher is
already reached through `slot`, so naming it here would add a hop that
no patch ever installs.

`None` for an inherent method declared in a running artifact: a
method's body cannot be moved into a function of its own, because an
item declared inside a method body may not name `Self`
(`error[E0401]`), and the moved body would have to name the receiver
type. The body therefore stays inline in the dispatcher and has no
symbol to point at. Only a patch needs an address, and a patch names
the receiver type concretely, so it always supplies one.

## Associated functions and methods

<a id="rustdoc-item-498"></a>

### `find`

```rust
pub fn find(qualified_name: &str) -> Option<&'static Self>;
```

The descriptor of the `#[pill_hot_fn]` this artifact declares under
`qualified_name`.

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
