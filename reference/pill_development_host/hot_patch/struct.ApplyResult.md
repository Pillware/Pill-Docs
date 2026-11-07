<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2513"></a>

# Struct `pill_development_host::hot_patch::ApplyResult`

```rust
pub(in hot_patch) struct ApplyResult;
```

Visibility: `{'restricted': {'parent': 1968, 'path': '::hot_patch'}}` · Source: `hosting\pill_development_host\src\hot_patch\mod.rs:326`

What one successfully installed body produced.

Named for the install rather than for the whole attempt: one attempt may
carry several bodies, and the generation number, artifact size and route
below describe this one.

## Fields

<a id="rustdoc-item-2509"></a>

### `generation`

```rust
generation: u32
```

Which generation this became.

<a id="rustdoc-item-2510"></a>

### `artifact_bytes`

```rust
artifact_bytes: u64
```

Size of the compiled patch on disk.

<a id="rustdoc-item-2511"></a>

### `route`

```rust
route: crate::analytics::PatchRoute
```

Which of the three mechanisms delivered it. Reported rather than
inferred downstream: an annotated and an un-annotated plain function are
the same `HotFunctionKind` but take completely different routes.

<a id="rustdoc-item-2512"></a>

### `copies`

```rust
copies: usize
```

How many running copies the install reached. One for the engine
registry, which is process-wide; otherwise one per artifact that links
the crate.

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
