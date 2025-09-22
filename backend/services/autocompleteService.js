const cache = new Map()
const CACHE_TTL = 1000 * 60 * 5

async function autocompleteService(req, res) {
  const query = req.query.input
  
  if (!query || query.length < 3)
    return res.status(400).json({ error: 'Query must be at least 3 characters' })


  const cached = cache.get(query)
  if (cached && cached.expiry >= Date.now())
    return res.json(cached.data)
  else if (cached && cached.expiry < Date.now())
    cache.delete(query)

  try {
    const response = await fetch(`${process.env.AUTOCOMPLETE_API_URL}?input=${query}`)
    const data = await response.json()
    
    if (!response.ok){
      const error = new Error(data.error || 'Unknown API error')
      error.status = response.status
      throw error
    }
    
    cache.set(query, {
      data,
      expiry: Date.now() + CACHE_TTL
    })

    res.json(data)
  } catch (err) {
    console.error(err)
    res.status(err.status || 500).json({ error: err.message || 'Internal server error' })
  }
}

module.exports = { autocompleteService }
