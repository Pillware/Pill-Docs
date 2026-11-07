<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-893"></a>

# Struct `pill_csharp_bridge::manifest::ManagedManifestEntry`

```rust
pub(crate) struct ManagedManifestEntry;
```

Visibility: `crate` · Source: `csharp\pill_csharp_bridge\src\manifest.rs:252`

One entry deserialized from the manifest a managed assembly submits.

## Fields

<a id="rustdoc-item-1326"></a>

### `stable_id_low`

```rust
stable_id_low: u64
```

Low 64 bits of the stable component identity.

<a id="rustdoc-item-1327"></a>

### `stable_id_high`

```rust
stable_id_high: u64
```

High 64 bits of the stable component identity.

<a id="rustdoc-item-1328"></a>

### `full_name`

```rust
full_name: String
```

Canonical full name used to recompute and verify the identity.

<a id="rustdoc-item-1329"></a>

### `size`

```rust
size: usize
```

Total byte size of the component layout.

<a id="rustdoc-item-1330"></a>

### `alignment`

```rust
alignment: usize
```

Required byte alignment of the component layout.

<a id="rustdoc-item-1331"></a>

### `schema_hash`

```rust
schema_hash: u64
```

Hash of the managed field schema used to match native mirrors.

<a id="rustdoc-item-1332"></a>

### `shared`

```rust
shared: bool
```

Whether the managed side expects a native engine binding.

<a id="rustdoc-item-1333"></a>

### `kind`

```rust
kind: ManifestEntryKind
```

What the entry declares: a component, or a resource.

Defaulted so a payload that omits the tag parses as a list of
components, which keeps the manifest of an older generation readable
during a reload.

<a id="rustdoc-item-1335"></a>

### `aliases`

```rust
aliases: Vec<String>
```

The names of live registrations this entry renames onto itself.

A rename is declared here, not as a new entry: the host finds the
registration that answered to each alias and moves its rows onto this
entry, so a rename keeps its data, where a removal plus an add would
lose it. Defaulted for the same reason `kind` is.

<a id="rustdoc-item-1336"></a>

### `fields`

```rust
fields: Vec<ManagedFieldManifest>
```

Top-level field descriptions of the component layout.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
- `DeserializeOwned`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Deserialize<'de>`
