<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1431"></a>

# Enum `pill_development_host::csharp::mirror_codegen::MirrorKind`

```rust
pub(in csharp) enum MirrorKind { ... }
```

Visibility: `{'restricted': {'parent': 1331, 'path': '::csharp'}}` · Source: `hosting\pill_development_host\src\csharp\mirror_codegen.rs:48`

What a mirrored Rust type becomes on the C# side.

## Variants

<a id="rustdoc-item-1427"></a>

### `Object`

```rust
Object
```

A `#[pill_mirror_object]` class.

<a id="rustdoc-item-1428"></a>

### `Enum`

```rust
Enum
```

A `#[derive(PillMirror)]` enum.

<a id="rustdoc-item-1429"></a>

### `Resource`

```rust
Resource
```

A `#[pill_mirror_resource]` marker (or the runtime's `AssetManager`).

<a id="rustdoc-item-1430"></a>

### `Value`

```rust
Value
```

A `#[derive(PillMirror)]` value type.

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
- `Debug`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
