<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5654"></a>

# Struct `pill_editor_core::problems::Problem`

```rust
pub struct Problem;
```

Source: `editor\pill_editor_core\src\problems.rs:59`

One problem parsed from a build's output.

## Fields

<a id="rustdoc-item-6444"></a>

### `severity`

```rust
severity: Severity
```

Error, warning or note.

<a id="rustdoc-item-6445"></a>

### `message`

```rust
message: String
```

The compiler's message, without its bracketed code.

<a id="rustdoc-item-6446"></a>

### `file`

```rust
file: Option<String>
```

The file the first span names, when the problem carries one.

<a id="rustdoc-item-6447"></a>

### `line`

```rust
line: Option<u32>
```

The line of that span.

<a id="rustdoc-item-6448"></a>

### `column`

```rust
column: Option<u32>
```

The column of that span.

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
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
