<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-11376"></a>

# Struct `pill_editor_core::tools::RegisteredExtension`

```rust
pub struct RegisteredExtension;
```

Source: `editor\pill_editor_core\src\tools.rs:845`

One registered extension, as the registry keeps it.

Owned strings and function pointers only, for the same reason
[`RegisteredTool`](struct.RegisteredTool.md#rustdoc-item-10751) is: the record must be readable after the image that
registered it is gone.

## Fields

<a id="rustdoc-item-11378"></a>

### `name`

```rust
name: String
```

The extension's own name.

<a id="rustdoc-item-11379"></a>

### `base_tool`

```rust
base_tool: String
```

The base tool's name.

<a id="rustdoc-item-11380"></a>

### `for_kinds`

```rust
for_kinds: Vec<String>
```

The kinds its additions apply to; empty means every kind.

<a id="rustdoc-item-11381"></a>

### `requires_component`

```rust
requires_component: Option<String>
```

The component an entity must carry; `None` attaches to every entity.

<a id="rustdoc-item-11382"></a>

### `order`

```rust
order: i32
```

Its place in the chain against the other extensions of one base.

<a id="rustdoc-item-11383"></a>

### `keys`

```rust
keys: Vec<String>
```

The chords it answers.

<a id="rustdoc-item-11384"></a>

### `hooks`

```rust
hooks: ToolExtensionHooks
```

What it adds.

## Associated functions and methods

<a id="rustdoc-item-11385"></a>

### `of`

```rust
pub fn of<E: ToolExtension>() -> RegisteredExtension;
```

Records `E` as the registry keeps it.

<a id="rustdoc-item-11386"></a>

### `applies_to_kind`

```rust
pub fn applies_to_kind(self: &Self, kind: &str) -> bool;
```

Whether its additions apply to `kind`.

<a id="rustdoc-item-11387"></a>

### `binds_key`

```rust
pub fn binds_key(self: &Self, chord: &str) -> bool;
```

Whether it answers `chord`.

<a id="rustdoc-item-11388"></a>

### `requires_component_of`

```rust
pub fn requires_component_of(self: &Self, entity: Entity, world: &World) -> bool;
```

Whether `entity` carries the component the extension requires.

An extension that requires none is always attached.

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
- `SerializableAny`
- `Equivalent<K>`
- `SimdFrom<T, S>`
- `SimdInto<T, S>`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `IntoEither`
- `Instrument`
- `WithSubscriber`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `Clone`
- `Debug`
- `PartialEq`
- `Eq`
