import { useEffect, useState } from 'react'
import { getAds } from '../api/adApi'
import '../styles/Ads.scss'

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
        <div className="ads-container">
            <div className="ads-title">All Ads</div>
            {ads.length === 0 ? (
                <p className="no-ads">No ads available.</p>
            ) : (
                <ul className="ads-list">
                {ads.map(ad => (
                    <li key={ad.id} className="ad">
                    <div className="ad-header">
                        <strong>{ad.title}</strong>
                        <span>{ad.type} — {ad.price}€</span>
                    </div>
                    {ad.extraDescription && <p>{ad.extraDescription}</p>}
                    <p>{ad.area.mainText}, {ad.area.secondaryText}</p>
                    {ad.address && <p>Address: {ad.address}</p>}
                    {ad.phone && <p>Phone: {ad.phone}</p>}
                    </li>
                ))}
                </ul>
            )}
            </div>
    }
  </>)
}
