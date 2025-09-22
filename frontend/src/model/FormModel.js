import { AreaModel } from "./AreaModel"

export class FormModel {
  constructor({
    formId = Date.now(),
    title = '',
    type = '',
    area = null,
    price = '',
    address = '',
    phone = '',
    extraDescription = ''
  } = {}) {
    this.formId = formId
    this.title = title
    this.type = type
    this.area = area
    this.price = price
    this.address = address
    this.phone = phone
    this.extraDescription = extraDescription
  }
}
