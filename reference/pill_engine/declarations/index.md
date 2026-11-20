<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-449"></a>

# Module `pill_engine::declarations`

Source: `engine\pill_engine\src\declarations.rs:1`

The systems, resources and asset types an artifact declares, registered
from its entry point.
The systems, resources and assets an artifact declares, as opposed to the
ones it registers by hand.

## Responsibilities

- Declare the descriptor types the `#[system]` attribute, the `#[script]`
  attribute and the `#[derive(PillResource)]`/`#[derive(PillAsset)]`
  derives submit into [`inventory`], and the collections themselves.
- Turn those collections into registered systems, registered scripts,
  declared resources and declared asset types at the artifact's entry
  point, in a deterministic order.
- Refuse an artifact that declares one type name twice within a kind
  ([`check_declared_names_unique`]), because a stored name is
  `<crate>::<Type>` and two types of one name would share one identity.

## Design

This is the shape [`component_registry`](../component_registry/index.md#rustdoc-item-322) gives
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
descriptor therefore carries an explicit order key, the phase and a name to
break ties, so the schedule a project gets is the schedule its declarations
describe. Resources and asset types have no execution order; they are
declared sorted by type name so the claim order is the same in every build.

## Refused declarations

The attribute refuses an argument it cannot honour, and names the ones it
accepts. An unknown phase spelling is refused that way rather than guessed:

```compile_fail
use pill_engine::*;

#[system(name = "bad_phase", run_phase = "pre_frame")]
fn bad_phase() {}
```

A script component carries its declaration in `#[script]`, so leaving the
attribute out is a compile error that names the missing declaration rather
than a script the engine silently never runs:

```compile_fail
use pill_engine::*;

#[derive(Debug)]
struct NoDeclaration;

impl Component for NoDeclaration {}

impl ScriptComponent for NoDeclaration {}
```

The attribute reads lifecycle methods out of a `ScriptComponent` block, so a
block that implements something else is refused instead of registering
nothing:

```compile_fail
use pill_engine::*;

#[derive(Debug)]
struct NotAScript;

#[script]
impl Component for NotAScript {}
```

## Module contents

### Structs
- [`DeclarationBaseline`](struct.DeclarationBaseline.md#rustdoc-item-405) — How many declarations of each kind the process held when an artifact's
- [`DuplicateDeclaredName`](struct.DuplicateDeclaredName.md#rustdoc-item-565) — A type name this artifact declares twice within one kind of declaration.
- [`PillAssetDescriptor`](struct.PillAssetDescriptor.md#rustdoc-item-538) — One asset type declared with `#[derive(PillAsset)]`.
- [`PillResourceDescriptor`](struct.PillResourceDescriptor.md#rustdoc-item-511) — One ECS resource declared with `#[derive(PillResource)]`.
- [`PillScriptDescriptor`](struct.PillScriptDescriptor.md#rustdoc-item-484) — One script component declared with `#[script]`.
- [`PillSystemDescriptor`](struct.PillSystemDescriptor.md#rustdoc-item-458) — One ECS system declared with `#[system]`.

### Enums
- [`DeclaredShape`](enum.DeclaredShape.md#rustdoc-item-607) — What one declaration says about its type's shape.

### Functions
- [`check_declared_names_unique`](fn.check_declared_names_unique.md#rustdoc-item-643) — Checks that this artifact declares every type name once per kind.
- [`declaration_baseline`](fn.declaration_baseline.md#rustdoc-item-451) — The baseline the current registration walk starts at, or zero.
- [`first_repeated_name`](fn.first_repeated_name.md#rustdoc-item-644) — Returns the first name in `names` that one kind of declaration carries
- [`has_declaration_baseline`](fn.has_declaration_baseline.md#rustdoc-item-452) — Whether a registration walk is running under a declaration baseline.
- [`register_all_assets`](fn.register_all_assets.md#rustdoc-item-642) — Declares every asset type this artifact declares.
- [`register_all_resources`](fn.register_all_resources.md#rustdoc-item-641) — Declares every resource this artifact declares.
- [`register_all_scripts`](fn.register_all_scripts.md#rustdoc-item-640) — Registers every script component this artifact declares.
- [`register_all_systems`](fn.register_all_systems.md#rustdoc-item-639) — Registers every system this artifact declares.
- [`with_declaration_baseline`](fn.with_declaration_baseline.md#rustdoc-item-450) — Runs `register` with `baseline` as the number of declarations the process

### Constants
- [`DECLARATION_BASELINE`](constant.DECLARATION_BASELINE.md#rustdoc-item-446) — The position the current registration walk starts at, when one is set.
