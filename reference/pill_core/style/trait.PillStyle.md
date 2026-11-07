<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-694"></a>

# Trait `pill_core::style::PillStyle`

```rust
pub trait PillStyle { ... }
```

Source: `engine\pill_core\src\style.rs:48`

Maps semantic output roles to styled strings for terminal rendering.

Every role gets its own style. The roles are module objects, general
objects, specific objects, names, and the severity levels (error, warning
and debug). Implementors decide how a role is displayed.

The crate provides one implementation for `&str` per target. On native it
colors the text, and some roles also gain bold weight. On `wasm32` it
returns plain text, with names still in quotation marks.

## Examples

```
use pill_core::PillStyle;

let styled = "Engine".module_object_style();
assert!(!styled.is_empty());
```

## Required and provided items

<a id="rustdoc-item-1544"></a>

### `module_object_style`

```rust
fn module_object_style(self: Self) -> String;
```

Style a large module object (Engine, Renderer, Window, and so on).

Changes the color and adds bold weight.

<a id="rustdoc-item-1545"></a>

### `general_object_style`

```rust
fn general_object_style(self: Self) -> String;
```

Style a general object (Scene, Component, System, Resource, and so on).

Changes the color.

<a id="rustdoc-item-1546"></a>

### `specific_object_style`

```rust
fn specific_object_style(self: Self) -> String;
```

Style a specific object (CameraComponent, Texture, Mesh, and so on).

Changes the color.

<a id="rustdoc-item-1547"></a>

### `name_style`

```rust
fn name_style(self: Self) -> String;
```

Style a name, changing the color and adding quotation marks.

<a id="rustdoc-item-1548"></a>

### `error_style`

```rust
fn error_style(self: Self) -> String;
```

Style an error message, changing the color and adding bold weight.

<a id="rustdoc-item-1549"></a>

### `warn_style`

```rust
fn warn_style(self: Self) -> String;
```

Style a warning message, changing the color and adding bold weight.

<a id="rustdoc-item-1550"></a>

### `debug_style`

```rust
fn debug_style(self: Self) -> String;
```

Style a debug message, changing the color and adding bold weight.
