<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3942"></a>

# Struct `pill_development_host::asset_browser::StandaloneType`

```rust
pub struct StandaloneType;
```

Source: `hosting\pill_development_host\src\asset_browser.rs:85`

A standalone asset type that a new file can be created for.

## Fields

<a id="rustdoc-item-4505"></a>

### `type_name`

```rust
type_name: String
```

The registered type name, written to the file's `asset_type`.

<a id="rustdoc-item-4506"></a>

### `display_name`

```rust
display_name: String
```

The last `::` segment of the type name, shown in a dropdown.

<a id="rustdoc-item-4507"></a>

### `extension`

```rust
extension: String
```

The file extension without the dot (`render_pass`).

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
- `Equivalent<K>`
- `Debug`
- `Clone`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
