<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3804"></a>

# Struct `pill_development_host::renderer_module::ModuleRenderer`

```rust
pub(in renderer_module) struct ModuleRenderer;
```

Visibility: `{'restricted': {'parent': 3718, 'path': '::renderer_module'}}` · Source: `hosting\pill_development_host\src\renderer_module.rs:311`

A renderer backend that lives in the renderer module.

Drives the module's `dyn PillRenderer` through the pointer the attach
export returned, and hands it back to the module's detach export on drop.

## Fields

<a id="rustdoc-item-3799"></a>

### `module_backend`

```rust
module_backend: std::ptr::NonNull<Box<dyn PillRenderer>>
```

The renderer backend the module built, owned by this value.

<a id="rustdoc-item-3803"></a>

### `detach_export`

```rust
detach_export: unsafe extern "C" fn (_: *mut std::ffi::c_void)
```

The module's detach export, which frees `module_backend` inside the
module.

## Associated functions and methods

<a id="rustdoc-item-3805"></a>

### `module_backend`

```rust
pub(in renderer_module) fn module_backend(self: &Self) -> &dyn PillRenderer;
```

The module's backend, borrowed for a call that only reads it.

<a id="rustdoc-item-3806"></a>

### `module_backend_mut`

```rust
pub(in renderer_module) fn module_backend_mut(self: &mut Self) -> &mut dyn PillRenderer;
```

The module's backend, borrowed for a call that changes it.

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
- `PillRenderer`
- `Drop`
