<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4077"></a>

# Struct `pill_engine_core::diagnostics::EcsSnapshot`

```rust
pub struct EcsSnapshot;
```

Source: `engine\pill_engine_core\src\diagnostics.rs:104`

Everything the report shows, gathered in one pass over the world.

The values are collected into an owned structure instead of being formatted
as they are gathered. That ends the borrow of the world before anything is
printed, and it lets a test check the gathered values without capturing
stdout.

## Fields

<a id="rustdoc-item-4061"></a>

### `frame`

```rust
frame: u64
```

Frame the snapshot was taken on.

<a id="rustdoc-item-4062"></a>

### `elapsed_seconds`

```rust
elapsed_seconds: f32
```

Seconds since startup.

<a id="rustdoc-item-4063"></a>

### `last_frame_milliseconds`

```rust
last_frame_milliseconds: f32
```

Milliseconds the previous frame took.

<a id="rustdoc-item-4064"></a>

### `entities`

```rust
entities: usize
```

Live entities across every archetype.

<a id="rustdoc-item-4065"></a>

### `recycled_entity_ids`

```rust
recycled_entity_ids: usize
```

Entity IDs retired and available for reuse.

<a id="rustdoc-item-4066"></a>

### `archetypes`

```rust
archetypes: usize
```

Archetypes the world holds, including empty ones.

<a id="rustdoc-item-4067"></a>

### `empty_archetypes`

```rust
empty_archetypes: usize
```

Archetypes still allocated but holding no entities.

<a id="rustdoc-item-4068"></a>

### `registered_components`

```rust
registered_components: usize
```

Component types registered, of the 128 a `ComponentMask` can hold.

<a id="rustdoc-item-4069"></a>

### `available_component_slots`

```rust
available_component_slots: usize
```

Registrations still available before the 128-type ceiling.

<a id="rustdoc-item-4070"></a>

### `shared_components`

```rust
shared_components: Vec<String>
```

Registered components that declare a cross-binary shared identity.

<a id="rustdoc-item-4071"></a>

### `shared_resources`

```rust
shared_resources: Vec<String>
```

Resources whose type declares a cross-binary shared identity, listed by
declared name.

No `TypeId` names a shared resource in every binary, so the name its
type declared is the only thing there is to print.

<a id="rustdoc-item-4072"></a>

### `descriptor_components`

```rust
descriptor_components: Vec<String>
```

Registered components defined by another language at runtime.

<a id="rustdoc-item-4073"></a>

### `unused_components`

```rust
unused_components: Vec<String>
```

Registered component types no archetype currently stores.

<a id="rustdoc-item-4074"></a>

### `change_tick`

```rust
change_tick: u32
```

The world's current change tick.

<a id="rustdoc-item-4075"></a>

### `resources`

```rust
resources: usize
```

Resources held by the world.

<a id="rustdoc-item-4076"></a>

### `archetype_reports`

```rust
archetype_reports: Vec<ArchetypeReport>
```

Per-archetype detail, largest first.

## Associated functions and methods

<a id="rustdoc-item-4078"></a>

### `gather`

```rust
pub fn gather(world: &World) -> Self;
```

Gathers the report from a world.

This only reads: it never touches the change tick, so taking a report
cannot make a `Changed<T>` filter fire.

<a id="rustdoc-item-4079"></a>

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
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
