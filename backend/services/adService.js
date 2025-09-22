const pool = require('../database/config')
const { Ad } = require('../model/ad')

export async function postAd(ad) {
  const conn = await pool.getConnection()
  try {
    await conn.beginTransaction()

    await conn.execute( //use ignore to avoid duplicates
      `INSERT IGNORE INTO area (place_id, main_text, secondary_text)
       VALUES (?, ?, ?)`,
      [ad.area.placeId, ad.area.mainText, ad.area.secondaryText]
    )

    const [adResult] = await conn.execute(
      `INSERT INTO ad (title, type, price, extra_description, area_id)
       VALUES (?, ?, ?, ?, ?)`,
      [ad.title, ad.type, ad.price, ad.extraDescription, ad.area.placeId]
    )

    await conn.commit()
    return { id: adResult.insertId }
  } catch (err) {
    await conn.rollback()
    throw err
  } finally {
    conn.release()
  }
}

export async function getAds() {
    const [rows] = await pool.execute(
        `SELECT a.id, a.title, a.type, a.price, a.extra_description,
                ar.place_id, ar.main_text, ar.secondary_text
        FROM ad a
        JOIN area ar ON a.area_id = ar.place_id
        ORDER BY a.id DESC`
    )
    return rows.map(row => new Ad(row))
}
