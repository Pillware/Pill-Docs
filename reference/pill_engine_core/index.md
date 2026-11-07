<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-9376"></a>

# pill_engine_core API reference

> Crate version: `0.1.0` · Rustdoc JSON format: `57` · Private items: included

The engine core: an archetype-based Entity Component System and everything
built on it.

## Responsibilities

- Declares all public modules that compose the engine: world, queries,
  scheduler, assets, persistence, hot-patch machinery.
- Re-exports the public types at the crate root.
- Configures the Tracy profiled allocator when the `profiling-memory`
  feature is active.

## Design

Projects, extensions and the macros never name this crate directly. They
use `pill_engine`, a facade that re-exports everything here under the same
paths and adds the per-DLL `inventory` registries. This crate holds the
code every DLL shares, and never reads a registry: when it needs something
from one, the calling DLL passes it in. It must never depend on
`pill_engine`.

The module ABI is **Rust-to-Rust by design**: a loaded project or module
receives an [`EngineApi`](api/struct.EngineApi.md#rustdoc-item-3) with a pointer to the host's engine, and calls
the typed API through it. There is no language-neutral plugin table; see
[`api`](api/index.md#rustdoc-item-74) for why one would need a second copy of the whole API.

## Module contents

### Modules
- [`api`](api/index.md#rustdoc-item-74) — The engine API table a loaded project or module receives at its entry
- [`archetype`](archetype/index.md#rustdoc-item-110) — Archetype-based component storage with structure-of-arrays layout.
- [`asset`](asset/index.md#rustdoc-item-865) — Many-per-type asset storage addressed by generational handle.
- [`asset_database`](asset_database/index.md#rustdoc-item-1241) — Every asset of a project by guid and by path, loaded or not.
- [`asset_import_registry`](asset_import_registry/index.md#rustdoc-item-1318) — Importing assets by file extension, for code that does not know their type.
- [`asset_loading`](asset_loading/index.md#rustdoc-item-1852) — Loading assets and scenes from game code by path.
- [`asset_metadata`](asset_metadata/index.md#rustdoc-item-1859) — Metadata files beside an asset's source (`<source_file>.meta`).
- [`asset_reference`](asset_reference/index.md#rustdoc-item-2153) — Saved references to assets, by guid, that point at the asset in a later
- [`asset_standalone`](asset_standalone/index.md#rustdoc-item-2216) — Assets stored as their own file in `res`, with no source file.
- [`asset_store`](asset_store/index.md#rustdoc-item-2228) — Where an asset's bytes come from: mounted packs and the filesystem.
- [`commands`](commands/index.md#rustdoc-item-2476) — Deferred command queue for structural ECS mutations.
- [`common_components`](common_components/index.md#rustdoc-item-2744) — Components the engine defines because more than one consumer needs them.
- [`component`](component/index.md#rustdoc-item-2746) — Component trait, type identification, and change-detection primitives.
- [`component_field`](component_field/index.md#rustdoc-item-3105) — Generic type-erased component field access for editor-style tools.
- [`component_registry`](component_registry/index.md#rustdoc-item-3502) — Compile-time field layouts of components and value types, emitted by the
- [`config`](config/index.md#rustdoc-item-3590) — The engine's tunable constants and the parallel-execution settings.
- [`debug_draw`](debug_draw/index.md#rustdoc-item-3592) — Immediate debug drawing: lines, shapes, labels and gizmo handles. Any
- [`diagnostics`](diagnostics/index.md#rustdoc-item-4005) — A periodic report of ECS state, switched on with
- [`dynamic_buffer`](dynamic_buffer/index.md#rustdoc-item-4109) — Engine-owned native dynamic buffer, re-exported from `pill_core`.
- [`engine`](engine/index.md#rustdoc-item-4158) — System registration, frame execution, and the parallel dispatch of
- [`entity`](entity/index.md#rustdoc-item-4423) — Lightweight entity handles with generation-based invalidation.
- [`error`](error/index.md#rustdoc-item-4998) — Typed error system for the ECS engine.
- [`hot_patch`](hot_patch/index.md#rustdoc-item-5000) — Per-function hot patching: stable dispatch slots for registered systems.
- [`input`](input/index.md#rustdoc-item-4306) — Keyboard, mouse and gamepad state maintained by the engine and read through
- [`manager_settings`](manager_settings/index.md#rustdoc-item-8395) — Settings assets that configure manager resources: the bindings that point a
- [`mirror`](mirror/index.md#rustdoc-item-6111) — The C ABI a mirrored Rust function crosses to reach C#: argument slots,
- [`module_abi`](module_abi/index.md#rustdoc-item-6219) — The extension ABI revision the host and every module compare at load time.
- [`persistence`](persistence/index.md#rustdoc-item-6349) — Component persistence and schema migration for hot-reload.
- [`profiling`](profiling/index.md#rustdoc-item-6446) — Re-exports the profiling API from `pill_core`.
- [`query`](query/index.md#rustdoc-item-6743) — Query system for efficient iteration over entities with specific components.
- [`resource`](resource/index.md#rustdoc-item-1162) — Singleton resources stored in the [`World`], not attached to entities.
- [`saved_references`](saved_references/index.md#rustdoc-item-7532) — The saved form of asset and entity references: a guid and a stable id, plus
- [`scene`](scene/index.md#rustdoc-item-7769) — A scene: a world's entities, components and references as one standalone
- [`scheduler`](scheduler/index.md#rustdoc-item-8013) — Dependency analysis and parallel batch scheduling for system execution.
- [`scripting`](scripting/index.md#rustdoc-item-8097) — Script components: a component trait with an update step, and a context
- [`settings`](settings/index.md#rustdoc-item-8477) — Manager settings: the settings asset a manager resource reads, its
- [`startup_scene`](startup_scene/index.md#rustdoc-item-8506) — The startup scene: the `.scene` a project's settings name, loaded before
- [`system`](system/index.md#rustdoc-item-8575) — How a plain function's parameters are pulled from the world so the function
- [`time`](time/index.md#rustdoc-item-8578) — Frame timing maintained by the engine and read through `Res<Time>`.
- [`type_names`](type_names/index.md#rustdoc-item-8625) — Type names as the rest of the engine sees them: `pill_engine::...` for the
- [`world`](world/index.md#rustdoc-item-8658) — Central ECS state container - entities, archetypes, components, and

### Statics
- [`PROFILED_ALLOCATOR`](static.PROFILED_ALLOCATOR.md#rustdoc-item-9173) — Tracy profiled allocator that reports every allocation in Tracy's memory

## Re-exports

- [`pub use api::EngineApi;`](api/struct.EngineApi.md#rustdoc-item-3)
- [`pub use asset::Asset;`](asset/trait.Asset.md#rustdoc-item-716)
- [`pub use asset::AssetBindingError;`](asset/enum.AssetBindingError.md#rustdoc-item-833)
- [`pub use asset::AssetBindingResult;`](asset/type.AssetBindingResult.md#rustdoc-item-863)
- [`pub use asset::AssetGuid;`](asset/struct.AssetGuid.md#rustdoc-item-974)
- [`pub use asset::AssetLoadError;`](asset/enum.AssetLoadError.md#rustdoc-item-789)
- [`pub use asset::AssetLoadResult;`](asset/type.AssetLoadResult.md#rustdoc-item-734)
- [`pub use asset::AssetLoader;`](asset/enum.AssetLoader.md#rustdoc-item-726)
- [`pub use asset::AssetManager;`](asset/struct.AssetManager.md#rustdoc-item-714)
- [`pub use asset::Handle;`](asset/struct.Handle.md#rustdoc-item-869)
- [`pub use asset_database::AssetDatabase;`](asset_database/struct.AssetDatabase.md#rustdoc-item-1244)
- [`pub use asset_database::AssetRecord;`](asset_database/struct.AssetRecord.md#rustdoc-item-1168)
- [`pub use asset_database::GuidConflict;`](asset_database/struct.GuidConflict.md#rustdoc-item-1205)
- [`pub use asset_import_registry::AssetIdentity;`](asset_import_registry/struct.AssetIdentity.md#rustdoc-item-1403)
- [`pub use asset_import_registry::ErasedImportError;`](asset_import_registry/enum.ErasedImportError.md#rustdoc-item-826)
- [`pub use asset_import_registry::ErasedImportOutcome;`](asset_import_registry/struct.ErasedImportOutcome.md#rustdoc-item-1315)
- [`pub use asset_import_registry::FieldDecorator;`](asset_import_registry/enum.FieldDecorator.md#rustdoc-item-1666)
- [`pub use asset_import_registry::ImportRegistrationError;`](asset_import_registry/enum.ImportRegistrationError.md#rustdoc-item-1556)
- [`pub use asset_import_registry::ImportRegistry;`](asset_import_registry/struct.ImportRegistry.md#rustdoc-item-1247)
- [`pub use asset_import_registry::ScanReport;`](asset_import_registry/struct.ScanReport.md#rustdoc-item-1741)
- [`pub use asset_loading::import_scene_document;`](asset_loading/fn.import_scene_document.md#rustdoc-item-1846)
- [`pub use asset_loading::load_scene_asset;`](asset_loading/fn.load_scene_asset.md#rustdoc-item-1849)
- [`pub use asset_loading::scene_database;`](asset_loading/fn.scene_database.md#rustdoc-item-1848)
- [`pub use asset_metadata::AssetImport;`](asset_metadata/struct.AssetImport.md#rustdoc-item-1115)
- [`pub use asset_metadata::AssetImportError;`](asset_metadata/enum.AssetImportError.md#rustdoc-item-829)
- [`pub use asset_metadata::ImportOutcome;`](asset_metadata/struct.ImportOutcome.md#rustdoc-item-1116)
- [`pub use asset_metadata::ImportedAsset;`](asset_metadata/trait.ImportedAsset.md#rustdoc-item-1117)
- [`pub use asset_metadata::MetadataPolicy;`](asset_metadata/enum.MetadataPolicy.md#rustdoc-item-1392)
- [`pub use asset_metadata::MetadataSource;`](asset_metadata/enum.MetadataSource.md#rustdoc-item-1310)
- [`pub use asset_metadata::ReimportOutcome;`](asset_metadata/struct.ReimportOutcome.md#rustdoc-item-1122)
- [`pub use asset_reference::AssetReference;`](asset_reference/struct.AssetReference.md#rustdoc-item-1302)
- [`pub use asset_standalone::render_standalone;`](asset_standalone/fn.render_standalone.md#rustdoc-item-2214)
- [`pub use asset_standalone::StandaloneAsset;`](asset_standalone/trait.StandaloneAsset.md#rustdoc-item-1130)
- [`pub use commands::CommandError;`](error/enum.CommandError.md#rustdoc-item-2568)
- [`pub use commands::Commands;`](commands/struct.Commands.md#rustdoc-item-2621)
- [`pub use common_components::register_transform_component;`](common_components/fn.register_transform_component.md#rustdoc-item-2743)
- [`pub use common_components::TransformComponent;`](common_components/struct.TransformComponent.md#rustdoc-item-2689)
- [`pub use component::Component;`](component/trait.Component.md#rustdoc-item-494)
- [`pub use component::ComponentId;`](component/enum.ComponentId.md#rustdoc-item-83)
- [`pub use component::ComponentTicks;`](component/struct.ComponentTicks.md#rustdoc-item-535)
- [`pub use component::Tick;`](component/struct.Tick.md#rustdoc-item-2758)
- [`pub use component_field::ComponentFieldError;`](component_field/enum.ComponentFieldError.md#rustdoc-item-3164)
- [`pub use component_field::FieldValue;`](component_field/enum.FieldValue.md#rustdoc-item-3110)
- [`pub use debug_draw::DebugColor;`](debug_draw/type.DebugColor.md#rustdoc-item-3593)
- [`pub use debug_draw::DebugDraw;`](debug_draw/struct.DebugDraw.md#rustdoc-item-3943)
- [`pub use debug_draw::DebugFrame;`](debug_draw/struct.DebugFrame.md#rustdoc-item-3868)
- [`pub use debug_draw::DebugLabel;`](debug_draw/struct.DebugLabel.md#rustdoc-item-3756)
- [`pub use debug_draw::DebugLifetime;`](debug_draw/enum.DebugLifetime.md#rustdoc-item-3597)
- [`pub use debug_draw::DebugLine;`](debug_draw/struct.DebugLine.md#rustdoc-item-3719)
- [`pub use debug_draw::DebugStyle;`](debug_draw/struct.DebugStyle.md#rustdoc-item-3637)
- [`pub use debug_draw::GizmoLine;`](debug_draw/struct.GizmoLine.md#rustdoc-item-3793)
- [`pub use debug_draw::GizmoTriangle;`](debug_draw/struct.GizmoTriangle.md#rustdoc-item-3830)
- [`pub use debug_draw::LabelAnchor;`](debug_draw/enum.LabelAnchor.md#rustdoc-item-3680)
- [`pub use engine::Engine;`](engine/struct.Engine.md#rustdoc-item-2)
- [`pub use engine::SystemOwner;`](engine/struct.SystemOwner.md#rustdoc-item-4111)
- [`pub use engine::SystemSnapshot;`](engine/struct.SystemSnapshot.md#rustdoc-item-4229)
- [`pub use entity::Entity;`](entity/struct.Entity.md#rustdoc-item-669)
- [`pub use entity::EntityId;`](entity/struct.EntityId.md#rustdoc-item-3298)
- [`pub use error::EngineError;`](error/enum.EngineError.md#rustdoc-item-4612)
- [`pub use error::SystemError;`](error/enum.SystemError.md#rustdoc-item-4320)
- [`pub use error::SystemFailure;`](error/struct.SystemFailure.md#rustdoc-item-4268)
- [`pub use hot_patch::HotPatchError;`](hot_patch/enum.HotPatchError.md#rustdoc-item-4315)
- [`pub use hot_patch::HotPatchRegistry;`](hot_patch/struct.HotPatchRegistry.md#rustdoc-item-4285)
- [`pub use hot_patch::HotSlot;`](hot_patch/struct.HotSlot.md#rustdoc-item-5096)
- [`pub use hot_patch::PlainSlot;`](hot_patch/struct.PlainSlot.md#rustdoc-item-5172)
- [`pub use input::ButtonState;`](input/enum.ButtonState.md#rustdoc-item-5489)
- [`pub use input::GamepadAxis;`](input/enum.GamepadAxis.md#rustdoc-item-5635)
- [`pub use input::GamepadButton;`](input/enum.GamepadButton.md#rustdoc-item-5590)
- [`pub use input::Input;`](input/struct.Input.md#rustdoc-item-5802)
- [`pub use input::InputEvent;`](input/enum.InputEvent.md#rustdoc-item-4308)
- [`pub use input::KeyCode;`](input/enum.KeyCode.md#rustdoc-item-5246)
- [`pub use input::Modifiers;`](input/struct.Modifiers.md#rustdoc-item-5761)
- [`pub use input::MouseButton;`](input/enum.MouseButton.md#rustdoc-item-5531)
- [`pub use input::PlayerId;`](input/enum.PlayerId.md#rustdoc-item-5243)
- [`pub use input::RumbleRequest;`](input/struct.RumbleRequest.md#rustdoc-item-4310)
- [`pub use input::ScrollDelta;`](input/enum.ScrollDelta.md#rustdoc-item-5723)
- [`pub use manager_settings::ManagerSettingsApplied;`](manager_settings/struct.ManagerSettingsApplied.md#rustdoc-item-8180)
- [`pub use manager_settings::ManagerSettingsFailure;`](manager_settings/struct.ManagerSettingsFailure.md#rustdoc-item-8218)
- [`pub use manager_settings::ManagerSettingsReport;`](manager_settings/struct.ManagerSettingsReport.md#rustdoc-item-8254)
- [`pub use manager_settings::ManagerSettingsSurface;`](manager_settings/struct.ManagerSettingsSurface.md#rustdoc-item-8296)
- [`pub use manager_settings::MissingManagerSettings;`](manager_settings/struct.MissingManagerSettings.md#rustdoc-item-8141)
- [`pub use persistence::PersistResourceManifestEntry;`](persistence/resources/struct.PersistResourceManifestEntry.md#rustdoc-item-6405)
- [`pub use persistence::ResourceSnapshot;`](persistence/resources/struct.ResourceSnapshot.md#rustdoc-item-6365)
- `pub use pill_core::DynamicBuffer;`
- [`pub use query::Added;`](query/filter/struct.Added.md#rustdoc-item-6509)
- [`pub use query::BatchStats;`](query/iter/struct.BatchStats.md#rustdoc-item-6751)
- [`pub use query::Changed;`](query/filter/struct.Changed.md#rustdoc-item-6450)
- [`pub use query::Or;`](query/filter/struct.Or.md#rustdoc-item-6503)
- [`pub use query::Query;`](query/query/struct.Query.md#rustdoc-item-6939)
- [`pub use query::QueryFilter;`](query/filter/trait.QueryFilter.md#rustdoc-item-6508)
- [`pub use query::QueryTarget;`](query/target/trait.QueryTarget.md#rustdoc-item-2754)
- [`pub use query::Res;`](query/resource/struct.Res.md#rustdoc-item-1163)
- [`pub use query::ResMut;`](query/resource/struct.ResMut.md#rustdoc-item-7091)
- [`pub use query::With;`](query/filter/struct.With.md#rustdoc-item-6520)
- [`pub use query::Without;`](query/filter/struct.Without.md#rustdoc-item-6526)
- [`pub use resource::KeptLayoutDeclaration;`](resource/struct.KeptLayoutDeclaration.md#rustdoc-item-7395)
- [`pub use resource::ResHandle;`](resource/struct.ResHandle.md#rustdoc-item-7307)
- [`pub use resource::Resource;`](resource/trait.Resource.md#rustdoc-item-715)
- [`pub use resource::ResourceId;`](resource/enum.ResourceId.md#rustdoc-item-4505)
- [`pub use saved_references::restore_asset_reference;`](saved_references/fn.restore_asset_reference.md#rustdoc-item-7609)
- [`pub use saved_references::saved_reference;`](saved_references/fn.saved_reference.md#rustdoc-item-7608)
- [`pub use saved_references::SavedAssetReference;`](saved_references/struct.SavedAssetReference.md#rustdoc-item-7489)
- [`pub use saved_references::SavedEntityLink;`](saved_references/struct.SavedEntityLink.md#rustdoc-item-7616)
- [`pub use saved_references::SavedEntityLinks;`](saved_references/struct.SavedEntityLinks.md#rustdoc-item-7651)
- [`pub use saved_references::SavedReference;`](saved_references/enum.SavedReference.md#rustdoc-item-7569)
- [`pub use scene::load_scene;`](scene/fn.load_scene.md#rustdoc-item-1854)
- [`pub use scene::save_scene;`](scene/fn.save_scene.md#rustdoc-item-7813)
- [`pub use scene::Scene;`](scene/struct.Scene.md#rustdoc-item-719)
- [`pub use scene::SceneDocument;`](scene/struct.SceneDocument.md#rustdoc-item-1847)
- [`pub use scene::SceneEntity;`](scene/struct.SceneEntity.md#rustdoc-item-7690)
- [`pub use scene::SceneLoad;`](scene/struct.SceneLoad.md#rustdoc-item-1850)
- [`pub use scene::SceneSave;`](scene/struct.SceneSave.md#rustdoc-item-7814)
- [`pub use scheduler::SystemAccess;`](scheduler/struct.SystemAccess.md#rustdoc-item-2654)
- [`pub use scheduler::SystemScheduler;`](scheduler/struct.SystemScheduler.md#rustdoc-item-4266)
- [`pub use scheduler::TypeKey;`](scheduler/struct.TypeKey.md#rustdoc-item-7968)
- [`pub use scripting::ScriptComponent;`](scripting/trait.ScriptComponent.md#rustdoc-item-8136)
- [`pub use scripting::ScriptContext;`](scripting/struct.ScriptContext.md#rustdoc-item-8100)
- [`pub use settings::SettingsAssetManager;`](settings/trait.SettingsAssetManager.md#rustdoc-item-7356)
- [`pub use settings::SettingsAssetOps;`](settings/struct.SettingsAssetOps.md#rustdoc-item-7358)
- [`pub use settings::SettingsOutcome;`](settings/enum.SettingsOutcome.md#rustdoc-item-8179)
- [`pub use startup_scene::apply_startup_scene;`](startup_scene/fn.apply_startup_scene.md#rustdoc-item-8504)
- [`pub use startup_scene::queue_startup_scene;`](startup_scene/fn.queue_startup_scene.md#rustdoc-item-8503)
- [`pub use startup_scene::StartupScene;`](startup_scene/struct.StartupScene.md#rustdoc-item-7257)
- [`pub use time::Time;`](time/struct.Time.md#rustdoc-item-6083)
- `pub use serde::Deserialize;`
- `pub use serde::Deserialize;`
- `pub use serde::Serialize;`
- `pub use serde::Serialize;`
- `pub use trait_type_map;`
- `pub use tracing;`
- `pub use pill_engine_macros::pill_hot;`
- `pub use pill_engine_macros::pill_hot_fn;`
- `pub use pill_engine_macros::pill_hot_resolver;`
- `pub use pill_engine_macros::pill_mirror_fn;`
- `pub use pill_engine_macros::pill_mirror_impl;`
- `pub use pill_engine_macros::pill_mirror_method;`
- `pub use pill_engine_macros::pill_mirror_object;`
- `pub use pill_engine_macros::pill_mirror_resource;`
- `pub use pill_engine_macros::pill_module;`
- `pub use pill_engine_macros::pill_project;`
- `pub use pill_engine_macros::pill_value_type;`
- `pub use pill_engine_macros::system;`
- `pub use pill_engine_macros::PillAsset;`
- `pub use pill_engine_macros::PillComponent;`
- `pub use pill_engine_macros::PillLayout;`
- `pub use pill_engine_macros::PillMirror;`
- `pub use pill_engine_macros::PillResource;`
- [`pub use world::AddComponentError;`](error/enum.AddComponentError.md#rustdoc-item-4673)
- [`pub use world::BuildError;`](error/enum.BuildError.md#rustdoc-item-4767)
- [`pub use world::ColumnChunk;`](world/components/struct.ColumnChunk.md#rustdoc-item-8633)
- [`pub use world::EntityBuilder;`](world/struct.EntityBuilder.md#rustdoc-item-2661)
- [`pub use world::EntityRow;`](world/struct.EntityRow.md#rustdoc-item-8769)
- [`pub use world::RemoveComponentError;`](error/enum.RemoveComponentError.md#rustdoc-item-4718)
- [`pub use world::World;`](world/struct.World.md#rustdoc-item-2583)
- `pub use pill_core::profile_error;`
- `pub use pill_core::profile_frame_mark;`
- `pub use pill_core::profile_init;`
- `pub use pill_core::profile_message;`
- `pub use pill_core::profile_non_continuous_frame;`
- `pub use pill_core::profile_plot;`
- `pub use pill_core::profile_plot_config;`
- `pub use pill_core::profile_scope;`
- `pub use pill_core::profile_scope_fine;`
- `pub use pill_core::profile_secondary_frame_mark;`
- `pub use pill_core::profile_thread;`
- `pub use pill_core::profile_warn;`
