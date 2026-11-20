<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1218"></a>

# Enum `pill_core::profiling::GpuApi`

```rust
pub enum GpuApi { ... }
```

Source: `engine\pill_core\src\profiling.rs:79`

The graphics API a GPU timeline's timestamps come from, so Tracy can label
the timeline.

## Variants

<a id="rustdoc-item-1385"></a>

### `Vulkan`

```rust
Vulkan
```

Vulkan.

<a id="rustdoc-item-1386"></a>

### `Direct3D12`

```rust
Direct3D12
```

Direct3D 12.

<a id="rustdoc-item-1387"></a>

### `OpenGL`

```rust
OpenGL
```

OpenGL.

<a id="rustdoc-item-1388"></a>

### `Other`

```rust
Other
```

Anything Tracy has no label for.

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
- `Debug`
- `Clone`
- `Copy`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
