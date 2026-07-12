# Jadey Portfolio Demo

A modern, static game design and gameplay programming portfolio built with Astro. It is designed for GitHub Pages and includes direct Bilibili video embeds.

## Local development

Install the current Node.js LTS release, then run:

```bash
pnpm install
pnpm dev
```

Open `http://localhost:4321`.

## Quality checks

```bash
pnpm check
pnpm build
pnpm preview
```

## Replace the Bilibili demo video

The reusable player is in `src/components/BilibiliPlayer.astro`. Pages only need a BVID:

```astro
<BilibiliPlayer bvid="YOUR_BVID" title="Your video title" />
```

The current external video is intentionally labelled as demo content. Replace it in:

- `src/pages/index.astro`
- `src/pages/projects/sunken-city.astro`

## Deploy to GitHub Pages

1. Create the public repository `Jadey0804/Jadey0804.github.io`.
2. Push this project to its `main` branch.
3. Open **Settings → Pages → Build and deployment**.
4. Set **Source** to **GitHub Actions**.
5. Open the **Actions** tab and wait for `Deploy portfolio to GitHub Pages` to finish.

Every later push to `main` rebuilds and publishes the site automatically.

The production URL is configured in `astro.config.mjs`:

```text
https://jadey0804.github.io
```

## Demo placeholders to replace

- `Jadey` with your preferred display name.
- `hello@example.com` with your actual contact address.
- Demo copy, dates, roles, and project metrics with verified information.
- CSS-generated project artwork with screenshots, GIFs, and level diagrams from your work.
