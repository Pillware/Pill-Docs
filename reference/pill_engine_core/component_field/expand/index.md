<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3168"></a>

# Module `pill_engine_core::component_field::expand`

Visibility: `{'restricted': {'parent': 3105, 'path': '::component_field'}}` · Source: `engine\pill_engine_core\src\component_field\expand.rs:1`

Expansion of nested component field layouts at registration time.

## Responsibilities

- Flatten a `struct:` or `array:struct:` field whose type has a known
  layout into dotted leaf rows - one per leaf, and one per array element -
  composing offsets as it descends.
- Keep the declared layout beside the flattened one, and own the resolver
  that tells a later registration what a nested type looks like.

## Design

Expanded field names are interned: expansion keeps one shared copy of each
distinct dotted name for the whole process and never frees it. A layout
stores its names as `&'static str`, so a later registration of the same
type reuses that copy instead of making a new one. A layout with nothing to
expand borrows the caller's `'static` slice instead, so only a real
expansion allocates.

## Module contents

### Functions
- [`grouping_decorators`](fn.grouping_decorators.md#rustdoc-item-3166) — The decorators of a struct field that its flattened leaves inherit.
- [`intern_nested_field_name`](fn.intern_nested_field_name.md#rustdoc-item-3170) — Returns one shared `&'static str` for a synthesized nested field name such
- [`leaf_decorators`](fn.leaf_decorators.md#rustdoc-item-3169) — Builds the decorator list for one flattened leaf: the inherited decorators

### Constants
- [`MAX_EXPANDED_ELEMENTS`](constant.MAX_EXPANDED_ELEMENTS.md#rustdoc-item-3165) — How many elements of an `array:struct:` field become leaf rows.
