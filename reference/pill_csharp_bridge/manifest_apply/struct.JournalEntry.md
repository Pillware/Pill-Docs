<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1669"></a>

# Struct `pill_csharp_bridge::manifest_apply::JournalEntry`

```rust
pub(in manifest_apply) struct JournalEntry<Binding, Undo>;
```

Visibility: `{'restricted': {'parent': 970, 'path': '::manifest_apply'}}` · Source: `csharp\pill_csharp_bridge\src\manifest_apply.rs:200`

One applied entry, recorded so a later refusal can undo it.

The table half belongs to the pipeline: it records exactly which entries the
step wrote, so a rollback can restore the map without the subject knowing a
table exists. The engine half belongs to the subject and is absent for a
step whose effect cannot be reversed.

## Fields

<a id="rustdoc-item-1666"></a>

### `written_entry`

```rust
written_entry: (super::components::StableComponentId, Option<Binding>)
```

The table entry the step wrote: the identity, and the binding that was
there before, or `None` when the key was new.

<a id="rustdoc-item-1667"></a>

### `removed`

```rust
removed: Option<(super::components::StableComponentId, Binding)>
```

A predecessor the step removed, and the binding it held.

<a id="rustdoc-item-1668"></a>

### `undo`

```rust
undo: Option<Undo>
```

How to reverse the step's effect on the engine, when it can be.

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
