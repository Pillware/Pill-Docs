<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4991"></a>

# Struct `pill_editor_core::hooks::context::HookNotices`

```rust
pub struct HookNotices;
```

Source: `editor\pill_editor_core\src\hooks\context.rs:58`

The notices this frame's callbacks posted, waiting for the executable.

The executable republishes [`EditorNotices`](../../notices/struct.EditorNotices.md#rustdoc-item-4990)
from its own copy, so a notice written there directly would be erased; it
drains this queue and pushes each entry through the same toast path its own
notices take. The browser writes the editor's resource directly.

## Fields

<a id="rustdoc-item-4988"></a>

### `notices`

```rust
notices: Vec<HookNotice>
```

The notices, oldest first.

## Associated functions and methods

<a id="rustdoc-item-4992"></a>

### `push`

```rust
pub fn push(self: &mut Self, notice: HookNotice);
```

Queues one notice.

<a id="rustdoc-item-4993"></a>

### `drain`

```rust
pub fn drain(self: &mut Self) -> Vec<HookNotice>;
```

Takes every queued notice and leaves the queue empty.

<a id="rustdoc-item-4994"></a>

### `ensure`

```rust
pub fn ensure(world: &mut World);
```

Registers the resource, inserting a default only when the world has
none.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
- `SimdFrom<T, S>`
- `SimdInto<T, S>`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `IntoEither`
- `Instrument`
- `WithSubscriber`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `Debug`
- `Default`
- `Resource`
