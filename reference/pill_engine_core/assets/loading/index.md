<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-983"></a>

# Module `pill_engine_core::assets::loading`

Source: `engine\pill_engine_core\src\assets\loading.rs:1`

Loading assets and scenes from game code by path.
Loading project assets and scenes from game code, by path.

## Responsibilities

- [`World::load_asset`]: turns a path below `res` into a typed handle, with
  the guid recorded so references can save.
- [`Engine::load_scene_file`]: a `.scene` file instantiated into the world
  from code, through the same [`load_scene`] pass the editor's Open and the
  startup scene run.

## Design

Assets are named by path: a project writes `"models/helmet.obj"` and gets a
`Handle<Mesh>`, instead of decoding the bytes itself and inventing a name for
the result. The path is found through the mounted asset directory and the
type comes from the file's extension. A file with no `.meta` gets one with a
new guid, when its directory can be written, so a scene reference saves the
same identity the game holds.

## Module contents

### Functions
- [`extension_of`](fn.extension_of.md#rustdoc-item-982) — Returns the extension of `path` without the dot, or `""` when it has none.
- [`import_scene_document`](fn.import_scene_document.md#rustdoc-item-977) — Reads the `.scene` at `path` and returns its document and the guid the file
- [`load_scene_asset`](fn.load_scene_asset.md#rustdoc-item-980) — Loads the `.scene` at `path` into the engine's world.
- [`scene_database`](fn.scene_database.md#rustdoc-item-979) — Returns the asset index a scene load resolves its references through.
