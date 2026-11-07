<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-338"></a>

# Function `pill_engine_macros::emit_heap_field_accessor`

```rust
pub(crate) fn emit_heap_field_accessor(type_ident: &syn::Ident, field_ident: &syn::Ident, field_name: &str, type_name: &proc_macro2::TokenStream, kind: HeapFieldKind) -> proc_macro2::TokenStream;
```

Visibility: `crate` · Source: `engine\pill_engine_macros\src\lib.rs:936`

Emits the accessor trampolines and the descriptor submission for one
heap-owning field.

Every trampoline receives the address of the live component value, which is
the row a managed query is iterating. The view reports `(data, length)` for
any container, resize grows or shrinks a container, and set replaces a
`String`'s contents from UTF-8 bytes. Nothing here serializes or copies a
buffer: the managed side reads and writes elements through the pointer it
receives.
