# Repository standards

These rules cover how a change gets into the repository: how to name its
branch, how to write its commit messages, how to title its pull request (PR),
and how the PR is reviewed and merged. For how to write the code itself, see
[Coding standards](coding-standards.md).

## Branch names

```
<type>/<description>
```

```
feat/editor_crate_reload
```

- **type**: one of the commit [types](#types), the same one the PR title
  will use.
- **description**: a few words naming the change, in lowercase
  `snake_case`, like the [scopes](#scopes).
- **No scope.** Git refuses `:` in branch names, so `extension:physics`
  can't be written as is, and the description already says what the
  branch is about.
- **One change per branch.** A branch becomes one PR, so it follows the
  same rule as a [PR](#for-authors): small and focused.

The type groups branches by kind, so `git branch --list "fix/*"` lists every
open fix. Branches made before these rules keep their names.

### Branch name examples

Each branch holds one change, and its type is the one its PR title will use.
Single commits on it can still have other types, such as a `test:` commit on
a `feat/` branch.

| Branch                              | The change                                                 |
| ----------------------------------- | ---------------------------------------------------------- |
| `feat/editor_crate_reload`          | reloads a project's editor crate together with the project |
| `fix/physics_run_in_edit_mode`      | makes the physics edit-mode systems use `run_in_edit_mode` |
| `refactor/type_meta_identification` | restructures how type metadata identifies a type           |
| `test/pill_test_fixtures`           | replaces the dummy extensions with `pill_test` fixtures    |
| `docs/commit_message_rules`         | documents the commit message rules                         |
| `chore/remove_vscode_settings`      | removes obsolete VS Code settings files                    |

`fix/physics_run_in_edit_mode` shows what happens to a scope. The commit is
`fix(extension:physics): ...`, but `extension:physics` can't be part of a
branch name, so `physics` moves into the description.

### Branch names, before and after

| Before                 | After                                                       | Why                                             |
| ---------------------- | ----------------------------------------------------------- | ----------------------------------------------- |
| `shaders-pipeline`     | `feat/shader_pipeline`                                      | no type, and words joined with `-`              |
| `readme_fix`           | `docs/fix_readme`                                           | it only changes docs, so the type is `docs`     |
| `hot_reload_indicator` | `feat/hot_reload_indicator` and `fix/crash_on_failed_build` | it also fixed a crash, which is a second change |
| `physics`              | `feat/fixed_physics_timestep`                               | it names an area, not one change                |

## Commit messages

We follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
with the rules below. Commits made before these rules stay as they are.

```
<type>(<scope>): <description>

<body>

<footers>
```

Only the first line is required.

### First line

```
fix(extension:physics): use run_in_edit_mode on edit-mode systems
```

- **type**: one of the [types](#types).
- **scope**: one of the [scopes](#scopes). If none fits, leave it out along
  with its parentheses.
- **description**: completes "This commit will ...". Imperative ("add", not
  "added"), lowercase, no period, at most 10 words. If you need more, the
  commit is probably two commits.
- **`!`** before the colon marks a [breaking change](#breaking-changes).

#### Types

| Type       | The commit                                                        |
| ---------- | ----------------------------------------------------------------- |
| `feat`     | adds something projects, extensions, the editor or tools can use  |
| `fix`      | corrects wrong behaviour                                          |
| `perf`     | makes something faster or smaller, with the same behaviour        |
| `refactor` | restructures code, with the same behaviour                        |
| `test`     | only changes tests                                                |
| `docs`     | only changes documentation or comments                            |
| `build`    | changes Cargo manifests, features, build scripts or the toolchain |
| `ci`       | changes how CI runs: `.github/workflows/` or the CI gate          |
| `chore`    | changes no code, build or tool (ignore files, editor settings)    |
| `revert`   | reverts an earlier commit                                         |

If several fit, pick the one an engine user would notice. A fix that also
tidies the code around it is a `fix`.

#### Scopes

A scope names the **feature** a change is about, not the folder it touches.
Hot reloading spans the engine core, the development host, the patch scanner
and the editor, and a change to any of them is `hot_reload`.

##### General scopes

| Scope        | Covers                                                                                      |
| ------------ | ------------------------------------------------------------------------------------------- |
| `ecs`        | world, entities, components, queries, ECS systems, resources, commands, persistence, macros |
| `scripting`  | script components and their hooks                                                           |
| `play_mode`  | Play and Stop: what a session copies, runs and restores                                     |
| `hot_reload` | watchers, module reloads, function patching, layout fingerprints, generated host crates     |
| `assets`     | asset store, guids and `.meta` files, importing and cooking, asset packs, scenes            |
| `host`       | starting and running a project: project settings, module loading, running each update       |
| `telemetry`  | logging, profiling, metrics, analytics                                                      |
| `renderer`   | renderer contract, the renderers, shaders, materials, debug and gizmo drawing               |
| `ui`         | in-game UI, themes, the UI kit                                                              |
| `editor`     | editor shell, tabs, panels, gizmo, selection, undo, the scripted test channel               |
| `csharp`     | anything only C# projects notice: bridge, runtime, compiler, analyzers                      |
| `input`      | input devices and events                                                                    |
| `web`        | browser builds, the web frontends, the native/web platform layer                            |
| `shipping`   | shipping builds, bundles, static linking                                                    |
| `devops`     | test suites, tools, setup scripts                                                           |
| `examples`   | example projects                                                                            |

##### Engine extension scopes

An extension has the scope `extension:<name>`, where `<name>` is its folder
under `modules/extensions/` without `pill_`: `extension:physics`,
`extension:audio`, `extension:spline`. The scope covers all of the
extension's crates, including its `_editor` crate and its examples. A new
extension gets its scope automatically.

- The test-support extension, `extension:test`, usually goes with the
  `test` type.
- The renderers (`pill_master_renderer` and everything under
  `modules/extensions/rendering/`) live in `modules/extensions/`, but the
  host links them itself, so they use `renderer`.

##### Choosing a scope

- **Go by the subject.** "Rebuild the rapier world on reload" is
  `extension:physics`. "Keep resources across reloads" is `hot_reload`.
- **Use `csharp` for C# only.** A change that only C# projects notice is
  `csharp`, even when it is about reloading or assets.
- **Leave it out when nothing owns the change**, such as a rename across the
  workspace or a dependency bump.
- **Give one scope and never invent one.** A new area adds its row to the
  table in the same commit.

### Body

The body is optional. It lists the changes, so someone reading `git log`
knows what is in the commit without opening the diff. Leave it out when the
first line says everything:

```
feat(editor): reload a project's editor crate with the project
```

- Write one bullet per change a reader cares about, not one per file.
- Start each bullet with a past-tense verb: Added, Changed, Removed, Fixed,
  Moved.
- Name what changed. "Updated shaders to accommodate new features" says
  nothing.
- Keep bullets short, one line where possible.
- Add a reason only when it isn't obvious, as a short clause: what broke,
  why this approach, or what to watch out for.
- Put a reason that covers the whole commit in a short paragraph after the
  bullets. Don't start that paragraph with a word and a colon, such as
  `Note:`, or tools will read it as a [footer](#footers).
- Leave a blank line after the first line, wrap at 72 characters, and indent
  continuation lines by two spaces.

Generated messages use this style but tend to be vague. Check every bullet.

#### Body examples

**Name the changes.**

Needs work:

```
feat(editor): add play controls to the menu bar

- Implemented play mode controls in the editor.
- Added keyboard shortcut support.
- Enhanced the UI to reflect the play state.
- Updated tests to cover the new functionality.
```

Better:

```
feat(editor): add play controls to the menu bar

- Added Play, Pause and Step buttons to the centre of the menu bar.
- Bound Play, Pause and Step to Ctrl+P, Ctrl+Alt+P and F10.
- Tinted the menu bar and tab strips while a session runs.
- Showed the Game tab on Play and the previous tab again on Stop.
```

"Implemented", "support" and "enhanced" could describe any commit. The
better version says what a user will see.

**Say what broke.**

Needs work:

```
fix(extension:physics): use run_in_edit_mode on edit-mode systems

- Changed edit_mode attribute to run_in_edit_mode for physics debug draw
  and restore systems to ensure they run correctly in edit mode.
```

Better:

```
fix(extension:physics): use run_in_edit_mode on edit-mode systems

- Changed `edit_mode` to `run_in_edit_mode = true` on the debug draw and
  restore systems, because `#[system]` no longer accepts `edit_mode`.
```

"To ensure they run correctly" only repeats the first line. The better
version gives the cause.

**Explain choices, and put the main reason in a paragraph.**

Needs work:

```
feat(extension:physics): drop the simulation when Play stops

- Added physics_restore system to handle simulation restoration.
- Implemented restore epoch comparison logic.
- Updated system ordering to ensure correct behaviour.
```

Better:

```
feat(extension:physics): drop the simulation when Play stops

- Added the physics_restore system to clear the rapier world after Stop.
- Made it a separate system, because physics_sync only runs during Play.
- Ordered it before stepping, so the next Play uses restored components.

Without this, a reused entity handle could still map to a body from the
play session.
```

Each choice gets a short clause. The reason for the whole commit goes in the
paragraph.

### Footers

Footers are `Token: value` lines at the end of the message, after a blank
line. Tools read them: `git log --format='%(trailers)'` lists them, and
GitHub shows co-authors. Most commits have none. We use two:

- `BREAKING CHANGE: <what breaks and what to do>`: goes with the `!`. See
  [Breaking changes](#breaking-changes). It is the only token with a space,
  and it must be uppercase.
- `Co-authored-by: Name <email>`: for a human co-author. GitHub links the
  person when the email belongs to their account.

```
feat(editor): reload a project's editor crate with the project

Co-authored-by: Jane Doe <jane.doe@example.com>
```

Without the blank line above it, a footer is read as part of the text before
it.

Never credit an AI tool. Delete any `Co-Authored-By` line naming an assistant,
or "Generated with" line, that a tool adds.

### Breaking changes

A change is breaking when an existing project, extension or saved file stops
working until someone edits it. That covers changes to:

- the API of `pill_engine`, the crate every module uses to talk to the
  engine, including its macros (`#[system]`, `#[script]`, ...),
- the C# API, or the C#/Rust ABI between the bridge and the runtime,
- a saved format: `.scene`, `.material`, `.theme`, settings assets, `.meta`
  files, the editor layout,
- a `project_settings.yaml` or `editor_settings.yaml` key, or a `PILL_*`
  environment variable.

Add a `!` and a footer that says what to do:

```
refactor(ecs)!: rename the system edit_mode flag

BREAKING CHANGE: `#[system(edit_mode)]` is refused. Write
`#[system(run_in_edit_mode = true)]` instead.
```

### First lines, before and after

| Before                                                                  | After                                                                     | Why                                 |
| ----------------------------------------------------------------------- | ------------------------------------------------------------------------- | ----------------------------------- |
| `fix(notices): clarify build time reporting in host notices`            | `docs(hot_reload): build_ms covers cargo and C# builds`                   | only a comment changed              |
| `feat(analytics): record managed assembly reload events`                | `feat(telemetry): record managed assembly reloads`                        | `analytics` is not a scope          |
| `feat(config): enhance project configuration with directory resolution` | `feat(host): store the canonical project directory`                       | not a scope; "enhance" is vague     |
| `feat(hot_scan): classify system declarations without explicit markers` | `feat(hot_reload): treat every #[system] function as patchable`           | scope by feature, not by crate      |
| `fix(tests): adjust module test processor order`                        | `test: reorder the module test processor system`                          | it only changes test support        |
| `Physics: colliders without rigid body are static`                      | `feat(extension:physics): treat colliders without a rigid body as static` | type and scope in the standard form |

## Pull requests

### Pull request titles

A PR title follows the same rules as a commit's [first line](#first-line),
including the `!` for a [breaking change](#breaking-changes).

```
feat(renderer): add PBR material pipeline
fix(ecs): prevent archetype fragmentation on despawn
docs: document the build process
ci: run the CI gate on every pull request
```

### Code review expectations

Code review is how a change gets ready to merge. The author and the
reviewers work on it together, and both keep the discussion about the code
and keep it moving.

#### For authors

- Keep PRs small and focused on a single change.
- For architectural or design changes, open an issue or draft PR early to
  gather feedback before investing in implementation details.

#### For reviewers

- Review for correctness first: does the logic hold? Are edge cases
  handled?
- Review for clarity: can you understand the intent without asking the
  author to explain?
- Review for idiomatic usage: does the code follow the
  [coding standards](coding-standards.md)?
- Approve when the change is correct, clear and idiomatic, not when it
  matches your personal style.

### Merge requirements

A PR is ready to merge when:

1. The CI gate passes.
2. The author has signed the
   [CLA](https://github.com/Pillware/Pill/blob/main/legal/contributing/CLA.md).
3. At least one reviewer has approved.
4. All review threads are resolved.

CI doesn't start on its own for pull requests at the moment. Until it does,
run `python devops/ci_cd/verify.py` yourself and say in the PR description
that it passed.
