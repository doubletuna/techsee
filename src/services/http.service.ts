
export default class HttpService {
  /**
   * proxy service to handle api calls
   * @param searchTerm - search string
   */
  corsAnywhere = async (searchTerm: string) => {
    let url = `https://cors-anywhere.herokuapp.com/https://test-api.techsee.me/api/ex/${searchTerm}`
    if (searchTerm === 'mocky') {
      url = `https://run.mocky.io/v3/93d0b1bc-4926-4b33-b946-f9e40ea5e3fb`
    }
    try {
      const response = await fetch(url)
      const data = await response.json()
      return data
    } catch (error) {
      return error.message.match(/Failed to fetch/) ? 'service down' : 'no results'
    }
  }
}