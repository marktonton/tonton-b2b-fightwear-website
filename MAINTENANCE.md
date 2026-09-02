# Website maintenance rules

## Single source of truth

Use only this working directory for code changes:

`C:\Users\Administrator\AccioWork\2026-08-27-10-23-41-862-bb225bcc\tonton-b2b-fightwear-website-working`

Do not edit or deploy from the other copied folders. Before changing code, confirm:

```text
git rev-parse --show-toplevel
git status --short --branch
```

## Required preflight

Run these commands before committing or opening a pull request:

```text
npm ci
npm run verify
git diff --check
```

`npm run verify` checks required project files, scans tracked source/config text for merge conflict markers, runs TypeScript typechecking, and runs the production build. GitHub Actions repeats the same verification on every push and pull request.

## Temporary files and analysis artifacts

Do not commit screenshots, one-off JSON analysis exports, copied CSS variants, build output, local environment files, or other temporary artifacts. Keep them outside the repository, or extend `.gitignore` deliberately after confirming they are not runtime inputs. Review `git status` and `git diff --cached --name-status` before every commit.

## Export-protection / security software

The repository contains no evidence that the application intentionally encrypts or decrypts source code. A corporate export-protection agent may transform, lock, quarantine, or decrypt files when they leave the managed computer, but that cannot be concluded from the code or Git history alone.

Do not disable or alter security controls. Ask IT to verify whether the protection agent changes file bytes, line endings, permissions, or archive contents during export. Request an approved Git/GitHub/Vercel workflow and an allowlist or sanctioned decryption policy for this repository, including the repository path and required processes (`git`, Node/npm, and the CI/Vercel integration). Preserve the original error logs and compare file hashes before and after export when IT authorizes that test.
