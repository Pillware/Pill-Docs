<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-10751"></a>

# Struct `pill_editor_core::tools::RegisteredTool`

```rust
pub struct RegisteredTool;
```

Source: `editor\pill_editor_core\src\tools.rs:176`

One registered tool, as the registry keeps it.

Owned strings and flags only: a record must be readable after the image
that registered it is gone, so a reload re-registers instead of dangling.

## Fields

<a id="rustdoc-item-10752"></a>

### `name`

```rust
name: String
```

The name a command spells.

<a id="rustdoc-item-10753"></a>

### `label`

```rust
label: String
```

The label the toolbox row shows.

<a id="rustdoc-item-10754"></a>

### `shortcut`

```rust
shortcut: Option<String>
```

The shortcut's text, when the tool has one.

<a id="rustdoc-item-10755"></a>

### `global`

```rust
global: bool
```

Whether the tool is offered whatever the selection holds.

<a id="rustdoc-item-10756"></a>

### `requires_component`

```rust
requires_component: Option<String>
```

The component that makes the tool offered for an entity, matched by
full name or by its `::` suffix.

<a id="rustdoc-item-10757"></a>

### `hooks`

```rust
hooks: ToolElementHooks
```

The tool's optional element reporting.

## Associated functions and methods

<a id="rustdoc-item-10759"></a>

### `of`

```rust
pub fn of(tool: &dyn EditorTool) -> RegisteredTool;
```

Records `tool` as the registry keeps it, with no element reporting.

<a id="rustdoc-item-10760"></a>

### `with_hooks`

```rust
pub fn with_hooks(tool: &dyn EditorTool, hooks: ToolElementHooks) -> RegisteredTool;
```

Records `tool` as the registry keeps it, with its element reporting.

<a id="rustdoc-item-10761"></a>

### `is_offered_for`

```rust
pub fn is_offered_for(self: &Self, entity: Entity, world: &World) -> bool;
```

Whether `entity` carries the component that makes this tool offered.

A global tool needs no component and a tool that declares none names no
entity's component, so neither is ever offered this way.

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
