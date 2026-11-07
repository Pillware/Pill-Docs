<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3083"></a>

# Struct `pill_editor_core::editor_state::SystemSummary`

```rust
pub struct SystemSummary;
```

Source: `editor\pill_editor_core\src\editor_state\mod.rs:305`

One row of the Systems tab.

## Fields

<a id="rustdoc-item-3077"></a>

### `index`

```rust
index: usize
```

Registration index, which is the unambiguous key for a toggle.

<a id="rustdoc-item-3078"></a>

### `name`

```rust
name: String
```

Registration name.

<a id="rustdoc-item-3079"></a>

### `owner_label`

```rust
owner_label: String
```

Human label of the owning module: `"project"`, `"engine"`,
`"renderer"`, a module's name, or `"extension <n>"` when the host does
not name it.

<a id="rustdoc-item-3080"></a>

### `enabled`

```rust
enabled: bool
```

Whether the system participates in frame execution.

<a id="rustdoc-item-3081"></a>

### `hot_patchable`

```rust
hot_patchable: bool
```

Whether a hot-patch dispatch slot exists (host built with the engine's
`development` feature).

<a id="rustdoc-item-3082"></a>

### `name_is_ambiguous`

```rust
name_is_ambiguous: bool
```

Whether another system shares this name.

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
- `StructuralPartialEq`
- `PartialEq`
