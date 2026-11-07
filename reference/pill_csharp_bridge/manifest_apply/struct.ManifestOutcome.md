<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1605"></a>

# Struct `pill_csharp_bridge::manifest_apply::ManifestOutcome`

```rust
pub(crate) struct ManifestOutcome;
```

Visibility: `crate` · Source: `csharp\pill_csharp_bridge\src\manifest_apply.rs:166`

What one applied manifest changed.

Every kind fills the same shape. The pipeline fills it in, and each caller
folds it into whatever report its own callers read.

## Fields

<a id="rustdoc-item-1601"></a>

### `added`

```rust
added: Vec<String>
```

Entries the arriving manifest declares for the first time.

<a id="rustdoc-item-1602"></a>

### `migrated`

```rust
migrated: Vec<String>
```

Entries whose layout changed and whose stored data was migrated.

<a id="rustdoc-item-1603"></a>

### `renamed`

```rust
renamed: Vec<String>
```

Entries the manifest renamed through an alias, shown as
`old name -> new name`.

<a id="rustdoc-item-1604"></a>

### `retired`

```rust
retired: Vec<String>
```

Entries retired because the manifest stopped naming them.

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
