<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1296"></a>

# Module `pill_editor::runner::tool_fixture`

Visibility: `{'restricted': {'parent': 539, 'path': '::runner'}}` · Source: `editor\pill_editor\src\runner\tool_fixture.rs:1`

The tool the editor suites drive the element framework with.

## Responsibilities

- Declare the fixture tool: a component tool that reports a fixed set of
  elements for the selected entity, of two kinds, so a suite can hover,
  click, extend and box-select them without an extension loaded.
- Register it while a scripted channel drives the run, and never in an
  editor a person opened.

## Design

Every stage of the tools framework needs a producer to be tested at
runtime, and the first real one - an extension's editor crate - arrives
later than the framework parts it exercises. The fixture stands in for it:
three `point` elements on a line through the entity's translation and two
`tangent` elements above it, at one world unit apart, with stable ids
(`0..=2` and `10..=11`).

It is registered only when the scripted channel is on, like the channel
itself: it exists to be driven by a scripted test, and a person's editor
never sees it in the toolbox. The elements are reported from the entity's
transform plus an offset this module keeps per element, so a test that
moves the entity moves its handles with it, and a drag that writes new
world transforms back turns them into offsets again.

## Module contents

### Structs
- [`FixtureElement`](struct.FixtureElement.md#rustdoc-item-1299) — One fixture element, as the fixture stores it.
- [`FixtureElements`](struct.FixtureElements.md#rustdoc-item-1337) — The fixture's elements, per entity.
- [`FixtureMarksExtension`](struct.FixtureMarksExtension.md#rustdoc-item-1454) — The extension that adds a row for every kind, on every entity.
- [`FixtureNotesExtension`](struct.FixtureNotesExtension.md#rustdoc-item-1415) — The extension that adds a row only for `point` elements, and only on an
- [`FixtureTool`](struct.FixtureTool.md#rustdoc-item-1379) — The fixture tool itself: a component tool, offered only while it is

### Functions
- [`extension_key`](fn.extension_key.md#rustdoc-item-1494) — What the fixture's extensions make of their shared chord: they take it.
- [`fixture_element`](fn.fixture_element.md#rustdoc-item-1374) — One element at `offset`, unrotated and unscaled.
- [`fixture_elements`](fn.fixture_elements.md#rustdoc-item-1510) — The fixture's elements for `entity`, each placed at its stored offset from
- [`fixture_frame_rotation`](fn.fixture_frame_rotation.md#rustdoc-item-1378) — The rotation of the fixture's frame: a quarter turn around X.
- [`fixture_frames`](fn.fixture_frames.md#rustdoc-item-1515) — The one frame the fixture offers, so a suite can prove the space row
- [`fixture_insert`](fn.fixture_insert.md#rustdoc-item-1500) — Inserts one point into the fixture's storage, under `id` when that id is
- [`fixture_key`](fn.fixture_key.md#rustdoc-item-1507) — The keys the fixture owns while its element selection is up.
- [`fixture_kind_of`](fn.fixture_kind_of.md#rustdoc-item-1512) — The kind the element `id` belongs to.
- [`fixture_kinds`](fn.fixture_kinds.md#rustdoc-item-1509) — The two kinds the fixture reports: selectable points and extendable
- [`fixture_layout`](fn.fixture_layout.md#rustdoc-item-1375) — The fixture's layout: every element at its default offset, in id order.
- [`fixture_menu`](fn.fixture_menu.md#rustdoc-item-1498) — The rows the fixture adds to the element context menu.
- [`fixture_menu_run`](fn.fixture_menu_run.md#rustdoc-item-1499) — Runs one of the fixture's menu rows, answering the commands it means.
- [`fixture_point_offset`](fn.fixture_point_offset.md#rustdoc-item-1376) — Where point `index` sits, relative to the entity's translation.
- [`fixture_press`](fn.fixture_press.md#rustdoc-item-1505) — What a press on a fixture point means.
- [`fixture_remove`](fn.fixture_remove.md#rustdoc-item-1502) — Removes points from the fixture's storage, answering how many went.
- [`fixture_selection_changed`](fn.fixture_selection_changed.md#rustdoc-item-1508) — Logs every element-selection change the fixture hears.
- [`fixture_set_transforms`](fn.fixture_set_transforms.md#rustdoc-item-1513) — Writes the world transforms a drag produced back into the fixture's
- [`fixture_tangent_offset`](fn.fixture_tangent_offset.md#rustdoc-item-1377) — Where tangent `index` sits, relative to the entity's translation.
- [`marks_menu`](fn.marks_menu.md#rustdoc-item-1492) — The marks extension's one row, offered for every kind.
- [`marks_menu_run`](fn.marks_menu_run.md#rustdoc-item-1493) — Runs the marks row.
- [`notes_menu`](fn.notes_menu.md#rustdoc-item-1489) — The notes extension's one row, for the point kind only.
- [`notes_menu_run`](fn.notes_menu_run.md#rustdoc-item-1491) — Runs the notes row.
- [`register`](fn.register.md#rustdoc-item-1414) — Registers the fixture tool, with its reporting hooks, in the world's
- [`set_extensions`](fn.set_extensions.md#rustdoc-item-1413) — Registers or drops the fixture's two extensions.

### Constants
- [`FIXTURE_ELEMENT_SPACING`](constant.FIXTURE_ELEMENT_SPACING.md#rustdoc-item-1284) — How far apart two neighbouring elements sit, in world units.
- [`FIXTURE_EXTENSION_CHORD`](constant.FIXTURE_EXTENSION_CHORD.md#rustdoc-item-1291) — The chord both fixture extensions bind.
- [`FIXTURE_FRAME_NAME`](constant.FIXTURE_FRAME_NAME.md#rustdoc-item-1288) — The name of the one coordinate frame the fixture offers.
- [`FIXTURE_MARKS_EXTENSION`](constant.FIXTURE_MARKS_EXTENSION.md#rustdoc-item-1294) — The marks extension's name.
- [`FIXTURE_MENU_INSERT`](constant.FIXTURE_MENU_INSERT.md#rustdoc-item-1496) — The id of the menu row that adds a point after the last one.
- [`FIXTURE_MENU_MARK`](constant.FIXTURE_MENU_MARK.md#rustdoc-item-1290) — The menu row the marks extension adds for every kind.
- [`FIXTURE_MENU_NOTE`](constant.FIXTURE_MENU_NOTE.md#rustdoc-item-1289) — The menu row the notes extension adds for `point` elements.
- [`FIXTURE_MENU_RESET`](constant.FIXTURE_MENU_RESET.md#rustdoc-item-1497) — The id of the menu row that puts every point back on its layout.
- [`FIXTURE_NOTES_COMPONENT`](constant.FIXTURE_NOTES_COMPONENT.md#rustdoc-item-1292) — The component the notes extension is attached by.
- [`FIXTURE_NOTES_EXTENSION`](constant.FIXTURE_NOTES_EXTENSION.md#rustdoc-item-1293) — The notes extension's name, as `dump tools` and the conflict line spell it.
- [`FIXTURE_POINT_COUNT`](constant.FIXTURE_POINT_COUNT.md#rustdoc-item-1281) — How many `point` elements the fixture reports.
- [`FIXTURE_POINT_KIND`](constant.FIXTURE_POINT_KIND.md#rustdoc-item-1286) — The kind the points report under.
- [`FIXTURE_TANGENT_COUNT`](constant.FIXTURE_TANGENT_COUNT.md#rustdoc-item-1282) — How many `tangent` elements the fixture reports.
- [`FIXTURE_TANGENT_ID_BASE`](constant.FIXTURE_TANGENT_ID_BASE.md#rustdoc-item-1283) — The first element id a `tangent` reports under. The points take
- [`FIXTURE_TANGENT_KIND`](constant.FIXTURE_TANGENT_KIND.md#rustdoc-item-1287) — The kind the tangents report under.
- [`FIXTURE_TANGENT_LIFT`](constant.FIXTURE_TANGENT_LIFT.md#rustdoc-item-1285) — How far above the line of points the tangents sit, in world units.
- [`FIXTURE_TOOL_NAME`](constant.FIXTURE_TOOL_NAME.md#rustdoc-item-1280) — The name `tool fixture` activates, and the toolbox row would show.
