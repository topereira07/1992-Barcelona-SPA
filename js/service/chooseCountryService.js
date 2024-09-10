const API_URL = "https://flagcdn.com/en/codes.json";

const IMG_SIZE = "80x60";

export async function getCountries() {
    const response = await fetch(API_URL);

    if(!response.ok) {
        throw new Error(`Failed to fetch countries: ${response.status} ${response.statusText}`);
    }

    return response.json();
}

export function getCountryImg(key) {
    return `https://flagcdn.com/${IMG_SIZE}/${key}.png`;
}