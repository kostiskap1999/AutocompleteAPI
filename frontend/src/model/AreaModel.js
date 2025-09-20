export class AreaModel {
  constructor({
    placeId = null, //since this is fetched from external api, don't put default id if not having one
    mainText = '',
    secondaryText = ''
  } = {}) {
    this.placeId = placeId
    this.mainText = mainText
    this.secondaryText = secondaryText
  }
}
