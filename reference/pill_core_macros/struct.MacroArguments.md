<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3"></a>

# Struct `pill_core_macros::MacroArguments`

```rust
pub(crate) struct MacroArguments;
```

Visibility: `crate` · Source: `engine\pill_core_macros\src\lib.rs:47`

Arguments accepted by `#[engine_error(...)]`.

## Fields

<a id="rustdoc-item-0"></a>

### `namespace_path`

```rust
namespace_path: syn::Path
```

Diagnostic-code namespace, e.g. `host::build`.

<a id="rustdoc-item-2"></a>

### `runtime_path`

```rust
runtime_path: syn::Path
```

Path of the diagnostics runtime module used by generated code.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
- `Parse`
