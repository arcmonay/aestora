# Aestora

Professional beauty, wellness, and aesthetic equipment house. Next.js + Shopify-ready catalog.

- Site: https://aestora-liart.vercel.app
- Repo: https://github.com/arcmonay/aestora

## Catalog scripts

```bash
npm run catalog
npm run catalog:csv
```

Until Shopify credentials are connected, the site runs on the local catalog and browser cart.

## Shopify setup

1. Create a Shopify store.
2. **Products → Import** and upload `data/shopify-products.csv` (images pull from GitHub raw URLs after push).
3. Create a Storefront API token.
4. Copy `.env.example` → `.env.local` and fill:

```env
SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
SHOPIFY_STOREFRONT_TOKEN=...
```

© 2025 Aestora
