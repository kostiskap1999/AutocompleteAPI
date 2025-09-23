const express = require('express')
const cors = require('cors')
require('dotenv').config()
const { handleError } = require('./util/errorHandler')

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

// get api suggestions
const { autocompleteService } = require('./services/autocompleteService')
app.get('/api/autocomplete', autocompleteService)

// post ad to the database
const { postAd } = require('./services/adService')
app.post('/api/ad', async (req, res) => {
    try {
        await postAd()
    } catch (err) {
        console.error(err)
        handleError(res, err, 'Failed to post ad')
    }  
})

// get all ads from the database
const { getAds } = require('./services/adService')
app.get('/api/ad', async (req, res) => {
    try {
        const ads = await getAds()
        res.json(ads)
    } catch (err) {
        console.error(err)
        handleError(res, err, 'Failed to fetch ads')
    }
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
