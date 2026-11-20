<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2607"></a>

# Trait `pill_editor_core::editor_state::CommandObserver`

```rust
pub(crate) trait CommandObserver { ... }
```

Visibility: `crate` · Source: `editor\pill_editor_core\src\editor_state\mod.rs:52`

Receives each command a batch applied, for the editor API's callbacks.

The drain implements this with its hook session; every other caller uses
[`NoopObserver`](struct.NoopObserver.md#rustdoc-item-2762), so their recording path is unchanged.

## Required and provided items

<a id="rustdoc-item-2760"></a>

### `after_command`

```rust
fn after_command(self: &mut Self, engine: &mut Engine, index: usize, command: &EditorCommand, inverse: Option<&EditorCommand>);
```

Called after one command applied successfully.

<a id="rustdoc-item-2761"></a>

### `take_followups`

```rust
fn take_followups(self: &mut Self) -> Vec<EditorCommand>;
```

Takes the commands a callback queued for the command just reported.
