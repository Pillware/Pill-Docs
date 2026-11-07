<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-162"></a>

# Struct `pill_editor_core::editor_state::StandaloneTypeInfo`

```rust
pub struct StandaloneTypeInfo;
```

Source: `editor\pill_editor_core\src\editor_state\mod.rs:444`

One standalone asset type that a new file can be created for. It is a row
of the create dialog, built straight from the loaded modules'
registrations.

## Fields

<a id="rustdoc-item-3250"></a>

### `type_name`

```rust
type_name: String
```

The registered type name, written to the file's `asset_type`.

<a id="rustdoc-item-3251"></a>

### `display_name`

```rust
display_name: String
```

The last `::` segment of the type name, for the dialog row.

<a id="rustdoc-item-3252"></a>

### `extension`

```rust
extension: String
```

The file extension, without the dot.

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
