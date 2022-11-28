Currency Converter
====

Basic Info
----
Because of CORS configuration of CNB Api is needed to use some proxy to load data directly from the api.
We can use external proxies but they can stop working.
So I decided use simple Express.js server is used for serving frontend scripts and to proxy request to CNB Api.

Installation
---
- Checkout from git `git@github.com:CoolLamer/currency-converter.git`
- `npm install`

Development
---
- For development server run `npm run dev`, you will see more info in console

Deploy
---
Not Done - All changes from branch main is automaticly deployed by github actions


Todos
----
- Use some css reset instead tailwind
- Application is now responsive, but still need some polishing to work better
- Caching
- Deployment Script