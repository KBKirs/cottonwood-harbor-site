# Cottonwood Harbor Website Deployment

This is a static website. It can be hosted on Namecheap shared hosting, Netlify, Cloudflare Pages, GitHub Pages, or any static web host.

## Files to publish

Upload these files and folders to the website root:

- `index.html`
- `resources.html`
- `styles.css`
- `script.js`
- `resources.js`
- `assets/`

## Namecheap notes

If the domain is managed at Namecheap, point the domain DNS to the chosen host. If using Namecheap shared hosting, upload the files into `public_html`.

The site currently uses `admin@cottonwoodharbor.com` and a placeholder phone link. Update the phone link in `index.html` when a public phone number is ready.

## Brand source

The design is based on `01 - Branding/Approved Logo/CottonwoodHarbor_BrandBoard_v1.3.png` and the approved messaging in `README.md`.

## Stripe Individual first month promotion

The Individual plan uses the normal recurring Stripe Price ID for `$49/month`.

To offer `$19 first month, then $49/month`, create a one-time Stripe coupon:

- Amount off: `$30`
- Duration: `Once`
- Applies to: Harbor Vault Individual, if you want to limit it

Then add this Netlify environment variable:

```text
STRIPE_INDIVIDUAL_FIRST_MONTH_COUPON_ID
```

Set the value to the Stripe coupon ID. After saving the variable, redeploy the site.

The checkout function applies that coupon automatically to Individual checkout sessions when the variable is present. Team checkout is not discounted.
