<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-11230"></a>

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
receives an [`EngineApi`](abi/api/struct.EngineApi.md#rustdoc-item-3) with a pointer to the host's engine, and calls
the typed API through it. There is no language-neutral plugin table; see
[`api`](abi/api/index.md#rustdoc-item-74) for why one would need a second copy of the whole API.

## Module contents

### Modules
- [`abi`](abi/index.md#rustdoc-item-241) — The ABI group: the API table a loaded DLL receives, the ABI revision both
- [`assets`](assets/index.md#rustdoc-item-2016) — Many-per-type asset storage addressed by generational handle.
- [`config`](config/index.md#rustdoc-item-2105) — The engine's tunable constants and the parallel-execution settings.
- [`dynamic_buffer`](dynamic_buffer/index.md#rustdoc-item-2108) — Engine-owned native dynamic buffer, re-exported from `pill_core`.
- [`ecs`](ecs/index.md#rustdoc-item-5660) — The ECS group: entities, components, resources, archetypes, the world and
- [`engine`](engine/index.md#rustdoc-item-5715) — System registration, frame execution, and the parallel dispatch of
- [`error`](error/index.md#rustdoc-item-6551) — Typed error system for the ECS engine.
- [`hot_reload`](hot_reload/index.md#rustdoc-item-7005) — The hot-reload group: the dispatch slots a patch redirects, and the
- [`reflection`](reflection/index.md#rustdoc-item-7580) — The reflection group: the field layouts the derive macros emit, the
- [`scene`](scene/index.md#rustdoc-item-8102) — The scene group: a world saved as one file, the references inside it, and
- [`services`](services/index.md#rustdoc-item-9965) — The services group: the clock and the input the frame was given, the debug
- [`settings`](settings/index.md#rustdoc-item-10307) — The settings group: the settings asset a manager resource reads its tuning
- [`systems`](systems/index.md#rustdoc-item-10946) — The systems group: how a function becomes a system, how the frame orders and

### Statics
- [`PROFILED_ALLOCATOR`](static.PROFILED_ALLOCATOR.md#rustdoc-item-10947) — Tracy profiled allocator that reports every allocation in Tracy's memory

## Re-exports

- [`pub use abi::api::EngineApi;`](abi/api/struct.EngineApi.md#rustdoc-item-3)
- [`pub use abi::api;`](abi/api/index.md#rustdoc-item-74)
- [`pub use abi::mirror;`](abi/mirror/index.md#rustdoc-item-115)
- [`pub use abi::module_abi;`](abi/module_abi/index.md#rustdoc-item-240)
- [`pub use assets::database::AssetDatabase;`](assets/database/struct.AssetDatabase.md#rustdoc-item-340)
- [`pub use assets::database::AssetRecord;`](assets/database/struct.AssetRecord.md#rustdoc-item-246)
- [`pub use assets::database::GuidConflict;`](assets/database/struct.GuidConflict.md#rustdoc-item-299)
- [`pub use assets::import_registry::AssetIdentity;`](assets/import_registry/struct.AssetIdentity.md#rustdoc-item-514)
- [`pub use assets::import_registry::ErasedImportError;`](assets/import_registry/enum.ErasedImportError.md#rustdoc-item-636)
- [`pub use assets::import_registry::ErasedImportOutcome;`](assets/import_registry/struct.ErasedImportOutcome.md#rustdoc-item-422)
- [`pub use assets::import_registry::FieldDecorator;`](assets/import_registry/enum.FieldDecorator.md#rustdoc-item-790)
- [`pub use assets::import_registry::ImportRegistrationError;`](assets/import_registry/enum.ImportRegistrationError.md#rustdoc-item-679)
- [`pub use assets::import_registry::ImportRegistry;`](assets/import_registry/struct.ImportRegistry.md#rustdoc-item-344)
- [`pub use assets::import_registry::ScanReport;`](assets/import_registry/struct.ScanReport.md#rustdoc-item-867)
- [`pub use assets::loading::import_scene_document;`](assets/loading/fn.import_scene_document.md#rustdoc-item-977)
- [`pub use assets::loading::load_scene_asset;`](assets/loading/fn.load_scene_asset.md#rustdoc-item-980)
- [`pub use assets::loading::scene_database;`](assets/loading/fn.scene_database.md#rustdoc-item-979)
- [`pub use assets::metadata::AssetImport;`](assets/metadata/struct.AssetImport.md#rustdoc-item-1039)
- [`pub use assets::metadata::AssetImportError;`](assets/metadata/enum.AssetImportError.md#rustdoc-item-510)
- [`pub use assets::metadata::ImportOutcome;`](assets/metadata/struct.ImportOutcome.md#rustdoc-item-103)
- [`pub use assets::metadata::ImportedAsset;`](assets/metadata/trait.ImportedAsset.md#rustdoc-item-94)
- [`pub use assets::metadata::MetadataPolicy;`](assets/metadata/enum.MetadataPolicy.md#rustdoc-item-501)
- [`pub use assets::metadata::MetadataSource;`](assets/metadata/enum.MetadataSource.md#rustdoc-item-105)
- [`pub use assets::metadata::ReimportOutcome;`](assets/metadata/struct.ReimportOutcome.md#rustdoc-item-1139)
- [`pub use assets::reference::AssetReference;`](assets/reference/struct.AssetReference.md#rustdoc-item-404)
- [`pub use assets::standalone::render_standalone;`](assets/standalone/fn.render_standalone.md#rustdoc-item-1367)
- [`pub use assets::standalone::StandaloneAsset;`](assets/standalone/trait.StandaloneAsset.md#rustdoc-item-96)
- [`pub use assets::storage::Asset;`](assets/storage/trait.Asset.md#rustdoc-item-80)
- [`pub use assets::storage::AssetBindingError;`](assets/storage/enum.AssetBindingError.md#rustdoc-item-1471)
- [`pub use assets::storage::AssetBindingResult;`](assets/storage/type.AssetBindingResult.md#rustdoc-item-1501)
- [`pub use assets::storage::AssetGuid;`](assets/storage/struct.AssetGuid.md#rustdoc-item-98)
- [`pub use assets::storage::AssetLoadError;`](assets/storage/enum.AssetLoadError.md#rustdoc-item-634)
- [`pub use assets::storage::AssetLoadResult;`](assets/storage/type.AssetLoadResult.md#rustdoc-item-505)
- [`pub use assets::storage::AssetLoader;`](assets/storage/enum.AssetLoader.md#rustdoc-item-152)
- [`pub use assets::storage::AssetManager;`](assets/storage/struct.AssetManager.md#rustdoc-item-77)
- [`pub use assets::storage::Handle;`](assets/storage/struct.Handle.md#rustdoc-item-147)
- [`pub use assets::database;`](assets/database/index.md#rustdoc-item-336)
- [`pub use assets::document;`](assets/document/index.md#rustdoc-item-410)
- [`pub use assets::import_registry;`](assets/import_registry/index.md#rustdoc-item-425)
- [`pub use assets::loading;`](assets/loading/index.md#rustdoc-item-983)
- [`pub use assets::metadata;`](assets/metadata/index.md#rustdoc-item-988)
- [`pub use assets::reference;`](assets/reference/index.md#rustdoc-item-1301)
- [`pub use assets::standalone;`](assets/standalone/index.md#rustdoc-item-1369)
- [`pub use assets::storage;`](assets/storage/index.md#rustdoc-item-1503)
- [`pub use assets::store;`](assets/store/index.md#rustdoc-item-1779)
- [`pub use scene::saved_references;`](scene/saved_references/index.md#rustdoc-item-7628)
- [`pub use scene::startup_scene;`](scene/startup_scene/index.md#rustdoc-item-8100)
- [`pub use services::debug_draw;`](services/debug_draw/index.md#rustdoc-item-8104)
- [`pub use services::diagnostics;`](services/diagnostics/index.md#rustdoc-item-8595)
- [`pub use services::gizmos;`](services/gizmos/index.md#rustdoc-item-8697)
- [`pub use services::input;`](services/input/index.md#rustdoc-item-6020)
- [`pub use services::profiling;`](services/profiling/index.md#rustdoc-item-9915)
- [`pub use services::time;`](services/time/index.md#rustdoc-item-9918)
- [`pub use settings::manager_settings;`](settings/manager_settings/index.md#rustdoc-item-5560)
- [`pub use hot_reload::hot_patch;`](hot_reload/hot_patch/index.md#rustdoc-item-6553)
- [`pub use hot_reload::persistence;`](hot_reload/persistence/index.md#rustdoc-item-5453)
- [`pub use ecs::commands::CommandError;`](error/enum.CommandError.md#rustdoc-item-2833)
- [`pub use ecs::commands::Commands;`](ecs/commands/struct.Commands.md#rustdoc-item-2886)
- [`pub use ecs::common_components::register_transform_component;`](ecs/common_components/fn.register_transform_component.md#rustdoc-item-3008)
- [`pub use ecs::common_components::TransformComponent;`](ecs/common_components/struct.TransformComponent.md#rustdoc-item-2954)
- [`pub use ecs::component::Component;`](ecs/component/trait.Component.md#rustdoc-item-2515)
- [`pub use ecs::component::ComponentId;`](ecs/component/enum.ComponentId.md#rustdoc-item-2117)
- [`pub use ecs::component::ComponentTicks;`](ecs/component/struct.ComponentTicks.md#rustdoc-item-2556)
- [`pub use ecs::component::Tick;`](ecs/component/struct.Tick.md#rustdoc-item-3022)
- [`pub use ecs::entity::Entity;`](ecs/entity/struct.Entity.md#rustdoc-item-2687)
- [`pub use ecs::entity::EntityId;`](ecs/entity/struct.EntityId.md#rustdoc-item-3419)
- [`pub use ecs::query::Added;`](ecs/query/filter/struct.Added.md#rustdoc-item-3538)
- [`pub use ecs::query::BatchStats;`](ecs/query/iter/struct.BatchStats.md#rustdoc-item-3780)
- [`pub use ecs::query::Changed;`](ecs/query/filter/struct.Changed.md#rustdoc-item-3479)
- [`pub use ecs::query::Or;`](ecs/query/filter/struct.Or.md#rustdoc-item-3532)
- [`pub use ecs::query::Query;`](ecs/query/query/struct.Query.md#rustdoc-item-3969)
- [`pub use ecs::query::QueryFilter;`](ecs/query/filter/trait.QueryFilter.md#rustdoc-item-3537)
- [`pub use ecs::query::QueryTarget;`](ecs/query/target/trait.QueryTarget.md#rustdoc-item-3019)
- [`pub use ecs::query::ReadOnlyQueryTarget;`](ecs/query/target/trait.ReadOnlyQueryTarget.md#rustdoc-item-3416)
- [`pub use ecs::query::Res;`](ecs/query/resource/struct.Res.md#rustdoc-item-1772)
- [`pub use ecs::query::ResMut;`](ecs/query/resource/struct.ResMut.md#rustdoc-item-4124)
- [`pub use ecs::query::With;`](ecs/query/filter/struct.With.md#rustdoc-item-3549)
- [`pub use ecs::query::Without;`](ecs/query/filter/struct.Without.md#rustdoc-item-3555)
- [`pub use ecs::resource::KeptLayoutDeclaration;`](ecs/resource/struct.KeptLayoutDeclaration.md#rustdoc-item-4583)
- [`pub use ecs::resource::PlayState;`](ecs/resource/enum.PlayState.md#rustdoc-item-393)
- [`pub use ecs::resource::ResHandle;`](ecs/resource/struct.ResHandle.md#rustdoc-item-4495)
- [`pub use ecs::resource::Resource;`](ecs/resource/trait.Resource.md#rustdoc-item-395)
- [`pub use ecs::resource::ResourceId;`](ecs/resource/enum.ResourceId.md#rustdoc-item-4447)
- [`pub use ecs::resource::RestoreEpoch;`](ecs/resource/struct.RestoreEpoch.md#rustdoc-item-4306)
- [`pub use ecs::archetype;`](ecs/archetype/index.md#rustdoc-item-2144)
- [`pub use ecs::commands;`](ecs/commands/index.md#rustdoc-item-2741)
- [`pub use ecs::common_components;`](ecs/common_components/index.md#rustdoc-item-3009)
- [`pub use ecs::component;`](ecs/component/index.md#rustdoc-item-3011)
- [`pub use ecs::entity;`](ecs/entity/index.md#rustdoc-item-3418)
- [`pub use ecs::query;`](ecs/query/index.md#rustdoc-item-3772)
- [`pub use ecs::resource;`](ecs/resource/index.md#rustdoc-item-4292)
- [`pub use ecs::world;`](ecs/world/index.md#rustdoc-item-4727)
- [`pub use engine::Engine;`](engine/struct.Engine.md#rustdoc-item-2)
- [`pub use engine::PlayRefusal;`](engine/struct.PlayRefusal.md#rustdoc-item-5866)
- [`pub use engine::RunMode;`](engine/enum.RunMode.md#rustdoc-item-5302)
- [`pub use engine::SystemOptions;`](engine/struct.SystemOptions.md#rustdoc-item-5911)
- [`pub use engine::SystemOwner;`](engine/struct.SystemOwner.md#rustdoc-item-5662)
- [`pub use engine::SystemSnapshot;`](engine/struct.SystemSnapshot.md#rustdoc-item-5791)
- [`pub use error::EngineError;`](error/enum.EngineError.md#rustdoc-item-6186)
- [`pub use error::SystemError;`](error/enum.SystemError.md#rustdoc-item-6033)
- [`pub use error::SystemFailure;`](error/struct.SystemFailure.md#rustdoc-item-5972)
- [`pub use hot_reload::hot_patch::HotPatchError;`](hot_reload/hot_patch/enum.HotPatchError.md#rustdoc-item-6028)
- [`pub use hot_reload::hot_patch::HotPatchRegistry;`](hot_reload/hot_patch/struct.HotPatchRegistry.md#rustdoc-item-5992)
- [`pub use hot_reload::hot_patch::HotSlot;`](hot_reload/hot_patch/struct.HotSlot.md#rustdoc-item-6649)
- [`pub use hot_reload::hot_patch::PlainSlot;`](hot_reload/hot_patch/struct.PlainSlot.md#rustdoc-item-6725)
- [`pub use hot_reload::persistence::PersistResourceManifestEntry;`](hot_reload/persistence/resources/struct.PersistResourceManifestEntry.md#rustdoc-item-5504)
- [`pub use hot_reload::persistence::ResourceSnapshot;`](hot_reload/persistence/resources/struct.ResourceSnapshot.md#rustdoc-item-5500)
- `pub use pill_core::DynamicBuffer;`
- [`pub use reflection::component_field::parse_enum_tag;`](reflection/component_field/fn.parse_enum_tag.md#rustdoc-item-7209)
- [`pub use reflection::component_field::ComponentFieldError;`](reflection/component_field/enum.ComponentFieldError.md#rustdoc-item-5245)
- [`pub use reflection::component_field::EnumFieldTag;`](reflection/component_field/struct.EnumFieldTag.md#rustdoc-item-7258)
- [`pub use reflection::component_field::FieldValue;`](reflection/component_field/enum.FieldValue.md#rustdoc-item-5530)
- [`pub use reflection::component_fields::ComponentFieldId;`](reflection/component_fields/trait.ComponentFieldId.md#rustdoc-item-7365)
- [`pub use reflection::component_fields::ComponentFields;`](reflection/component_fields/trait.ComponentFields.md#rustdoc-item-7367)
- [`pub use reflection::component_field;`](reflection/component_field/index.md#rustdoc-item-5515)
- [`pub use reflection::component_fields;`](reflection/component_fields/index.md#rustdoc-item-7369)
- [`pub use reflection::component_registry;`](reflection/component_registry/index.md#rustdoc-item-7368)
- [`pub use reflection::type_names;`](reflection/type_names/index.md#rustdoc-item-7575)
- [`pub use scene::saved_references::restore_asset_reference;`](scene/saved_references/fn.restore_asset_reference.md#rustdoc-item-7706)
- [`pub use scene::saved_references::saved_reference;`](scene/saved_references/fn.saved_reference.md#rustdoc-item-7705)
- [`pub use scene::saved_references::SavedAssetReference;`](scene/saved_references/struct.SavedAssetReference.md#rustdoc-item-7584)
- [`pub use scene::saved_references::SavedEntityLink;`](scene/saved_references/struct.SavedEntityLink.md#rustdoc-item-7713)
- [`pub use scene::saved_references::SavedEntityLinks;`](scene/saved_references/struct.SavedEntityLinks.md#rustdoc-item-7749)
- [`pub use scene::saved_references::SavedReference;`](scene/saved_references/enum.SavedReference.md#rustdoc-item-7665)
- [`pub use scene::scene::load_scene;`](scene/scene/fn.load_scene.md#rustdoc-item-7962)
- [`pub use scene::scene::save_scene;`](scene/scene/fn.save_scene.md#rustdoc-item-7913)
- [`pub use scene::scene::Scene;`](scene/scene/struct.Scene.md#rustdoc-item-1366)
- [`pub use scene::scene::SceneDocument;`](scene/scene/struct.SceneDocument.md#rustdoc-item-978)
- [`pub use scene::scene::SceneEntity;`](scene/scene/struct.SceneEntity.md#rustdoc-item-7788)
- [`pub use scene::scene::SceneLoad;`](scene/scene/struct.SceneLoad.md#rustdoc-item-981)
- [`pub use scene::scene::SceneSave;`](scene/scene/struct.SceneSave.md#rustdoc-item-7914)
- [`pub use scene::startup_scene::apply_startup_scene;`](scene/startup_scene/fn.apply_startup_scene.md#rustdoc-item-8098)
- [`pub use scene::startup_scene::queue_startup_scene;`](scene/startup_scene/fn.queue_startup_scene.md#rustdoc-item-8097)
- [`pub use scene::startup_scene::StartupScene;`](scene/startup_scene/struct.StartupScene.md#rustdoc-item-4309)
- [`pub use services::debug_draw::DebugColor;`](services/debug_draw/type.DebugColor.md#rustdoc-item-8105)
- [`pub use services::debug_draw::DebugDraw;`](services/debug_draw/struct.DebugDraw.md#rustdoc-item-4313)
- [`pub use services::debug_draw::DebugFrame;`](services/debug_draw/struct.DebugFrame.md#rustdoc-item-8461)
- [`pub use services::debug_draw::DebugLabel;`](services/debug_draw/struct.DebugLabel.md#rustdoc-item-8268)
- [`pub use services::debug_draw::DebugLifetime;`](services/debug_draw/enum.DebugLifetime.md#rustdoc-item-8109)
- [`pub use services::debug_draw::DebugLine;`](services/debug_draw/struct.DebugLine.md#rustdoc-item-8231)
- [`pub use services::debug_draw::DebugStyle;`](services/debug_draw/struct.DebugStyle.md#rustdoc-item-8149)
- [`pub use services::debug_draw::GizmoLine;`](services/debug_draw/struct.GizmoLine.md#rustdoc-item-8305)
- [`pub use services::debug_draw::GizmoPoint;`](services/debug_draw/struct.GizmoPoint.md#rustdoc-item-8379)
- [`pub use services::debug_draw::GizmoPointShape;`](services/debug_draw/enum.GizmoPointShape.md#rustdoc-item-8380)
- [`pub use services::debug_draw::GizmoTriangle;`](services/debug_draw/struct.GizmoTriangle.md#rustdoc-item-8342)
- [`pub use services::debug_draw::LabelAnchor;`](services/debug_draw/enum.LabelAnchor.md#rustdoc-item-8192)
- [`pub use services::gizmos::GizmoChrome;`](services/gizmos/enum.GizmoChrome.md#rustdoc-item-9028)
- [`pub use services::gizmos::GizmoContext;`](services/gizmos/struct.GizmoContext.md#rustdoc-item-8747)
- [`pub use services::gizmos::GizmoDeclaration;`](services/gizmos/struct.GizmoDeclaration.md#rustdoc-item-8877)
- [`pub use services::gizmos::GizmoDraw;`](services/gizmos/struct.GizmoDraw.md#rustdoc-item-8821)
- [`pub use services::gizmos::GizmoDrawEntry;`](services/gizmos/type.GizmoDrawEntry.md#rustdoc-item-8872)
- [`pub use services::gizmos::GizmoEntry;`](services/gizmos/struct.GizmoEntry.md#rustdoc-item-8913)
- [`pub use services::gizmos::GizmoFrame;`](services/gizmos/struct.GizmoFrame.md#rustdoc-item-8742)
- [`pub use services::gizmos::GizmoRegistry;`](services/gizmos/struct.GizmoRegistry.md#rustdoc-item-4316)
- [`pub use services::gizmos::GizmoSelection;`](services/gizmos/struct.GizmoSelection.md#rustdoc-item-4319)
- [`pub use services::gizmos::GizmoWhen;`](services/gizmos/enum.GizmoWhen.md#rustdoc-item-8700)
- [`pub use services::input::ButtonState;`](services/input/enum.ButtonState.md#rustdoc-item-9314)
- [`pub use services::input::GamepadAxis;`](services/input/enum.GamepadAxis.md#rustdoc-item-9463)
- [`pub use services::input::GamepadButton;`](services/input/enum.GamepadButton.md#rustdoc-item-9417)
- [`pub use services::input::Input;`](services/input/struct.Input.md#rustdoc-item-4322)
- [`pub use services::input::InputEvent;`](services/input/enum.InputEvent.md#rustdoc-item-6022)
- [`pub use services::input::KeyCode;`](services/input/enum.KeyCode.md#rustdoc-item-9069)
- [`pub use services::input::Modifiers;`](services/input/struct.Modifiers.md#rustdoc-item-9591)
- [`pub use services::input::MouseButton;`](services/input/enum.MouseButton.md#rustdoc-item-9357)
- [`pub use services::input::PlayerId;`](services/input/enum.PlayerId.md#rustdoc-item-9066)
- [`pub use services::input::RumbleRequest;`](services/input/struct.RumbleRequest.md#rustdoc-item-6024)
- [`pub use services::input::ScrollDelta;`](services/input/enum.ScrollDelta.md#rustdoc-item-9553)
- [`pub use services::time::Time;`](services/time/struct.Time.md#rustdoc-item-4325)
- [`pub use settings::manager_settings::ManagerSettingsApplied;`](settings/manager_settings/struct.ManagerSettingsApplied.md#rustdoc-item-10008)
- [`pub use settings::manager_settings::ManagerSettingsFailure;`](settings/manager_settings/struct.ManagerSettingsFailure.md#rustdoc-item-10047)
- [`pub use settings::manager_settings::ManagerSettingsReport;`](settings/manager_settings/struct.ManagerSettingsReport.md#rustdoc-item-5558)
- [`pub use settings::manager_settings::ManagerSettingsSurface;`](settings/manager_settings/struct.ManagerSettingsSurface.md#rustdoc-item-5550)
- [`pub use settings::manager_settings::MissingManagerSettings;`](settings/manager_settings/struct.MissingManagerSettings.md#rustdoc-item-5557)
- [`pub use settings::settings::SettingsAssetManager;`](settings/settings/trait.SettingsAssetManager.md#rustdoc-item-4544)
- [`pub use settings::settings::SettingsAssetOps;`](settings/settings/struct.SettingsAssetOps.md#rustdoc-item-4546)
- [`pub use settings::settings::SettingsOutcome;`](settings/settings/enum.SettingsOutcome.md#rustdoc-item-5554)
- [`pub use systems::scheduler::RunPhase;`](systems/scheduler/enum.RunPhase.md#rustdoc-item-5714)
- [`pub use systems::scheduler::SystemAccess;`](systems/scheduler/struct.SystemAccess.md#rustdoc-item-2919)
- [`pub use systems::scheduler::SystemScheduler;`](systems/scheduler/struct.SystemScheduler.md#rustdoc-item-5970)
- [`pub use systems::scheduler::TypeKey;`](systems/scheduler/struct.TypeKey.md#rustdoc-item-10309)
- [`pub use systems::scripting::CreateCause;`](systems/scripting/enum.CreateCause.md#rustdoc-item-4684)
- [`pub use systems::scripting::CreateInfo;`](systems/scripting/struct.CreateInfo.md#rustdoc-item-4796)
- [`pub use systems::scripting::DestroyCause;`](systems/scripting/enum.DestroyCause.md#rustdoc-item-4687)
- [`pub use systems::scripting::DestroyInfo;`](systems/scripting/struct.DestroyInfo.md#rustdoc-item-4802)
- [`pub use systems::scripting::ScriptComponent;`](systems/scripting/trait.ScriptComponent.md#rustdoc-item-5398)
- [`pub use systems::scripting::ScriptContext;`](systems/scripting/struct.ScriptContext.md#rustdoc-item-4793)
- [`pub use systems::scripting::StartCause;`](systems/scripting/enum.StartCause.md#rustdoc-item-4763)
- [`pub use systems::scripting::StartInfo;`](systems/scripting/struct.StartInfo.md#rustdoc-item-4798)
- [`pub use systems::scripting::StopCause;`](systems/scripting/enum.StopCause.md#rustdoc-item-10715)
- [`pub use systems::scripting::StopInfo;`](systems/scripting/struct.StopInfo.md#rustdoc-item-4800)
- [`pub use systems::scheduler;`](systems/scheduler/index.md#rustdoc-item-10356)
- [`pub use systems::scripting;`](systems/scripting/index.md#rustdoc-item-10522)
- [`pub use systems::system;`](systems/system/index.md#rustdoc-item-10945)
- `pub use serde;`
- `pub use serde::Deserialize;`
- `pub use serde::Deserialize;`
- `pub use serde::Serialize;`
- `pub use serde::Serialize;`
- `pub use trait_type_map;`
- `pub use tracing;`
- `pub use pill_engine_macros::asset;`
- `pub use pill_engine_macros::component;`
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
- `pub use pill_engine_macros::resource;`
- `pub use pill_engine_macros::script;`
- `pub use pill_engine_macros::system;`
- `pub use pill_engine_macros::PillAsset;`
- `pub use pill_engine_macros::PillComponent;`
- `pub use pill_engine_macros::PillLayout;`
- `pub use pill_engine_macros::PillMirror;`
- `pub use pill_engine_macros::PillResource;`
- [`pub use ecs::world::AddComponentError;`](error/enum.AddComponentError.md#rustdoc-item-4997)
- [`pub use ecs::world::BuildError;`](error/enum.BuildError.md#rustdoc-item-4999)
- [`pub use ecs::world::ChangeOrigin;`](ecs/world/change_origin/enum.ChangeOrigin.md#rustdoc-item-4682)
- [`pub use ecs::world::ColumnChunk;`](ecs/world/components/struct.ColumnChunk.md#rustdoc-item-4733)
- [`pub use ecs::world::EntityBuilder;`](ecs/world/struct.EntityBuilder.md#rustdoc-item-2926)
- [`pub use ecs::world::EntityRow;`](ecs/world/struct.EntityRow.md#rustdoc-item-5102)
- [`pub use ecs::world::RemoveComponentError;`](error/enum.RemoveComponentError.md#rustdoc-item-5001)
- [`pub use ecs::world::World;`](ecs/world/struct.World.md#rustdoc-item-2848)
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
