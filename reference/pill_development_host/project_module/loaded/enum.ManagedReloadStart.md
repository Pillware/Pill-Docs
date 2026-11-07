<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3350"></a>

# Enum `pill_development_host::project_module::loaded::ManagedReloadStart`

```rust
pub(crate) enum ManagedReloadStart { ... }
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\project_module.rs:60`

What starting a reload through the managed path produced.

## Variants

<a id="rustdoc-item-3345"></a>

### `NotManaged`

```rust
NotManaged
```

The project's backend is native, so the caller reloads it on the
frame thread.

<a id="rustdoc-item-3347"></a>

### `Building`

```rust
Building
```

A worker thread is building the assembly. The frame keeps running,
and the result is collected when
[`LoadedProject::collect_managed_build`](enum.LoadedProject.md#rustdoc-item-3346) reports the build.

<a id="rustdoc-item-3349"></a>

### `Unavailable`

```rust
Unavailable
```

The build thread could not start. The caller builds on the frame
thread through [`LoadedProject::build_now`](enum.LoadedProject.md#rustdoc-item-3348), and that report goes
through the same handler as a worker's report.

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
