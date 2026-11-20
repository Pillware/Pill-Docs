<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-435"></a>

# Procedural macro `pill_engine_macros::script`

```rust
proc_macro script
```

Source: `engine\pill_engine_macros\src\lib.rs:2632`

Declares a script component, so the engine registers its lifecycle methods
without a call.

The attribute goes on the `impl ScriptComponent for ...` block. It reads
which lifecycle methods the block defines, each lifecycle method's
`#[order(n)]`, and whether the script also runs while the editor edits, and
turns all of it into the declaration the engine takes the lifecycle methods
from. The artifact entry point registers every declared script before its
own `register` and `init` run, for a first load, every reload and a
statically linked build alike.

```ignore
#[script]
impl ScriptComponent for Spin {
    fn on_update(&mut self, script_context: &mut ScriptContext) { }
}

#[script(edit_mode)]
impl ScriptComponent for EditorSpin {
    #[order(5)]
    fn on_create(&mut self, script_context: &mut ScriptContext, create_info: &CreateInfo) { }

    fn on_update(&mut self, script_context: &mut ScriptContext) { }
}
```

## Arguments

- `edit_mode` - the script also runs while the editor edits, not only while
  the game plays.

Every lifecycle method takes its own `#[order(n)]` marker, default `0`.
Lower values run first within the same pass, and equal values run in type
name order. An `#[order]` on a method that is not one of the five lifecycle
methods is refused, because nothing would read it.

A script component cannot be written without this attribute: the trait
requires a declaration that only the attribute implements, so leaving it
out is a compile error rather than a script the engine never runs.
