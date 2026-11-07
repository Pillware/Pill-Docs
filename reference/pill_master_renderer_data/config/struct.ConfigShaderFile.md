<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1469"></a>

# Struct `pill_master_renderer_data::config::ConfigShaderFile`

```rust
pub struct ConfigShaderFile;
```

Source: `extensions\pill_master_renderer\pill_master_renderer_data\src\config\mod.rs:110`

A cooked WGSL stage the renderer embeds at build time.

Each pipeline module declares one constant per stage it draws through. The
constant carries the stage text into the crate and remembers its path, so a
reload can find the file again.

The shaders themselves still live in the store. Every built-in shader is
imported from its `.hlsl` source like a project's, and only the pair the GPU
module builds its stand-in shader from is read back out of a constant.

## Fields

<a id="rustdoc-item-1553"></a>

### `relative_path`

```rust
relative_path: &'static str
```

Path relative to the crate's `shader_sources/`, e.g.
`pbr_pipeline/shaders/pbr_fragment.wgsl`.

<a id="rustdoc-item-1554"></a>

### `embedded_source`

```rust
embedded_source: &'static str
```

The file's text as `include_str!` embedded it when the crate was built.

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
- `Copy`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
