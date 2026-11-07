<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7140"></a>

# Struct `pill_engine_core::query::target::MutFetchState`

```rust
pub struct MutFetchState<T: Component>;
```

Source: `engine\pill_engine_core\src\query\target.rs:209`

The state a mutable component query keeps for one archetype. It holds a
pointer to the component column, so a row fetch does not look the column up
again.

## Fields

<a id="rustdoc-item-7181"></a>

### `component_column`

```rust
component_column: super::ptr::SendPtrMut<crate::archetype::ComponentColumn>
```

Pointer to the component column. The column owns both the row values
and their change-detection ticks, so this one pointer reaches the value
and its metadata.

<a id="rustdoc-item-7183"></a>

### `this_run`

```rust
this_run: crate::component::Tick
```

The tick of the current run. Every `Mut<T>` this state yields copies
it, so a write can record when it happened.

<a id="rustdoc-item-7184"></a>

### `_marker`

```rust
_marker: std::marker::PhantomData<T>
```

Makes the state carry the component type it was built for.

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
- `Send`
- `Sync`
