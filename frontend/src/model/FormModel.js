export class FormModel {
  constructor({ formId, title, type, area, price, extraDescription }) {
    this.formId = formId
    this.title = title
    this.type = type
    this.area = area
    this.price = price
    this.extraDescription = extraDescription
  }
}
