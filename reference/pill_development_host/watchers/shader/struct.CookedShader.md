<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4309"></a>

# Struct `pill_development_host::watchers::shader::CookedShader`

```rust
pub(crate) struct CookedShader;
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\watchers\shader.rs:63`

One re-cooked WGSL file, waiting for the main thread.

## Fields

<a id="rustdoc-item-4306"></a>

### `source_relative_path`

```rust
source_relative_path: String
```

The source relative to the watched tree, using `/` as the separator.

The shader asset's import reads the file beside this one, so a project
shader is reimported by this path.

<a id="rustdoc-item-4307"></a>

### `relative_path`

```rust
relative_path: String
```

The file relative to the watched `shader_sources/` tree, using `/` as
the separator.

<a id="rustdoc-item-4308"></a>

### `wgsl`

```rust
wgsl: String
```

The file's new text.

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
