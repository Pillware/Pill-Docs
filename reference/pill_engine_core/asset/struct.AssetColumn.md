<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-978"></a>

# Struct `pill_engine_core::asset::AssetColumn`

```rust
pub(in asset) struct AssetColumn;
```

Visibility: `{'restricted': {'parent': 865, 'path': '::asset'}}` · Source: `engine\pill_engine_core\src\asset.rs:459`

Bookkeeping for the slots of one asset column.

The column in the [`TraitTypeMap`] holds the values. This holds everything
else needed to hand out and check handles for those values. The two are
separate because the map stores columns with their type erased and cannot
carry metadata of its own.

## Fields

<a id="rustdoc-item-966"></a>

### `element_layout`

```rust
element_layout: (usize, usize)
```

Size and alignment of the column's element type, as the first
registration declared them. A later registration of the same shared type
must match both.

<a id="rustdoc-item-967"></a>

### `generations`

```rust
generations: Vec<u32>
```

Generation of each slot, one entry per slot that has ever existed.

Starts at 0 for a fresh slot and increments on every free, so a handle
issued before the free never matches after it.

<a id="rustdoc-item-968"></a>

### `content_versions`

```rust
content_versions: Vec<u64>
```

Content version of each slot, one entry per slot that has ever existed.

Adds one whenever the stored value is borrowed mutably. A consumer that
mirrors assets - the renderer's GPU uploads - can then rebuild just the
asset that changed instead of all of them. A freed slot keeps its last
entry, and the handle that refills the slot has a new generation, so
versions are only compared through one handle.

<a id="rustdoc-item-969"></a>

### `free_slots`

```rust
free_slots: Vec<u32>
```

Slots freed by `remove`, refilled before the column grows.

<a id="rustdoc-item-970"></a>

### `slot_rows`

```rust
slot_rows: Vec<u32>
```

Row the live slot at this index occupies in the packed column.

Rows are packed, so removing one moves the last row into the hole. This
map and `row_slots` keep the *slot* index stable through that move, and
the slot index is what a handle addresses. An entry for a free slot holds
whatever the last occupant left.

<a id="rustdoc-item-971"></a>

### `row_slots`

```rust
row_slots: Vec<u32>
```

The slot that owns each row; the reverse of `slot_rows`.

<a id="rustdoc-item-972"></a>

### `name_index`

```rust
name_index: KeyIndex<String>
```

Name lookup for assets that were added with a name, and its reverse.

It holds only the slot index. A lookup reads the current generation from
`generations`, and `remove` releases the name, so a dead name never
reaches the asset that refilled the slot.

<a id="rustdoc-item-973"></a>

### `guid_index`

```rust
guid_index: KeyIndex<AssetGuid>
```

Guid lookup, and its reverse.

This is a map of its own rather than a hash of the name computed at
lookup time. An asset may have a guid and no name - a cooked asset
identified by an id - and a name must never answer a guid lookup, or the
other way round.

<a id="rustdoc-item-975"></a>

### `import_settings`

```rust
import_settings: std::collections::HashMap<u32, serde_json::Value>
```

The import settings each slot was decoded with, stored as JSON.

Only an asset decoded without a metadata file has an entry. Without it,
a later `ensure_metadata` would write the type's default settings over
the ones the asset was actually decoded with. JSON is used because the
column is type-erased and `ImportSettings` only has to be
`Serialize + DeserializeOwned` (the trait also requires
`Default + Clone`). Entries are keyed by slot, so freeing the slot drops
its entry.

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
- `Default`
