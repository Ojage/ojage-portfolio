# Ojage Portfolio — hosting and CI/CD

The portfolio is a static [Create React App](https://create-react-app.dev/) build
(Babylon.js + Chakra UI) served by Caddy from the **same VPS that runs NNACT Pro**.

- **Live URL:** https://salathiel.ojage.org
- **Document root on the VPS:** `/srv/nnact-pro/data/ojage-portfolio`
- **Build output:** `build/` (CRA → `build/static/js/*`, `build/static/css/*`)

It shares the host with NNACT Pro but is fully isolated: its own subdomain, its own
vhost, its own read-only document root, and no application process. There is no
service to restart, so a deploy cannot take NNACT Pro down — and removing this
site cannot affect it.

## How a deploy works

Push to `main` → CI builds and type-checks → artifact is published with `rsync`
into a staging directory → the directory is swapped into place → CI verifies the
site responds over HTTPS. Only a green build can publish.

```
.github/workflows/deploy-portfolio.yml
  build  → type check → build → verify artifact → upload artifact
  deploy → download artifact → rsync to staging → atomic swap → HTTP verify
```

Two properties are deliberate:

- **The bundle is built in CI, not on the VPS.** The bytes published are exactly
  the ones that were type-checked and built, and the deploy does not compete with
  NNACT Pro for build resources.
- **The swap is atomic.** Files are uploaded to `<root>.staging` and moved into
  place only when complete, so a visitor never sees a half-written bundle. The
  previous build is kept at `<root>.previous` for a quick rollback.

## One-time server setup

The vhost and compose mount already ship in the NNACT Pro repo
(`infra/Caddyfile.prod`, `infra/compose.prod.yml`), so deploying NNACT Pro wires
the route in. Two things are per-server and are not in Git:

1. **DNS** — an A record for `salathiel.ojage.org` pointing at the VPS IP.
2. **Document root** — created by the first deploy; the directory only has to
   exist for Caddy to start:

   ```bash
   sudo mkdir -p /srv/nnact-pro/data/ojage-portfolio
   sudo chown nnact:nnact /srv/nnact-pro/data/ojage-portfolio
   ```

Caddy provisions the TLS certificate automatically on the first request once DNS
resolves. The `production` environment (used by the deploy job) is the gate for
publishing, so it can require reviewer approval if wanted.

## Repository secrets and variables

Reuses the same values as the NNACT Pro deploy where possible:

| Name | Kind | Notes |
| --- | --- | --- |
| `DEPLOY_HOST` | secret | VPS address |
| `DEPLOY_USER` | secret | deploy user (e.g. `nnact`) |
| `DEPLOY_SSH_KEY` | secret | same key the NNACT Pro deploy uses |
| `DEPLOY_PATH` | secret | NNACT checkout on the VPS, e.g. `/srv/nnact-pro` |
| `OJAGE_PORTFOLIO_ROOT` | variable | document root, relative to `DEPLOY_PATH`; defaults to `data/ojage-portfolio` |
| `OJAGE_PORTFOLIO_ADDRESS` | variable | hostname used for the post-deploy check; defaults to `salathiel.ojage.org` |

## Rollback

The previous build is retained on the server:

```bash
sudo mv /srv/nnact-pro/data/ojage-portfolio.previous \
        /srv/nnact-pro/data/ojage-portfolio
```

## Local development

```bash
yarn install
yarn start        # dev server
npx tsc --noEmit  # the same type check CI runs
```

## Hosting history

Previously hosted on Firebase Hosting. The Firebase workflows, `firebase.json`,
`.firebaserc` and the `firebase-tools` dependency were removed so there is a single
deployment target and no chance of the two copies drifting.
