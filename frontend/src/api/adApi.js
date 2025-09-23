export async function postAd(ad) {
  try {
    const response = await fetch('http://localhost:3001/api/ad', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(ad)
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.error || 'Failed to post ad')
    }

    return await response.json()
  } catch (err) {
    console.error('Error posting ad:', err)
    alert(err.message)
    throw err
  }
}

export async function getAds() {
  try {
    const response = await fetch('http://localhost:3001/api/ad', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.error || 'Failed to fetch ads')
    }

    return await response.json()
  } catch (err) {
    console.error('Error fetching ads:', err)
    alert(err.message)
    throw err
  }
}
