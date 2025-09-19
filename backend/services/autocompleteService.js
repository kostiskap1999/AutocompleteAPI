async function autocompleteService(req, res) {
  const query = req.query.input
  
  if (!query || query.length < 3)
    return res.status(400).json({ error: 'Query must be at least 3 characters' })

  try {
    const response = await fetch(`${process.env.AUTOCOMPLETE_API_URL}?input=${query}`)
    if (!response.ok)
      throw new Error('Failed to fetch autocomplete results')

    const data = await response.json()
    res.json(data)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Internal server error' })
  }
}

module.exports = { autocompleteService }
