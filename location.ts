import * as dotenv from 'dotenv'
import  axios from 'axios'
dotenv.config();
const API_KEY = process.env.GEO_CODING_API;


async function getLocationInfo(latitude : number  , longitude : number  ) {
  const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${API_KEY}`;

  try {
  const response = await axios.get(apiUrl)

    if (response.data.results.length > 0) {
      const locationInfo = response.data.results[0].formatted_address;
      console.log(`Location: ${locationInfo}`);
      return locationInfo;
    } else {
      console.error('No results found for the given coordinates.');
      return null;
    }
  } catch (error : any ) {
    console.error('Error fetching location information:', error.message);
    return null;
  }
}



export default getLocationInfo


