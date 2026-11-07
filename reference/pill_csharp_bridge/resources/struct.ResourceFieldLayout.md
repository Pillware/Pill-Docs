<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1925"></a>

# Struct `pill_csharp_bridge::resources::ResourceFieldLayout`

```rust
pub(crate) struct ResourceFieldLayout;
```

Visibility: `crate` · Source: `csharp\pill_csharp_bridge\src\resources.rs:85`

One field of a managed resource, as the manifest describes it.

The names are owned `String`s, where a component field descriptor holds an
interned `&'static str`. A resource layout is kept for exactly as long as
its binding, so there is no longer-lived value to intern a name against.

## Fields

<a id="rustdoc-item-1919"></a>

### `name`

```rust
name: String
```

Field name. A reload matches the two layouts on it.

<a id="rustdoc-item-1920"></a>

### `type_tag`

```rust
type_tag: String
```

Engine type tag, already reduced to the form a migration plan compares.

<a id="rustdoc-item-1921"></a>

### `offset`

```rust
offset: usize
```

Byte offset of the field within the resource.

<a id="rustdoc-item-1922"></a>

### `size`

```rust
size: usize
```

Byte width of the field.

<a id="rustdoc-item-1923"></a>

### `default`

```rust
default: Option<Vec<u8>>
```

Bytes of the declared default for this field, already parsed from the
field's declared type. A reload writes them when it adds the field or
resets it.

<a id="rustdoc-item-1924"></a>

### `decorations`

```rust
decorations: Vec<pill_engine::component_registry::FieldDecorator>
```

Presentation decorators the field declares, in declaration order.

Owned for the same reason the names are: the layout lives exactly as
long as its binding, so there is nothing to borrow the list from.

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
- `Debug`
- `Clone`
