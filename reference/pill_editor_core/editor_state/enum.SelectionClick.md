<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3597"></a>

# Enum `pill_editor_core::editor_state::SelectionClick`

```rust
pub enum SelectionClick { ... }
```

Source: `editor\pill_editor_core\src\editor_state\mod.rs:602`

What a click on an entity row means.

## Variants

<a id="rustdoc-item-3594"></a>

### `Reset`

```rust
Reset
```

Replace the selection with the clicked entity.

<a id="rustdoc-item-3595"></a>

### `Add`

```rust
Add
```

Add the clicked entity to the selection (Ctrl).

<a id="rustdoc-item-3596"></a>

### `Range`

```rust
Range
```

Select every row between the primary and the clicked one (Shift).

## Associated functions and methods

<a id="rustdoc-item-3598"></a>

### `from_modifiers`

```rust
pub fn from_modifiers(shift: bool, control: bool) -> SelectionClick;
```

What a click means with these modifiers held: Shift selects a range,
Control adds to the selection, and a plain click resets it.

Shift wins over Control because a range needs an anchor, and a set that
both extends and ranges has no meaning. The scene's element presses and
the shell's row clicks take their meaning from this one rule.

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
- `Copy`
- `Debug`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
