<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-778"></a>

# Module `pill_ui_theme::register`

Source: `ui\pill_ui_theme\src\register.rs:1`

Puts the theme asset types on a world, then loads a theme or font within the
game or editor path rule.
Registration, path scopes and the loaders.

## Responsibilities

- [`register()`](fn.register.md#rustdoc-item-774): declares the `.theme` standalone asset and the font asset
  on a world.
- [`ThemePathScope`](enum.ThemePathScope.md#rustdoc-item-709): the game/editor path rule. A game never loads editor
  content, and an editor layer only loads from `editor/`.
- [`load_overrides`](fn.load_overrides.md#rustdoc-item-776): imports a `.theme` file and returns its handle.
- [`load_font`](fn.load_font.md#rustdoc-item-777): imports the font a theme layer named and returns its
  handle with the store's content version, which a caller compares to
  notice an edited file.

## Design

The scope check runs before the asset store sees the path, so a path
outside the caller's scope is refused with a message about the rule, not as
a filesystem error. Both scopes go through `checked_relative`. It refuses a
path that is absolute, climbs out with `..`, or is empty, before the store
resolves it.

## Module contents

### Structs
- [`LoadedFont`](struct.LoadedFont.md#rustdoc-item-750) — A font a theme layer named, loaded.

### Enums
- [`ThemePathScope`](enum.ThemePathScope.md#rustdoc-item-709) — Which part of a project's `res` a theme path may name.

### Functions
- [`load_font`](fn.load_font.md#rustdoc-item-777) — Import the font a theme layer named and return its handle.
- [`load_overrides`](fn.load_overrides.md#rustdoc-item-776) — Import the `.theme` file at `path` and return its handle.
- [`register`](fn.register.md#rustdoc-item-774) — Declare the `.theme` standalone asset and the font asset on `world`.
