const { Area } = require('./area')


class Ad {
  constructor({
    id = Date.now(),
    title = '',
    type = '',
    price = '',
    address = '',
    phone = '',
    place_id = '',
    main_text = '',
    secondary_text = '',
    extra_description = ''
  } = {}) {
    this.formId = id
    this.title = title
    this.type = type
    this.price = price
    this.address = address
    this.phone = phone
    this.extraDescription = extra_description
    this.area = new Area({ place_id, main_text, secondary_text })

  }
}

module.exports = { Ad }
