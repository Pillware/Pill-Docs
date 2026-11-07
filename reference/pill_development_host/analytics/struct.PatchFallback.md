<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-355"></a>

# Struct `pill_development_host::analytics::PatchFallback`

```rust
pub(in analytics) struct PatchFallback;
```

Visibility: `{'restricted': {'parent': 1, 'path': '::analytics'}}` · Source: `hosting\pill_development_host\src\analytics.rs:817`

Why one change fell back to a full reload instead of patching.

Identical causes collapse into one entry with a count. The usual case is
the same edit failing the same way on every save, and five copies of one
compiler error would bury the reload line they explain.

## Fields

<a id="rustdoc-item-350"></a>

### `function`

```rust
function: Option<String>
```

Qualified function, or `None` when the fast path declined before it
could attribute the change to one.

<a id="rustdoc-item-351"></a>

### `outcome`

```rust
outcome: &'static str
```

`refused` when the fast path declined, `failed` when it tried and could
not finish. The difference matters. A refusal means the change did not
meet a precondition; a failure means the patch itself did not build.

<a id="rustdoc-item-352"></a>

### `code`

```rust
code: String
```

Short machine-readable cause, such as `compile` or `edited-before-arming`.

<a id="rustdoc-item-353"></a>

### `detail`

```rust
detail: String
```

The explanation, trimmed to its first line and capped.

<a id="rustdoc-item-354"></a>

### `count`

```rust
count: u64
```

How many times this exact cause repeated.

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
