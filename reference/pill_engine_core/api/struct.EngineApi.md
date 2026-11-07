<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3"></a>

# Struct `pill_engine_core::api::EngineApi`

```rust
pub struct EngineApi;
```

Source: `engine\pill_engine_core\src\api.rs:63`

The engine table a project or module DLL receives at its entry point.

## Safety

`engine_handle` is only valid while the host's [`Engine`](../engine/struct.Engine.md#rustdoc-item-2)
lives and while the artifact is loaded. The artifact must not keep the
`&mut Engine` it builds from the handle once `pill_module_init` returns.

## Examples

```ignore
#[no_mangle]
pub unsafe extern "C" fn pill_module_init(api: *const EngineApi) -> u32 {
    let api = unsafe { &*api };
    let engine: &mut Engine = unsafe { &mut *(api.engine_handle as *mut Engine) };
    run_artifact_entry(engine, |_engine| {}, register, init)
}
```

In practice no artifact writes that by hand: `#[pill_project]` and
`#[pill_module]` generate the entry point, including the `catch_unwind`
guard that keeps a panic from unwinding across the C ABI boundary, and the
entry point declares what the artifact's macros declare - its components,
systems, resources and asset types - before the artifact's own `register`
runs. An artifact's own code never names its systems, resources or assets;
they arrive by declaration.

## Fields

<a id="rustdoc-item-0"></a>

### `engine_handle`

```rust
engine_handle: *mut std::ffi::c_void
```

Opaque handle to the engine instance, cast back to `&mut Engine` by the
receiving artifact.

## Associated functions and methods

<a id="rustdoc-item-4"></a>

### `new`

```rust
pub fn new(engine: &mut Engine) -> Self;
```

Builds the table that points at the given engine.

The engine must outlive every artifact that receives the result. The
host therefore boxes its engine before it builds this table: the handle
points into that box, so moving the host does not move the engine and
the pointer stays valid.

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
