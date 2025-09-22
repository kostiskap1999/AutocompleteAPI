const { Area } = require('./area')


class Ad {
  constructor({ id, title, type, price, extra_description, place_id, main_text, secondary_text }) {
    this.id = id
    this.title = title
    this.type = type
    this.price = price
    this.extraDescription = extra_description
    this.area = new Area({ place_id, main_text, secondary_text })

  }
}

module.exports = { Ad }
