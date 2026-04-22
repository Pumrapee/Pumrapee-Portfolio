# Portfolio

This project is deployed to GitHub Pages with a custom domain:

https://pumrapee.me

## GitHub Pages Setup

1. In repository settings, open Pages and set Source to GitHub Actions.
2. Keep the workflow file at `.github/workflows/deploy.yml`.
3. Keep `public/CNAME` with this exact value:

```text
pumrapee.me
```

4. Configure DNS at your domain provider:

```text
A     @     185.199.108.153
A     @     185.199.109.153
A     @     185.199.110.153
A     @     185.199.111.153
CNAME www   pumrapee.github.io
```

5. In GitHub Pages settings, set custom domain to `pumrapee.me` and enable HTTPS.
