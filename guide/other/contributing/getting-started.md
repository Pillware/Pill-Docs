# Getting started

## Summary

Bug reports, documentation, examples, tests and code are all welcome. To contribute a change, fork the repository, make the change on a branch, check it, and open a pull request (PR). The first time you open a PR to the engine repository, you are asked to sign the Contributor License Agreement (CLA).

## What can I contribute?

| Contribution                     | Where it goes                                                        |
| -------------------------------- | -------------------------------------------------------------------- |
| A bug report                     | an issue in [Pillware/Pill](https://github.com/Pillware/Pill/issues) |
| Engine code, tests or examples   | a PR to [Pillware/Pill](https://github.com/Pillware/Pill)            |
| Documentation                    | a PR to [Pillware/Pill-Docs](https://github.com/Pillware/Pill-Docs)  |
| A new feature or a design change | an issue first, then a PR                                            |

Discuss a new feature or a design change in an issue before you write it. Someone may already be working on it, or the design may need to change, and it is cheaper to find that out before the code exists.

A good bug report says what you did, what you expected and what happened instead. Name your operating system and the commit you built, and attach the log if there is one.

## What should I know before my first pull request?

- **You sign the CLA once.** When you open your first PR to Pillware/Pill, you are asked to accept the [Individual CLA](https://github.com/Pillware/Pill/blob/main/legal/contributing/CLA.md). If your employer, client or university may own your work, they also sign the [Corporate CLA](https://github.com/Pillware/Pill/blob/main/legal/contributing/CCLA.md) or give you written permission to contribute. You never need to sign anything just to use Pill.
- **Only submit what you are free to publish.** Don't submit code covered by a console maker's confidentiality terms, or a fix for a security issue that hasn't been disclosed yet.
- **Report security issues privately.** Email contact@pillengine.org instead of opening a public issue.

## How do I set up my machine?

Fork [Pillware/Pill](https://github.com/Pillware/Pill) on GitHub, clone your fork, and add the original repository as a second remote named `upstream`. You get new changes from `upstream` and push your branches to your fork.

```powershell
git clone https://github.com/YOUR_GITHUB_NAME/Pill.git
cd Pill
git remote add upstream https://github.com/Pillware/Pill.git
```
```cmd
git clone https://github.com/YOUR_GITHUB_NAME/Pill.git
cd Pill
git remote add upstream https://github.com/Pillware/Pill.git
```
```bash
git clone https://github.com/YOUR_GITHUB_NAME/Pill.git
cd Pill
git remote add upstream https://github.com/Pillware/Pill.git
```

Then run the setup script for your system from the repository root, as [Setup](../../user_guide/introduction/setup.md) describes. The script installs Rust, the build tools, the Slang shader compiler and the .NET 8 SDK. The Setup page also shows how to check that a project runs.

The checks you run before opening a PR need two more things that the setup scripts don't install:

- **Python 3.** Every check in `devops/` is a Python script. CI uses Python 3.12.
- **Rust's WebAssembly target.** The CI gate also lints the browser build, and that step fails without the target.

```powershell
rustup target add wasm32-unknown-unknown
```
```cmd
rustup target add wasm32-unknown-unknown
```
```bash
rustup target add wasm32-unknown-unknown
```

## How do I make a change?

Start a branch from the latest `main` of `upstream`, and name it as the [branch name rules](repository-standards.md#branch-names) describe:

```powershell
git fetch upstream
git switch -c fix/gizmo_selection upstream/main
```
```cmd
git fetch upstream
git switch -c fix/gizmo_selection upstream/main
```
```bash
git fetch upstream
git switch -c fix/gizmo_selection upstream/main
```

Then:

1. Write the change following the [Coding standards](coding-standards.md).
2. Commit it with messages that follow the [commit message rules](repository-standards.md#commit-messages). Keep each commit to one change.
3. Check it, as the next section describes.
4. Push the branch to your fork and open a PR, as [How do I open a pull request?](#how-do-i-open-a-pull-request) describes.

## How do I check my change?

While you work, run `check_relevant.py`. It looks at the files you changed and runs only the checks they need: formatting, the coding-standards lint, the tests of the crates you touched, and the test suites that cover that part of Pill.

```powershell
python devops/ci_cd/check_relevant.py --dry-run   # show what would run, and why
python devops/ci_cd/check_relevant.py             # run it
```
```cmd
REM show what would run, and why
python devops/ci_cd/check_relevant.py --dry-run
REM run it
python devops/ci_cd/check_relevant.py
```
```bash
python devops/ci_cd/check_relevant.py --dry-run   # show what would run, and why
python devops/ci_cd/check_relevant.py             # run it
```

> **Example:** you change `modules/engine/pill_core/src/telemetry.rs`. `--dry-run` prints four checks: `verify:fmt` and `verify:coding-standards` (a Rust file changed), `cargo test` for `pill_core`, and `test_editor_revision.py` (the suite that covers `pill_core`). Nothing else is selected, so the hot reload suites and the shipping smoke test don't run.

Before you open the PR, run the CI gate, `verify.py`. CI runs the same script, so a local run executes the same checks. `--quick` runs only formatting, clippy and the lints, which takes about a minute once your build is cached. The full run adds the tests, the builds and the editor suite, and the editor suite alone takes about fifteen minutes.

```powershell
python devops/ci_cd/verify.py --quick   # formatting, clippy and the lints
python devops/ci_cd/verify.py           # every step CI runs
```
```cmd
REM formatting, clippy and the lints
python devops/ci_cd/verify.py --quick
REM every step CI runs
python devops/ci_cd/verify.py
```
```bash
python devops/ci_cd/verify.py --quick   # formatting, clippy and the lints
python devops/ci_cd/verify.py           # every step CI runs
```

**Don't edit files while a suite runs.** The end-to-end suites edit real files in your working tree and put them back when they finish, so an edit you make in the meantime gets overwritten. Stop a suite with Ctrl+C, not by killing its process, so it can still put the files back.

[Automated tests](../../engine_guide/devops/automated_tests.md) explains every suite and how the checks are chosen.

## How do I open a pull request?

Push your branch to your fork, then open a PR from it against `main` in Pillware/Pill.

```powershell
git push -u origin fix/gizmo_selection
```
```cmd
git push -u origin fix/gizmo_selection
```
```bash
git push -u origin fix/gizmo_selection
```

- **Title it like a commit.** The title follows the [pull request title rules](repository-standards.md#pull-request-titles): the same types, scopes and wording as a commit's first line.
- **Keep it to one change.** Split unrelated changes into separate PRs.
- **Say how you checked it.** In the description, say what the change does and which checks you ran.

A maintainer then reviews the PR. It is merged once it meets the [merge requirements](repository-standards.md#merge-requirements): the CI gate passes, you have signed the CLA, a reviewer has approved, and every review thread is resolved. [Code review expectations](repository-standards.md#code-review-expectations) describes what authors and reviewers do.

## Which rules should I read?

| Page                                            | What it covers                                                          |
| ----------------------------------------------- | ----------------------------------------------------------------------- |
| [Coding standards](coding-standards.md)         | how to write and lay out Rust code, comments, error handling and tests  |
| [Repository standards](repository-standards.md) | branch names, commit messages, PR titles, code review and merging       |
| [Code of conduct](code-of-conduct.md)           | how contributors treat each other                                       |

## Where can I ask questions?

Ask on the [Discord server](https://discord.gg/VUKNQrctms), or open an issue in [Pillware/Pill](https://github.com/Pillware/Pill/issues). If you aren't sure about something, just ask.
