export async function fetchQuote(queryParams) {
  const queryString = new URLSearchParams(queryParams).toString()
  const response = await fetch(`https://api.api-ninjas.com/v1/quotes?${queryString}`, {
      headers: {
        'X-Api-Key': process.env.QUOTE_API_KEY,
        'Content-Type': 'application/json',
      }
  }
    )
  const data = await response.json()
  return data;
}