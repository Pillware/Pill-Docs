<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1945"></a>

# Enum `pill_editor::runner::DragSubject`

```rust
pub(in runner) enum DragSubject { ... }
```

Visibility: `{'restricted': {'parent': 539, 'path': '::runner'}}` · Source: `editor\pill_editor\src\runner\mod.rs:4586`

What a gizmo drag edits: the entity's own transform, or the elements the
active tool reports for it.

A drag over an element selection moves those elements, and the tool writes
them back; with no tool that writes elements, the same press moves the
entity, exactly as it did before tools could own elements.

## Variants

<a id="rustdoc-item-1981"></a>

### `Entity`

```rust
Entity
```

The entity's transform component.

<a id="rustdoc-item-1985"></a>

### `Elements`

```rust
Elements
```

The active tool's elements of the selection.

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
- `SimdFrom<T, S>`
- `SimdInto<T, S>`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `WasmNotSendSync`
- `WasmNotSend`
- `WasmNotSync`
- `Clone`
- `Debug`
