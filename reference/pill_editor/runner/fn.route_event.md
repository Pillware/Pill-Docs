<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1376"></a>

# Function `pill_editor::runner::route_event`

```rust
pub(in runner) fn route_event(is_game_window: bool) -> EventRoute;
```

Visibility: `{'restricted': {'parent': 483, 'path': '::runner'}}` · Source: `editor\pill_editor\src\runner\mod.rs:3634`

The focus rule in one place: the game's window feeds the game, every
editor window feeds the shell.

The event is not a parameter because it cannot matter: routing is decided
by the window a click or key came through, and a signature that took the
event would promise otherwise.
