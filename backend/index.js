const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

const { autocompleteService } = require('./services/autocompleteService')
app.get('/api/property/autocomplete', autocompleteService)

const { postAd } = require('./services/adService')
app.post('/api/property/ad', postAd)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
