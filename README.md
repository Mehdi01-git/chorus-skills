# chorus-skills

The Chorus skill and Claude Code plugin: run paid ads through [Chorus](https://www.chorushq.net) from your assistant. Reads are free on every plan; anything that spends becomes a card the owner confirms in Chorus.

- Add the connector to Claude: `claude mcp add --transport http chorus https://mcp.chorushq.net/mcp`
- Install the plugin: `claude plugin install chorus@chorus-skills` (after `claude plugin marketplace add Mehdi01-git/chorus-skills`)
- Setup and tool list: https://www.chorushq.net/mcp

`scripts/validate.mjs` checks every tool name in the skill against the live connector.
