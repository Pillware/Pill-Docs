<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3734"></a>

# Enum `pill_development_host::renderer_module::RendererModuleChange`

```rust
pub(crate) enum RendererModuleChange { ... }
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\renderer_module.rs:289`

What [`RendererModule::reload_if_changed`](struct.RendererModule.md#rustdoc-item-3732) found.

## Variants

<a id="rustdoc-item-3760"></a>

### `Unchanged`

```rust
Unchanged
```

Nothing new: no reload was pending, or the first load failed again.
Whatever backend exists stays valid.

<a id="rustdoc-item-3761"></a>

### `Loaded`

```rust
Loaded
```

A generation loaded for the first time. It needs attaching.

<a id="rustdoc-item-3763"></a>

### `Reloaded`

```rust
Reloaded
```

The module already had a slot, with the outcome of its reload pass:
[`ReloadOutcome::Unchanged`](../extension/slot/enum.ReloadOutcome.md#rustdoc-item-2684) when nothing was pending. A reload that
ran the `before_commit` hook detached the backend, so it needs
attaching again, even when the reload rolled back to the old
generation.

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
- `Clone`
- `Copy`
- `Debug`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
