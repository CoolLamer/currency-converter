const express = require('express')
const app = express()

app.use(express.static('dist'))

app.get('/api', (req, res) => {
    // Proxy request to CNB - Missing Access-Control-Allow-Origin Configuration

    fetch("https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt",)
        .then((response) => response.text())
        .then((text) => res.send(text))
})

app.listen(3000, () => console.log('Listening on port 3000!'))