<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4798"></a>

# Module `pill_editor_core::inspector`

Source: `editor\pill_editor_core\src\inspector.rs:1`

The Inspector's editing helpers: field edits and asset settings rows.
The Inspector's editing helpers: the rows a component section draws, the
edits those rows queue, and the asset settings documents as editable rows.

## Responsibilities

- The section the tab draws: its label ([`component_label`]), its icon
  ([`component_icon`]) and its rows ([`rows`]) - which widget each field
  asks for and the rows a field's decorators declare.
- The grouped-row model: [`RowLeaf`], [`grouped_row`] and [`channel_run`]
  fold a colour's channels or a struct's flattened axes into one row.
- The cached row model ([`CachedRows`], [`take_component_rows`]), so a
  section redraws without rebuilding its rows.
- The edit builders and their history labels: `SetField`,
  `SetArrayElement`, [`EditorCommand::SetFieldAsset`],
  [`EditorCommand::SetFieldEntity`] and the resource field write, so the
  shell's widgets and the scripted channel queue identical edits.
- Text into a value and back: [`parse_field_value`], [`value_text`] and
  one element of an array value ([`element_field`]).
- Reference rows: the asset builders ([`asset_edit`],
  [`selection_asset_edit`]) with the assets a picker offers
  ([`picker_candidates`]), and the entity labels a reference takes
  ([`parse_entity_reference`]).
- Asset settings as editable data: key paths (`a.b[0]`), leaf reads and
  patches, and the [`EditorCommand::SetAssetSettings`] builder.

## Design

Everything here is plain data and commands: the shell draws widgets and
queues batches, the executable applies them at the frame boundary, and
the history records them - the same split the Assets pipeline follows.

## Module contents

### Structs
- [`CachedRow`](struct.CachedRow.md#rustdoc-item-4851) — One row of a component's cached model and the lines it has already logged.
- [`CachedRows`](struct.CachedRows.md#rustdoc-item-4893) — One component's cached row model and the selection's write targets.
- [`RecordedEdit`](struct.RecordedEdit.md#rustdoc-item-4998) — What one value edit queues: the step's commands, the label it records
- [`RowLayout`](struct.RowLayout.md#rustdoc-item-4888) — The layout fingerprint of one component's row model.
- [`RowLeaf`](struct.RowLeaf.md#rustdoc-item-4687) — One writable leaf of a grouped row.
- [`RowLogged`](struct.RowLogged.md#rustdoc-item-4803) — The log lines a drawn row can emit, held as bits. There are two: the row's

### Enums
- [`FieldRow`](enum.FieldRow.md#rustdoc-item-4760) — One row of a component section.
- [`FieldWidget`](enum.FieldWidget.md#rustdoc-item-4645) — The widget a value's kind asks for.
- [`ReferenceWrite`](enum.ReferenceWrite.md#rustdoc-item-5041) — What a field's text names when the field is a reference rather than a value.
- [`SettingsKey`](enum.SettingsKey.md#rustdoc-item-5077) — One segment of a settings key path: an object key or an array index.

### Functions
- [`asset_candidates`](fn.asset_candidates.md#rustdoc-item-4980) — The listing's files of a field's type, in listing order.
- [`asset_edit`](fn.asset_edit.md#rustdoc-item-4972) — The recorded asset reference edit: `SetFieldAsset` under the field edit's
- [`axis_color`](fn.axis_color.md#rustdoc-item-4968) — The colour a vector row's axis label takes: X red, Y green, Z blue, and
- [`axis_label`](fn.axis_label.md#rustdoc-item-4967) — The axis label a vector row shows for element `index`: `X`, `Y`, `Z`, `W`.
- [`badge_icon`](fn.badge_icon.md#rustdoc-item-4627) — The duotone icon a scene badge draws for an entity, or `None` when the
- [`batch`](fn.batch.md#rustdoc-item-4993) — A selection's batch of one-entity edits.
- [`channel_run`](fn.channel_run.md#rustdoc-item-4801) — A run of consecutive scalar leaves, starting at `start_index`, that form
- [`component_add`](fn.component_add.md#rustdoc-item-4969) — The recorded component attach, labelled `add {short}`: the Component
- [`component_icon`](fn.component_icon.md#rustdoc-item-4626) — The duotone icon a component section's header draws, from its type name.
- [`component_label`](fn.component_label.md#rustdoc-item-4625) — The title a component section's header shows.
- [`component_remove`](fn.component_remove.md#rustdoc-item-4970) — The recorded component detach, labelled `remove {short}`.
- [`element_coalesce_field`](fn.element_coalesce_field.md#rustdoc-item-4992) — The field name an array element's coalesce key carries: `field[index]`.
- [`element_edit`](fn.element_edit.md#rustdoc-item-4983) — The recorded array-element edit: `SetArrayElement` labelled
- [`element_field`](fn.element_field.md#rustdoc-item-4994) — Element `index` of an array value, when it is one and the index fits.
- [`element_label`](fn.element_label.md#rustdoc-item-4984) — The step label an array element's edit records under:
- [`element_write`](fn.element_write.md#rustdoc-item-4988) — One array element's write, keyed on the element.
- [`entity_candidates`](fn.entity_candidates.md#rustdoc-item-4977) — The entities an entity row's picker offers: every entity the Hierarchy
- [`entity_edit`](fn.entity_edit.md#rustdoc-item-4975) — The recorded entity reference edit: `SetFieldEntity` under the field edit's
- [`field_coalesce_key`](fn.field_coalesce_key.md#rustdoc-item-4985) — The continuous-edit key one inspector widget's commits share, so a drag
- [`field_edit`](fn.field_edit.md#rustdoc-item-4971) — The recorded whole-field edit: `SetField` labelled `set {short}.{field}`.
- [`field_write`](fn.field_write.md#rustdoc-item-5067) — One field's write, decided in one place.
- [`grouped_label`](fn.grouped_label.md#rustdoc-item-4799) — The name a grouped row labels itself with: the dotted prefix its leaves
- [`grouped_row`](fn.grouped_row.md#rustdoc-item-4797) — The grouped row that starts at `start_index`, with how many fields it
- [`hash_decorator`](fn.hash_decorator.md#rustdoc-item-4960) — Hash what one decorator adds to the row model: its kind, plus the text or
- [`hash_value_kind`](fn.hash_value_kind.md#rustdoc-item-4962) — Hash the parts of a value the row model reads: its kind, an array's element
- [`is_cleared_reference`](fn.is_cleared_reference.md#rustdoc-item-4981) — Whether a scripted or typed value names "no reference": the word that
- [`leaf_parts`](fn.leaf_parts.md#rustdoc-item-4800) — The dotted prefix and last segment of a leaf field's name: `fill.g` is
- [`names_type`](fn.names_type.md#rustdoc-item-4979) — Whether a row's type name is the one a field asked for, compared on the
- [`parse_entity_reference`](fn.parse_entity_reference.md#rustdoc-item-4982) — The entity a scripted reference names: a Hierarchy label (`3v0`), a bare
- [`parse_field_value`](fn.parse_field_value.md#rustdoc-item-5071) — Parse an edited text back into the kind `current` already holds.
- [`parse_settings_key_path`](fn.parse_settings_key_path.md#rustdoc-item-5115) — Parse a settings key path: dotted object keys with `[i]` array indexes,
- [`parse_settings_value`](fn.parse_settings_value.md#rustdoc-item-5120) — Parse an edited text back into the JSON kind `current` already holds.
- [`patch_settings`](fn.patch_settings.md#rustdoc-item-5118) — Replace the settings leaf a key path names.
- [`patch_settings_inserting`](fn.patch_settings_inserting.md#rustdoc-item-5119) — Replace the settings leaf a key path names, creating what is missing on the
- [`picker_candidates`](fn.picker_candidates.md#rustdoc-item-4978) — The rows a picker offers for `asset_type`.
- [`reference_write`](fn.reference_write.md#rustdoc-item-5069) — The reference `text` names for `current`, or `None` when the field holds a
- [`resource_coalesce_key`](fn.resource_coalesce_key.md#rustdoc-item-4991) — The coalesce key a resource field's writes share, so a drag on one row is
- [`resource_edit`](fn.resource_edit.md#rustdoc-item-4990) — One recorded field write on an editor-editable resource.
- [`row_layout`](fn.row_layout.md#rustdoc-item-4892) — The stamp that decides when a component's cached rows are rebuilt.
- [`rows`](fn.rows.md#rustdoc-item-4796) — The rows a component section draws, in field order.
- [`selection_asset_edit`](fn.selection_asset_edit.md#rustdoc-item-4974) — [`asset_edit`] for every entity of `targets`, as one recorded step labelled
- [`selection_element_edit`](fn.selection_element_edit.md#rustdoc-item-4989) — One recorded batch that writes element `index` of `field` on every target.
- [`selection_entity_edit`](fn.selection_entity_edit.md#rustdoc-item-4976) — [`entity_edit`] for every entity of `targets`, as one recorded step labelled
- [`selection_field_edit`](fn.selection_field_edit.md#rustdoc-item-4973) — One recorded batch that writes `value` into `field` on every target, with
- [`selection_leaf_edit`](fn.selection_leaf_edit.md#rustdoc-item-5070) — One recorded batch that writes every leaf of a grouped row, across the whole
- [`selection_stamp`](fn.selection_stamp.md#rustdoc-item-4963) — A stamp over the two facts that change a component's write targets: which
- [`selection_targets`](fn.selection_targets.md#rustdoc-item-4986) — The selected entities one component's edit reaches: the primary first, then
- [`selection_targets_into`](fn.selection_targets_into.md#rustdoc-item-4987) — [`selection_targets`], written into a caller's buffer so a redraw reuses
- [`selection_write`](fn.selection_write.md#rustdoc-item-5068) — One field's write over a selection: the same three cases as
- [`settings_coalesce_key`](fn.settings_coalesce_key.md#rustdoc-item-5122) — The continuous-edit key one settings widget's commits share.
- [`settings_edit`](fn.settings_edit.md#rustdoc-item-5121) — The recorded settings edit: `SetAssetSettings` under the label the
- [`settings_field`](fn.settings_field.md#rustdoc-item-5117) — The settings leaf a key path names, when the document holds it.
- [`settings_key_text`](fn.settings_key_text.md#rustdoc-item-5116) — The text form of a key path: what labels and coalescing keys use.
- [`short_component_name`](fn.short_component_name.md#rustdoc-item-4624) — The name after the last `::`, for labels and history entries.
- [`store_component_rows`](fn.store_component_rows.md#rustdoc-item-4964) — Hand one component's rows and targets back after its section drew.
- [`take_component_rows`](fn.take_component_rows.md#rustdoc-item-4965) — Take one component's cached rows and write targets out of the session,
- [`value_text`](fn.value_text.md#rustdoc-item-5072) — One field value in the text form the Inspector's widgets show and commit:
- [`widget_for`](fn.widget_for.md#rustdoc-item-4682) — The widget a field's current value asks for.
- [`widget_for_decorated`](fn.widget_for_decorated.md#rustdoc-item-4683) — The widget a field's value asks for once its decorators are applied.

### Constants
- [`COLOR_CHANNELS`](constant.COLOR_CHANNELS.md#rustdoc-item-4620) — The channel suffixes a colour row reads, in order.
- [`COLOR_CHANNELS_MIN`](constant.COLOR_CHANNELS_MIN.md#rustdoc-item-4622) — How many channels a colour row needs at least: red, green and blue.
- [`VECTOR_AXES`](constant.VECTOR_AXES.md#rustdoc-item-4621) — The axis suffixes a grouped vector row reads, in order.
- [`VECTOR_AXES_MAX`](constant.VECTOR_AXES_MAX.md#rustdoc-item-4619) — How many side-by-side elements a vector row holds at most: X, Y, Z, W.
- [`VECTOR_AXES_MIN`](constant.VECTOR_AXES_MIN.md#rustdoc-item-4623) — The shortest grouped vector row: two axes.
