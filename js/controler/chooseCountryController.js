import { getCountries } from "../service/chooseCountryService.js";
import chooseCountryView from "../view/chooseCountryView.js";

export async function init() {
    chooseCountryView.render(await getCountries());
}