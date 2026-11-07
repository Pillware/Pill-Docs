<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2215"></a>

# Struct `pill_development_host::hot_patch::PatchStages`

```rust
pub(crate) struct PatchStages;
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\hot_patch\mod.rs:274`

Where one patch spent its time, in milliseconds.

## Fields

<a id="rustdoc-item-2463"></a>

### `classify`

```rust
classify: f64
```

Reading the sources and deciding the edit is body-only.

<a id="rustdoc-item-2464"></a>

### `generate`

```rust
generate: f64
```

Producing the patch source.

<a id="rustdoc-item-2465"></a>

### `flags`

```rust
flags: f64
```

Asking cargo for the compiler flags. Near zero once this session has
cached the answer.

<a id="rustdoc-item-2466"></a>

### `compile`

```rust
compile: f64
```

`rustc` compiling and linking the patch library.

<a id="rustdoc-item-2467"></a>

### `load`

```rust
load: f64
```

`LoadLibrary` on the produced artifact.

<a id="rustdoc-item-2468"></a>

### `activate`

```rust
activate: f64
```

Resolving the new address and installing it into every running copy.

## Associated functions and methods

<a id="rustdoc-item-2469"></a>

### `merge`

```rust
pub fn merge(self: &mut Self, other_stages: &PatchStages);
```

Add one body's timings into the running total for the whole save.

`classify` is measured once per save rather than once per body, so the
per-body structs leave it at zero and adding it changes nothing.

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
- `ToString`
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
- `Clone`
- `Copy`
- `Display`
