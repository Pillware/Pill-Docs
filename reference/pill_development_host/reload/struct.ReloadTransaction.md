<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3513"></a>

# Struct `pill_development_host::reload::ReloadTransaction`

```rust
pub(crate) struct ReloadTransaction<'a>;
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\reload.rs:191`

One subject's state, borrowed for one reload.

Created for each reload instead of being stored. It borrows the caller's
library slot and graveyard mutably, and only for the length of the
transaction.

## Fields

<a id="rustdoc-item-3502"></a>

### `subject`

```rust
subject: &'a str
```

Name that appears in every log line and analytics record.

<a id="rustdoc-item-3503"></a>

### `kind`

```rust
kind: ReloadSubjectKind
```

The kind of subject, which decides the log wording and whether
registrations are scoped.

<a id="rustdoc-item-3504"></a>

### `owner`

```rust
owner: pill_engine::SystemOwner
```

The systems this reload may clear.

<a id="rustdoc-item-3505"></a>

### `current`

```rust
current: &'a mut crate::native_library::NativeLibrary
```

The generation being retired. It stays loaded for the whole transaction.

<a id="rustdoc-item-3506"></a>

### `old_libraries`

```rust
old_libraries: &'a mut Vec<crate::native_library::NativeLibrary>
```

Retired generations that are still loaded.

<a id="rustdoc-item-3507"></a>

### `registered_type_names`

```rust
registered_type_names: &'a mut Vec<String>
```

Persistable type names the previous `init` registered.

<a id="rustdoc-item-3508"></a>

### `registered_schemas`

```rust
registered_schemas: &'a mut Vec<(String, u64)>
```

Schema hash of each persistable type the previous `init` registered, as
that generation declared it. See [`stale_components`](fn.stale_components.md#rustdoc-item-2698).

<a id="rustdoc-item-3509"></a>

### `registered_resource_ids`

```rust
registered_resource_ids: &'a mut Vec<pill_engine::ResourceId>
```

Resource ids the previous generation of this subject registered.

Compared with what the new generation registers. That lets a resource
type the subject no longer owns be dropped while the image holding its
drop function is still loaded.

<a id="rustdoc-item-3510"></a>

### `peer_component_names`

```rust
peer_component_names: &'a [String]
```

Every component type name, plain or persistable, that the other live
subjects declare. The caller gathers it from their current generations.

A type another artifact still declares does not belong to this subject.
Every artifact that links a shared crate registers a shared identity, so
dropping its columns here would erase the peer's rows and its
registration. The world keeps an append-only registration log, which
cannot say who declares a type now. That is why the caller passes the
set in instead of this code querying it.

<a id="rustdoc-item-3511"></a>

### `layout_record`

```rust
layout_record: crate::layout_record::LayoutRecordTarget<'a>
```

Where this subject's layout record lives, and what a declared source
path resolves against.

The record describes the generation that loaded last, so a step before
the new `init` can compare the declared resources with it and drop the
ones whose layout changed.

<a id="rustdoc-item-3512"></a>

### `graveyard_policy`

```rust
graveyard_policy: GraveyardPolicy
```

Whether retired generations may be released.

## Associated functions and methods

<a id="rustdoc-item-3514"></a>

### `begin_registration`

```rust
pub(in reload) fn begin_registration(self: &Self, engine: &mut Engine);
```

Starts the new generation's registration scope when this subject uses
one.

<a id="rustdoc-item-3515"></a>

### `end_registration`

```rust
pub(in reload) fn end_registration(self: &Self, engine: &mut Engine);
```

Ends the registration scope again.

<a id="rustdoc-item-3516"></a>

### `drop_resources_whose_layout_changed`

```rust
pub(in reload) fn drop_resources_whose_layout_changed(self: &Self, engine: &mut Engine);
```

Drops the resources whose declared layout changed since the last load,
so the module rebuilds them instead of keeping a value of the old shape.

Only a resource that declared its layout is considered, because only
then is there a fingerprint to compare. A resource that declared
nothing keeps today's behaviour: it is kept whenever the new generation
registers the type again.

Each dropped resource is reported once, naming what changed and what was
done. The person edited a file, and the edit having a consequence for
live state is worth a line at warning level.

<a id="rustdoc-item-3518"></a>

### `retire_library`

```rust
pub(in reload) fn retire_library(self: &mut Self, library: NativeLibrary, world: &World);
```

Moves a library into the graveyard. Releases the oldest generation when
the limit is passed, but only once no surviving column needs its
tables.

A retired image is never unloaded the moment it stops being current.
Pointers into it can still be live: storage tables, patch stubs and
persist metadata. The eviction log line is what marks a later fault as
coming from an image released here rather than from somewhere else.

The `world` argument turns "a limit of two generations is safe" into a
check. A column whose component id has no factory left still holds a
function table from whichever image created it. So if
[`World::columns_without_factory`] returns a non-zero count, the release
waits and logs a warning instead of calling into freed memory.

<a id="rustdoc-item-3519"></a>

### `deferred_eviction_count`

```rust
pub(in reload) fn deferred_eviction_count(subject: &str, should_defer: bool) -> u32;
```

Counts consecutive deferred evictions for one subject.

When `should_defer` is true this adds one and returns the new count.
When it is false it clears the count and returns zero. The count is kept
per subject because the project and each extension retire on their own,
and one stuck subject must not hide another's state or be hidden by it.

<a id="rustdoc-item-3521"></a>

### `commit`

```rust
pub(crate) fn commit(self: Self, engine: &mut Engine, engine_api: &EngineApi, new_library: NativeLibrary) -> Option<ReloadCommit>;
```

Runs the whole sequence against a replacement that is already loaded.

The compile and load that come first live in [`build_load_and_commit`](fn.build_load_and_commit.md#rustdoc-item-3520).
The steps below count on from those.

Returns `None` when the new generation failed to initialize and the
previous one was restored. In that case nothing was swapped and the
caller keeps running what it had.

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
