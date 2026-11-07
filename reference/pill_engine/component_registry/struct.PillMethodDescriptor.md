<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-195"></a>

# Struct `pill_engine::component_registry::PillMethodDescriptor`

```rust
pub struct PillMethodDescriptor;
```

Source: `engine\pill_engine\src\component_registry.rs:175`

One mirrored Rust function, or one mirrored type, submitted by the mirror
attributes: `#[pill_mirror_impl]`/`#[pill_mirror_fn]` for functions,
`#[pill_mirror_object]`/`#[pill_mirror_resource]`/`#[derive(PillMirror)]`
for types.

Every function gets an `unsafe extern "C"` trampoline with the one
signature `pill_engine::mirror` defines, `(args, ret) -> status`. Its
address is recorded here, so the host needs no symbol table: a statically
linked host reads the descriptor directly, and a host that loaded the
artifact as a module copies the same address out of the module. The mirror
codegen then emits a typed C# member that calls it.

A row named [`MIRROR_TYPE_ROW`](constant.MIRROR_TYPE_ROW.md#rustdoc-item-194) describes a type rather than a function.
Rows whose name starts with `__` are never emitted as C# members: the
runtime reaches them by name. The six shapes and the fields each one fills:

| Shape | `name` | `owner_kind` | `return_tag` | `arg_tags` | `arg_names` | `symbol` / `address` |
| --- | --- | --- | --- | --- | --- | --- |
| method (`#[pill_mirror_impl]`) | Rust method name | empty ([`OWNER_KIND_UNKNOWN`](constant.OWNER_KIND_UNKNOWN.md#rustdoc-item-190); the codegen resolves the owner from the type rows) | return value | argument types | argument names | trampoline |
| free function (`#[pill_mirror_fn]`) | function name | `"module"` | return value | argument types | argument names | trampoline |
| object type row | [`MIRROR_TYPE_ROW`](constant.MIRROR_TYPE_ROW.md#rustdoc-item-194) | `"object"` | empty | empty | feature flags (`asset`, `import`, `standalone`) | drop trampoline |
| object asset-operation row | `__asset_<op>` | `"object"` | empty | empty | empty | the operation's trampoline |
| enum type row | [`MIRROR_TYPE_ROW`](constant.MIRROR_TYPE_ROW.md#rustdoc-item-194) | `"enum"` | the representation type | one discriminant per variant | variant names | empty / null |
| resource type row | [`MIRROR_TYPE_ROW`](constant.MIRROR_TYPE_ROW.md#rustdoc-item-194) | `"resource"` | empty | empty | `[0]` is the shared name | empty / null |

The C# codegen reads these rows back in `mirror_codegen.rs`: the object
flags are recovered from `arg_names`, the enum's discriminants from
`arg_tags`, and the `__asset_*` rows are reached by name.

## Fields

<a id="rustdoc-item-177"></a>

### `type_name`

```rust
type_name: &'static str
```

Fully-qualified path of the owning type, written the way the macro
spells it: the module path plus the type's name (`pill_spline::OmoMO`).

<a id="rustdoc-item-178"></a>

### `is_free_function`

```rust
is_free_function: bool
```

Whether the declaration is a free function (`#[pill_mirror_fn]`) rather
than a method (`#[pill_mirror_impl]`). A free-function entry's
`type_name` is the path of the module declaring it (the crate root for
a top-level function), and the C# codegen emits a static method on a
static class named after that module instead of an instance method on a
struct mirror.

<a id="rustdoc-item-179"></a>

### `crate_name`

```rust
crate_name: &'static str
```

The package that declared the method, from `env!("CARGO_PKG_NAME")` at
the macro's expansion site; see
[`PillValueTypeDescriptor::crate_name`](struct.PillValueTypeDescriptor.md#rustdoc-item-78) for how the host uses it.

<a id="rustdoc-item-180"></a>

### `name`

```rust
name: &'static str
```

Rust method name, snake_case (`get_sum`); the codegen maps it to
PascalCase for the C# instance method.

<a id="rustdoc-item-181"></a>

### `symbol`

```rust
symbol: &'static str
```

Rust name of the generated trampoline (`pill_mirror_OmoMO_get_sum`).
The host calls the trampoline through `address`, not by this name.

<a id="rustdoc-item-182"></a>

### `return_tag`

```rust
return_tag: &'static str
```

Type tag of the return value (`u64`, `str`, `val:Mesh`,
`result:handle:Mesh`, ...; see `pill_engine::mirror`); empty for `()`.

<a id="rustdoc-item-183"></a>

### `arg_tags`

```rust
arg_tags: &'static [&'static str]
```

Type tags of the arguments after the receiver, in declaration order.

<a id="rustdoc-item-184"></a>

### `arg_names`

```rust
arg_names: &'static [&'static str]
```

Argument names from the Rust source, in declaration order (`alpha`,
`beta`), so the generated C# mirror names its parameters identically
instead of inventing `arg0`, `arg1`. Parallel to `arg_tags`; the macro
always emits one name per tag (a positional fallback when the pattern
is not a plain identifier).

<a id="rustdoc-item-185"></a>

### `receiver`

```rust
receiver: &'static str
```

How the function takes its owner: `""` not at all (a free or
associated function), `"ref"` as `&self`, `"mut"` as `&mut self`, or
`"value"` as `self`.

<a id="rustdoc-item-191"></a>

### `owner_kind`

```rust
owner_kind: &'static str
```

What the owning type is, as one of the [`OWNER_KIND_OBJECT`](constant.OWNER_KIND_OBJECT.md#rustdoc-item-186),
[`OWNER_KIND_ENUM`](constant.OWNER_KIND_ENUM.md#rustdoc-item-187), [`OWNER_KIND_RESOURCE`](constant.OWNER_KIND_RESOURCE.md#rustdoc-item-188), [`OWNER_KIND_MODULE`](constant.OWNER_KIND_MODULE.md#rustdoc-item-189) or
[`OWNER_KIND_UNKNOWN`](constant.OWNER_KIND_UNKNOWN.md#rustdoc-item-190) constants.

<a id="rustdoc-item-192"></a>

### `address`

```rust
address: ExportAddress
```

The trampoline's address; null for a type row with no trampoline.

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
- `Copy`
- `Debug`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
- `Collect`
