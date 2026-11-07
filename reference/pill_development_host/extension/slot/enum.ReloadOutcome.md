<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2686"></a>

# Enum `pill_development_host::extension::slot::ReloadOutcome`

```rust
pub(crate) enum ReloadOutcome { ... }
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\extension.rs:636`

What a module reload attempt did.

There are three states rather than a `bool` because each one asks the
caller for a different action. Only [`Reloaded`] justifies the success
bookkeeping: the patch baselines are rebuilt, the recorded prologues are
forgotten and the editor revision moves. A failed attempt must leave all
of that alone, because the previous image is still current, its patches
are still installed and its prologues are still the rollback path.
"Nothing was pending" is not an attempt at all.

The outcome carries the generation, so the log lines can name the edit
the outcome belongs to instead of whatever the counter holds by the time
they run.

[`Reloaded`]: #rustdoc-item-2682

## Variants

<a id="rustdoc-item-2684"></a>

### `Unchanged`

```rust
Unchanged
```

The watcher signalled nothing new and no cascade rebuild was
queued, so no attempt was made.

<a id="rustdoc-item-2682"></a>

### `Reloaded`

```rust
Reloaded
```

The new generation was built, initialized and swapped in.

<a id="rustdoc-item-2683"></a>

### `Failed`

```rust
Failed
```

The build produced nothing usable, or the swap was refused. The
previous generation is still current.

No error string: every refusal already logs its own reason where it
is detected, and a second copy here would print it twice.

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
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Equivalent<K>`
- `Clone`
- `Copy`
- `Debug`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
