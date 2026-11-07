<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3428"></a>

# Module `pill_development_host::reload`

Visibility: `crate` · Source: `hosting\pill_development_host\src\reload.rs:1`

The steps every reload runs once its replacement image is loaded.
The sequence every reload runs after its replacement image has loaded.

## Responsibilities

- Save the retiring generation's persistable metadata, then run the new
  generation's init. If init fails, put the old generation back.
- Drop what the new generation no longer registers, and point every
  surviving storage table at code that is still loaded.
- Migrate persistable data whose layout changed in the swap.
- Move the previous image into the graveyard.

## Design

The project and every extension run the same sequence. They differ in three
ways. An extension tags its registrations with its [`SystemOwner`], while
the project owns the scheduler and tags nothing. Their log text differs
because the suites in `devops/tests` wait for those exact lines, so the two
wordings must stay tellable apart. Both keep the component names their
generation registered, but only a module's names go on to the C# mirror.

**The step order is load-bearing and must not be changed.**
`drop_forgotten_components` calls drop functions that live in the retiring
image, so it has to run while that image is still loaded.
`rehome_native_columns` then gives every native column (the table of
function pointers that operates on one component's stored rows) a table from
a generation that is still loaded. Both must finish before the graveyard
releases any image; that order is what makes a bound of two generations
safe. Swapping them causes a call into unloaded memory, and the crash shows
up two reloads later, not at once.

## Module contents

### Structs
- [`GenerationInit`](struct.GenerationInit.md#rustdoc-item-3576) — What one generation's `init` registered while its image was loaded.
- [`ReloadCommit`](struct.ReloadCommit.md#rustdoc-item-3522) — What a committed reload registered, for the caller to keep.
- [`ReloadTransaction`](struct.ReloadTransaction.md#rustdoc-item-3513) — One subject's state, borrowed for one reload.

### Enums
- [`FirstLoadFailure`](enum.FirstLoadFailure.md#rustdoc-item-2678) — What a failed first load of an artifact costs the world.
- [`GraveyardPolicy`](enum.GraveyardPolicy.md#rustdoc-item-2673) — Whether a subject's retired images are ever unloaded.
- [`LoadValidation`](enum.LoadValidation.md#rustdoc-item-3641) — What to check on a freshly loaded replacement before it is committed.
- [`ReloadSubjectKind`](enum.ReloadSubjectKind.md#rustdoc-item-3435) — Which kind of subject a reload is running for: the project or an extension.

### Functions
- [`build_load_and_commit`](fn.build_load_and_commit.md#rustdoc-item-3520) — Builds, loads and commits one native generation, for either subject.
- [`clear_failed_generation`](fn.clear_failed_generation.md#rustdoc-item-3600) — Releases everything one failed generation owns, while its image is loaded.
- [`initialize_generation`](fn.initialize_generation.md#rustdoc-item-3665) — Captures, initializes and records one native generation.
- [`registered_schemas`](fn.registered_schemas.md#rustdoc-item-3666) — Returns the schema hash the world records for each name in `type_names`.
- [`stale_components`](fn.stale_components.md#rustdoc-item-2698) — Returns the persistable components a subject registered whose layout has
- [`unclaimed_type_names`](fn.unclaimed_type_names.md#rustdoc-item-3667) — Returns the names in `forgotten_type_names` that nothing declares any more.

### Constants
- [`MAX_DEFERRED_EVICTIONS`](constant.MAX_DEFERRED_EVICTIONS.md#rustdoc-item-3427) — Number of deferred evictions in a row allowed before the warning becomes an
- [`MAX_GRAVEYARD_GENERATIONS`](constant.MAX_GRAVEYARD_GENERATIONS.md#rustdoc-item-3426) — Maximum number of retired images kept loaded for one subject.
- [`MODULE_FORGOTTEN_TYPES`](constant.MODULE_FORGOTTEN_TYPES.md#rustdoc-item-3432) — Forgotten-type warning for an extension reload.
- [`MODULE_RELOAD_COMPLETE`](constant.MODULE_RELOAD_COMPLETE.md#rustdoc-item-3430) — Final line of an extension reload.
- [`PROJECT_FORGOTTEN_TYPES`](constant.PROJECT_FORGOTTEN_TYPES.md#rustdoc-item-3431) — Forgotten-type warning for a project reload.
- [`PROJECT_RELOAD_COMPLETE`](constant.PROJECT_RELOAD_COMPLETE.md#rustdoc-item-3429) — Final line of a project reload.
