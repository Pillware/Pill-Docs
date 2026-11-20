<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3254"></a>

# Struct `pill_development_host::native_binary::SectionHeader`

```rust
pub(in native_binary) struct SectionHeader;
```

Visibility: `{'restricted': {'parent': 3148, 'path': '::native_binary'}}` · Source: `hosting\pill_development_host\src\native_binary.rs:142`

One entry of an ELF section table, reduced to the fields this reader uses.

## Fields

<a id="rustdoc-item-3249"></a>

### `section_type`

```rust
section_type: u32
```

`sh_type`, which is how the dynamic and symbol tables are found.

<a id="rustdoc-item-3250"></a>

### `offset`

```rust
offset: usize
```

`sh_offset`, the section's position in the file.

<a id="rustdoc-item-3251"></a>

### `size`

```rust
size: usize
```

`sh_size`, the section's length in bytes.

<a id="rustdoc-item-3252"></a>

### `link`

```rust
link: usize
```

`sh_link`, the index of the section this one reads strings from.

<a id="rustdoc-item-3253"></a>

### `entry_size`

```rust
entry_size: usize
```

`sh_entsize`, the entry size the section declares, `0` when it has none.

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
- `Clone`
- `Copy`
