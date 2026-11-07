<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2"></a>

# Struct `pill_engine_core::engine::Engine`

```rust
pub struct Engine;
```

Source: `engine\pill_engine_core\src\engine.rs:254`

The main engine that drives the ECS.

It owns the [`World`](../world/struct.World.md#rustdoc-item-2583), the [`SystemScheduler`](../scheduler/struct.SystemScheduler.md#rustdoc-item-4266) and the [`CommandQueue`](../commands/struct.CommandQueue.md#rustdoc-item-2570),
and runs every frame: the update systems run in parallel batches when
parallel execution is on, then the queued commands are applied, then the
post-update systems run. Systems are registered by name and can be
enabled or disabled while the game runs.

A project or module never calls [`Self::register_system`](#rustdoc-item-4286). It declares its
systems with `#[system]`, and the artifact entry point registers every
declared one before the artifact's own `register` runs; components, resources
and asset types arrive the same way, through their derive. The registering
methods on this type are what a *host* uses for the systems it owns - the
renderer's frame build, an editor's own passes - and what the entry point
calls on the artifact's behalf.

## Examples
```no_run
# use pill_engine::*;
let mut engine = Engine::new();

// Every frame - the declared systems run, then the command flush, then the
// post-update systems.
engine.process_frame().unwrap();
```

## Fields

<a id="rustdoc-item-4262"></a>

### `systems`

```rust
systems: Vec<RegisteredSystem>
```

Every registered system, in registration order.

<a id="rustdoc-item-4263"></a>

### `command_queue`

```rust
command_queue: crate::commands::CommandQueue
```

The commands the systems queued; the frame applies them at its flush.

<a id="rustdoc-item-4264"></a>

### `world`

```rust
world: crate::world::World
```

The ECS world

<a id="rustdoc-item-4265"></a>

### `scheduler`

```rust
scheduler: crate::scheduler::SystemScheduler
```

Builds the parallel batches from the systems' access patterns.

<a id="rustdoc-item-4267"></a>

### `system_failures`

```rust
system_failures: Vec<crate::error::SystemFailure>
```

Failures the systems reported since the last drain. The reporting
boundary drains them once per frame, and a failing system never aborts
its batch or the frame.

<a id="rustdoc-item-4269"></a>

### `parallel_execution_enabled`

```rust
parallel_execution_enabled: bool
```

Whether the frame runs the systems in parallel batches.

<a id="rustdoc-item-4270"></a>

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

<a id="rustdoc-item-4272"></a>

### `single_step_pending`

```rust
single_step_pending: bool
```

When true, the next `process_frame` runs the system phase once even if
the engine is paused. Set by [`Engine::request_single_step`](#rustdoc-item-4271); the frame
clears it.

<a id="rustdoc-item-4274"></a>

### `should_exit_on_error`

```rust
should_exit_on_error: bool
```

If true, `process_frame` returns every deferred-command failure it
collected. When false (the default), failures are logged and the frame
reports success.

[`Engine::set_should_exit_on_error`](#rustdoc-item-4273) changes it.

<a id="rustdoc-item-4275"></a>

### `frame_budget`

```rust
frame_budget: Option<std::time::Duration>
```

Optional frame rate limit. When set, `process_frame` sleeps the
remaining budget after completing the frame's work.

<a id="rustdoc-item-4277"></a>

### `should_trace_frame_wait`

```rust
should_trace_frame_wait: bool
```

When true, the sleep that waits for the frame budget is wrapped in a
Tracy zone named `frame wait`; turn it off to keep the timeline tidy.

[`Engine::set_trace_frame_wait`](#rustdoc-item-4276) changes it.

<a id="rustdoc-item-4278"></a>

### `last_archetype_generation`

```rust
last_archetype_generation: u64
```

The archetype generation seen on the previous frame. Comparing it with
the current one tells the frame when archetypes appeared or went away,
so it can log one memory breakdown per change.

<a id="rustdoc-item-4281"></a>

### `active_owner`

```rust
active_owner: SystemOwner
```

The owner given to systems registered from now on.

The host wraps a module's initialization in
[`Engine::begin_module_registration`](#rustdoc-item-4279) and
[`Engine::end_module_registration`](#rustdoc-item-4280), so module code keeps registering
systems by name and the engine still records the right owner for each.

<a id="rustdoc-item-4283"></a>

### `disabled_owners`

```rust
disabled_owners: Vec<SystemOwner>
```

The owners whose systems are currently suspended, set by
[`Engine::set_systems_enabled_for_owner`](#rustdoc-item-4282).

The owners are kept in their own list, not only as flags on the
systems, so a system registered while its owner is suspended starts
disabled: a new module generation that initializes during a suspension
must not run before it is resumed. A `Vec` is enough because only a
handful of owners ever exist.

<a id="rustdoc-item-4284"></a>

### `hot_patch_registry`

```rust
hot_patch_registry: crate::hot_patch::HotPatchRegistry
```

Dispatch slots for hot-patchable systems, keyed by registration name
and, when that differs, by the function's qualified path.

This field must NOT be behind `#[cfg(feature = "development")]`. The
feature would change the struct's layout, and a module built with the
other setting rebuilds `&mut Engine` from a raw pointer through
[`EngineApi`](../api/struct.EngineApi.md#rustdoc-item-3). A layout difference would then corrupt
memory instead of failing to compile. An unused empty map costs a few
bytes; the difference would cost correctness.

## Associated functions and methods

<a id="rustdoc-item-4287"></a>

### `load_asset`

```rust
pub fn load_asset<T: ImportedAsset>(self: &mut Self, path: &str) -> Result<Handle<T>, String>;
```

Loads an asset through the engine, for code that owns the engine rather
than the world.

Behaves as [`World::load_asset`](../world/struct.World.md#rustdoc-item-1853).

#### Errors

As [`World::load_asset`](../world/struct.World.md#rustdoc-item-1853).

<a id="rustdoc-item-1845"></a>

### `load_scene_file`

```rust
pub fn load_scene_file(self: &mut Self, path: &str) -> Result<SceneLoad, String>;
```

Loads the scene at `path` into this engine's world.

Loads through [`load_scene_asset`](../asset_loading/fn.load_scene_asset.md#rustdoc-item-1849), which the startup scene also uses.
Entities are created under the stable ids the file carries, so
references between them resolve.

#### Errors

As [`load_scene_asset`](../asset_loading/fn.load_scene_asset.md#rustdoc-item-1849).

<a id="rustdoc-item-3588"></a>

### `new`

```rust
pub fn new() -> Self;
```

Creates an engine with no registered systems.

It adds the resources every build expects (`Time`, `Input`,
`AssetManager`) and registers the `Scene` asset type before any
generation starts, so a reload cannot retire that registration.

<a id="rustdoc-item-4290"></a>

### `set_parallel_execution`

```rust
pub fn set_parallel_execution(self: &mut Self, enabled: bool);
```

Enables or disables parallel system execution.

When disabled, systems run sequentially in registration order.

<a id="rustdoc-item-4000"></a>

### `set_ecs_diagnostics_interval`

```rust
pub fn set_ecs_diagnostics_interval(self: &mut Self, interval: Option<Duration>);
```

Sets how often the built-in ECS state report prints.

The report is opt-in: [`Engine::new`](#rustdoc-item-3588) registers nothing, and this is the
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

<a id="rustdoc-item-4291"></a>

### `register_ecs_diagnostics_system`

```rust
pub(in engine) fn register_ecs_diagnostics_system(self: &mut Self, interval: Option<Duration>);
```

Registers the periodic ECS state report under
[`SystemOwner::ENGINE`](struct.SystemOwner.md#rustdoc-item-4106).

`None`, or a zero interval, registers nothing, which is how the report
is disabled.

<a id="rustdoc-item-4292"></a>

### `set_systems_paused`

```rust
pub fn set_systems_paused(self: &mut Self, paused: bool);
```

Pauses or resumes the update systems without stopping the frame.

A paused engine still bumps the world tick, still updates scripts and
still flushes deferred commands, so an editor can change a frozen world
and see the result. The post-update systems still run after the flush;
only the update systems are skipped.

<a id="rustdoc-item-4293"></a>

### `systems_paused`

```rust
pub fn systems_paused(self: &Self) -> bool;
```

Returns whether the update systems are currently skipped.

<a id="rustdoc-item-4271"></a>

### `request_single_step`

```rust
pub fn request_single_step(self: &mut Self);
```

Runs the update systems once on the next `process_frame`.

The editor's step control uses it. While the engine is paused, the next
frame runs the update systems once and leaves the engine paused. While
the engine is running, the call changes nothing, because the next frame
runs the systems anyway.

<a id="rustdoc-item-4294"></a>

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

<a id="rustdoc-item-4273"></a>

### `set_should_exit_on_error`

```rust
pub fn set_should_exit_on_error(self: &mut Self, should_exit_on_error: bool);
```

Sets whether a deferred-command failure fails the frame.

When `true`, `process_frame` returns every failure it collected and the
caller decides what to do; when `false` (the default), failures are
logged and the frame reports success.

<a id="rustdoc-item-4295"></a>

### `should_exit_on_error`

```rust
pub fn should_exit_on_error(self: &Self) -> bool;
```

Returns whether a deferred-command failure fails the frame.

<a id="rustdoc-item-4276"></a>

### `set_trace_frame_wait`

```rust
pub fn set_trace_frame_wait(self: &mut Self, should_trace_frame_wait: bool);
```

Sets whether the frame-rate limiter's sleep is traced.

The zone is named `frame wait`; turn it off to keep the timeline tidy.

<a id="rustdoc-item-4297"></a>

### `enable_system`

```rust
pub fn enable_system(self: &mut Self, name: &str) -> bool;
```

Enables a system by name.

The name-keyed convenience over [`Self::set_system_enabled`](#rustdoc-item-4228). Names are
not unique, so a caller that has a [`SystemSnapshot`](struct.SystemSnapshot.md#rustdoc-item-4229) should pass that
snapshot's index to [`Self::set_system_enabled_at`](#rustdoc-item-4296) instead: this one
hits the first match.

Returns `true` if the system was found and enabled, `false` otherwise.

<a id="rustdoc-item-4298"></a>

### `disable_system`

```rust
pub fn disable_system(self: &mut Self, name: &str) -> bool;
```

Disables a system by name.

The name-keyed convenience over [`Self::set_system_enabled`](#rustdoc-item-4228); see
[`Self::enable_system`](#rustdoc-item-4297) for the caveat about duplicate names.

Returns `true` if the system was found and disabled, `false` otherwise.

<a id="rustdoc-item-4228"></a>

### `set_system_enabled`

```rust
pub fn set_system_enabled(self: &mut Self, name: &str, enabled: bool) -> bool;
```

Sets the enabled state of a system by name.

Returns `true` if the system was found, `false` otherwise. The batch
graph does not change: a disabled system keeps its place and is skipped
at dispatch, because batches are decided by conflicts alone.

<a id="rustdoc-item-4299"></a>

### `is_system_enabled`

```rust
pub fn is_system_enabled(self: &Self, name: &str) -> Option<bool>;
```

Checks whether a system is enabled.

Returns `None` if the system was not found.

<a id="rustdoc-item-4300"></a>

### `is_registered`

```rust
pub fn is_registered(self: &Self, name: &str) -> bool;
```

Checks whether any system carries this name.

This asks only about existence. [`Self::is_system_enabled`](#rustdoc-item-4299) answers the
same question but reads as one about being enabled. Names are not
unique, so this returns `true` if any registration has the name.

<a id="rustdoc-item-4301"></a>

### `system_index`

```rust
pub fn system_index(self: &Self, name: &str) -> Option<usize>;
```

The registration index of the first system named `name`.

That index is what [`Self::set_system_enabled_at`](#rustdoc-item-4296) takes and what
[`SystemSnapshot::index`](struct.SystemSnapshot.md#rustdoc-item-4222) carries, so a caller that needs to mutate a
specific registration resolves it here rather than by name.

<a id="rustdoc-item-4302"></a>

### `system_snapshots`

```rust
pub fn system_snapshots(self: &Self) -> Vec<SystemSnapshot>;
```

Takes a snapshot of every registered system, in registration order.

The editor's Systems tab reads this; it never requires knowing the
concrete system type. `hot_patchable` reports whether the system has a
dispatch slot in the hot-patch registry (only present when the host was
built with the `development` feature).

<a id="rustdoc-item-4296"></a>

### `set_system_enabled_at`

```rust
pub fn set_system_enabled_at(self: &mut Self, index: usize, enabled: bool) -> bool;
```

Enables or disables the system at `index`.

Unlike [`Self::set_system_enabled`](#rustdoc-item-4228), which matches by name and so hits
the first of several same-named systems, this targets exactly one
registration. Returns `false` when the index is out of range.

<a id="rustdoc-item-4303"></a>

### `print_execution_graph`

```rust
pub fn print_execution_graph(self: &mut Self);
```

Prints the execution graph for debugging.

Rebuilds the batches first when the system set changed since the last
frame, so the report matches what the next frame would dispatch.

<a id="rustdoc-item-4304"></a>

### `world`

```rust
pub fn world(self: &Self) -> &World;
```

Returns a shared reference to the world.

<a id="rustdoc-item-4305"></a>

### `world_mut`

```rust
pub fn world_mut(self: &mut Self) -> &mut World;
```

Returns a mutable reference to the world.

<a id="rustdoc-item-4307"></a>

### `push_input_event`

```rust
pub fn push_input_event(self: &mut Self, event: crate::input::InputEvent);
```

Queues an input event from the frontend. The event takes effect at the
start of the next frame. See [`crate::input`](../input/index.md#rustdoc-item-4306).

<a id="rustdoc-item-4309"></a>

### `take_rumble_requests`

```rust
pub fn take_rumble_requests(self: &mut Self) -> Vec<crate::input::RumbleRequest>;
```

Takes the rumble requests the systems queued, so the frontend that owns
the gamepads can play them.

<a id="rustdoc-item-4286"></a>

### `register_system`

```rust
pub fn register_system<F, Input, impl Into<String>: Into<String>>(self: &mut Self, name: impl Into<String>, system: F) where F: IntoSystem<Input>, Input: SystemParam;
```

Registers a system with a name.

The system can be any function whose parameters all implement
[`SystemParam`](../system/trait.SystemParam.md#rustdoc-item-2656). The name is used for debugging and profiling.

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

<a id="rustdoc-item-4312"></a>

### `register_post_update_system`

```rust
pub fn register_post_update_system<F, Input, impl Into<String>: Into<String>>(self: &mut Self, name: impl Into<String>, system: F) where F: IntoSystem<Input>, Input: SystemParam;
```

Registers a system that runs after the command flush. The commands it
queues apply on the next frame.

Host-facing, like [`Self::register_system`](#rustdoc-item-4286): an artifact declares a
post-update system with `#[system(post_update)]`.

<a id="rustdoc-item-4313"></a>

### `prepare_system`

```rust
pub(in engine) fn prepare_system<F, Input, impl Into<String>: Into<String>>(self: &mut Self, name: impl Into<String>, system: F) -> (String, SystemAccess, Box<dyn System>) where F: IntoSystem<Input>, Input: SystemParam;
```

Derives a registration's access pattern and boxes its system.

The part both name-registering entry points share: it records the
access the parameter tuple declares, then boxes the system. With hot
patching on, the box goes through a dispatch slot, so a later patch
replaces one pointer instead of registering the system again.

<a id="rustdoc-item-4316"></a>

### `hot_patch`

```rust
pub fn hot_patch(self: &mut Self, name: &str, address: usize, signature_hash: u64) -> Result<(), crate::hot_patch::HotPatchError>;
```

Replaces one registered system's implementation without registering it
again.

The system keeps its identity, its place in the scheduler graph, its
access metadata and its change-detection ticks. The [`World`](../world/struct.World.md#rustdoc-item-2583) is
untouched. The replacement is used from the system's next run, so a
caller should apply patches at a frame boundary, when no system is
running.

`signature_hash` must be the value
[`hot_patch::signature_hash`](../hot_patch/fn.signature_hash.md#rustdoc-item-4314) returns
for the replacement's parameter tuple and return type. A different hash
is refused, because the running call site was compiled for the old
shape.

#### Errors

Returns [`HotPatchError`](../hot_patch/enum.HotPatchError.md#rustdoc-item-4315) when no
hot-patchable system is registered under `name` (`UnknownSystem`), when
the signature changed (`SignatureMismatch`), or when `address` is null
(`NullAddress`). In every case the running implementation stays in
place.

<a id="rustdoc-item-4317"></a>

### `hot_patch_baseline`

```rust
pub fn hot_patch_baseline(self: &Self, name: &str) -> Option<(usize, u64)>;
```

Returns the implementation a system was registered with, and its
signature.

A host uses this to undo a patch and go back to the code the running
build was compiled with. `None` when no such system is registered, or
when it is not hot-patchable.

<a id="rustdoc-item-4318"></a>

### `hot_patch_registry`

```rust
pub fn hot_patch_registry(self: &Self) -> &crate::hot_patch::HotPatchRegistry;
```

Read-only access to the hot-patch registry, for hosts and tooling.

<a id="rustdoc-item-4105"></a>

### `register_system_with_access`

```rust
pub unsafe fn register_system_with_access<F, impl Into<String>: Into<String>>(self: &mut Self, name: impl Into<String>, system_access: SystemAccess, system: F) where F: FnMut(&mut World, &mut CommandQueue) -> Result<(), SystemError> + Send + 'static;
```

Registers a system whose access pattern was derived outside Rust's
[`SystemParam`](../system/trait.SystemParam.md#rustdoc-item-2656) machinery (for example from a managed-language system
signature).

#### Safety

`system_access` must describe every component/resource the system may
touch. An incomplete declaration can make the scheduler run conflicting
systems concurrently and cause undefined behavior.

<a id="rustdoc-item-4321"></a>

### `push_system`

```rust
pub(in engine) fn push_system(self: &mut Self, name: String, system_access: SystemAccess, system: Box<dyn System>, post_update: bool);
```

Adds one system to the list and marks the scheduler out of date.

Every registration entry point ends here, so they all set the owner,
the phase and the enabled state the same way, and they all invalidate
the graph. `post_update` is passed in rather than written after the
push, so no record ever exists with a phase that disagrees with the
batches it was placed in.

The batches are not built here: the next frame rebuilds them once from
the whole list, so a module that registers many systems pays for one
rebuild, not one per system.

<a id="rustdoc-item-4279"></a>

### `begin_module_registration`

```rust
pub fn begin_module_registration(self: &mut Self, system_owner: SystemOwner);
```

Attributes every system registered from now on to `system_owner`.

The host wraps a module's initialization in this call and
[`Self::end_module_registration`](#rustdoc-item-4280), so module code registers systems by
name while the engine records which module each system came from.

<a id="rustdoc-item-4280"></a>

### `end_module_registration`

```rust
pub fn end_module_registration(self: &mut Self);
```

Returns registration attribution to [`SystemOwner::PROJECT`](struct.SystemOwner.md#rustdoc-item-4112).

<a id="rustdoc-item-4282"></a>

### `set_systems_enabled_for_owner`

```rust
pub fn set_systems_enabled_for_owner(self: &mut Self, system_owner: SystemOwner, enabled: bool) -> usize;
```

Suspends or resumes every system registered by `system_owner`.

Suspending also covers systems `system_owner` registers later, until it
is resumed: a module generation that initializes during a suspension
registers its systems disabled. The suspension survives
[`Self::clear_systems_owned_by`](#rustdoc-item-4113), which removes the systems but not the
owner's state. Resuming turns on every system of `system_owner`,
including any that [`Self::set_system_enabled`](#rustdoc-item-4228) disabled in the
meantime.

Returns how many systems `system_owner` has now. The batches are not
rebuilt: they list every registered system, and a disabled system is
skipped at dispatch.

<a id="rustdoc-item-4322"></a>

### `is_owner_enabled`

```rust
pub fn is_owner_enabled(self: &Self, system_owner: SystemOwner) -> bool;
```

Checks whether the systems of `system_owner` may run, that is, whether
the owner is not suspended by [`Self::set_systems_enabled_for_owner`](#rustdoc-item-4282).

<a id="rustdoc-item-4113"></a>

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

<a id="rustdoc-item-4323"></a>

### `clear_systems`

```rust
pub fn clear_systems(self: &mut Self);
```

Removes all registered systems, clearing the scheduler state.

Their dispatch slots are retired with them, so nothing can be patched
into a system that no longer runs.

Component registrations, entities, and resources are **not** cleared —
only systems are affected. The world state persists.

<a id="rustdoc-item-4324"></a>

### `drain_system_failures`

```rust
pub fn drain_system_failures(self: &mut Self) -> Vec<SystemFailure>;
```

Drains the system failures recorded since the previous drain.

The reporting boundary calls this once per frame and logs each failure
as a message. A failed system never aborts its batch, so the rest still
finish the frame.

<a id="rustdoc-item-4325"></a>

### `system_failures`

```rust
pub fn system_failures(self: &Self) -> &[SystemFailure];
```

Reads the system failures recorded since the previous drain without
clearing them.

<a id="rustdoc-item-4326"></a>

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

<a id="rustdoc-item-4329"></a>

### `queue_deferred_commands`

```rust
pub fn queue_deferred_commands<F>(self: &mut Self, produce_commands: F) where F: FnOnce(&mut World, &mut CommandQueue);
```

Runs a command-producing closure without applying its commands.

The transactional counterpart of [`Self::run_deferred_commands`](#rustdoc-item-4326): the
caller commits with [`Self::flush_deferred_commands`](#rustdoc-item-4327) or rolls back
with [`Self::discard_deferred_commands`](#rustdoc-item-4328), so a failed phase can never
leave partial world state behind.

<a id="rustdoc-item-4327"></a>

### `flush_deferred_commands`

```rust
pub fn flush_deferred_commands(self: &mut Self) -> Result<(), Vec<CommandError>>;
```

Applies every command queued since the last flush.

#### Errors

Returns one entry per command that could not be applied.

<a id="rustdoc-item-4328"></a>

### `discard_deferred_commands`

```rust
pub fn discard_deferred_commands(self: &mut Self);
```

Discards every command queued since the last flush without applying it.

<a id="rustdoc-item-4330"></a>

### `process_frame`

```rust
pub fn process_frame(self: &mut Self) -> Result<(), Vec<CommandError>>;
```

Runs one frame: the update systems, the command flush and the
post-update systems.

A frame goes like this:
1. The update systems run, in parallel batches when that is enabled.
2. While they run, systems queue commands (create, destroy, add a
   component and so on) instead of changing the world directly.
3. After the update systems finish, the queued commands are applied and
   the post-update systems run on the result.

Splitting the frame this way keeps structural changes from disturbing
systems that are still running.

#### Errors

Returns `Err(Vec<CommandError>)` when [`should_exit_on_error`] is
`true` and one or more deferred commands fail.  When the flag is
`false` (default), errors are logged and `Ok(())` is returned.

[`should_exit_on_error`]: Engine::should_exit_on_error

<a id="rustdoc-item-4331"></a>

### `emit_frame_telemetry`

```rust
pub(in engine) fn emit_frame_telemetry(self: &Self, frame_start: Instant);
```

Emits the per-frame Tracy plots and the metrics-reporter gauges.

<a id="rustdoc-item-4333"></a>

### `emit_archetype_memory_breakdown`

```rust
pub(in engine) fn emit_archetype_memory_breakdown(self: &mut Self);
```

Emits one memory-breakdown block when the archetype set has changed.

<a id="rustdoc-item-4334"></a>

### `wait_for_frame_budget`

```rust
pub(in engine) fn wait_for_frame_budget(self: &Self, frame_start: Instant);
```

Waits out whatever remains of the frame budget, outside the frame zone.

<a id="rustdoc-item-4335"></a>

### `run_systems_sequential`

```rust
pub(in engine) fn run_systems_sequential(self: &mut Self, post_update: bool);
```

Runs systems one after another: when parallel execution is off, when
only one system is registered, and for the post-update phase, which
always runs on the calling thread after the command flush.

<a id="rustdoc-item-4336"></a>

### `run_systems_parallel`

```rust
pub(in engine) fn run_systems_parallel(self: &mut Self);
```

Runs the update systems in parallel batches, using the scheduler's
conflict analysis.

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
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Default`
