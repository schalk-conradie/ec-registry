# EC Registry

Static shadcn/ui registry with Storybook documentation.

## Structure

```txt
registry.json
src/
  components/ui/
    registry.json
    *.tsx
  hooks/
    registry.json
    use-mobile.ts
  lib/
    registry.json
    utils.ts
public/r/
  registry.json
  *.json
```

The registry chunk files sit beside the files they publish because the shadcn
CLI validates item file paths relative to the declaring `registry.json`.

## Commands

```bash
npm install
npm run validate:registry
npm run build:registry
npm run storybook
npm run build:all
```

`npm run build:registry` writes static registry JSON to `public/r`.

## Local Registry Test

Start Storybook, then use the local registry URL:

```bash
npm run storybook
npx shadcn@latest registry add @ec=http://localhost:6006/r/{name}.json
npx shadcn@latest list @ec
npx shadcn@latest add @ec/button
```

## GitHub Pages

The workflow in `.github/workflows/pages.yml` builds `public/r` and publishes
the Storybook static site. Once pushed to GitHub and Pages is enabled for GitHub
Actions, the registry URL will be:

```txt
https://schalk-conradie.github.io/ec-registry/r/{name}.json
```

Update `homepage` in `registry.json` before publishing if the final GitHub Pages
URL differs.
