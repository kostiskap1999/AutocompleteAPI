// get autocomplete suggestions from the external api, which is handled in the backend.
export async function fetchAreaAutocomplete(input) {
  try {
    const response = await fetch(`http://localhost:3001/api/autocomplete?input=${input}`)
    if (!response.ok)
        throw new Error('Failed to fetch autocomplete results')
    
    const data = await response.json()
    return data
  } catch (err) {
    console.error('Autocomplete API error:', err)
    alert(err.message)
    return []
  }
}
