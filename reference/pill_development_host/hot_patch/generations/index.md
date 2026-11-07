<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1982"></a>

# Module `pill_development_host::hot_patch::generations`

Visibility: `crate` · Source: `hosting\pill_development_host\src\hot_patch\generations.rs:1`

Patch generations: each function's patch history, which a rollback reads.
A patched function's history, and the routes back through it.

## Responsibilities

- Record every generation of every function this session replaced.
- Expose that history as a list the host can print and tooling can read.
- Reinstall an earlier generation, or the artifact's own original code.
- Forget prologue records a reload has invalidated.

## Design

Undoing a patch is not one operation; how a generation was delivered decides
how it is undone. A generation installed into a slot is undone by writing one
pointer. A generation applied by overwriting the function's first bytes is
undone by writing those bytes back. The case is recorded with the generation
rather than read from the function's kind, because an annotated and an
un-annotated plain function share one kind and are undone in different ways.

A reload makes every recorded prologue address invalid at once, in every
session. Each address points into an image the graveyard (where the reload
keeps retired images until it releases them) will unmap, and one module's
records include addresses inside the project image, so the records cannot be
cleared selectively. Dropping the whole set is what stops a rollback from
writing into a retired image.

## Module contents

### Structs
- [`Generation`](struct.Generation.md#rustdoc-item-1980) — One recorded generation of one patched function, and the route back to it.
- [`PatchGeneration`](struct.PatchGeneration.md#rustdoc-item-2011) — One entry in a function's patch history, for hosts and tooling.
