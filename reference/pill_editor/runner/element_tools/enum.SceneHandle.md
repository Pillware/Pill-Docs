<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-719"></a>

# Enum `pill_editor::runner::element_tools::SceneHandle`

```rust
pub(in runner) enum SceneHandle { ... }
```

Visibility: `{'restricted': {'parent': 539, 'path': '::runner'}}` · Source: `editor\pill_editor\src\runner\element_tools.rs:86`

What a scene pixel hits among the editor's own handles.

The two bands never overlap (`gizmo::element_handle_slot` asserts it), so a
handle id says which kind of answer it is; this type carries that decision
to the caller that acts on it.

## Variants

<a id="rustdoc-item-1231"></a>

### `Element`

```rust
Element
```

One of the active tool's element handles.

<a id="rustdoc-item-1233"></a>

### `Gizmo`

```rust
Gizmo
```

One of the transform gizmo's handles.

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
- `SerializableAny`
- `Equivalent<K>`
- `SimdFrom<T, S>`
- `SimdInto<T, S>`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `WasmNotSendSync`
- `WasmNotSend`
- `WasmNotSync`
- `Clone`
- `Copy`
- `Debug`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
