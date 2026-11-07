<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-438"></a>

# Struct `pill_engine_core::archetype::FieldPlan`

```rust
pub struct FieldPlan;
```

Source: `engine\pill_engine_core\src\archetype.rs:436`

A byte-level plan for moving rows from one layout of a component to another.

It is data, not code. The caller computes it from the two field lists it
already has: the managed manifest carries field names, offsets and sizes, so
the C# path builds one plan per changed component. The engine then applies
the plan to every stored row. Any byte the plan does not cover is left zero.

## Fields

<a id="rustdoc-item-434"></a>

### `fields`

```rust
fields: Vec<PlannedField>
```

The instructions, in the order they are applied.

<a id="rustdoc-item-436"></a>

### `retyped`

```rust
retyped: Vec<String>
```

Names of fields the plan reset because their type changed.

Kept so the caller can report them. A field that silently becomes a
different number is the failure this list exists to prevent, and
resetting one without saying so is a smaller version of the same
problem.

## Associated functions and methods

<a id="rustdoc-item-439"></a>

### `new`

```rust
pub fn new() -> Self;
```

An empty plan: every byte of every new row is zero.

<a id="rustdoc-item-440"></a>

### `retyped_fields`

```rust
pub fn retyped_fields(self: &Self) -> &[String];
```

Fields this plan reset because their declared type changed.

<a id="rustdoc-item-441"></a>

### `push`

```rust
pub fn push(self: &mut Self, offset: usize, bytes: usize, source: FieldSource);
```

Appends one instruction.

<a id="rustdoc-item-442"></a>

### `between`

```rust
pub fn between(old_fields: &[LayoutField<'_>], new_fields: &[LayoutField<'_>]) -> Self;
```

Builds a plan from the top-level fields of the old and new layout.

Fields are matched **by name**, so a reorder keeps every value with its
own name. A field only the new layout has becomes a zero fill, and a
field only the old layout had is left out, which is how a removed
field's bytes leave the rows. A name repeated in the old list matches
its first occurrence and the later ones are ignored, so a malformed
input still produces a deterministic plan instead of one that depends
on iteration order.

A matched pair whose sizes disagree copies the smaller size and leaves
the rest zeroed. A field that grew therefore keeps its bytes and gains a
defined tail, instead of reading past the old row.

<a id="rustdoc-item-443"></a>

### `fields`

```rust
pub fn fields(self: &Self) -> &[PlannedField];
```

The instructions, in application order.

<a id="rustdoc-item-445"></a>

### `set_default`

```rust
pub fn set_default(self: &mut Self, offset: usize, bytes: &[u8]) -> Result<(), WorldError>;
```

Gives one planned field a default value to write instead of zero.

This is for fields that an added or reshaped layout leaves empty. A
field the plan already copies keeps its carried value and this call
does nothing, so a declared default can never overwrite a value that
survived the reload.

#### Errors

Returns [`WorldError::DescriptorRowInvalid`](../error/enum.WorldError.md#rustdoc-item-444) when no planned field
starts at `offset`, when `bytes` is longer than a field can carry
(eight bytes - the widest primitive), or when it is longer than the
planned field itself.

<a id="rustdoc-item-446"></a>

### `is_empty`

```rust
pub fn is_empty(self: &Self) -> bool;
```

Whether the plan carries no instructions.

<a id="rustdoc-item-448"></a>

### `apply`

```rust
pub fn apply(self: &Self, source: &[u8], destination: &mut [u8]);
```

Writes one row's bytes according to this plan.

`source` is the old row, `destination` the new one. A caller that needs
the bytes no instruction covers to be defined zeroes the destination
first, because `ZeroFill` writes nothing of its own.

Every case is handled here, so a default set with
[`Self::set_default`](#rustdoc-item-445) is written the same way whichever path applies the
plan. Row sizes are not re-checked: callers run [`Self::validate`](#rustdoc-item-447) once
before applying the plan to every stored row, so the check costs one
pass rather than one per row.

<a id="rustdoc-item-447"></a>

### `validate`

```rust
pub fn validate(self: &Self, old_size: usize, new_size: usize) -> Result<(), WorldError>;
```

Checks every instruction against the two row sizes.

Callers run this before touching a row, so a plan that does not fit is
refused while the storage is still unchanged. The error is
[`WorldError::DescriptorRowInvalid`](../error/enum.WorldError.md#rustdoc-item-444), because a plan holds layout-level
data and has no component id to build a richer message from.

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
- `Default`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
