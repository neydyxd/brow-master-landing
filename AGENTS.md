# AGENTS.md

## Cursor Cloud specific instructions

This is a **Create React App** landing page (`brow-master-landing`). Single service, no backend, no database, no Docker.

### Running

- **Dev server:** `npm start` (port 3000)
- **Build:** `npm run build`
- **Lint:** `npx eslint src/`
- **Tests:** `CI=true npm test -- --watchAll=false`

See `README.md` for full script list.

### Known issues (pre-existing, do not fix)

- `npm test` fails because `src/App.test.js` imports `./App` but the App component lives at `src/Components/App/App.js`.
- ESLint reports 18 warnings (unused imports, accessibility issues) — zero errors.
- `babel-preset-react-app` emits a deprecation warning about `@babel/plugin-proposal-private-property-in-object`; harmless.
