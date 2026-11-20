<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6380"></a>

# Module `pill_editor_core::hooks`

Source: `editor\pill_editor_core\src\hooks\mod.rs:1`

The editor API an `_editor` crate registers against: callbacks for the
editor's edits, their context and the drain's dispatch.
The editor API an `_editor` crate registers against: callbacks that hear
about the editor's edits.

## Responsibilities

- Hold the callbacks a module registered ([`EditorHookRegistry`]) behind a
  liveness marker the executable keeps, and the queue a module registers
  through ([`EditorHookRequests`]).
- Define the payloads a callback reads ([`FieldEdit`], [`FieldEditPhase`],
  [`FieldEditCause`]) and the verdict it answers ([`HookVerdict`]).
- Give a callback its context ([`HookContext`]): the world, the editor
  state, the commands it queues and the notices it may post.
- Dispatch the callbacks at the frame boundary ([`HookSession`]) and turn
  their answers into the applied, recorded batch.

## Design

The registry stores owned strings and `fn` pointers only, tied to a
[`ModuleLiveness`](../panels/struct.ModuleLiveness.md#rustdoc-item-6001) the executable holds - the
same contract module panels follow, because a callback address points into
the registering image and must not be called after that image unloads. A
module cannot register directly: it queues a [`HookRequest`] in its
`register`, and the executable or the browser binds it.

A callback runs at the frame boundary inside the shared drain, between the
commands of one batch, so it has the world and can queue commands that join
the same undo step. Before-callbacks may replace or refuse a field edit;
after-callbacks react and queue follow-ups. A follow-up never fires the
callbacks again, and nothing a callback queues survives a history replay:
the step being replayed already holds the result.

## Writing an editor crate

An editor crate is the crate in an extension's `modules/editor` folder, its
package name ending in `_editor`. It depends on `pill_editor_core`
next to its own runtime crate, declares `editor_frontend = "egui"` under
`[package.metadata.pill]`, and only an editor host ever builds it. Nothing
else has to be added: the host discovers the crate by its folder, loads it
after the runtime crates, and reloads it whenever one of them reloads.

A project's editor code lives in the same kind of crate, at
`<PROJECT_PATH>/<package>_editor/`: the project directory is the folder, so
the one rule covers both. An editor host discovers it the same way, builds
it with the project's modules, loads it after the project and reloads it
when the project reloads; a game build never sees it.

```ignore
use pill_editor_core::hooks::{
    EditorHookRequests, FieldEdit, FieldEditHookRequest, HookContext, HookRequest, HookVerdict,
};

const SOURCE: &str = env!("CARGO_PKG_NAME");

fn clamp(context: &mut HookContext<'_>, edit: &FieldEdit<'_, MyComponent>) -> HookVerdict {
    if edit.counter > 10 {
        HookVerdict::Replace(FieldValue::U32(10))
    } else {
        HookVerdict::Keep
    }
}

pub fn register(engine: &mut Engine) -> u32 {
    let world = engine.world_mut();
    EditorHookRequests::ensure(world);
    if let Some(requests) = world.get_resource_mut::<EditorHookRequests>() {
        requests.push(FieldEditHookRequest::new::<MyComponent>(SOURCE, clamp));
    }
    0
}
```

What the context offers, in one list:

- `world()` and `world_mut()`, the live world;
- `selection()`, `gizmo()`, `active_tool()`, `viewport()` and `cause()`, the
  editor state at the moment of the call;
- `queue(command)` for a command that joins the current step, plus the
  builders `queue_add_component`, `queue_remove_component`,
  `queue_create_entity`, `queue_destroy_entity`, `queue_selection` and
  `queue_gizmo`, which queue exactly what the editor's own rows queue;
- `post_notice(level, text)` for a message the editor shows as a toast.

What a verdict does: [`HookVerdict::Keep`] applies the edit as planned,
[`HookVerdict::Replace`] applies another value and keeps the planned one as
the step's inverse, and [`HookVerdict::Refuse`] drops the whole batch with
an editor notice and logs `[editor] hook refused`.

Which commands record: a component add or remove, an entity create or
destroy, a selection change and a field write are edits, so undo walks back
over them. A gizmo change is a control, so it never records. An edit a
callback queues joins the step of the edit it answered; an edit queued by a
callback answering a difference (the selection, the tool, the element slot)
becomes one step of its own, labelled `hook {source}`.

Reload rules: `register` runs on every generation, so a reload rebinds the
arriving image's callbacks in place of the old ones and no event fires
twice. A command queued under [`FieldEditCause::HistoryRestored`] is
dropped, because the step being replayed already holds the result, and the
drop is reported once per drain.

## Module contents

### Modules
- [`context`](context/index.md#rustdoc-item-4989) — What a callback reads and queues while it runs.
- [`dispatch`](dispatch/index.md#rustdoc-item-5124) — The frame-boundary dispatcher that runs the callbacks.
- [`events`](events/index.md#rustdoc-item-5808) — The payloads a callback receives and the verdict it answers.
- [`registry`](registry/index.md#rustdoc-item-5862) — The callbacks a module registered, and their liveness markers.
- [`requests`](requests/index.md#rustdoc-item-6113) — The queue a module registers its callbacks through.
- [`watch`](watch/index.md#rustdoc-item-6308) — The last reported selection and tool state, for the diff-driven events.

## Re-exports

- [`pub use context::HookContext;`](context/struct.HookContext.md#rustdoc-item-5075)
- [`pub use context::HookNotice;`](context/struct.HookNotice.md#rustdoc-item-4950)
- [`pub use context::HookNotices;`](context/struct.HookNotices.md#rustdoc-item-4991)
- [`pub use dispatch::HookSession;`](dispatch/struct.HookSession.md#rustdoc-item-2769)
- [`pub use events::AssetEdit;`](events/struct.AssetEdit.md#rustdoc-item-5499)
- [`pub use events::AssetEditKind;`](events/enum.AssetEditKind.md#rustdoc-item-5136)
- [`pub use events::ComponentEdit;`](events/struct.ComponentEdit.md#rustdoc-item-5381)
- [`pub use events::ElementSelectionChanged;`](events/struct.ElementSelectionChanged.md#rustdoc-item-5770)
- [`pub use events::EntityEdit;`](events/struct.EntityEdit.md#rustdoc-item-5417)
- [`pub use events::FieldEdit;`](events/struct.FieldEdit.md#rustdoc-item-5349)
- [`pub use events::FieldEditCause;`](events/enum.FieldEditCause.md#rustdoc-item-5073)
- [`pub use events::FieldEditPhase;`](events/enum.FieldEditPhase.md#rustdoc-item-1936)
- [`pub use events::FieldEditView;`](events/struct.FieldEditView.md#rustdoc-item-5171)
- [`pub use events::HistoryEdit;`](events/struct.HistoryEdit.md#rustdoc-item-5535)
- [`pub use events::HookVerdict;`](events/enum.HookVerdict.md#rustdoc-item-5261)
- [`pub use events::PlayEdit;`](events/struct.PlayEdit.md#rustdoc-item-5692)
- [`pub use events::SceneEdit;`](events/struct.SceneEdit.md#rustdoc-item-5657)
- [`pub use events::SelectionChanged;`](events/struct.SelectionChanged.md#rustdoc-item-5617)
- [`pub use events::SelectionSnapshot;`](events/struct.SelectionSnapshot.md#rustdoc-item-5575)
- [`pub use events::ToolActivatedEdit;`](events/struct.ToolActivatedEdit.md#rustdoc-item-5728)
- [`pub use registry::EditorHookRegistry;`](registry/struct.EditorHookRegistry.md#rustdoc-item-6073)
- [`pub use registry::FieldEditAfterHook;`](registry/struct.FieldEditAfterHook.md#rustdoc-item-5902)
- [`pub use registry::FieldEditBeforeHook;`](registry/struct.FieldEditBeforeHook.md#rustdoc-item-5864)
- [`pub use registry::HookCallback;`](registry/enum.HookCallback.md#rustdoc-item-5860)
- [`pub use registry::HookEvent;`](registry/enum.HookEvent.md#rustdoc-item-5131)
- [`pub use registry::HookRegistration;`](registry/struct.HookRegistration.md#rustdoc-item-6002)
- [`pub use requests::EditorHookRequests;`](requests/struct.EditorHookRequests.md#rustdoc-item-6167)
- [`pub use requests::FieldEditHookRequest;`](requests/struct.FieldEditHookRequest.md#rustdoc-item-6116)
- [`pub use requests::HookRequest;`](requests/struct.HookRequest.md#rustdoc-item-6117)
- [`pub use watch::HookWatch;`](watch/struct.HookWatch.md#rustdoc-item-6311)
