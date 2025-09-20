export class FormModel {
  constructor({
    formId = Date.now(),
    title = '',
    type = '',
    area = null,
    price = '',
    extraDescription = ''
  } = {}) {
    this.formId = formId
    this.title = title
    this.type = type
    this.area = area
    this.price = price
    this.extraDescription = extraDescription
  }
}
