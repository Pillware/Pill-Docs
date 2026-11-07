<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-234"></a>

# Struct `pill_engine::component_registry::PillExportDescriptor`

```rust
pub struct PillExportDescriptor;
```

Source: `engine\pill_engine\src\component_registry.rs:249`

A named C-ABI function an artifact offers to the host, found by name.

Submit one beside the function with `pill_engine::submit!`, so a host that
links the artifact statically - a shipping build, or a host that links a
data crate directly - finds it through [`find_export`](fn.find_export.md#rustdoc-item-233) with no symbol table
to search. A loaded module offers the same function as a `#[no_mangle]`
export under the same name, which the host resolves from the DLL instead.

Keep the shape minimal (name and address): every such function carries its
own signature, which the host states where it calls it.

## Fields

<a id="rustdoc-item-231"></a>

### `name`

```rust
name: &'static str
```

The function's export name, e.g. `pill_render_data_shader_changed`.

<a id="rustdoc-item-232"></a>

### `address`

```rust
address: ExportAddress
```

The function's address.

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
- `Debug`
- `Collect`
