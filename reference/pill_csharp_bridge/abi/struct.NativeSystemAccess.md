<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-284"></a>

# Struct `pill_csharp_bridge::abi::NativeSystemAccess`

```rust
pub(crate) struct NativeSystemAccess;
```

Visibility: `crate` · Source: `csharp\pill_csharp_bridge\src\abi.rs:356`

One reflected scheduler access, where `0` is read and `1` is write.

Managed systems declare one entry per queried component before the native
side derives scheduler metadata.

## Fields

<a id="rustdoc-item-280"></a>

### `component_key`

```rust
component_key: u64
```

Low half of the component key the access entry refers to.

Same derivation chain as `NativeComponentBlob`'s key: see
[`components::StableComponentId`](../components/struct.StableComponentId.md#rustdoc-item-219).

<a id="rustdoc-item-281"></a>

### `component_key_high`

```rust
component_key_high: u64
```

High half of that key, restored into position by `from_halves`.

<a id="rustdoc-item-282"></a>

### `mode`

```rust
mode: u8
```

Access mode: `0` is read-only and `1` is read-write.

<a id="rustdoc-item-283"></a>

### `kind`

```rust
kind: u8
```

What the key names: `0` a component, `1` a managed resource, `2` a
Rust-owned resource reached by its shared name.

The discriminator is needed because every key is a 128-bit hash of a
name drawn from the same space. Without it, a resource read could be
authorized by a component entry that happened to hash alike, and the
scheduler would record a component access where a resource access was
meant. Two systems writing one resource would then be allowed to run at
the same time. The two resource kinds resolve through different tables:
a managed resource through the manifest's bindings, a native one
straight to `ResourceId::Shared` of its name.

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
- `Clone`
- `Copy`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
