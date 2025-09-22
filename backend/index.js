const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

const { autocompleteService } = require('./services/autocompleteService')
app.get('/api/autocomplete', autocompleteService)

const { postAd } = require('./services/adService')
app.post('/api/ad', postAd)

const { getAds } = require('./services/adService')
app.get('/api/ad', async (req, res) => {
  try {
    const ads = await getAds()
    res.json(ads)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Failed to fetch ads' })
  }
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
