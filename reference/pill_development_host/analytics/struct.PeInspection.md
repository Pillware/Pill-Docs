<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-134"></a>

# Struct `pill_development_host::analytics::PeInspection`

```rust
pub(crate) struct PeInspection;
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\analytics.rs:128`

The parts of a Windows PE header that this report uses.

## Fields

<a id="rustdoc-item-130"></a>

### `import_dlls`

```rust
import_dlls: Vec<String>
```

DLL names referenced by the import directory.

<a id="rustdoc-item-131"></a>

### `imports`

```rust
imports: Vec<PeImport>
```

The same DLLs with their named imports, in table order.

<a id="rustdoc-item-132"></a>

### `exports`

```rust
exports: Vec<String>
```

Exported names, so a caller can check that an import resolves.

<a id="rustdoc-item-133"></a>

### `image_size`

```rust
image_size: u64
```

`SizeOfImage` from the optional header, in bytes.

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
