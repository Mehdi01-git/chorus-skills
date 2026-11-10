# chorus-skills

The Chorus skill and Claude Code plugin: use [Chorus](https://www.chorushq.net) from your assistant. Make videos, product photos, talking photos, Darija voices and music with Chorus Studio, run ads on your own Facebook, Instagram, TikTok and LinkedIn ad accounts, and post your creations. Reads are free; anything that takes points, spends on an ad account or publishes becomes a card you confirm.

- Add the connector to Claude: `claude mcp add --transport http chorus https://mcp.chorushq.net/mcp`
- Install the plugin: `claude plugin install chorus@chorus-skills` (after `claude plugin marketplace add Mehdi01-git/chorus-skills`)
- Setup and tool list: https://www.chorushq.net/mcp

`scripts/validate.mjs` checks every tool name in the skill against the live connector.
