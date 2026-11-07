<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-403"></a>

# Module `pill_engine::declarations`

Source: `engine\pill_engine\src\declarations.rs:1`

The systems, resources and asset types an artifact declares, registered
from its entry point.
The systems, resources and assets an artifact declares, as opposed to the
ones it registers by hand.

## Responsibilities

- Declare the descriptor types the `#[system]` attribute and the
  `#[derive(PillResource)]`/`#[derive(PillAsset)]` derives submit into
  [`inventory`], and the collections themselves.
- Turn those collections into registered systems, declared resources and
  declared asset types at the artifact's entry point, in a deterministic
  order.

## Design

This is the shape [`component_registry`](../component_registry/index.md#rustdoc-item-313) gives
components, applied to systems, resources and assets. A macro submits one
descriptor per declaration into a process-wide collection, and the entry
point walks that collection once per generation.

The collection is shared by every image mapped in the process: it lives in
the engine dylib the artifacts link, and a hot reload keeps the retired
images mapped so their pointers stay valid. The entry point therefore keeps
only the declarations an image added after the [`DeclarationBaseline`]
taken before it was loaded, so a new generation registers its own
declarations and never the retired generation's. A static build and a test
binary register everything.

Registration order decides the order conflicting systems run in, and
`inventory` order is link order rather than source order. The system
descriptor therefore carries an explicit order key and a name to break
ties, so the schedule a project gets is the schedule its declarations
describe. Resources and asset types have no execution order; they are
declared sorted by type name so the claim order is the same in every build.

## Module contents

### Structs
- [`DeclarationBaseline`](struct.DeclarationBaseline.md#rustdoc-item-360) — How many declarations of each kind the process held when an artifact's
- [`PillAssetDescriptor`](struct.PillAssetDescriptor.md#rustdoc-item-464) — One asset type declared with `#[derive(PillAsset)]`.
- [`PillResourceDescriptor`](struct.PillResourceDescriptor.md#rustdoc-item-437) — One ECS resource declared with `#[derive(PillResource)]`.
- [`PillSystemDescriptor`](struct.PillSystemDescriptor.md#rustdoc-item-410) — One ECS system declared with `#[system]`.

### Functions
- [`declaration_baseline`](fn.declaration_baseline.md#rustdoc-item-405) — The baseline the current registration walk starts at, or zero.
- [`register_all_assets`](fn.register_all_assets.md#rustdoc-item-491) — Declares every asset type this artifact declares.
- [`register_all_resources`](fn.register_all_resources.md#rustdoc-item-490) — Declares every resource this artifact declares.
- [`register_all_systems`](fn.register_all_systems.md#rustdoc-item-489) — Registers every system this artifact declares.
- [`with_declaration_baseline`](fn.with_declaration_baseline.md#rustdoc-item-404) — Runs `register` with `baseline` as the number of declarations the process

### Constants
- [`DECLARATION_BASELINE`](constant.DECLARATION_BASELINE.md#rustdoc-item-400) — The position the current registration walk starts at, when one is set.
