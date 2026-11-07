<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-192"></a>

# Struct `pill_csharp_bridge::abi::CsEngineApi`

```rust
pub(crate) struct CsEngineApi;
```

Visibility: `crate` · Source: `csharp\pill_csharp_bridge\src\abi.rs:142`

Function table copied by `csharp_runtime` during managed initialization.

Every slot holds one `extern "C"` callback, defined here or in the query,
deferred-command, context, frame-state, parallel and mirror-call modules.

The first two slots carry the contract version and the table's byte size, so
the managed side can refuse a table it was not built against before it
copies a single callback. The host checks the runtime's version through
`pill_interop_version` before resolving any export; this check is the other
direction. A table from a different contract, or one whose slots changed
without a version bump, is refused instead of called through a misread
pointer.

A new slot goes at the end, never between existing ones: the managed struct
mirror reproduces this field order, so an inserted slot would misalign every
slot after it.

## Fields

<a id="rustdoc-item-157"></a>

### `abi_version`

```rust
abi_version: u32
```

[`INTEROP_CONTRACT_VERSION`](../backend/constant.INTEROP_CONTRACT_VERSION.md#rustdoc-item-156) of the host that built this table.

<a id="rustdoc-item-158"></a>

### `table_size`

```rust
table_size: u32
```

`size_of::<CsEngineApi>()` of the host that built this table.

<a id="rustdoc-item-159"></a>

### `entity_count`

```rust
entity_count: extern "C" fn (_: *mut u32) -> u8
```

Write the number of live entities in the active world.

`0` wrote the count, `3` no managed system is scheduled, and `5` the
caller passed no output buffer.

<a id="rustdoc-item-161"></a>

### `get_component_chunk`

```rust
get_component_chunk: extern "C" fn (_: u64, _: u64, _: u8, _: u32, _: *mut ComponentChunk) -> u8
```

Fill a [`ComponentChunk`](struct.ComponentChunk.md#rustdoc-item-160) for one archetype/component pair.

<a id="rustdoc-item-162"></a>

### `get_archetype_chunk`

```rust
get_archetype_chunk: extern "C" fn (_: u64, _: u64, _: u64, _: u64, _: u8, _: *mut ComponentChunk) -> u8
```

Fill a [`ComponentChunk`](struct.ComponentChunk.md#rustdoc-item-160) for one component of an already-known archetype.

`mode` `0`/`1` request component storage; `mode` `2` requests the
archetype's entity column, which ignores the component key.

<a id="rustdoc-item-163"></a>

### `get_entity_chunk`

```rust
get_entity_chunk: extern "C" fn (_: u32, _: *mut ComponentChunk) -> u8
```

Fill a [`ComponentChunk`](struct.ComponentChunk.md#rustdoc-item-160) describing the entity column.

<a id="rustdoc-item-164"></a>

### `reserve_entity`

```rust
reserve_entity: extern "C" fn (_: *mut pill_engine::Entity) -> u8
```

Reserve a generation-checked entity handle without inserting it.

<a id="rustdoc-item-166"></a>

### `queue_create`

```rust
queue_create: extern "C" fn (_: *const pill_engine::Entity, _: *const NativeComponentBlob, _: u32) -> u8
```

Queue creation of an entity with up to `MAX_COMPONENTS_PER_CREATE` blobs.

<a id="rustdoc-item-168"></a>

### `queue_destroy`

```rust
queue_destroy: extern "C" fn (_: *const pill_engine::Entity) -> u8
```

Queue destruction of an entity.

<a id="rustdoc-item-169"></a>

### `queue_add_component`

```rust
queue_add_component: extern "C" fn (_: *const pill_engine::Entity, _: u64, _: u64, _: *const u8, _: u32) -> u8
```

Queue addition of one component to an entity.

<a id="rustdoc-item-170"></a>

### `queue_remove_component`

```rust
queue_remove_component: extern "C" fn (_: *const pill_engine::Entity, _: u64, _: u64) -> u8
```

Queue removal of one component from an entity.

<a id="rustdoc-item-171"></a>

### `mirror_method_count`

```rust
mirror_method_count: extern "C" fn () -> u32
```

Report how many mirrored Rust methods are registered.

<a id="rustdoc-item-172"></a>

### `copy_mirror_methods`

```rust
copy_mirror_methods: extern "C" fn (_: *mut MirrorMethodEntry, _: u32) -> u32
```

Copy the mirrored-method rows into a managed-owned buffer.

<a id="rustdoc-item-173"></a>

### `current_scope_token`

```rust
current_scope_token: extern "C" fn () -> u32
```

Token of the managed invocation active on the calling thread, or zero.

<a id="rustdoc-item-174"></a>

### `mirror_epoch`

```rust
mirror_epoch: extern "C" fn () -> u32
```

Report the epoch of the mirror-method table.

<a id="rustdoc-item-176"></a>

### `get_resource_view`

```rust
get_resource_view: extern "C" fn (_: u64, _: u64, _: u8, _: *mut ResourceView) -> u8
```

Fill a [`ResourceView`](struct.ResourceView.md#rustdoc-item-175) for one resource the active system declared.

Arguments are the stable identity's low and high halves, the requested
mode (`0` read, `1` write) and the output view.

<a id="rustdoc-item-177"></a>

### `csharp_log`

```rust
csharp_log: extern "C" fn (_: u8, _: *const u8, _: u32, _: *const u8, _: u32)
```

Emit a managed log event through the shared tracing subscriber.

<a id="rustdoc-item-178"></a>

### `csharp_zone_begin`

```rust
csharp_zone_begin: extern "C" fn (_: *const u8, _: u32) -> u64
```

Open a dynamic managed Tracy zone and return its token.

<a id="rustdoc-item-179"></a>

### `csharp_zone_end`

```rust
csharp_zone_end: extern "C" fn (_: u64)
```

Close the dynamic managed Tracy zone the token names.

<a id="rustdoc-item-181"></a>

### `input_key_held`

```rust
input_key_held: extern "C" fn (_: u8) -> u8
```

Whether a key, by its [`KeyCode`](pill_engine::KeyCode) discriminant,
is held this frame.

<a id="rustdoc-item-182"></a>

### `input_mouse_button_held`

```rust
input_mouse_button_held: extern "C" fn (_: u8) -> u8
```

Whether a mouse button, by discriminant, is held this frame.

<a id="rustdoc-item-183"></a>

### `input_mouse_delta`

```rust
input_mouse_delta: extern "C" fn (_: *mut f32, _: *mut f32) -> u8
```

Write this frame's mouse motion in the frontend's raw units to the two
outputs; `1` when written.

<a id="rustdoc-item-184"></a>

### `time_delta_seconds`

```rust
time_delta_seconds: extern "C" fn () -> f32
```

The frame's clamped delta in seconds; `0.0` outside a managed
invocation.

<a id="rustdoc-item-185"></a>

### `time_elapsed_seconds`

```rust
time_elapsed_seconds: extern "C" fn () -> f32
```

Seconds since the engine started; `0.0` outside a managed invocation.

<a id="rustdoc-item-186"></a>

### `parallel_for`

```rust
parallel_for: extern "C" fn (_: extern "C" fn (_: *mut std::ffi::c_void, _: u32), _: *mut std::ffi::c_void, _: u32) -> u8
```

Run the managed trampoline for every index in `0..count` on the shared
Rayon pool, joining before returning. Status `0` ran every index, `3`
no managed system is scheduled on the calling thread, `4` the call
came from inside a parallel callback, `5` a panic escaped the dispatch.
`state` is opaque and travels back to `callback` untouched.

<a id="rustdoc-item-188"></a>

### `take_mirror_text`

```rust
take_mirror_text: extern "C" fn (_: u8, _: *mut *const u8, _: *mut u32) -> u8
```

Take the last error (`0`) or the returned string (`1`) a mirrored call
left on this thread; see `mirror_calls::ffi_take_mirror_text`.

<a id="rustdoc-item-189"></a>

### `get_native_resource`

```rust
get_native_resource: extern "C" fn (_: u64, _: u64, _: u8, _: *mut *mut std::ffi::c_void) -> u8
```

Write the address of a Rust-owned resource, by its shared name's
identity, under the running invocation's declared access; see
`mirror_calls::ffi_get_native_resource`.

<a id="rustdoc-item-190"></a>

### `asset_loader_read`

```rust
asset_loader_read: extern "C" fn (_: *const u8, _: u32, _: *mut *const u8, _: *mut u32) -> u8
```

Read a file through the mounted asset store for `AssetLoader.Load()`;
see `mirror_calls::ffi_asset_loader_read`.

<a id="rustdoc-item-191"></a>

### `entity_stable_id`

```rust
entity_stable_id: extern "C" fn (_: *const pill_engine::Entity, _: *mut u64, _: *mut u64) -> u8
```

Write a live entity's stable id as its low and high halves for
`Engine.TryGetStableId`; `0` wrote it, `1` the entity is not live, `3`
no managed system is scheduled, `5` the handle or an output half was
null.

## Associated functions and methods

<a id="rustdoc-item-193"></a>

### `new`

```rust
pub(crate) fn new(mirror_methods: &[ResolvedMirrorMethod]) -> Self;
```

Builds the function table the managed runtime copies at startup.

Every slot points at the matching `ffi_*` callback, so the managed
runtime never sees Rust-internal representation details. The resolved
`#[pill_mirror_method]` trampolines are published first, through
[`publish_mirror_methods`](fn.publish_mirror_methods.md#rustdoc-item-9), and the table then exposes them through the
two mirror-method slots.

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
