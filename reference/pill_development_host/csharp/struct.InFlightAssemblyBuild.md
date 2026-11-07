<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1666"></a>

# Struct `pill_development_host::csharp::InFlightAssemblyBuild`

```rust
pub(in csharp) struct InFlightAssemblyBuild;
```

Visibility: `{'restricted': {'parent': 1331, 'path': '::csharp'}}` · Source: `hosting\pill_development_host\src\csharp\mod.rs:348`

One assembly build running on its own worker thread.

The thread is waited for when its report is collected, when the worker is
found dead, and when this value is dropped. A build that outlived its host
would keep calling the compiler's function pointers after the managed
runtime that owns them was dropped.

## Fields

<a id="rustdoc-item-1797"></a>

### `receiver`

```rust
receiver: std::sync::mpsc::Receiver<BuildReport>
```

The build's report, once the worker has one.

<a id="rustdoc-item-1799"></a>

### `thread`

```rust
thread: Option<std::thread::JoinHandle<()>>
```

The worker thread, waited for by [`Self::join`](#rustdoc-item-1798) or on drop.

## Associated functions and methods

<a id="rustdoc-item-1798"></a>

### `join`

```rust
pub(in csharp) fn join(self: &mut Self);
```

Waits for the worker thread to end. Returns at once when it already
finished, which is the case whenever a report was received.

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
