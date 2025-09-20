async function autocompleteService(req, res) {
  const query = req.query.input
  
  if (!query || query.length < 3)
    return res.status(400).json({ error: 'Query must be at least 3 characters' })

  try {
    const response = await fetch(`${process.env.AUTOCOMPLETE_API_URL}?input=${query}`)
    const data = await response.json()
    
    if (!response.ok){
      const error = new Error(data.error || 'Unknown API error')
      error.status = response.status
      throw error
    }
    
    res.json(data)
  } catch (err) {
    console.error(err)
    res.status(err.status || 500).json({ error: err.message || 'Internal server error' })
  }
}

module.exports = { autocompleteService }
