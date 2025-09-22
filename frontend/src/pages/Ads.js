import { useEffect, useState } from 'react'
import { getAds } from '../api/adApi'

export default function Ads() {
  const [ads, setAds] = useState([])
  const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchAds = async () => {
            try {
                const results = await getAds()
                setAds(results)
            } catch (err) {
                console.error(err)
            } finally {
                setLoading(false)
            }
        }
        fetchAds()
    }, [])

  return (<>{
    !loading &&
        <div style={{ padding: '1rem' }}>
            <h1>All Ads</h1>
            {ads.length === 0 ? (
                <p>No ads available.</p>
            ) : (
                <ul>
                {ads.map(ad => (
                    <li key={ad.id}>
                        <strong>{ad.title}</strong> — {ad.type} — {ad.price}€
                    </li>
                ))}
                </ul>
            )}
        </div>
    }
  </>)
}
