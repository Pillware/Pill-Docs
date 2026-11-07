<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-612"></a>

# Module `pill_core::error`

Source: `engine\pill_core\src\error.rs:1`

Semantic error system shared by every workspace crate.
Typed error system shared by every Pill workspace crate, generated from
one semantic message definition per leaf variant.

## Responsibilities

- Define the semantic rendering protocol ([`SemanticRole`],
  [`MessageRenderer`], [`EngineMessage`]) used by generated code.
- Provide the plain and terminal renderers plus the miette presentation
  adapter and report handler.
- Declare every subsystem error ([`ConfigError`], [`BuildError`],
  [`LibraryError`], [`ModuleError`], [`WatcherError`], [`CSharpError`]) and
  their transparent composition [`HostError`].

## Design

Every leaf variant carries one `#[message(...)]` definition; [`HostError`]
wraps whole subsystem errors and adds no text of its own. The
`#[engine_error]` macro generates the plain `Display` text, a stable
`namespace::variant` diagnostic code, and an [`EngineMessage`]
implementation that renders the same definition with semantic roles.
Subsystem errors compose into [`HostError`] through transparent
`#[from]` wrappers, so `?` works across boundaries and the leaf error
keeps its source chain. Error definitions never import a styling crate;
only the renderer turns a role into styled text.

## Module contents

### Modules
- [`host`](host/index.md#rustdoc-item-611) — The error type of every host subsystem, and the root that combines them.
- [`render`](render/index.md#rustdoc-item-670) — The semantic rendering protocol and its two renderers.
- [`report`](report/index.md#rustdoc-item-718) — Turns engine errors into miette reports that print their message with

## Re-exports

- [`pub use host;`](host/index.md#rustdoc-item-611)
- [`pub use render;`](render/index.md#rustdoc-item-670)
- [`pub use report;`](report/index.md#rustdoc-item-718)
