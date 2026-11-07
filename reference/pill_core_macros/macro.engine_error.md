<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-207"></a>

# Procedural macro `pill_core_macros::engine_error`

```rust
proc_macro engine_error
```

Source: `engine\pill_core_macros\src\lib.rs:604`

Generates the `thiserror` display text, the `miette` diagnostic codes and
the `EngineMessage` rendering for one error enum.

Every variant carries its message as a `#[message(...)]` definition. A
variant that wraps another error uses `#[transparent]` instead.

## Errors

The macro reports a compile error when:

- `namespace` is missing or an argument name is unknown.
- A variant has neither `#[message(...)]` nor `#[transparent]`.
- A variant mixes `#[message(...)]` with `#[transparent]`.
- A variant repeats `#[message(...)]`.
- A `#[message(...)]` is empty, references an unknown field, or styles a
  field of an unnamed variant.
- A `#[transparent]` variant does not wrap exactly one error field.

## Debug aid

Set `ENGINE_ERROR_MACRO_DEBUG=1` to write the expansion of each enum to its
own file (`engine_error_<Enum>.rs`) and print that path to the build log.
The file goes to the directory named by `ENGINE_ERROR_MACRO_DEBUG_DIR` when
that variable is set, and to the system temp directory otherwise. It is
never written to the compiler's working directory.

## Examples

```ignore
#[engine_error(namespace = host::build)]
pub enum BuildError {
    #[message("failed to link {general_style(crate_name)}")]
    LinkFailed { crate_name: String },

    #[transparent]
    Toolchain(#[from] ToolchainError),
}
```
