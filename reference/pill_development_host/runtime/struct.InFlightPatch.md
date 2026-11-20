<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4167"></a>

# Struct `pill_development_host::runtime::InFlightPatch`

```rust
pub(in runtime) struct InFlightPatch;
```

Visibility: `{'restricted': {'parent': 4115, 'path': '::runtime'}}` · Source: `hosting\pill_development_host\src\runtime.rs:2292`

One patch build running on its own thread.

The build compiles and maps the patch; installing it stays on the frame
thread, which is what [`advance_patch_attempt`](fn.advance_patch_attempt.md#rustdoc-item-4423) does when the report
arrives. The thread is joined on collection, on teardown, and nowhere else -
a build that outlived its host would be a thread still running code that is
about to be unloaded.

## Fields

<a id="rustdoc-item-4419"></a>

### `subject`

```rust
subject: PatchSubject
```

Which session the build is for, and who consumes its pending
generation once the patch is live.

<a id="rustdoc-item-4420"></a>

### `pending_generation`

```rust
pending_generation: u64
```

The generation counter captured when the build started. A save that
arrives while it compiles advances the counter past this value and must
stay pending.

<a id="rustdoc-item-4421"></a>

### `receiver`

```rust
receiver: mpsc::Receiver<(worker::PatchAttempt, Vec<worker::BodyOutcome>)>
```

The build's report, once it has one.

<a id="rustdoc-item-4422"></a>

### `thread`

```rust
thread: Option<thread::JoinHandle<()>>
```

The worker, joined when the report is collected or this value drops.

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
- `Drop`
