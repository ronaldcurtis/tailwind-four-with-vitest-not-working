# Tailwind 4 and vitest issue

This repo reproduces a bug whereby the error `Could not parse CSS stylesheet` is raised when running tests with
`vitest`, `tailwindcss`, and `@tailwindcss/vite`.

To reproduce:

```
pnpm install
pnpm test
```
