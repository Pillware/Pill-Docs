<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-925"></a>

# Struct `pill_csharp_bridge::components::ManifestApplyReport`

```rust
pub(crate) struct ManifestApplyReport;
```

Visibility: `crate` · Source: `csharp\pill_csharp_bridge\src\components.rs:525`

What one applied manifest changed, for the caller's log line.

## Fields

<a id="rustdoc-item-917"></a>

### `migrated`

```rust
migrated: Vec<String>
```

Managed components whose layout changed and whose rows were migrated.

<a id="rustdoc-item-918"></a>

### `added`

```rust
added: Vec<String>
```

Managed components the manifest added.

<a id="rustdoc-item-919"></a>

### `renamed`

```rust
renamed: Vec<String>
```

Managed components the manifest renamed through an alias, as
`old name -> new name`.

<a id="rustdoc-item-920"></a>

### `retired`

```rust
retired: Vec<String>
```

Managed components whose storage was retired because the manifest
stopped naming them.

<a id="rustdoc-item-921"></a>

### `resources_added`

```rust
resources_added: Vec<String>
```

Managed resources the manifest added.

<a id="rustdoc-item-922"></a>

### `resources_migrated`

```rust
resources_migrated: Vec<String>
```

Managed resources whose layout changed and whose bytes were migrated.

<a id="rustdoc-item-923"></a>

### `resources_renamed`

```rust
resources_renamed: Vec<String>
```

Managed resources the manifest renamed through an alias, as
`old name -> new name`.

<a id="rustdoc-item-924"></a>

### `resources_retired`

```rust
resources_retired: Vec<String>
```

Managed resources whose declaration was retired because the manifest
stopped naming it.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
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
- `Default`
