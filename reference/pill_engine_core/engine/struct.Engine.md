<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2"></a>

# Struct `pill_engine_core::engine::Engine`

```rust
pub struct Engine;
```

Source: `engine\pill_engine_core\src\engine.rs:499`

The main engine that drives the ECS.

It owns the [`World`](../ecs/world/struct.World.md#rustdoc-item-2848), the [`SystemScheduler`](../systems/scheduler/struct.SystemScheduler.md#rustdoc-item-5970) and the [`CommandQueue`](../ecs/commands/struct.CommandQueue.md#rustdoc-item-2835),
and runs every frame: the systems of the pre-project phase run in parallel
batches, the queued commands are applied, the project phase runs, the
commands that phase queued are applied, and the post-project systems run.
Systems are registered by name and can be enabled or disabled while the
game runs.

A project or module never calls [`Self::register_system`](#rustdoc-item-5993). It declares its
systems with `#[system]`, and the artifact entry point registers every
declared one before the artifact's own `register` runs; components, resources
and asset types arrive the same way, through their derive. The registering
methods on this type are what a *host* uses for the systems it owns - the
renderer's frame build, an editor's own passes - and what the entry point
calls on the artifact's behalf.

A play session lives here too: [`Engine::enter_play`](#rustdoc-item-5994) copies the world aside
and [`Engine::exit_play`](#rustdoc-item-5995) puts it back, so an editor can run a game against
the scene it has open and return to it unchanged.

## Examples
```no_run
# use pill_engine::*;
let mut engine = Engine::new();

// Every frame - the declared systems run, then the command flush, then the
// post-update systems.
engine.process_frame().unwrap();
```

## Fields

<a id="rustdoc-item-5966"></a>

### `systems`

```rust
systems: Vec<RegisteredSystem>
```

Every registered system, in registration order.

<a id="rustdoc-item-5967"></a>

### `command_queue`

```rust
command_queue: crate::commands::CommandQueue
```

The commands the systems queued; the frame applies them at its flush.

<a id="rustdoc-item-5968"></a>

### `world`

```rust
world: crate::world::World
```

The ECS world

<a id="rustdoc-item-5969"></a>

### `scheduler`

```rust
scheduler: crate::scheduler::SystemScheduler
```

Builds the parallel batches from the systems' access patterns.

<a id="rustdoc-item-5971"></a>

### `system_failures`

```rust
system_failures: Vec<crate::error::SystemFailure>
```

Failures the systems reported since the last drain. The reporting
boundary drains them once per frame, and a failing system never aborts
its batch or the frame.

<a id="rustdoc-item-5973"></a>

### `parallel_execution_enabled`

```rust
parallel_execution_enabled: bool
```

Whether the frame runs the systems in parallel batches.

<a id="rustdoc-item-5974"></a>

### `systems_paused`

```rust
systems_paused: bool
```

When true, `process_frame` skips the update systems but still bumps the
world tick, updates scripts, flushes deferred commands and runs the
post-update systems.

This lives on the engine, not in each host: an editor needs the engine
itself to keep ticking and flushing while the update systems are
paused, so it can change a paused world and see the result.

<a id="rustdoc-item-5975"></a>

### `run_mode`

```rust
run_mode: RunMode
```

Whether the frame is being edited or played; see [`RunMode`](enum.RunMode.md#rustdoc-item-5302).

Every posture except the editor keeps [`RunMode::Playing`](enum.RunMode.md#rustdoc-item-5825), so its
behaviour is unchanged.

<a id="rustdoc-item-5976"></a>

### `runs_every_system_this_frame`

```rust
runs_every_system_this_frame: bool
```

Whether the frame that is running dispatches every system, or only the
ones that opted in to edit mode.

It is computed once at the start of a frame from the run mode, the pause
state and the step flag, so every phase of that frame agrees.

<a id="rustdoc-item-5978"></a>

### `single_step_pending`

```rust
single_step_pending: bool
```

When true, the next `process_frame` runs the system phase once even if
the engine is paused. Set by [`Engine::request_single_step`](#rustdoc-item-5977); the frame
clears it.

<a id="rustdoc-item-5980"></a>

### `should_exit_on_error`

```rust
should_exit_on_error: bool
```

If true, `process_frame` returns every deferred-command failure it
collected. When false (the default), failures are logged and the frame
reports success.

[`Engine::set_should_exit_on_error`](#rustdoc-item-5979) changes it.

<a id="rustdoc-item-5981"></a>

### `frame_budget`

```rust
frame_budget: Option<std::time::Duration>
```

Optional frame rate limit. When set, `process_frame` sleeps the
remaining budget after completing the frame's work.

<a id="rustdoc-item-5984"></a>

### `should_trace_frame_wait`

```rust
should_trace_frame_wait: bool
```

When true, the sleep that waits for the frame budget is wrapped in a
Tracy zone named `frame wait`; turn it off to keep the timeline tidy.

[`Engine::set_trace_frame_wait`](#rustdoc-item-5983) changes it.

<a id="rustdoc-item-5985"></a>

### `last_archetype_generation`

```rust
last_archetype_generation: u64
```

The archetype generation seen on the previous frame. Comparing it with
the current one tells the frame when archetypes appeared or went away,
so it can log one memory breakdown per change.

<a id="rustdoc-item-5988"></a>

### `active_owner`

```rust
active_owner: SystemOwner
```

The owner given to systems registered from now on.

The host wraps a module's initialization in
[`Engine::begin_module_registration`](#rustdoc-item-5986) and
[`Engine::end_module_registration`](#rustdoc-item-5987), so module code keeps registering
systems by name and the engine still records the right owner for each.

<a id="rustdoc-item-5990"></a>

### `disabled_owners`

```rust
disabled_owners: Vec<SystemOwner>
```

The owners whose systems are currently suspended, set by
[`Engine::set_systems_enabled_for_owner`](#rustdoc-item-5989).

The owners are kept in their own list, not only as flags on the
systems, so a system registered while its owner is suspended starts
disabled: a new module generation that initializes during a suspension
must not run before it is resumed. A `Vec` is enough because only a
handful of owners ever exist.

<a id="rustdoc-item-5991"></a>

### `hot_patch_registry`

```rust
hot_patch_registry: crate::hot_patch::HotPatchRegistry
```

Dispatch slots for hot-patchable systems, keyed by registration name
and, when that differs, by the function's qualified path.

This field must NOT be behind `#[cfg(feature = "development")]`. The
feature would change the struct's layout, and a module built with the
other setting rebuilds `&mut Engine` from a raw pointer through
[`EngineApi`](../abi/api/struct.EngineApi.md#rustdoc-item-3). A layout difference would then corrupt
memory instead of failing to compile. An unused empty map costs a few
bytes; the difference would cost correctness.

## Associated functions and methods

<a id="rustdoc-item-5996"></a>

### `load_asset`

```rust
pub fn load_asset<T: ImportedAsset>(self: &mut Self, path: &str) -> Result<Handle<T>, String>;
```

Loads an asset through the engine, for code that owns the engine rather
than the world.

Behaves as [`World::load_asset`](../ecs/world/struct.World.md#rustdoc-item-5228).

#### Errors

As [`World::load_asset`](../ecs/world/struct.World.md#rustdoc-item-5228).

<a id="rustdoc-item-976"></a>

### `load_scene_file`

```rust
pub fn load_scene_file(self: &mut Self, path: &str) -> Result<SceneLoad, String>;
```

Loads the scene at `path` into this engine's world.

Loads through [`load_scene_asset`](../assets/loading/fn.load_scene_asset.md#rustdoc-item-980), which the startup scene also uses.
Entities are created under the stable ids the file carries, so
references between them resolve.

#### Errors

As [`load_scene_asset`](../assets/loading/fn.load_scene_asset.md#rustdoc-item-980).

<a id="rustdoc-item-2103"></a>

### `new`

```rust
pub fn new() -> Self;
```

Creates an engine with no registered systems.

It adds the resources every build expects (`Time`, `Input`,
`AssetManager`) and registers the `Scene` asset type before any
generation starts, so a reload cannot retire that registration.

<a id="rustdoc-item-5999"></a>

### `set_parallel_execution`

```rust
pub fn set_parallel_execution(self: &mut Self, enabled: bool);
```

Enables or disables parallel system execution.

When disabled, systems run sequentially in registration order.

<a id="rustdoc-item-6000"></a>

### `set_ecs_diagnostics_interval`

```rust
pub fn set_ecs_diagnostics_interval(self: &mut Self, interval: Option<Duration>);
```

Sets how often the built-in ECS state report prints.

The report is opt-in: [`Engine::new`](#rustdoc-item-2103) registers nothing, and this is the
call that registers it. `None` turns it off again, removing the system.

```no_run
# use std::time::Duration;
# use pill_engine::diagnostics::DEFAULT_REPORT_INTERVAL;
# let mut engine = pill_engine::Engine::new();
engine.set_ecs_diagnostics_interval(Some(DEFAULT_REPORT_INTERVAL)); // on
engine.set_ecs_diagnostics_interval(Some(Duration::from_secs(10)));  // slower
engine.set_ecs_diagnostics_interval(None);                           // off
```

Each call registers the system again, so exactly one report system
exists no matter how often it is called. While registered, it costs one
`Duration` comparison on the frames it does not print, plus the
scheduler barrier its exclusive world access forces on every frame;
`None` removes both.

<a id="rustdoc-item-6001"></a>

### `register_ecs_diagnostics_system`

```rust
pub(in engine) fn register_ecs_diagnostics_system(self: &mut Self, interval: Option<Duration>);
```

Registers the periodic ECS state report under
[`SystemOwner::ENGINE`](struct.SystemOwner.md#rustdoc-item-5666).

`None`, or a zero interval, registers nothing, which is how the report
is disabled.

<a id="rustdoc-item-6002"></a>

### `set_systems_paused`

```rust
pub fn set_systems_paused(self: &mut Self, paused: bool);
```

Pauses or resumes the update systems without stopping the frame.

A paused engine still bumps the world tick and still flushes deferred
commands, so an editor can change a frozen world and see the result.
While paused, only the systems that opted in to edit mode run, plus the
post-update systems after the flush, so scripts stop with the update
systems rather than running on under them.

<a id="rustdoc-item-6003"></a>

### `systems_paused`

```rust
pub fn systems_paused(self: &Self) -> bool;
```

Returns whether the update systems are currently skipped.

<a id="rustdoc-item-6004"></a>

### `set_run_mode`

```rust
pub fn set_run_mode(self: &mut Self, mode: RunMode);
```

Sets whether the engine is editing or playing.

Editing means the editor is being used: only the systems that opted in
to edit mode run, and no script runs. Playing is the normal posture of
every non-editor build, which is why it is the default.

The mode is engine state rather than a resource on purpose: project code
gets no play-mode API, so a game cannot behave differently depending on
who runs it.

<a id="rustdoc-item-6005"></a>

### `run_mode`

```rust
pub fn run_mode(self: &Self) -> RunMode;
```

The current run mode.

<a id="rustdoc-item-6006"></a>

### `runs_every_system`

```rust
pub(in engine) fn runs_every_system(self: &Self) -> bool;
```

Whether a frame in the current posture runs every system.

True while playing and not paused, and for a step, which is one playing
frame by definition.

<a id="rustdoc-item-5994"></a>

### `enter_play`

```rust
pub fn enter_play(self: &mut Self) -> Result<(), PlayRefusal>;
```

Starts a play session: the edit world is copied aside, the copy becomes
the running world, and the game starts.

The copy is exact: entity handles, the allocator's state, every
component and every [`PlayState::Restore`](../ecs/resource/enum.PlayState.md#rustdoc-item-4293)
resource. A `Keep` or `Rebuild` resource stays live and is left alone on
Stop.

A session that is already running is left as it is, so a second Play
cannot replace the held edit world with the playing one.

#### Errors

Returns [`PlayRefusal`](struct.PlayRefusal.md#rustdoc-item-5866) naming every component and resource type the
copy could not include, and changes nothing. A component that owns heap
data and does not implement `Clone` is the usual cause.

<a id="rustdoc-item-6007"></a>

### `with_change_origin`

```rust
pub fn with_change_origin<R, impl FnOnce(&mut Engine) -> R: FnOnce(&mut Engine) -> R>(self: &mut Self, origin: ChangeOrigin, run: impl FnOnce(&mut Engine) -> R) -> R;
```

Runs `run` with `origin` as the world's change origin, and puts the
previous origin back afterwards.

The editor applies a batch and flushes it inside one scope, so the
commands it queues are executed under the same origin they were queued
under. Game code never sets one, which is why its changes report
[`ChangeOrigin::Simulation`](../ecs/world/change_origin/enum.ChangeOrigin.md#rustdoc-item-4675).

<a id="rustdoc-item-5995"></a>

### `exit_play`

```rust
pub fn exit_play(self: &mut Self) -> bool;
```

Stops a play session: the edit world comes back and the game's changes
are discarded.

Everything the game did to entities, to components and to a `Restore`
resource is undone, including a resource the game inserted. A `Keep`
resource keeps whatever the game did to it, and a `Rebuild` resource is
told about the restore through the world's restore epoch.

Returns whether a session was running.

<a id="rustdoc-item-5977"></a>

### `request_single_step`

```rust
pub fn request_single_step(self: &mut Self);
```

Runs the update systems once on the next `process_frame`.

The editor's step control uses it. While the engine is paused, the next
frame runs the update systems once and leaves the engine paused. While
the engine is running, the call changes nothing, because the next frame
runs the systems anyway.

<a id="rustdoc-item-6008"></a>

### `set_fps_limit`

```rust
pub fn set_fps_limit(self: &mut Self, fps: f64);
```

Limits the frame rate to `fps` frames per second.

After completing the frame's work, `process_frame` sleeps the
remaining budget. Pass `0.0` or `f64::INFINITY` to disable.

#### Examples
```no_run
# use pill_engine::*;
# let mut engine = Engine::new();
engine.set_fps_limit(30.0); // Cap at 30 FPS
```

<a id="rustdoc-item-5979"></a>

### `set_should_exit_on_error`

```rust
pub fn set_should_exit_on_error(self: &mut Self, should_exit_on_error: bool);
```

Sets whether a deferred-command failure fails the frame.

When `true`, `process_frame` returns every failure it collected and the
caller decides what to do; when `false` (the default), failures are
logged and the frame reports success.

<a id="rustdoc-item-6009"></a>

### `should_exit_on_error`

```rust
pub fn should_exit_on_error(self: &Self) -> bool;
```

Returns whether a deferred-command failure fails the frame.

<a id="rustdoc-item-5983"></a>

### `set_trace_frame_wait`

```rust
pub fn set_trace_frame_wait(self: &mut Self, should_trace_frame_wait: bool);
```

Sets whether the frame-rate limiter's sleep is traced.

The zone is named `frame wait`; turn it off to keep the timeline tidy.

<a id="rustdoc-item-6011"></a>

### `enable_system`

```rust
pub fn enable_system(self: &mut Self, name: &str) -> bool;
```

Enables a system by name.

The name-keyed convenience over [`Self::set_system_enabled`](#rustdoc-item-5790). Names are
not unique, so a caller that has a [`SystemSnapshot`](struct.SystemSnapshot.md#rustdoc-item-5791) should pass that
snapshot's index to [`Self::set_system_enabled_at`](#rustdoc-item-6010) instead: this one
hits the first match.

Returns `true` if the system was found and enabled, `false` otherwise.

<a id="rustdoc-item-6012"></a>

### `disable_system`

```rust
pub fn disable_system(self: &mut Self, name: &str) -> bool;
```

Disables a system by name.

The name-keyed convenience over [`Self::set_system_enabled`](#rustdoc-item-5790); see
[`Self::enable_system`](#rustdoc-item-6011) for the caveat about duplicate names.

Returns `true` if the system was found and disabled, `false` otherwise.

<a id="rustdoc-item-5790"></a>

### `set_system_enabled`

```rust
pub fn set_system_enabled(self: &mut Self, name: &str, enabled: bool) -> bool;
```

Sets the enabled state of a system by name.

Returns `true` if the system was found, `false` otherwise. The batch
graph does not change: a disabled system keeps its place and is skipped
at dispatch, because batches are decided by conflicts alone.

<a id="rustdoc-item-6013"></a>

### `is_system_enabled`

```rust
pub fn is_system_enabled(self: &Self, name: &str) -> Option<bool>;
```

Checks whether a system is enabled.

Returns `None` if the system was not found.

<a id="rustdoc-item-6014"></a>

### `is_registered`

```rust
pub fn is_registered(self: &Self, name: &str) -> bool;
```

Checks whether any system carries this name.

This asks only about existence. [`Self::is_system_enabled`](#rustdoc-item-6013) answers the
same question but reads as one about being enabled. Names are not
unique, so this returns `true` if any registration has the name.

<a id="rustdoc-item-6015"></a>

### `system_index`

```rust
pub fn system_index(self: &Self, name: &str) -> Option<usize>;
```

The registration index of the first system named `name`.

That index is what [`Self::set_system_enabled_at`](#rustdoc-item-6010) takes and what
[`SystemSnapshot::index`](struct.SystemSnapshot.md#rustdoc-item-5784) carries, so a caller that needs to mutate a
specific registration resolves it here rather than by name.

<a id="rustdoc-item-6016"></a>

### `system_snapshots`

```rust
pub fn system_snapshots(self: &Self) -> Vec<SystemSnapshot>;
```

Takes a snapshot of every registered system, in registration order.

The editor's Systems tab reads this; it never requires knowing the
concrete system type. `hot_patchable` reports whether the system has a
dispatch slot in the hot-patch registry (only present when the host was
built with the `development` feature).

<a id="rustdoc-item-6010"></a>

### `set_system_enabled_at`

```rust
pub fn set_system_enabled_at(self: &mut Self, index: usize, enabled: bool) -> bool;
```

Enables or disables the system at `index`.

Unlike [`Self::set_system_enabled`](#rustdoc-item-5790), which matches by name and so hits
the first of several same-named systems, this targets exactly one
registration. Returns `false` when the index is out of range.

<a id="rustdoc-item-6017"></a>

### `print_execution_graph`

```rust
pub fn print_execution_graph(self: &mut Self);
```

Prints the execution graph for debugging.

Rebuilds the batches first when the system set changed since the last
frame, so the report matches what the next frame would dispatch.

<a id="rustdoc-item-6018"></a>

### `world`

```rust
pub fn world(self: &Self) -> &World;
```

Returns a shared reference to the world.

<a id="rustdoc-item-6019"></a>

### `world_mut`

```rust
pub fn world_mut(self: &mut Self) -> &mut World;
```

Returns a mutable reference to the world.

<a id="rustdoc-item-6021"></a>

### `push_input_event`

```rust
pub fn push_input_event(self: &mut Self, event: crate::input::InputEvent);
```

Queues an input event from the frontend. The event takes effect at the
start of the next frame. See [`crate::input`](../services/input/index.md#rustdoc-item-6020).

<a id="rustdoc-item-6023"></a>

### `take_rumble_requests`

```rust
pub fn take_rumble_requests(self: &mut Self) -> Vec<crate::input::RumbleRequest>;
```

Takes the rumble requests the systems queued, so the frontend that owns
the gamepads can play them.

<a id="rustdoc-item-5993"></a>

### `register_system`

```rust
pub fn register_system<F, Input, impl Into<String>: Into<String>>(self: &mut Self, name: impl Into<String>, system: F) where F: IntoSystem<Input>, Input: SystemParam;
```

Registers a system with a name.

The system can be any function whose parameters all implement
[`SystemParam`](../systems/system/trait.SystemParam.md#rustdoc-item-2921). The name is used for debugging and profiling.

This is the **host-facing** call: a project or module declares its
systems with `#[system]` instead, and its entry point registers them
before the artifact's own code runs. Use this for a system the host
itself owns, such as a renderer's frame build.

A host that wants the declared systems and the hand-registered ones in
one list registers the declarations first - the artifact entry points do
exactly that - because conflicting systems run in registration order.

#### Examples
```no_run
# use pill_engine::*;
# #[derive(Debug, Clone)] struct Position { x: f32, y: f32 }
# impl Component for Position {}
# #[derive(Debug, Clone)] struct Velocity { vx: f32, vy: f32 }
# impl Component for Velocity {}
# let mut engine = Engine::new();
engine.register_system("movement", |
    mut commands: Commands,
    query: Query<(Entity, &mut Position, &Velocity)>
| {
    // System implementation
});
```

<a id="rustdoc-item-5910"></a>

### `register_system_with_options`

```rust
pub fn register_system_with_options<F, Input, impl Into<String>: Into<String>>(self: &mut Self, name: impl Into<String>, options: SystemOptions, system: F) where F: IntoSystem<Input>, Input: SystemParam;
```

Registers a system with the order, phase and edit-mode gate of
`options`.

This is the entry point every other registering method delegates to.
The system is placed in the frame by `(options.phase, options.order)`,
and the engine keeps that order across every artifact, so a number an
extension picks orders its systems against a project's.

<a id="rustdoc-item-6026"></a>

### `prepare_system`

```rust
pub(in engine) fn prepare_system<F, Input, impl Into<String>: Into<String>>(self: &mut Self, name: impl Into<String>, system: F) -> (String, SystemAccess, Box<dyn System>) where F: IntoSystem<Input>, Input: SystemParam;
```

Derives a registration's access pattern and boxes its system.

The part both name-registering entry points share: it records the
access the parameter tuple declares, then boxes the system. With hot
patching on, the box goes through a dispatch slot, so a later patch
replaces one pointer instead of registering the system again.

<a id="rustdoc-item-6029"></a>

### `hot_patch`

```rust
pub fn hot_patch(self: &mut Self, name: &str, address: usize, signature_hash: u64) -> Result<(), crate::hot_patch::HotPatchError>;
```

Replaces one registered system's implementation without registering it
again.

The system keeps its identity, its place in the scheduler graph, its
access metadata and its change-detection ticks. The [`World`](../ecs/world/struct.World.md#rustdoc-item-2848) is
untouched. The replacement is used from the system's next run, so a
caller should apply patches at a frame boundary, when no system is
running.

`signature_hash` must be the value
[`hot_patch::signature_hash`](../hot_reload/hot_patch/fn.signature_hash.md#rustdoc-item-6027) returns
for the replacement's parameter tuple and return type. A different hash
is refused, because the running call site was compiled for the old
shape.

#### Errors

Returns [`HotPatchError`](../hot_reload/hot_patch/enum.HotPatchError.md#rustdoc-item-6028) when no
hot-patchable system is registered under `name` (`UnknownSystem`), when
the signature changed (`SignatureMismatch`), or when `address` is null
(`NullAddress`). In every case the running implementation stays in
place.

<a id="rustdoc-item-6030"></a>

### `hot_patch_baseline`

```rust
pub fn hot_patch_baseline(self: &Self, name: &str) -> Option<(usize, u64)>;
```

Returns the implementation a system was registered with, and its
signature.

A host uses this to undo a patch and go back to the code the running
build was compiled with. `None` when no such system is registered, or
when it is not hot-patchable.

<a id="rustdoc-item-6031"></a>

### `hot_patch_registry`

```rust
pub fn hot_patch_registry(self: &Self) -> &crate::hot_patch::HotPatchRegistry;
```

Read-only access to the hot-patch registry, for hosts and tooling.

<a id="rustdoc-item-6032"></a>

### `register_system_with_access`

```rust
pub unsafe fn register_system_with_access<F, impl Into<String>: Into<String>>(self: &mut Self, name: impl Into<String>, system_access: SystemAccess, system: F) where F: FnMut(&mut World, &mut CommandQueue) -> Result<(), SystemError> + Send + 'static;
```

Registers a system whose access pattern was derived outside Rust's
[`SystemParam`](../systems/system/trait.SystemParam.md#rustdoc-item-2921) machinery (for example from a managed-language system
signature).

#### Safety

`system_access` must describe every component/resource the system may
touch. An incomplete declaration can make the scheduler run conflicting
systems concurrently and cause undefined behavior.

<a id="rustdoc-item-6034"></a>

### `register_system_with_access_and_options`

```rust
pub unsafe fn register_system_with_access_and_options<F, impl Into<String>: Into<String>>(self: &mut Self, name: impl Into<String>, options: SystemOptions, system_access: SystemAccess, system: F) where F: FnMut(&mut World, &mut CommandQueue) -> Result<(), SystemError> + Send + 'static;
```

Registers a hand-declared-access system with explicit options.

The form a managed host uses: the order, phase and edit-mode gate come
from `options` and the access pattern was derived outside Rust's
[`SystemParam`](../systems/system/trait.SystemParam.md#rustdoc-item-2921) machinery.

#### Safety

`system_access` must describe every component/resource the system may
touch. An incomplete declaration can make the scheduler run conflicting
systems concurrently and cause undefined behavior.

<a id="rustdoc-item-6035"></a>

### `register_engine_owned_system`

```rust
pub(crate) fn register_engine_owned_system<F, impl Into<String>: Into<String>>(self: &mut Self, name: impl Into<String>, options: SystemOptions, system: F) where F: FnMut(&mut World, &mut CommandQueue) -> Result<(), SystemError> + Send + 'static;
```

Registers a system the engine itself owns: it belongs to
[`SystemOwner::ENGINE`](struct.SystemOwner.md#rustdoc-item-5666), so no reload retires it, and it declares
exclusive world access.

This is the registration for a pass the engine runs on behalf of a host -
one that reads the whole world rather than a declared set of columns, so
no per-component access pattern describes it.

<a id="rustdoc-item-6036"></a>

### `push_system`

```rust
pub(in engine) fn push_system(self: &mut Self, name: String, options: SystemOptions, system_access: SystemAccess, system: Box<dyn System>);
```

Adds one system to the list and marks the scheduler out of date.

Every registration entry point ends here, so they all set the owner,
the phase, the order and the enabled state the same way, and they all
invalidate the graph.

The record is inserted where its `(phase, order)` belongs rather than
appended: the scheduler derives execution order from the list's
positions, and the list spans every artifact, so insertion is what makes
an `order` number global. Equal pairs keep insertion order, so a system
an artifact's `register` half adds after its declarations runs after
them, and a reload that re-registers a module's systems puts them back
where they were.

The batches are not built here: the next frame rebuilds them once from
the whole list, so a module that registers many systems pays for one
rebuild, not one per system.

<a id="rustdoc-item-5986"></a>

### `begin_module_registration`

```rust
pub fn begin_module_registration(self: &mut Self, system_owner: SystemOwner);
```

Attributes every system registered from now on to `system_owner`.

The host wraps a module's initialization in this call and
[`Self::end_module_registration`](#rustdoc-item-5987), so module code registers systems by
name while the engine records which module each system came from.

<a id="rustdoc-item-5987"></a>

### `end_module_registration`

```rust
pub fn end_module_registration(self: &mut Self);
```

Returns registration attribution to [`SystemOwner::PROJECT`](struct.SystemOwner.md#rustdoc-item-5663).

<a id="rustdoc-item-5989"></a>

### `set_systems_enabled_for_owner`

```rust
pub fn set_systems_enabled_for_owner(self: &mut Self, system_owner: SystemOwner, enabled: bool) -> usize;
```

Suspends or resumes every system registered by `system_owner`.

Suspending also covers systems `system_owner` registers later, until it
is resumed: a module generation that initializes during a suspension
registers its systems disabled. The suspension survives
[`Self::clear_systems_owned_by`](#rustdoc-item-5664), which removes the systems but not the
owner's state. Resuming turns on every system of `system_owner`,
including any that [`Self::set_system_enabled`](#rustdoc-item-5790) disabled in the
meantime.

Returns how many systems `system_owner` has now. The batches are not
rebuilt: they list every registered system, and a disabled system is
skipped at dispatch.

<a id="rustdoc-item-6037"></a>

### `is_owner_enabled`

```rust
pub fn is_owner_enabled(self: &Self, system_owner: SystemOwner) -> bool;
```

Checks whether the systems of `system_owner` may run, that is, whether
the owner is not suspended by [`Self::set_systems_enabled_for_owner`](#rustdoc-item-5989).

<a id="rustdoc-item-5664"></a>

### `clear_systems_owned_by`

```rust
pub fn clear_systems_owned_by(self: &mut Self, system_owner: SystemOwner) -> usize;
```

Removes only the systems registered by `system_owner`.

Used when hot reloading one extension: the replacement library's
systems are different function pointers, so the retiring generation's
systems must go, while the project and every other module keep running.
Component registrations, entities, and resources are untouched.

Returns the number of systems removed.

<a id="rustdoc-item-6038"></a>

### `clear_systems`

```rust
pub fn clear_systems(self: &mut Self);
```

Removes all registered systems, clearing the scheduler state.

Their dispatch slots are retired with them, so nothing can be patched
into a system that no longer runs.

Component registrations, entities, and resources are **not** cleared —
only systems are affected. The world state persists.

<a id="rustdoc-item-6039"></a>

### `drain_system_failures`

```rust
pub fn drain_system_failures(self: &mut Self) -> Vec<SystemFailure>;
```

Drains the system failures recorded since the previous drain.

The reporting boundary calls this once per frame and logs each failure
as a message. A failed system never aborts its batch, so the rest still
finish the frame.

<a id="rustdoc-item-6040"></a>

### `system_failures`

```rust
pub fn system_failures(self: &Self) -> &[SystemFailure];
```

Reads the system failures recorded since the previous drain without
clearing them.

<a id="rustdoc-item-6041"></a>

### `run_deferred_commands`

```rust
pub fn run_deferred_commands<F>(self: &mut Self, produce_commands: F) -> Result<(), Vec<CommandError>> where F: FnOnce(&mut World, &mut CommandQueue);
```

Runs a one-shot command producer and flushes its deferred mutations.

This is primarily used by scripting-runtime startup hooks. The callback
receives the same world/queue pair as an ordinary command-producing
system, and all structural changes become visible only after it returns.

#### Errors

Returns one entry per command that could not be applied.

<a id="rustdoc-item-6044"></a>

### `queue_deferred_commands`

```rust
pub fn queue_deferred_commands<F>(self: &mut Self, produce_commands: F) where F: FnOnce(&mut World, &mut CommandQueue);
```

Runs a command-producing closure without applying its commands.

The transactional counterpart of [`Self::run_deferred_commands`](#rustdoc-item-6041): the
caller commits with [`Self::flush_deferred_commands`](#rustdoc-item-6042) or rolls back
with [`Self::discard_deferred_commands`](#rustdoc-item-6043), so a failed phase can never
leave partial world state behind.

<a id="rustdoc-item-6042"></a>

### `flush_deferred_commands`

```rust
pub fn flush_deferred_commands(self: &mut Self) -> Result<(), Vec<CommandError>>;
```

Applies every command queued since the last flush.

#### Errors

Returns one entry per command that could not be applied.

<a id="rustdoc-item-6043"></a>

### `discard_deferred_commands`

```rust
pub fn discard_deferred_commands(self: &mut Self);
```

Discards every command queued since the last flush without applying it.

<a id="rustdoc-item-5392"></a>

### `process_frame`

```rust
pub fn process_frame(self: &mut Self) -> Result<(), Vec<CommandError>>;
```

Runs one frame: the pre-project phase, the first command flush, the
project phase, the scripts, the second flush and the post-project phase.

A frame goes like this:
1. The pre-project systems run, in parallel batches when that is
   enabled, and the commands they queued are applied.
2. The project systems run on that result, then the scripts, and the
   commands both queued are applied.
3. The post-project systems run, on the calling thread, on the frame's
   finished state.

While the systems run they queue commands (create, destroy, add a
component and so on) instead of changing the world directly. Splitting
the frame this way keeps structural changes from disturbing systems that
are still running.

#### Errors

Returns `Err(Vec<CommandError>)` when [`should_exit_on_error`] is
`true` and one or more deferred commands fail.  When the flag is
`false` (default), errors are logged and `Ok(())` is returned. A
failure in either flush is collected, so one frame never hides the
other's errors.

[`should_exit_on_error`]: Engine::should_exit_on_error

<a id="rustdoc-item-6045"></a>

### `run_phase`

```rust
pub(in engine) fn run_phase(self: &mut Self, phase: RunPhase);
```

Runs the systems of one phase.

A batched phase uses the scheduler's parallel batches when parallel
execution is on; [`RunPhase::PostProject`](../systems/scheduler/enum.RunPhase.md#rustdoc-item-5712) always runs sequentially, on
the calling thread, because it runs after the frame's last flush.

<a id="rustdoc-item-6046"></a>

### `execute_deferred_commands`

```rust
pub(in engine) fn execute_deferred_commands(self: &mut Self) -> Result<(), Vec<CommandError>>;
```

Applies every command the systems queued so far.

One frame flushes twice - after the pre-project phase, and after the
project phase with the scripts - so the profiling scope and the
error-on-failure rule live here rather than at both call sites.

<a id="rustdoc-item-6047"></a>

### `emit_frame_telemetry`

```rust
pub(in engine) fn emit_frame_telemetry(self: &Self, frame_start: Instant);
```

Emits the per-frame Tracy plots and the metrics-reporter gauges.

<a id="rustdoc-item-6049"></a>

### `emit_archetype_memory_breakdown`

```rust
pub(in engine) fn emit_archetype_memory_breakdown(self: &mut Self);
```

Emits one memory-breakdown block when the archetype set has changed.

<a id="rustdoc-item-6050"></a>

### `wait_for_frame_budget`

```rust
pub(in engine) fn wait_for_frame_budget(self: &Self, frame_start: Instant);
```

Waits out whatever remains of the frame budget, outside the frame zone.

<a id="rustdoc-item-6051"></a>

### `run_systems_sequential`

```rust
pub(in engine) fn run_systems_sequential(self: &mut Self, phase: RunPhase);
```

Runs one phase's systems one after another: when parallel execution is
off, when the phase is not batched, and for
[`RunPhase::PostProject`](../systems/scheduler/enum.RunPhase.md#rustdoc-item-5712), which always runs on the calling thread after
the frame's last command flush.

<a id="rustdoc-item-6052"></a>

### `run_systems_parallel`

```rust
pub(in engine) fn run_systems_parallel(self: &mut Self, phase: RunPhase);
```

Runs one batched phase's systems in parallel batches, using the
scheduler's conflict analysis.

The scheduler guarantees that the systems in one batch touch disjoint
components and resources, so they can run at the same time on Rayon
worker threads. A system that uses [`Commands`] always runs alone,
because it needs exclusive access to the world.

#### Safety

This function contains `unsafe` code that rebuilds `&mut` references
from raw pointers. It is sound because of the scheduler's guarantees:
systems in one batch access disjoint state, command-using systems run
alone, and every batch index stays within the `systems` vector.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `Default`
