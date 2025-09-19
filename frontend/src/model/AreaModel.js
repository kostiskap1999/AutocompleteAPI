import { fetchAutocompleteArea } from "../api/autocompleteAreaApi"

export class AreaModel {
  constructor({ placeId, mainText, secondaryText }) {
    this.placeId = placeId
    this.mainText = mainText
    this.secondaryText = secondaryText
  }


  async fromBackend() {
    const autocomplete = await fetchAutocompleteArea()
    this.placeId = autocomplete.placeId
    this.mainText = autocomplete.mainText
    this.secondaryText = autocomplete.secondaryText
  }
}
