# Logging Guidelines

## TL;DR

All engine logs go through `tracing`. One formatter
(`modules/engine/pill_core/src/telemetry.rs`) prints every line. It adds the
time, the level and the target for you. Your job is to write a short message
and put the values in fields.

Use this page for every new log line. Old code does not follow it everywhere
yet. It will be fixed step by step. If old code and this page disagree, follow
this page.

### What a log line looks like


```
[19:11:53:713] INFO  engine::hot_reload  hot reload complete | module="native" entities=34 graveyard=1
               ^^^^  ^^^^^^^^^^^^^^^^^^  ^^^^^^^^^^^^^^^^^^^ ^ ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
               level target              message             | fields
```

- The **target** says which part of the engine wrote the line.
- The **message** says what happened, in lowercase, with no period at the end.
- The **`|`** separates the message from its fields. The formatter writes it;
  a line with no fields has none.
- The **fields** hold the values.

### Keep the message fixed, put the values in fields

Write the message so its words never change. Anything that changes from one
line to the next, like a name, a number or a path, goes in a field after it:

```text
Good:
[19:11:53:713] INFO  engine::hot_reload  hot reload complete | module=native entities=34

Bad:
[19:11:53:713] INFO  engine::hot_reload  hot reload of native complete with 34 entities
```

This way you can search for `hot reload complete` and find every reload, and a
test can wait for that text without caring about the values.

### How to write a log call

The shape of every log call:

```rust
info!(
    target: telemetry_target::SOME_TARGET,   // required: where the line comes from
    some_data_1 = value_1,                   // optional: as many fields as you need,
    some_data_2 = value_2,                   // with names you choose
    some_data_3 = value_3,
    // ...
    "what happened"                          // required: the message, always last
);
```

```text
[hh:mm:ss:mmm] INFO  engine::some_target  what happened | some_data_1=value_1 some_data_2=value_2 some_data_3=value_3
```

A real example:

```rust
info!(
    target: telemetry_target::RESOURCES,   // the target: where the line comes from
    path = %asset_path,                    // your own fields: any names, any number,
    loading_time,                          // or none at all
    "asset loaded"                         // the message: what happened
);
```

```text
[18:42:47:902] INFO  engine::resources  asset loaded | path=textures/checker.png loading_time=12
```

When the variable already has the name you want for the field, write the
name once: `loading_time,` is short for `loading_time = loading_time,`.

### What is required

A log call has three parts:

| part           | required?           | what it is                                                                                                                          |
| -------------- | ------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `target: ...`  | yes (by this guide) | a constant from `telemetry_target`                                                                                                  |
| `name = value` | **no**              | fields you invent for this line. `path` and `loading_time` are not special names; they are just the values this line wants to show. |
| `"..."`        | yes                 | the message, always last                                                                                                            |

So these are all valid lines, each with its own fields:

```rust
info!(target: telemetry_target::RESOURCES, "asset cache cleared");
info!(target: telemetry_target::RESOURCES, files = file_count, "asset pack mounted");
warn!(target: telemetry_target::RESOURCES, path = %asset_path, error = %error, "asset not loaded; a placeholder is used");
```

```text
[18:42:47:880] INFO  engine::resources  asset cache cleared
[18:42:47:881] INFO  engine::resources  asset pack mounted | files=212
[18:42:47:902] WARN  engine::resources  asset not loaded; a placeholder is used | path=textures/missing.png error=file not found
```

The field *names* are free, but when a field means something common, use
the standard name for it (`error`, `module`, `path`, ... see section 5.1).

### The rules

1. **Message = what happened**, in a few lowercase words. No values, no period.
2. **Values go in fields**, with the standard names: `error`, `module`, `path`,
   `entities`, `elapsed_millis`.
3. **Target = a `telemetry_target` constant**, the closest match
   (`HOT_RELOAD`, `RENDERING`, `RESOURCES`...), never a string.
4. **Pick the level by asking "does someone need to act?"** `error` means it
   could not be done, `warn` means it went wrong but was handled, `info` is a
   normal step, `debug`/`trace` are details.
5. **Log once, not every frame.** Log again only when something changes.
6. **Never `println!`.** Use `tracing`, so the `logging:` settings work.
7. **If a test looks for the line**, change the Rust and the Python text in the
   same commit, then run `test_log_contract.py`.

## FAQ

| Question                                | Answer                                                             |
| --------------------------------------- | ------------------------------------------------------------------ |
| What goes in the message?               | What happened, in words. No values.                                |
| Where do values go?                     | In fields: `module = name`, `entities = count`                     |
| Which target?                           | A constant from `telemetry_target`. Never a string.                |
| How do I write the target?              | `telemetry_target::HOT_RELOAD`                                     |
| When do I use `warn`?                   | Something went wrong, the engine handled it, and the line says how |
| When do I use `error`?                  | The engine could not do what was asked. Add an `error =` field.    |
| Something normal that the code expects? | `info` or `debug`. Not `warn`.                                     |
| Something that happens every frame?     | `debug` or `trace`, and only when the value changes                |
| The same problem over and over?         | Log it once. Log again only when it changes.                       |
| A table or a tree?                      | Use `log_block`. Its heading is the message.                       |
| Can I use `println!`?                   | No, not in code that runs in the engine                            |
| Does a test look for this line?         | Change the Rust text and the Python test text in the same commit   |

## 1. The message

Write what happened, in a few lowercase words, with no period at the end. Put
every value in a field.

```rust
// Good: words in the message, values in fields.
info!(
    target: telemetry_target::HOT_RELOAD,
    module = %module_name,
    entities = entity_count,
    "hot reload complete"
);

// Bad: the values are inside the text, so you cannot filter or count them.
info!(
    target: telemetry_target::HOT_RELOAD,
    "Hot reload of {module_name} complete with {entity_count} entities."
);
```

In the console:

```text
Good:
[19:11:53:713] INFO  engine::hot_reload  hot reload complete | module=native entities=34

Bad:
[19:11:53:713] INFO  engine::hot_reload  Hot reload of native complete with 34 entities.
```

- **Do not start the message with a value.** Do not use a message that is only
  `"{}"` or `"{error}"`. A reader cannot tell what the line is about.

  ```rust
  // Bad: the message is just the error text.
  error!(target: telemetry_target::HOT_RELOAD, module = %subject, "{}", error);

  // Good: the message says what happened. The error text is a field.
  error!(
      target: telemetry_target::HOT_RELOAD,
      module = %subject,
      error = %error,
      "the new version failed to start"
  );
  ```

  In the console:

  ```text
  Bad:
  [19:11:53:690] ERROR engine::hot_reload  pill_module_init returned an error | module=native

  Good:
  [19:11:53:690] ERROR engine::hot_reload  the new version failed to start | module=native error=pill_module_init returned an error
  ```

- **Say the result.** If something failed, also say what the engine does now:
  `fast patch failed; the previous version keeps running`.
- **Keep it short.** Most messages fit in 60 characters. If yours is longer,
  move some of it into fields.
- A value can stay in the text only when a test already looks for that exact
  text (see section 9). New lines always use fields.

## 2. The target

The target is a label that says which part of the engine wrote the line, for
example `engine::rendering` for the renderer.

People can use these labels to choose what they see. In `project_settings.yaml`
they can show more or fewer lines for each label:

```yaml
logging:
  targets:
    engine::rendering: debug   # show every renderer line, details too
    engine::hot_reload: warn   # show only reload problems
```

This only works if each line has the right label. If renderer code logs under
`engine::engine`, the setting `engine::rendering: debug` does not show that
line, and hiding it means hiding every other `engine::engine` line too.

| target               | constant                   | use it for                                     |
| -------------------- | -------------------------- | ---------------------------------------------- |
| `engine::engine`     | `ENGINE`                   | starting, stopping, the frame line             |
| `engine::hot_reload` | `HOT_RELOAD`               | builds, reloads, patches, file watchers        |
| `engine::link`       | `LINK`                     | loading DLLs                                   |
| `engine::ecs`        | `ECS`                      | world, components, systems, saving and loading |
| `engine::system`     | `SYSTEM`                   | information about the machine                  |
| `engine::rendering`  | `RENDERING`                | renderers, shaders, materials                  |
| `engine::ui`         | `UI`                       | in-game UI, themes, fonts                      |
| `engine::input`      | `INPUT`                    | keyboard, mouse, gamepads                      |
| `engine::resources`  | `RESOURCES`                | assets, asset files, settings files            |
| `engine::editor`     | `EDITOR`                   | the editor and its panels                      |
| `engine::csharp`     | `CSHARP`                   | lines that come from C# code                   |

Rules:

- **Always set a target.** Without one, the line is not under `engine::`, and
  `engine::` settings do not reach it.
- **Never type the target as a string.** Use a constant from
  `telemetry_target`. If you need a new target, add it to `telemetry_target`
  and to the table above.
- **Write it one way.** Import the module, then use the short name:

  ```rust
  use pill_core::telemetry::telemetry_target;

  info!(target: telemetry_target::HOT_RELOAD, "source change detected");

  // Bad: three different ways to write the same target.
  info!(target: pill_core::telemetry::telemetry_target::HOT_RELOAD, "...");
  info!(target: HOT_RELOAD, "...");
  info!(target: "engine::hot_reload", "...");
  ```

  In the console, all four print the same line:

  ```text
  [19:11:51:034] INFO  engine::hot_reload  source change detected
  ```

  The bad forms are not wrong in the log. They are wrong in the code: a reader
  cannot see at a glance that they are the same target, and a search for
  `telemetry_target::HOT_RELOAD` misses them.

- **Pick the closest match.** `ENGINE` is only for starting, stopping and the
  frame line. Renderer code uses `RENDERING`. Asset code uses `RESOURCES`.
  Editor code uses `EDITOR`.

## 3. The tag

A tag is a word in square brackets at the start of the message, like
`[editor]` or `[assets]`. It helps a person spot lines while reading. The
target is for filtering. The tag is only for the eye.

- **Add a tag only when the target does not already say it.** A line on
  `HOT_RELOAD` does not need `[hot_reload]`.
- **Use a tag from this list.** To add a new one, add it here first.

  | tag             | use it for                                           |
  | --------------- | ---------------------------------------------------- |
  | `[editor]`      | the editor's own lines (tests look for this tag)     |
  | `[test]`        | the editor's test output, read by the test suites    |
  | `[assets]`      | importing, listing and moving assets                 |
  | `[persistence]` | saving and loading worlds and scenes                 |
  | `[settings]`    | settings files of managers                           |
  | `[ui]`          | in-game UI lines                                     |
  | `[render]`      | renderer lines that need more detail than the target |
  | `[analytics]`   | timing reports for reloads and patches               |
  | `[project]`     | a game project's own lines (see section 10)          |
  | `[hot]`         | the line that reports a function patch going live    |
  | `[pick test]`   | the standalone test frontend's picking probe         |
  | `[second view]` | the standalone test frontend's second-window probe   |

  An extension example's own lines use its folder name as the tag
  (`[stacked_boxes] ready`), because the example suite waits for
  `[<folder name>] ready`. That is the one tag outside this list.

- Put the tag first, then what happened: `[settings] applied manager settings`.
- **One tag per line.** If you want two, the target is probably wrong.

## 4. The level

| level   | use it when                                               | example                                               |
| ------- | --------------------------------------------------------- | ----------------------------------------------------- |
| `error` | the engine could not do what was asked. Add `error =`.    | a module failed to build, nothing was loaded          |
| `warn`  | something went wrong, but the engine handled it. Say how. | a settings file is broken, so the old values are kept |
| `info`  | a step a person wants to see in the log                   | `hot reload complete`, `module DLL loaded`            |
| `debug` | details about each item                                   | each component migrated, each shader built            |
| `trace` | details for every frame or every draw                     | each draw call                                        |

- **Do not use `warn` for something the code expects.** For example, ignoring a
  second drag while one is running, or ignoring a gamepad when all slots are
  full. That is `debug`.
- **If the engine recovered, use `warn`, not `error`.** For example, a reload
  failed, but the old version keeps running.
- **Every `warn` and `error` says what happens next.** For example:
  `...; the old values are kept`.
- Ask yourself: *does someone need to do something about this?* If not, it is
  not `warn`.

## 5. Fields

Fields are the `name = value` pairs after the message. People filter on them,
and tests count them.

### 5.1 Field names

Use **one name for each idea**:

| idea                               | use                                            | do not use                              |
| ---------------------------------- | ---------------------------------------------- | --------------------------------------- |
| what went wrong                    | `error`                                        | `reason`, `detail`, `message`, `status` |
| which module, extension or project | `module`                                       | `subject`, `owner`                      |
| a file or folder                   | `path`                                         | `file`, `source`, `directory`           |
| an asset                           | `asset`                                        | `name`, `asset_name`                    |
| an entity                          | `entity`                                       | `id`, `entity_id`                       |
| a component type                   | `component`                                    | `type`, `component_type`                |
| how many                           | the thing counted: `entities`, `files`, `rows` | `count`, `total`, `number`              |
| how long                           | with the unit: `elapsed_millis`                | `time`, `duration`, `ms`                |
| how big                            | with the unit: `bytes`                         | `size`, `length`                        |

- `extension =` is also fine when you need to tell an extension apart from a
  project. The formatter colours the values of `module =` and `extension =`.
- Use `snake_case` and full words: `delta_time`, not `dt`.
- **Never name a field `message`.** The formatter uses `message` for the
  line's text, so your value would replace the message.
- Use `count =` only when the message already says what is counted:
  `engine commands applied | count=3`.

### 5.2 Field values

A field holds a simple value: a name, a number, a path or a short text.

```rust
// Good: simple values.
info!(target: telemetry_target::ENGINE, backend = "native", library = %library_name, "ECS host starting");

// Bad: printing a whole struct puts Rust code into the log.
info!(target: telemetry_target::ENGINE, backend = ?backend, "ECS host starting");
```

In the console:

```text
Good:
[18:42:44:477] INFO  engine::engine  ECS host starting | backend="native" library=scene

Bad:
[18:42:44:477] INFO  engine::engine  ECS host starting | backend=NativeLibrary { library_name: "scene", output_subdirectory: "target/hot/build/debug" }
```

- `field = value` prints text **with** quotes: `path="textures"`.
  `field = %value` prints it **without** quotes. Choose one and keep it. Tests
  check the quotes, so changing it later breaks them.
- Use `?value` only for simple enums and numbers. Never for structs, lists or
  maps. If you really need to show a structure, use a block (section 7).

**To format a value**, such as rounding a number, pass it through
`format_args!` with `%`. A bare `field` (or `field = value`) prints the raw
value, so a float shows every digit:

```rust
// Good: `%` prints the formatted value without quotes.
info!(target: telemetry_target::HOT_RELOAD, module = %module_name, elapsed_millis = %format_args!("{elapsed_millis:.1}"), "module reloaded");

// Bad: the raw float prints every digit.
info!(target: telemetry_target::HOT_RELOAD, module = %module_name, elapsed_millis, "module reloaded");

// Bad: without `%` the formatted `String` is quoted like any other text.
info!(target: telemetry_target::HOT_RELOAD, module = %module_name, elapsed_millis = format!("{elapsed_millis:.1}"), "module reloaded");
```

In the console:

```text
Good:
[18:35:55:718] INFO  engine::hot_reload  module reloaded | module=pill_physics elapsed_millis=1834.6

Bad:
[18:35:55:718] INFO  engine::hot_reload  module reloaded | module=pill_physics elapsed_millis=1834.5729160000001
[18:35:55:718] INFO  engine::hot_reload  module reloaded | module=pill_physics elapsed_millis="1834.6"
```

- `format_args!` builds no `String`. `%format!("{elapsed_millis:.1}")` prints
  the same text.
- The format is part of the line's text. A test that reads the value has to
  accept the format you chose (section 9).

## 6. Do not repeat lines

Logs are read later. If a line repeats every frame, the important lines get
lost.

- **Log once, then only when something changes.** Remember what you logged
  last time, and log again only when it is different:

  ```rust
  // Good: remember the last text, and log only when it changes.
  if self.theme_watch.refused_text.as_deref() != Some(error_text.as_str()) {
      self.theme_watch.refused_text = Some(error_text.clone());
      warn!(
          target: telemetry_target::EDITOR,
          layer = "user",
          error = %error_text,
          "[editor] theme refused; the other layers are used"
      );
  }

  // Bad: this runs on every check, so one broken file printed this 114 times.
  warn!(target: telemetry_target::ENGINE, "[editor] theme refused layer=user: {error}");
  ```

  In the console:

  ```text
  Good: one line, until the file changes
  [18:43:10:112] WARN  engine::editor  [editor] theme refused; the other layers are used | layer="user" error=`palette.accent`: `not-a-colour` is not a `#rrggbb` or `#rrggbbaa` colour

  Bad: the same line on every check
  [18:43:10:112] WARN  engine::engine  [editor] theme refused layer=user: `palette.accent`: `not-a-colour` is not a `#rrggbb` or `#rrggbbaa` colour
  [18:43:10:508] WARN  engine::engine  [editor] theme refused layer=user: `palette.accent`: `not-a-colour` is not a `#rrggbb` or `#rrggbbaa` colour
  [18:43:10:905] WARN  engine::engine  [editor] theme refused layer=user: `palette.accent`: `not-a-colour` is not a `#rrggbb` or `#rrggbbaa` colour
  ... 111 more
  ```

- **If you must report repeats, count them.** Log the first time, then add a
  `suppressed =` field with how many times it repeated. The frame error code
  in `pill_player/src/runtime.rs` does this.
- **Lines that run on a timer are `debug`.** Heartbeats, widget positions and
  frame counters are for tools and tests, not for people. A test that needs
  them turns the target up in its project's `logging:` settings.
- **No `info` line for every click, draw or row.** Use `trace`, or leave it
  out.
- A failed reload logs once per try.

## 7. Blocks

Some output does not fit on one line, like a table, a tree or a system report.
Use a **block** for it: `log_block` or `log_block_colored` from
`pill_core::telemetry`. The first line shows the level, the target and the
fields. The block goes below.

**The block's heading is the message**, so the first line still says what the
block is:

```
// Good
[18:42:44:487] INFO  engine::system  system specs
├─ CPU: 12th Gen Intel(R) Core(TM) i7-12700KF
│  └─ Cores: 12 physical, 20 logical threads

// Bad: the first line says nothing, and the heading is hidden below it
[18:42:44:487] INFO  engine::system
System specs
├─ CPU: 12th Gen Intel(R) Core(TM) i7-12700KF
```

- A block's fields go on its first line, after the heading and the `|`:
  `INFO  engine::hot_reload  reload analytics | modules=3`.
- Do not use a block for one sentence with values. Use fields.
- Blocks are `info` or lower. A report on every reload is fine. A report on
  every frame is not.

## 8. Printing and formatting

- **No `println!` or `eprintln!` in code that runs in the engine.** A print has
  no level and no target. The `logging:` settings cannot turn it off, and it
  breaks the log's layout. You may only print in these cases:
  - `cargo:` lines in build scripts,
  - compile errors from proc macros,
  - an error in a frontend's `main.rs` before logging has started.
- **Do not add your own time, level or colours.** The formatter adds the time
  and level, and colours the level and target. To colour part of a block, use
  `log_block_colored`. The colours are removed in log files and piped output.
- **No empty lines or separator lines.** Do not try to space out the log.
- **For temporary debugging**, use `pill_core::log!`, `dev_warn!` or
  `dev_error!`. They print only when the `dev-logs` feature is on. Remove them
  before you commit. Do not use them instead of a real log line.

## 9. Lines that tests look for

Some lines are read by other code. The test suites in `devops/` wait for them,
the editor's test channel reads them, and `AGENTS.md` quotes some of them.
Examples: `the hot reload switches`, `[project] init ran`, `[ui] producer=`,
`[editor] toolbox rect`, `[analytics] reload `, and every `[test] ...` line.

- **Before you change a line's text, search for it** in `devops/` and in
  `AGENTS.md`. The editor's test texts are in `devops/core/editor_log_tokens.py`.
- **Change everything in one commit:** the Rust text, the Python test text,
  and any document that quotes it.
- **Run `python devops/tests/test_log_contract.py`.** It checks that every text
  a test looks for can still be printed by the Rust code. Then run the test
  suite for the area you changed.
- **Changing the level or target can also break a test.** The text stays the
  same, but the line may no longer print. If you move a line to `debug`, the
  test's project has to turn that target up.
- **If a new line will be read by a test**, give it a tag and keep its field
  names the same from the start.
- **Read the line through the shared helper, not a hand-written layout.** A
  suite must not hardcode how a line is laid out (the gap between the message
  and its fields, the `|`, the order of time, level and target). One shared
  helper in `devops/core` describes the layout and builds the patterns from a
  message and the fields a test wants, so a change to the format touches one
  place. (W-0218 adds it; until then, suites still spell the layout.)

## 10. Extensions and game projects

**An extension** is engine code that loads later. It follows every rule on
this page and uses the engine's targets.

**A game project** also logs through `tracing`, but on its own target:

```rust
// Good: tracing, the project's own target, logged only when it changes.
pill_engine::tracing::info!(target: "project", entities = spawned, "[project] wave spawned");

// Bad: no level, no target, cannot be turned off. One project's prints were 94% of a log.
println!("counter tick [{}]", timestamp);
```

In the console:

```text
Good:
[19:11:15:858] INFO  project  [project] wave spawned | entities=12

Bad: no time from the formatter, no level, no target
counter tick [19:11:15.858]
counter tick [19:11:15.874]
counter tick [19:11:15.891]
```

- **No `println!`.** Use the macros from `pill_engine::tracing`, so the
  `logging:` settings in `project_settings.yaml` work.
- **Use the project's own target**, never an `engine::` one. Leaving the target
  out also works: the line then uses the module path that logged it, which
  starts with the project's crate name.
- **Log only when something changes.** A line every frame or every key press at
  `info` makes the log useless. Use `debug`, or log only on changes.
- An example project's "ready" line keeps the form the example tests wait for:
  `[<folder name>] ready`.

## 11. Automatic checks

`devops/tests/test_coding_standards.py` checks these on every Rust file under
`modules/` (section `(12/12) log calls and prints`), and the finish-time hook
`check_changed.py` runs the same check on the files you changed:

| check                     | fails on                                                                                  |
| ------------------------- | ----------------------------------------------------------------------------------------- |
| string target             | `target: "..."`                                                                           |
| long target path          | `target: pill_core::telemetry::telemetry_target::...`                                     |
| message with only a value | a message that is only `"{...}"`, such as `"{}"`, `"{error}"` or `"{message}"`            |
| period at the end         | a message ending with `.`                                                                 |
| field named `message`     | `message = ...`                                                                           |
| printing                  | `println!` or `eprintln!` outside build scripts, proc macros and a frontend's early error |

Allowed on purpose, each with its reason in the lint's allowlist: a block
(`log_block`, `log_block_colored` or a report helper), a helper that returns
one fixed sentence per kind (`*_message()`), a refusal constant (`*_REFUSAL`),
the C# bridge's forwarded text, `cargo:` directives, and prints inside a
`mod tests` or a `tests.rs`. The fixture projects under `devops/` and the
projects under `examples/` are outside the check, because they log on their
own `target: "project"`; an extension's examples under `modules/` are
checked like the extension.

The field table, the levels, repetition and the choice of target are not
checked automatically. Reviewers check them.

## Checklist for a new log line

1. Is the message lowercase, with no period at the end, and does it start with a word, not a value?
2. Is every value in a field, with a name from section 5.1?
3. Is the target a `telemetry_target` constant, written as `telemetry_target::X`, and the closest match?
4. Does it need a tag? Is the tag on the list?
5. Is the level right? Does someone need to act on a `warn`?
6. Can it repeat? If so, does it log only when something changes?
7. Does a test or a document look for this text? If so, did you change them in the same commit?
