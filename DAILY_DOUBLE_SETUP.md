# Daily Double workflow

You can hand this checklist to Codex (or follow it yourself) any time you want to add a new Daily Double entry. Every entry on `/daily` is just a Markdown file under `content/daily`, so all we are doing is creating a new file with the right name and content.

## 1. Gather the details

Before asking Codex to do anything, jot down:

- Date to publish (use `YYYY-MM-DD`, e.g. `2025-11-22`)
- Headline or opener (first line of the Markdown)
- Body copy (anything after the blank line)

Codex needs those three pieces to build the file.

## 2. Ask Codex to set it up

Say something like:

> set up my daily double for 2025-11-22 titled "TODAY’S DAILY DOUBLE IS… SQUID GAMES!" with the body "play squid games, win squid prizes"

Codex will:

1. Create `content/daily/2025-11-22.md`
2. Fill the file like:
   ```
   TODAY’S DAILY DOUBLE IS… SQUID GAMES!

   play squid games, win squid prizes
       -- Our Daily Dana
   ```
   Feel free to include extra paragraphs or signature lines in the body copy—everything after the blank line is rendered as-is.
3. Mention the new file path in its reply so you know where it landed.

## 3. Verify locally (optional but nice)

1. Run `npm run dev`
2. Visit `http://localhost:3000/daily` and confirm the new entry appears at the top.
3. Click into it (e.g. `/daily/2025-11-22`) to proofread.

## 4. Commit & push

```bash
git add content/daily/2025-11-22.md DAILY_DOUBLE_SETUP.md
git commit -m "Add 2025-11-22 daily double"
git push
```

That’s it—Codex now has a recipe for spinning up your Daily Double whenever you ask.
