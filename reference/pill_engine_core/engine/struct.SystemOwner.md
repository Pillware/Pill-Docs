<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4111"></a>

# Struct `pill_engine_core::engine::SystemOwner`

```rust
pub struct SystemOwner;
```

Source: `engine\pill_engine_core\src\engine.rs:61`

Says who registered a system: the project, an extension, the renderer or
the engine.

A hot reload replaces one module's code while the rest of the process keeps
running. The systems of the module being swapped must be removed, because
their function pointers still point into the old library, but the systems
of every other module and of the project must keep running. Recording the
owner on each registration is what makes that separation possible.

## Fields

<a id="rustdoc-item-4110"></a>

### `0`

```rust
0: u64
```

_No documentation provided._

## Associated functions and methods

<a id="rustdoc-item-4112"></a>

### `PROJECT`

```rust
const PROJECT: Self = _;
```

Owner of systems the project registers, and of any system registered
outside a module scope.

<a id="rustdoc-item-4106"></a>

### `ENGINE`

```rust
const ENGINE: Self = _;
```

Owner of the systems the engine registers for itself, such as the
periodic ECS report.

A reload never clears these systems: the host retires systems by
naming the project or one module in [`Engine::clear_systems_owned_by`](struct.Engine.md#rustdoc-item-4113),
and an engine-owned system is neither. That suits them, because their
code lives in `pill_engine_core.dll`, which is never unloaded, so
there is nothing to retire.

The value is `u64::MAX`, which no [`Self::extension`](#rustdoc-item-4114) index reaches.

<a id="rustdoc-item-4114"></a>

### `extension`

```rust
pub const fn extension(index: usize) -> Self;
```

Owner of the extension loaded at `index`.

The value is one above `index`, so no extension owner can equal
[`Self::PROJECT`](#rustdoc-item-4112).

<a id="rustdoc-item-4115"></a>

### `RENDERER`

```rust
const RENDERER: Self = _;
```

Owner of the systems a renderer registers.

This value is reserved instead of taken from the extension range. A
host can skip an extension and keep that module's owner reserved until
the module loads (the editor's safe mode retries a failed module), so
counting the extensions that did load does not give the next free
index. An owner derived from that count could therefore equal the
skipped module's owner. Two different subjects under one owner would
let a reload of either clear the other's systems, and would let a
suspension meant for the module resume a renderer that is paused
against a replaced component layout.

The value is `u64::MAX - 1`, which no [`Self::extension`](#rustdoc-item-4114) index
reaches, and which differs from [`Self::PROJECT`](#rustdoc-item-4112) and [`Self::ENGINE`](#rustdoc-item-4106).

<a id="rustdoc-item-4116"></a>

### `extension_index`

```rust
pub fn extension_index(self: Self) -> Option<usize>;
```

The extension index this owner encodes, or `None` for the project, the
renderer and the engine.

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
- `Clone`
- `Copy`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
- `Hash`
- `Display`
