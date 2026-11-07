<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-159"></a>

# Struct `pill_editor_core::editor_state::AssetListing`

```rust
pub struct AssetListing;
```

Source: `editor\pill_editor_core\src\editor_state\mod.rs:377`

One row of the Assets panel: a file or folder the browser knows about.

## Fields

<a id="rustdoc-item-3166"></a>

### `root`

```rust
root: String
```

The root the row came from. It is empty for the project's own `res`,
and otherwise the name of the module whose read-only resources the row
belongs to. A root's own row has an empty [`Self::path`](#rustdoc-item-3165).

<a id="rustdoc-item-3165"></a>

### `path`

```rust
path: String
```

The path within its root, forward slashes.

<a id="rustdoc-item-3167"></a>

### `read_only`

```rust
read_only: bool
```

Whether the row is one of a module's resources: listed and inspected,
never written.

<a id="rustdoc-item-3168"></a>

### `kind`

```rust
kind: AssetKind
```

What the row is: a folder, or the file's type.

<a id="rustdoc-item-3169"></a>

### `standalone`

```rust
standalone: bool
```

Whether the entry is a standalone asset (it holds its own header).

<a id="rustdoc-item-3170"></a>

### `has_meta`

```rust
has_meta: bool
```

Whether a `.meta` sidecar, or a standalone header, carries a guid.
A sourced file without one can get a written sidecar.

<a id="rustdoc-item-3171"></a>

### `guid`

```rust
guid: Option<String>
```

The asset's guid when the file names one, in its sidecar or its own
header. A settings document's reference writes this value, and it is
the key that names the asset behind such a reference.

## Associated functions and methods

<a id="rustdoc-item-3172"></a>

### `key`

```rust
pub fn key(self: &Self) -> String;
```

Returns the row as the tree and the grid name it.

A project row is its [`Self::path`](#rustdoc-item-3165). An extension's row is
`extensions/<root>/<path>`, or just `extensions/<root>` for the root's
own row.

Project rows keep their plain path, so a selection, a command and a
scripted verb name a project asset by the path it carries. Extension
rows sit under [`EXTENSIONS_ROOT`](constant.EXTENSIONS_ROOT.md#rustdoc-item-557), which is a root of the panel in its
own right and never a folder inside the project's tree.

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
