<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.

## What Lovable manages

Rules outside this block are the project's own. Change the pieces below in
Lovable, not by hand. With the [Lovable MCP](https://mcp.lovable.dev)
connected, `send_message` asks Lovable to do it; otherwise ask the user to
use the editor.

- **Database.** Do not add or edit `supabase/migrations/` or `drizzle/`.
  Ask Lovable to change the schema.
- **Generated files.** Do not edit a file whose header says it is automatically
  generated.
- **AI gateway.** Keep model calls on Lovable's gateway, and keep
  `LOVABLE_API_KEY` out of browser code.
- **Connectors.** Lovable provides native connectors. `list_connectors` shows
  which are enabled; `add_connector` only returns the dashboard link. When a
  connector is enabled, calls go through the connector gateway and need
  `LOVABLE_API_KEY`. When Lovable does not provide one, users can bring their
  own key and store it in Secrets.
- **Secrets.** Lovable manages them. Do not put secret values in the repo.
<!-- LOVABLE:END -->

## Contextual previews
- Use the shared ContextualPreviewProvider and Radix Popover for text-triggered previews so only one non-modal, collision-aware portal is open at a time.
- Case study pages live at src/routes/work.<slug>.tsx and reuse src/components/case-study/case-study.tsx (sidebar, sections, images) so every project shares one editorial layout.
- Clicking a project on the home page opens the large ProjectOverlay (src/components/project-overlay.tsx) with the shared case-study content (src/components/case-study/jia-case-study.tsx) — no route navigation; the portfolio stays mounted and keeps its scroll position.
- Animate the portal's entire fixed surface, including its background, and unmount on exit animation completion so no stationary layer obscures the homepage during the slide.
