Currency Converter
====

Basic Info
----
Because of the CORS configuration of CNB API is needed to use some proxy to load data directly from the API.
We can use external proxies, but they can stop working.

So I decided to use a simple Express.js server used for serving frontend scripts and proxy requests to CNB API.

Installation
---
- Checkout from git `git@github.com:CoolLamer/currency-converter.git`
- `npm install`

Development
---
- For development server run `npm run dev`, you will see more info in console

Deploy
---
Not Done - All changes from branch main is automatically deployed by github actions


Todos
----
- Use some css reset instead tailwind
- Application is now responsive, but still need some polishing to look better
- Caching
- Deployment Script
- SEO Friendliness