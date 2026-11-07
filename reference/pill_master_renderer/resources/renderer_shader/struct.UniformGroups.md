<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2689"></a>

# Struct `pill_master_renderer::resources::renderer_shader::UniformGroups`

```rust
pub struct UniformGroups;
```

Source: `extensions\pill_master_renderer\pill_master_renderer\src\resources\renderer_shader.rs:353`

Says which of the renderer's shared uniform groups a shader reads.

The two flags travel together because `RendererShader::new` already takes
twelve arguments, and two bare booleans at the end of the call would not
say which group each one turns on.

## Fields

<a id="rustdoc-item-2717"></a>

### `engine`

```rust
engine: bool
```

The shader reads group 0, the engine's parameters.

<a id="rustdoc-item-2718"></a>

### `camera`

```rust
camera: bool
```

The shader reads group 1, the camera's parameters.

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
- `WasmNotSendSync`
- `WasmNotSend`
- `WasmNotSync`
- `Clone`
- `Copy`
- `Debug`
- `Default`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
