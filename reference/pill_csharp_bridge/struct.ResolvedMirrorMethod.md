<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-194"></a>

# Struct `pill_csharp_bridge::ResolvedMirrorMethod`

```rust
pub struct ResolvedMirrorMethod;
```

Source: `csharp\pill_csharp_bridge\src\lib.rs:103`

One mirrored Rust method, resolved to a callable address, shared by the
host's module loader and the C# backend. It lives here rather than in the
host's `hot_reload`-gated module loader because the C# backend is
compiled in every configuration.

## Fields

<a id="rustdoc-item-2062"></a>

### `type_name`

```rust
type_name: String
```

Fully-qualified Rust type name the method belongs to - or, for a free
function (`is_free_function`), the path of the module declaring it.

<a id="rustdoc-item-2063"></a>

### `method_name`

```rust
method_name: String
```

Rust method name, snake_case.

<a id="rustdoc-item-2064"></a>

### `return_tag`

```rust
return_tag: String
```

Return type tag; empty for a `()` return.

<a id="rustdoc-item-2065"></a>

### `arg_tags`

```rust
arg_tags: Vec<String>
```

Argument type tags, in declaration order.

<a id="rustdoc-item-2066"></a>

### `arg_names`

```rust
arg_names: Vec<String>
```

Argument names from the Rust source, in declaration order (`alpha`,
`beta`), so the generated C# mirror names its parameters identically.
Parallel to `arg_tags`.

<a id="rustdoc-item-2067"></a>

### `address`

```rust
address: usize
```

Address of the C-ABI trampoline; zero for a type row with none.

<a id="rustdoc-item-2068"></a>

### `is_free_function`

```rust
is_free_function: bool
```

Whether the declaration is a `#[pill_mirror_fn]` free function. The
codegen then emits a static method on a static class named after the
declaring module, instead of an instance method on a struct mirror.

<a id="rustdoc-item-2069"></a>

### `crate_name`

```rust
crate_name: String
```

The package that declared the method, from `env!("CARGO_PKG_NAME")` at
the macro's expansion site. The host keeps only the entries whose
`crate_name` matches the module being generated or published, so an
artifact cannot claim declarations from a crate it only links.

<a id="rustdoc-item-2070"></a>

### `receiver`

```rust
receiver: String
```

How the method takes the value it is called on: empty for none, or
`"ref"`, `"mut"` or `"value"`.

<a id="rustdoc-item-2071"></a>

### `owner_kind`

```rust
owner_kind: String
```

What the owning type is, when the declaring attribute knew it: `"value"`
for a `#[derive(PillMirror)]` value type or a component row, `"object"`,
`"enum"`, `"resource"`, or `"module"` for a free function. Empty when
the codegen has to resolve the type from the type rows.

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
- `Clone`
- `Debug`
