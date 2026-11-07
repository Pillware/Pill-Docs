<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5560"></a>

# Function `pill_editor_core::menubar::entries`

```rust
pub fn entries(menu: Menu, view: &MenuView<'_>) -> Vec<MenuEntry>;
```

Source: `editor\pill_editor_core\src\menubar.rs:212`

Returns the entries of `menu`: one row per registered command whose menu
path starts with this menu's title, in registration order.

No row is hard-coded here. A command that stops being registered loses its
row, and a renamed command renames its row. The rules between groups come
from the specs marked with
[`crate::commands::CommandSpec::separator`](../commands/struct.CommandSpec.md#rustdoc-item-1466).

A command with no action here gets no row. A greyed-out item would say
"not available right now", which is false for a command nothing
implements.
