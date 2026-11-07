<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-482"></a>

# Module `pill_editor::runner::assets_pipeline`

Visibility: `{'restricted': {'parent': 483, 'path': '::runner'}}` · Source: `editor\pill_editor\src\runner\assets_pipeline.rs:1`

The executable's half of the Assets pipeline.

## Responsibilities

- Walk the asset tree into the listing the shell draws, and refresh it on
  its cadence or at once after a file command.
- Capture the selected asset's detail - its import settings and the
  reference fields its type declares - for the Inspector.
- Ask the renderer for the previews of the tiles that are on screen.
- Show what a drag from the OS would do, and import the files it drops
  into the open folder.

## Design

The shell never touches the filesystem: it queues file commands and draws
what the snapshot carries. This module is the executable's side of that
split: it walks the tree into the listing and reads an asset's settings
through the import registry, so the shell only draws data it was handed.
