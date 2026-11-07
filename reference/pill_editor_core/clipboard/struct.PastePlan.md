<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1116"></a>

# Struct `pill_editor_core::clipboard::PastePlan`

```rust
pub struct PastePlan;
```

Source: `editor\pill_editor_core\src\clipboard.rs:151`

The recorded step one paste produces, and what the paste could not carry.

## Fields

<a id="rustdoc-item-1111"></a>

### `commands`

```rust
commands: Vec<crate::editor_state::EditorCommand>
```

The commands, in the order the batch applies them.

<a id="rustdoc-item-1113"></a>

### `label`

```rust
label: String
```

The history label the step is recorded under.

<a id="rustdoc-item-1114"></a>

### `skipped`

```rust
skipped: Vec<String>
```

What the paste skipped: a component type this build does not register,
or a field whose token it cannot read, each named `type.field`. The
caller reports them by name.

<a id="rustdoc-item-1115"></a>

### `note`

```rust
note: String
```

A note for the caller, shown as a notice. An asset paste sets it to the
asset it moved the selection to.

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
