<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4252"></a>

# Enum `pill_editor_core::tools::BuiltinTool`

```rust
pub enum BuiltinTool { ... }
```

Source: `editor\pill_editor_core\src\tools.rs:61`

The three modes the editor offers with no extension loaded.

They are global tools: offered whatever the selection holds, because they
act on whole entities. A component tool names its own component instead and
is offered only for an entity that carries it.

## Variants

<a id="rustdoc-item-10694"></a>

### `Translate`

```rust
Translate
```

Move the selection.

<a id="rustdoc-item-10695"></a>

### `Rotate`

```rust
Rotate
```

Turn the selection.

<a id="rustdoc-item-10696"></a>

### `Scale`

```rust
Scale
```

Resize the selection.

## Associated functions and methods

<a id="rustdoc-item-10697"></a>

### `ALL`

```rust
const ALL: [BuiltinTool; 3] = _;
```

Every built-in, in the order the toolbox lists them.

<a id="rustdoc-item-10698"></a>

### `name`

```rust
pub fn name(self: Self) -> &'static str;
```

The name a command and the scripted channel spell, which is also the
gizmo mode's own name.

<a id="rustdoc-item-10699"></a>

### `label`

```rust
pub fn label(self: Self) -> &'static str;
```

The label the toolbox row and the menus show.

<a id="rustdoc-item-10700"></a>

### `from_name`

```rust
pub fn from_name(name: &str) -> Option<BuiltinTool>;
```

The tool a name spells, when it spells one of the built-ins.

<a id="rustdoc-item-10701"></a>

### `gizmo_mode`

```rust
pub fn gizmo_mode(self: Self) -> crate::gizmo::GizmoMode;
```

The gizmo mode this tool drives: the three built-ins are the three
modes, under the names tools use.

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
- `From<GizmoMode>`
- `Clone`
- `Copy`
- `Debug`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
- `EditorTool`
