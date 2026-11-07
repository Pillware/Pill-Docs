<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-971"></a>

# Struct `pill_csharp_bridge::manifest_apply::ManifestSubject`

```rust
pub(crate) struct ManifestSubject<Declaration, Binding, Undo>;
```

Visibility: `crate` · Source: `csharp\pill_csharp_bridge\src\manifest_apply.rs:118`

What one manifest kind contributes to the shared pipeline.

A plain struct of function pointers rather than a trait, matching the
`ColumnOps` and `StorageFactory` style this codebase already uses for
per-kind behaviour tables. The actions that write an entry - `register`,
`reshape` and `rename` - also receive the stable identity the pipeline
resolved, so none of them has to work it out again.

## Fields

<a id="rustdoc-item-1564"></a>

### `kind`

```rust
kind: &'static str
```

What this kind is called in log lines - "component", "resource".

<a id="rustdoc-item-1565"></a>

### `identity`

```rust
identity: fn (_: &Declaration) -> super::components::StableComponentId
```

The stable identity an arriving declaration claims.

<a id="rustdoc-item-1566"></a>

### `name`

```rust
name: fn (_: &Declaration) -> &str
```

The declared name, for reports and refusals.

<a id="rustdoc-item-1567"></a>

### `aliases`

```rust
aliases: fn (_: &Declaration) -> &[String]
```

The previous names this declaration may have been registered under. A
live entry under one of them becomes its predecessor.

<a id="rustdoc-item-1568"></a>

### `binding_name`

```rust
binding_name: fn (_: &pill_engine::Engine, _: &Binding) -> String
```

The name a live binding was registered under, for the retirement report.

<a id="rustdoc-item-1569"></a>

### `is_governed`

```rust
is_governed: fn (_: &Binding) -> bool
```

Whether a live entry is one this pipeline owns and may retire.

A table can hold entries this manifest does not govern. The component
table also holds module-native bindings - components an extension
registered in Rust - and those are never retired just because the
manifest stopped naming them.

<a id="rustdoc-item-1570"></a>

### `resolve_alias`

```rust
resolve_alias: fn (_: &pill_engine::Engine, _: &std::collections::HashMap<super::components::StableComponentId, Binding>, _: &str) -> Result<Option<super::components::StableComponentId>, pill_core::error::CSharpError>
```

Resolve one alias to the live table entry it names, if any.

<a id="rustdoc-item-1571"></a>

### `check_addable`

```rust
check_addable: fn (_: &Declaration) -> Result<(), pill_core::error::CSharpError>
```

Refuse a declaration that cannot be registered as it stands. Called only
for a declaration the table has no entry for.

<a id="rustdoc-item-1572"></a>

### `settle`

```rust
settle: fn (_: &pill_engine::Engine, _: &Binding, _: &Declaration) -> Result<Settlement, pill_core::error::CSharpError>
```

Decide what an arriving declaration means for a live binding.

<a id="rustdoc-item-1573"></a>

### `register`

```rust
register: fn (_: &mut pill_engine::Engine, _: super::components::StableComponentId, _: &Declaration) -> Result<(Binding, Option<Undo>), pill_core::error::CSharpError>
```

Register a declaration the table has no entry for.

<a id="rustdoc-item-1574"></a>

### `reshape`

```rust
reshape: fn (_: &mut pill_engine::Engine, _: super::components::StableComponentId, _: &Binding, _: &Declaration) -> Result<(Binding, Option<Undo>), pill_core::error::CSharpError>
```

Migrate a live entry's stored bytes into the arriving shape.

<a id="rustdoc-item-1575"></a>

### `rename`

```rust
rename: fn (_: &mut pill_engine::Engine, _: super::components::StableComponentId, _: &RenamePredecessor<'_, Binding>, _: &Declaration) -> Result<(Binding, Option<Undo>), pill_core::error::CSharpError>
```

Register the successor and move the predecessor's data onto it.

<a id="rustdoc-item-1576"></a>

### `retire`

```rust
retire: fn (_: &mut pill_engine::Engine, _: &[Binding]) -> usize
```

Retire every entry the manifest stopped naming, in one call.

The pipeline calls it last, because a retirement cannot be journalled:
no step that can fail may run after it. It reports how many entries it
retired and cannot report an error, because nothing would be left to
react to one.

<a id="rustdoc-item-1577"></a>

### `undo`

```rust
undo: fn (_: &mut pill_engine::Engine, _: Undo)
```

Undo one applied entry during a rollback, best effort.

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
