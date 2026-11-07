<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1461"></a>

# Struct `pill_master_renderer_data::config::ShaderSourceRecord`

```rust
pub struct ShaderSourceRecord;
```

Source: `extensions\pill_master_renderer\pill_master_renderer_data\src\config\mod.rs:137`

The cooked files a built-in shader asset was built from.

Each pipeline's `SHADER_SOURCES` table holds one entry per shader it
installs. The development shader reload uses the table to map an edited
cooked file back to the assets built from it.

`vertex_path` and `fragment_path` name cooked `.wgsl` files, which is what
the host hands over. The asset itself is named after the `.hlsl` source it
was imported from.

## Fields

<a id="rustdoc-item-1591"></a>

### `shader_asset_name`

```rust
shader_asset_name: &'static str
```

The name the shader asset is stored under. That is the path of the
`.hlsl` source it was imported from, because an imported asset is named
after the path it came from.

<a id="rustdoc-item-1592"></a>

### `vertex_path`

```rust
vertex_path: &'static str
```

Its vertex stage.

<a id="rustdoc-item-1593"></a>

### `fragment_path`

```rust
fragment_path: &'static str
```

Its fragment stage.

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
