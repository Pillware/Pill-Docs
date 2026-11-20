<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-8667"></a>

# Struct `pill_engine_core::services::diagnostics::EcsSnapshot`

```rust
pub struct EcsSnapshot;
```

Source: `engine\pill_engine_core\src\services\diagnostics.rs:104`

Everything the report shows, gathered in one pass over the world.

The values are collected into an owned structure instead of being formatted
as they are gathered. That ends the borrow of the world before anything is
printed, and it lets a test check the gathered values without capturing
stdout.

## Fields

<a id="rustdoc-item-8651"></a>

### `frame`

```rust
frame: u64
```

Frame the snapshot was taken on.

<a id="rustdoc-item-8652"></a>

### `elapsed_seconds`

```rust
elapsed_seconds: f32
```

Seconds since startup.

<a id="rustdoc-item-8653"></a>

### `last_frame_milliseconds`

```rust
last_frame_milliseconds: f32
```

Milliseconds the previous frame took.

<a id="rustdoc-item-8654"></a>

### `entities`

```rust
entities: usize
```

Live entities across every archetype.

<a id="rustdoc-item-8655"></a>

### `recycled_entity_ids`

```rust
recycled_entity_ids: usize
```

Entity IDs retired and available for reuse.

<a id="rustdoc-item-8656"></a>

### `archetypes`

```rust
archetypes: usize
```

Archetypes the world holds, including empty ones.

<a id="rustdoc-item-8657"></a>

### `empty_archetypes`

```rust
empty_archetypes: usize
```

Archetypes still allocated but holding no entities.

<a id="rustdoc-item-8658"></a>

### `registered_components`

```rust
registered_components: usize
```

Component types registered, of the 128 a `ComponentMask` can hold.

<a id="rustdoc-item-8659"></a>

### `available_component_slots`

```rust
available_component_slots: usize
```

Registrations still available before the 128-type ceiling.

<a id="rustdoc-item-8660"></a>

### `shared_components`

```rust
shared_components: Vec<String>
```

Registered components that declare a cross-binary shared identity.

<a id="rustdoc-item-8661"></a>

### `shared_resources`

```rust
shared_resources: Vec<String>
```

Resources whose type declares a cross-binary shared identity, listed by
declared name.

No `TypeId` names a shared resource in every binary, so the name its
type declared is the only thing there is to print.

<a id="rustdoc-item-8662"></a>

### `descriptor_components`

```rust
descriptor_components: Vec<String>
```

Registered components defined by another language at runtime.

<a id="rustdoc-item-8663"></a>

### `unused_components`

```rust
unused_components: Vec<String>
```

Registered component types no archetype currently stores.

<a id="rustdoc-item-8664"></a>

### `change_tick`

```rust
change_tick: u32
```

The world's current change tick.

<a id="rustdoc-item-8665"></a>

### `resources`

```rust
resources: usize
```

Resources held by the world.

<a id="rustdoc-item-8666"></a>

### `archetype_reports`

```rust
archetype_reports: Vec<ArchetypeReport>
```

Per-archetype detail, largest first.

## Associated functions and methods

<a id="rustdoc-item-8668"></a>

### `gather`

```rust
pub fn gather(world: &World) -> Self;
```

Gathers the report from a world.

This only reads: it never touches the change tick, so taking a report
cannot make a `Changed<T>` filter fire.

<a id="rustdoc-item-8669"></a>

### `render`

```rust
pub fn render(self: &Self) -> String;
```

Renders the snapshot as the block the engine prints.

Returns a `String` instead of printing, so a caller can send the block
anywhere it likes and a test can assert on it.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
