export async function fetchAreaAutocomplete(input) {
  if (!input || input.length < 3)
    return []

  try {
    const response = await fetch(`http://localhost:3001/api/autocomplete?input=${input}`)
    if (!response.ok)
        throw new Error('Failed to fetch autocomplete results')
    
    const data = await response.json()
    return data
  } catch (err) {
    console.error(err)
    return []
  }
}
