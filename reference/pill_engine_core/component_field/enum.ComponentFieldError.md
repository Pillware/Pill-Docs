<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3164"></a>

# Enum `pill_engine_core::component_field::ComponentFieldError`

```rust
pub enum ComponentFieldError { ... }
```

Source: `engine\pill_engine_core\src\component_field\mod.rs:247`

Why a generic field read or write was refused.

Every failure is all-or-nothing: nothing is written when any validation
fails. Each variant names the component or field it is about, so the editor
can show it in a console instead of guessing.

## Variants

<a id="rustdoc-item-3339"></a>

### `EntityNotFound`

```rust
EntityNotFound
```

The entity handle is not alive.

<a id="rustdoc-item-3341"></a>

### `ComponentNotFound`

```rust
ComponentNotFound
```

The entity is alive but does not carry a component of that name.

<a id="rustdoc-item-3343"></a>

### `ComponentStorageMissing`

```rust
ComponentStorageMissing
```

The component was resolved through a live entity, but its column or row
is missing from the archetype.

This is a registration/storage desync, not a dead handle: the entity
exists and it carries the component's id, so the storage the id names
should be there.

<a id="rustdoc-item-3345"></a>

### `ComponentHasNoFieldLayout`

```rust
ComponentHasNoFieldLayout
```

The component is registered but has no registered field layout, so it
cannot be inspected or edited generically.

<a id="rustdoc-item-3348"></a>

### `FieldNotFound`

```rust
FieldNotFound
```

The component's field layout does not name that field.

<a id="rustdoc-item-3160"></a>

### `TypeMismatch`

```rust
TypeMismatch
```

The value variant does not match the field's registered `type_tag`.

<a id="rustdoc-item-3161"></a>

### `ArrayLengthMismatch`

```rust
ArrayLengthMismatch
```

A whole-array write supplied the wrong number of elements.

<a id="rustdoc-item-3358"></a>

### `ArrayIndexOutOfRange`

```rust
ArrayIndexOutOfRange
```

An element write addressed an element outside the fixed array.

<a id="rustdoc-item-3362"></a>

### `AssetTypeMismatch`

```rust
AssetTypeMismatch
```

An asset reference write named another asset type than the field's.

<a id="rustdoc-item-3159"></a>

### `UnsupportedField`

```rust
UnsupportedField
```

The field's tag is outside the editable vocabulary (`struct:` and
anything the derive does not emit a scalar tag for).

## Associated functions and methods

<a id="rustdoc-item-3365"></a>

### `summary`

```rust
pub(crate) fn summary(self: &Self) -> String;
```

A short, stable message for the editor's console.

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
- `ToString`
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
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
- `Display`
- `Error`
