<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6694"></a>

# Function `pill_editor_core::scene_workflow::write_scene`

```rust
pub fn write_scene(engine: &mut pill_engine::Engine, path: Option<&str>) -> Result<OpenScene, String>;
```

Source: `editor\pill_editor_core\src\scene_workflow.rs:187`

Write the world to the open scene, or to `path` for a save-as.

Saving to the open scene keeps its guid; a save-as writes a fresh one
unless the target file already exists, in which case its guid is kept so
anything referencing it still resolves.

The file is read back after writing, so the loaded scene asset matches what
is on disk, and a file the engine cannot read is reported here instead of at
the next open.

## Errors

Returns an error when no asset types are registered, when no scene is open
and `path` is `None`, when no asset directory is mounted, or when the engine
has no [`AssetManager`].

It also fails when the document cannot be rendered or written, or when the
written file does not read back with the guid that was assigned.
