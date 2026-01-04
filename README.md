# Anokhichikankari — Frontend (React + TypeScript + Vite)

Minimal storefront frontend built with React, TypeScript, Vite and Tailwind CSS.

## Environment

- Public env variables live in `.env` — see [`.env`](.env).
- Supabase client reads from `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` in the runtime env. See [`src/lib/supabaseClient.ts`](src/lib/supabaseClient.ts).

## Project structure (key files)

- Vite config: [`vite.config.ts`](vite.config.ts)
- Package scripts & deps: [`package.json`](package.json)
- Tailwind config: [`tailwind.config.ts`](tailwind.config.ts)
- TypeScript app config: [`tsconfig.app.json`](tsconfig.app.json)
- App entry: [`src/main.tsx`](src/main.tsx) -> [`src/App.tsx`](src/App.tsx)
- Types: [`src/lib/types.ts`](src/lib/types.ts)
- Hooks: [`src/hooks/useStoreSettings.ts`](src/hooks/useStoreSettings.ts), [`src/hooks/useTrendingProducts.ts`](src/hooks/useTrendingProducts.ts), [`src/hooks/useProducts.ts`](src/hooks/useProducts.ts)
- UI components: [`src/components/Hero.tsx`](src/components/Hero.tsx), [`src/components/ProductCarousel.tsx`](src/components/ProductCarousel.tsx), [`src/components/ProductCard.tsx`](src/components/ProductCard.tsx), [`src/components/Footer.tsx`](src/components/Footer.tsx)

## Notes

- The app expects image assets under `src/assets/` and some category placeholders reference those paths (see [`src/components/CategoryTile.tsx`](src/components/CategoryTile.tsx)).
- Supabase usage and types are defined in [`src/lib/supabaseClient.ts`](src/lib/supabaseClient.ts) and [`src/lib/types.ts`](src/lib/types.ts).
- UI uses Tailwind utilities defined in [`src/index.css`](src/index.css) and [`tailwind.config.ts`](tailwind.config.ts).

## Contributing

- Follow existing code patterns in `src/components/` and `src/hooks/`.
- Run `npm run lint` before commits.

## License

Proprietary / project-specific license as applicable.
